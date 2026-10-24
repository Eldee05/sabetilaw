const steps = [
  ['Tell us what happened', 'A confidential case review establishes the facts, the timeline and what evidence exists or is at risk.', <><circle cx="11" cy="11" r="6" /><path d="M16 16l5 5" /></>],
  ['Preserve and protect', 'We advise on securing records, communications and assets before they are lost or altered.', <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />],
  ['Act through proper channels', 'We prepare filings and referrals to the appropriate authorities and represent you in proceedings.', <path d="M12 3v18M5 7h14M5 7l-3 7h6zM19 7l-3 7h6z" />],
];
const services = [
  ['Fraud & Financial Crime', 'Investigation and recovery strategy for online and corporate fraud.'],
  ['Cross-Border Disputes', 'Evidence gathering and litigation coordination across jurisdictions.'],
  ['Immigration Law', 'Status, compliance and enforcement-related legal advice.'],
  ['Corporate Compliance', 'Internal reviews, AML policies and regulatory response.'],
];

export default function Help() {
  return (
    <section id="help">
      <div className="w">
        <h2>How We <span>Can Help</span></h2>
        <p className="lead">Three principles guide every engagement.</p>
        <div className="grid">
          {steps.map(([title, text, icon]) => (
            <div className="card" key={title}>
              <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">{icon}</svg>
              <h3>{title}</h3><p>{text}</p>
            </div>
          ))}
        </div>
        <div className="grid mt">
          {services.map(([title, text]) => (
            <div className="card" key={title}><h3>{title}</h3><p>{text}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
