export default function Footer() {
  return (
    <footer>
      <div className="w footer-institutional">
        <div className="footer-identity">
          <b>SABETILAW</b>
          <span>LICENSED LEGAL INTERMEDIARY</span>
          <p>Public information, legal guidance and direction to appropriate assistance.</p>
        </div>
        <div><h4>Organisation</h4><a href="#about">About</a><a href="#help">Areas of assistance</a><a href="#team">Personnel</a><a href="#contact">Contact</a></div>
        <div><h4>Information</h4><a href="#alerts">Public briefings</a><a href="#immigration">Immigration updates</a><a href="#complaint">Make an enquiry</a></div>
        <div><h4>Official resources</h4><a href="https://www.justice.gov/" target="_blank" rel="noopener noreferrer">U.S. Department of Justice ↗</a><a href="https://www.dhs.gov/" target="_blank" rel="noopener noreferrer">Department of Homeland Security ↗</a><a href="https://www.usa.gov/" target="_blank" rel="noopener noreferrer">USA.gov ↗</a></div>
        <div className="footer-legal">© {new Date().getFullYear()} Sabetilaw. All rights reserved. Sabetilaw is an independent licensed legal intermediary and is not a U.S. federal agency. External agency names and links are provided for reference and do not imply government endorsement. Nothing on this website creates an attorney-client relationship.</div>
      </div>
    </footer>
  );
}
