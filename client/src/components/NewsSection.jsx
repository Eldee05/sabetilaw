export default function NewsSection({ id, band, title, lead, items, error }) {
  return (
    <section id={id} className={band ? 'band' : undefined}>
      <div className="w">
        <h2>{title}</h2>
        <p className="lead">{lead}</p>
        <div className="list">
          {error && <p>News is temporarily unavailable. Please try again later.</p>}
          {items.map((item) => (
            <a key={item.url} href={item.url} target="_blank" rel="noopener noreferrer">
              <span className="tag">{item.tag}</span>
              <span><b>{item.title}</b><em>{item.summary}</em></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
