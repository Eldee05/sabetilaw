export default function Footer() {
  return (
    <footer className="public-footer">
      <div className="footer-top-rule" />
      <div className="w footer-institutional">
        <div className="footer-identity"><b>SABETILAW</b><span>LICENSED LEGAL INTERMEDIARY</span><p>Public information, legal guidance and direction to appropriate assistance.</p></div>
        <div className="footer-column"><h4>Organisation</h4><a href="#about">About the organisation</a><a href="#help">Areas of assistance</a><a href="#team">Personnel</a><a href="#contact">Contact</a></div>
        <div className="footer-column"><h4>Public information</h4><a href="#alerts">Public briefings</a><a href="#immigration">Immigration updates</a><a href="#complaint">Submit a complaint</a></div>
        <div className="footer-column"><h4>U.S. government resources</h4><a href="https://www.justice.gov/" target="_blank" rel="noopener noreferrer">Department of Justice ↗</a><a href="https://www.dhs.gov/" target="_blank" rel="noopener noreferrer">Department of Homeland Security ↗</a><a href="https://www.usa.gov/" target="_blank" rel="noopener noreferrer">USA.gov ↗</a></div>
        <div className="footer-legal">© {new Date().getFullYear()} Sabetilaw. All rights reserved. Sabetilaw is an independent licensed legal intermediary. External government resources are provided for public reference. Nothing on this website creates an attorney-client relationship.</div>
      </div>
    </footer>
  );
}
