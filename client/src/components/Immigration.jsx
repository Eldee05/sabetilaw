import NewsSection from './NewsSection';

export default function Immigration({ items, error, updatedAt }) {
  return (
    <NewsSection
      id="us-news"
      title={<>U.S. News &amp; <span>Public Affairs</span></>}
      lead="A daily news briefing featuring reporting from the New York Post, CNN and Fox News. Headlines and brief summaries are provided for information; each story links to its original publisher."
      items={items}
      error={error}
      updatedAt={updatedAt}
    />
  );
}
