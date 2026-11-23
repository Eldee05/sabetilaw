import IntakeForm from './IntakeForm';
const types = ['Online fraud or scam', 'Financial or corporate misconduct', 'Cross-border dispute', 'Immigration-related matter', 'Other'];
const steps = [
  ['Describe what happened', 'Dates, parties involved and how you were contacted. Short and factual is best.'],
  ['We review your complaint', 'A member of our team assesses it and replies to confirm whether we can take the matter on.'],
  ['We advise on next steps', 'Evidence preservation, official reports and legal action where appropriate.'],
];
export default function Complaint() {
  return (
    <section id="complaint" className="public-section complaint-section">
      <div className="w">
        <div className="section-index"><span>07</span><span>SUBMIT A COMPLAINT</span></div>
        <div className="public-section-heading"><div><h2>Submit a complaint for review</h2><p className="lead">Use this form to open a complaint matter with Sabetilaw P.C. for review by our legal and investigative team.</p></div></div>
        <div className="alert"><b>This is not a report to law enforcement.</b>Submitting this form does not notify any police or government agency. To report a crime to the authorities, contact your local police or emergency number, or for cyber-enabled crime in the U.S. use the <a href="https://www.ic3.gov" target="_blank" rel="noopener noreferrer">FBI’s Internet Crime Complaint Center (IC3)</a>. We can help you prepare and file those reports.</div>
        <div className="complaint-layout"><div className="complaint-steps"><span className="process-heading-label">COMPLAINT PROCESS</span>{steps.map(([title, text], index) => <article className="complaint-step" key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
          <div className="complaint-form-wrap"><IntakeForm endpoint="/complaints" types={types} withDate consentText="I understand this form does not create an attorney-client relationship and is not a report to any government agency. I will not include passwords, card numbers or identity documents." submitLabel="File Complaint" successText="Your complaint has been received. Please keep copies of all related records." /></div>
        </div>
      </div>
    </section>
  );
}
