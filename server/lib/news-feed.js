const DAY = 24 * 60 * 60 * 1000;
const MAX_AGE = 3 * DAY;
const FEEDS = [
  { publisher: 'New York Post', url: 'https://nypost.com/us-news/feed/' },
  { publisher: 'CNN', url: 'https://news.google.com/rss/search?q=site%3Acnn.com+when%3A2d&hl=en-US&gl=US&ceid=US:en' },
  { publisher: 'Fox News', url: 'https://moxie.foxnews.com/google-publisher/latest.xml' },
];
let cachedItems = [];
let lastUpdated = null;
let refreshInProgress = null;

function decodeXml(value = '') {
  return value.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&apos;|&#39;/g, "'")
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&nbsp;/g, ' ').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}
function readTag(xml, tag) {
  const escaped = tag.replace(/[.*+?^$()|[\]\\]/g, '\\$&');
  const pattern = '<(?:[\\w.-]+:)?' + escaped + '\\b[^>]*>([\\s\\S]*?)<\\/(?:[\\w.-]+:)?' + escaped + '\\s*>';
  const match = xml.match(new RegExp(pattern, 'i'));
  return match ? decodeXml(match[1]) : '';
}
function parseFeed(xml, publisher) {
  return [...xml.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi)].map(([, item]) => {
    const title = readTag(item, 'title');
    const summary = readTag(item, 'description') || readTag(item, 'encoded') || readTag(item, 'summary');
    const rawLink = readTag(item, 'link') || readTag(item, 'guid');
    const dateText = readTag(item, 'pubDate') || readTag(item, 'published') || readTag(item, 'updated');
    const parsedDate = dateText ? new Date(dateText) : null;
    return { publisher, title, summary: summary.slice(0, 260), url: rawLink, publishedAt: parsedDate && !Number.isNaN(parsedDate.getTime()) ? parsedDate.toISOString() : null };
  }).filter((item) => {
    if (!item.title || !item.url) return false;
    try { if (new URL(item.url).protocol !== 'https:') return false; } catch { return false; }
    if (item.publishedAt && Date.now() - new Date(item.publishedAt).getTime() > MAX_AGE) return false;
    if (item.publishedAt && new Date(item.publishedAt).getTime() > Date.now() + DAY) return false;
    return true;
  });
}
async function fetchPublisherFeed(feed) {
  const response = await fetch(feed.url, {
    headers: { 'User-Agent': 'SabetilawNewsBriefing/1.0 (+publisher RSS reader)', Accept: 'application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8' },
    signal: AbortSignal.timeout(12000),
  });
  if (!response.ok) throw new Error(feed.publisher + ' feed returned HTTP ' + response.status);
  return parseFeed(await response.text(), feed.publisher).slice(0, 6);
}
export async function refreshNewsFeeds() {
  if (refreshInProgress) return refreshInProgress;
  refreshInProgress = (async () => {
    const results = await Promise.allSettled(FEEDS.map(fetchPublisherFeed));
    const fresh = results.flatMap((result, index) => {
      if (result.status === 'fulfilled') return result.value;
      console.warn('[news] ' + FEEDS[index].publisher + ' feed unavailable:', result.reason?.message || result.reason);
      return [];
    });
    if (fresh.length) {
      const unique = new Map();
      for (const item of fresh) if (!unique.has(item.url)) unique.set(item.url, item);
      cachedItems = [...unique.values()].sort((a, b) => new Date(b.publishedAt || 0) - new Date(a.publishedAt || 0)).slice(0, 18);
    }
    lastUpdated = new Date().toISOString();
    return getNewsSnapshot();
  })().finally(() => { refreshInProgress = null; });
  return refreshInProgress;
}
export function getNewsSnapshot() { return { items: cachedItems, lastUpdated }; }
export async function getLatestNews() {
  if (!lastUpdated || Date.now() - new Date(lastUpdated).getTime() >= DAY) await refreshNewsFeeds();
  return getNewsSnapshot();
}
export function scheduleDailyNewsRefresh() {
  refreshNewsFeeds().catch((error) => console.error('[news] Initial refresh failed:', error));
  const timer = setInterval(() => refreshNewsFeeds().catch((error) => console.error('[news] Scheduled refresh failed:', error)), DAY);
  timer.unref?.();
}
