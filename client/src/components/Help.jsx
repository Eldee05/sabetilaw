const services = [
  { title: 'Fraud and financial crime', text: 'Information and legal guidance for people affected by online fraud, scams and financial or corporate misconduct.', icon: <><path d="M12 3 20 7v5c0 4.5-3 7.5-8 9-5-1.5-8-4.5-8-9V7l8-4Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></> },
  { title: 'Immigration matters', text: 'Guidance on immigration-related legal questions and direction to appropriate official information and assistance.', icon: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></> },
  { title: 'Cross-border disputes', text: 'Initial guidance on matters involving parties, transactions or issues across more than one jurisdiction.', icon: <><path d="M4 5h6v6H4zM14 13h6v6h-6z" /><path d="M10 8h3a3 3 0 0 1 3 3v2M14 16h-3a3 3 0 0 1-3-3v-2" /></> },
  { title: 'Corporate compliance', text: 'Information and legal guidance concerning corporate obligations, compliance concerns and regulatory matters.', icon: <><path d="M4 21V7l8-4 8 4v14" /><path d="M2 21h20M9 21v-6h6v6M8 9h.01M12 9h.01M16 9h.01" /></> },
];
const steps = [
  ['Submit an enquiry', 'Provide a brief description of the issue and the type of assistance you are seeking.'],
  ['Initial review', 'The information is reviewed to understand the nature of the matter and whether it falls within our remit.'],
  ['Guidance or referral', 'Where appropriate, we provide guidance or direct you to a relevant authority or professional for further assistance.'],
];
export default function Help() {
  return (
    <section id="help" className="public-section assistance-section">
      <div className="w">
        <div className="section-index"><span>03</span><span>AREAS OF ASSISTANCE</span></div>
        <div className="public-section-heading"><div><h2>Services and areas of assistance</h2><p className="lead">Explore the areas in which the organisation provides information, initial guidance or direction to appropriate sources of assistance.</p></div></div>
        <div className="service-grid">
          {services.map(({ title, text, icon }, index) => (
            <article className="service-card" key={title}>
              <div className="service-card-top"><span className="service-number">0{index + 1}</span><span className="service-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{icon}</svg></span></div>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
        <div className="process-block">
          <div className="process-heading"><span>THE REVIEW PROCESS</span><h3>What happens after you contact us</h3></div>
          <div className="process-grid">
            {steps.map(([title, text], index) => <article className="process-card" key={title}><span className="process-number">0{index + 1}</span><div><h4>{title}</h4><p>{text}</p></div></article>)}
          </div>
        </div>
      </div>
    </section>
  );
}
