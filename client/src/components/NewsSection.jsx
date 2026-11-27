const sectionNumbers = { alerts: '02', 'us-news': '05' };
const sectionLabels = { alerts: 'PUBLIC BRIEFINGS', 'us-news': 'U.S. NEWS & PUBLIC AFFAIRS' };

export default function NewsSection({ id, title, lead, items = [], error, updatedAt }) {
  const formattedUpdate = updatedAt
    ? new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'America/New_York' }).format(new Date(updatedAt))
    : null;
  return (
    <section id={id} className="public-section news-section">
      <div className="w">
        <div className="section-index"><span>{sectionNumbers[id] || '02'}</span><span>{sectionLabels[id] || 'PUBLIC INFORMATION'}</span></div>
        <div className="public-section-heading">
          <div><h2>{title}</h2><p className="lead">{lead}</p></div>
          <span className="section-stamp">SABETILAW<br/>PUBLIC INFORMATION</span>
        </div>
        {id === 'us-news' && <div className="news-update-line">
          <span>NEW YORK POST</span><span>CNN</span><span>FOX NEWS</span>
          {formattedUpdate && <time dateTime={updatedAt}>Last refreshed: {formattedUpdate} ET</time>}
        </div>}
        <div className="bulletin-list">
          {error && <p className="bulletin-empty">News is temporarily unavailable. Please try again later.</p>}
          {!error && items.length === 0 && <p className="bulletin-empty">There are no updates to display at this time.</p>}
          {items.map((item, index) => (
            <a className="bulletin-item" key={item.url} href={item.url} target="_blank" rel="noopener noreferrer">
              <span className="bulletin-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="bulletin-content">
                <span className="bulletin-meta">{item.publisher || item.tag || 'NEWS'} <span>·</span> {item.publishedAt ? new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeZone: 'America/New_York' }).format(new Date(item.publishedAt)) : 'Latest report'}</span>
                <strong>{item.title}</strong><em>{item.summary}</em>
              </span>
              <span className="bulletin-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
