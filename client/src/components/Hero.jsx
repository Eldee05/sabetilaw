export default function Hero() {
  return (
    <section className="hero-institutional" aria-labelledby="home-heading">
      <div className="hero-top-rule" />
      <div className="w hero-institutional-inner">
        <div className="hero-copy">
          <div className="eyebrow"><span /> LEGAL INTERMEDIARY · PUBLIC INFORMATION</div>
          <h1 id="home-heading">A clear path to <em>guidance,</em><br />information and assistance.</h1>
          <p>
            We help individuals understand available avenues of support, obtain
            appropriate legal guidance and identify the relevant organisations
            or authorities when further assistance is required.
          </p>
          <div className="hero-actions">
            <a className="hero-primary" href="#complaint">Make an enquiry <span aria-hidden="true">→</span></a>
            <a className="hero-secondary" href="#help">Explore areas of assistance</a>
          </div>
          <div className="hero-assurance">
            <span className="assurance-rule" />
            <span>Information · Guidance · Appropriate referral</span>
          </div>
        </div>
        <aside className="constitution-panel" aria-label="Constitutional text and Department of Justice identification">
          <div className="constitution-paper">
            <div className="paper-topline">THE CONSTITUTION OF THE UNITED STATES</div>
            <div className="paper-ornament" aria-hidden="true">✦</div>
            <div className="paper-title">We the People</div>
            <div className="paper-rule" />
            <p>
              in Order to form a more perfect Union, establish Justice,
              insure domestic Tranquility, provide for the common defence,
              promote the general Welfare, and secure the Blessings of Liberty…
            </p>
            <div className="paper-footer">PREAMBLE · SEPTEMBER 17, 1787</div>
          </div>
          <div className="authority-reference">
            <div className="authority-logo-placeholder" aria-label="Department of Justice logo placement">DOJ<br /><small>LOGO</small></div>
            <div className="authority-copy">
              <span>DEPARTMENT IDENTIFICATION</span>
              <strong>U.S. Department of Justice</strong>
              <small className="authority-note">Referral is considered only after an assessment of the case.</small>
            </div>
          </div>
          <div className="hero-panel-caption">Constitutional text and agency identification are presented for reference.</div>
        </aside>
      </div>
      <div className="hero-bottom-rule" />
    </section>
  );
}
