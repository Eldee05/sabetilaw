const links = [
  ['about', 'The Organisation'],
  ['help', 'Areas of Assistance'],
  ['alerts', 'Public Briefings'],
  ['us-news', 'U.S. News & Updates'],
  ['team', 'Our Personnel'],
];

export default function Header() {
  return (
    <>
      <div className="us-gov-strip">
        <div className="w us-gov-strip-inner">
          <span className="flag-mark" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></span>
          <span>An intermediary organisation operating within its licensed remit</span>
          <a href="https://www.usa.gov/" target="_blank" rel="noopener noreferrer">U.S. government information <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <header className="site-header">
        <div className="w masthead">
          <a className="org-identity" href="#top" aria-label="Sabetilaw home">
            <span className="org-identity-seal" aria-hidden="true">SL</span>
            <span className="org-identity-copy"><strong>SABETILAW</strong><small>LICENSED LEGAL INTERMEDIARY</small></span>
          </a>
          <div className="masthead-divider" />
          <div className="masthead-purpose"><span>PUBLIC INFORMATION &amp; LEGAL GUIDANCE</span><strong>Connecting individuals with appropriate assistance</strong></div>
          <a className="masthead-contact" href="#contact">Contact <span aria-hidden="true">→</span></a>
        </div>
        <div className="nav-band"><div className="w nav-band-inner">
          <nav aria-label="Main navigation">{links.map(([id, text]) => <a key={id} href={`#${id}`}>{text}</a>)}</nav>
          <a className="nav-enquiry" href="#complaint">Submit an enquiry <span aria-hidden="true">→</span></a>
        </div></div>
      </header>
    </>
  );
}
