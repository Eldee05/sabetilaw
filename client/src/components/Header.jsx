const links = [
  ['about', 'About'], ['help', 'How We Help'], ['team', 'Our Team'],
  ['alerts', 'Crime Briefings'], ['immigration', 'Immigration News'],
];

export default function Header() {
  return (
    <header>
      <div className="w nav">
        <a className="brand" href="#top" aria-label="Sabetilaw home">
          <span className="brand-mark" aria-hidden="true">SL</span>
          <span className="brand-copy">
            <strong>SABETILAW</strong>
            <small>Legal intermediary and public information</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          {links.map(([id, text]) => <a key={id} href={`#${id}`}>{text}</a>)}
          <a className="btn nav-btn" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
