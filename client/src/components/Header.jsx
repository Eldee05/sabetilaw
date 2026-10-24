import Logo from './Logo';

const links = [
  ['about', 'About'], ['help', 'How We Help'], ['team', 'Team'],
  ['alerts', 'Crime Briefings'], ['immigration', 'Immigration News'],
];

export default function Header() {
  return (
    <header>
      <div className="w nav">
        <a className="brand" href="#top" aria-label="Sabetilaw P.C. home">
          <Logo />SABETILAW P.C
        </a>
        <nav>
          {links.map(([id, text]) => <a key={id} href={`#${id}`}>{text}</a>)}
          <a className="btn nav-btn" href="#contact">Request Review</a>
        </nav>
      </div>
    </header>
  );
}
