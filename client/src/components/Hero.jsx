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
        <aside className="constitution-panel" aria-label="Constitutional text and Department of Justice reference">
          <div className="constitution-paper">
            <div className="paper-topline">THE CONSTITUTION OF THE UNITED STATES</div>
            <div className="paper-ornament" aria-hidden="true">✦</div>
            <img className="paper-great-seal" src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Great_Seal_of_the_United_States_%28obverse%29.svg" alt="Great Seal of the United States" />
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
            <img className="authority-flag" src="https://www.justice.gov/sites/default/files/styles/featured_group_content_image/public/2022-11/our-work-graphic-doj-flag.png?itok=ZQP_dFzt" alt="U.S. Department of Justice flag outside its headquarters" />
            <div className="authority-copy">
              <span>U.S. FEDERAL JUSTICE SYSTEM</span>
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
