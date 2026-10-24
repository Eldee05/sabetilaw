import Logo from './Logo';

export default function Hero() {
  return (
    <div className="hero">
      <div className="w">
        <div>
          <h1>Investigations and legal counsel you can <span>rely on</span>.</h1>
          <p>Sabetilaw P.C. combines licensed legal representation with methodical, evidence-led investigation for individuals, businesses and institutions.</p>
          <p>
            <a className="btn" href="#contact">Request a Case Review</a>{' '}
            <a className="btn o" href="#alerts">Read Crime Briefings</a>
          </p>
        </div>
        <div className="emb"><Logo size={190} stroke={1.6} label="Scales of justice emblem" /></div>
      </div>
    </div>
  );
}
