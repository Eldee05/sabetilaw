export default function Hero() {
  return (
    <section className="hero" aria-labelledby="home-heading">
      <div className="w">
        <div>
          <span className="hero-kicker">Legal assistance &amp; public information</span>
          <h1 id="home-heading">Guidance and access to the <span>right assistance</span>.</h1>
          <p>
            A central point of contact for victims seeking information, legal guidance
            and direction to appropriate sources of help.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#complaint">Submit an enquiry</a>
            <a className="btn o" href="#help">Explore assistance</a>
          </div>
        </div>
        <div className="emb" aria-hidden="true">
          <div style={{ textAlign: 'center', maxWidth: 230 }}>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.08em' }}>SABETILAW</div>
            <div style={{ height: 1, background: 'currentColor', margin: '12px 0' }} />
            <div style={{ fontSize: 14, lineHeight: 1.5 }}>Information<br />Guidance<br />Appropriate referral</div>
          </div>
        </div>
      </div>
    </section>
  );
}
