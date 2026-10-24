import NewsSection from './NewsSection';

export default function Immigration({ items, error }) {
  return (
    <NewsSection
      id="immigration"
      title={<>Immigration &amp; <span>Enforcement News</span></>}
      lead="Daily coverage of U.S. immigration enforcement, including ICE operations, court rulings and policy changes. These links are third-party news compilations; Sabetilaw P.C. does not control their content."
      items={items}
      error={error}
    />
  );
}
