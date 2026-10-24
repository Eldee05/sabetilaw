export default function Footer() {
  return (
    <footer>
      <div className="w cols" style={{ gap: 24 }}>
        <div>
          <b style={{ color: '#fff', letterSpacing: '.12em' }}>SABETILAW P.C</b>
          <p>Investigations &amp; legal counsel.<br />Confidential. Professional. Methodical.</p>
        </div>
        <div><h4>Quick Links</h4><a href="#about">About</a><a href="#help">How We Help</a><a href="#team">Team</a><a href="#contact">Contact</a></div>
        <div><h4>Resources</h4><a href="#alerts">Crime Briefings: Europe</a><a href="#immigration">Immigration News</a><a href="#complaint">File a Complaint</a></div>
        <div className="small" style={{ gridColumn: '1/-1' }}>
          © {new Date().getFullYear()} Sabetilaw P.C. All rights reserved. Nothing on this site is legal advice or creates an attorney-client relationship. External links lead to third-party sites.
        </div>
      </div>
    </footer>
  );
}
