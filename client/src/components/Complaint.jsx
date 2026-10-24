import IntakeForm from './IntakeForm';

const types = ['Online fraud or scam', 'Financial or corporate misconduct', 'Cross-border dispute', 'Immigration-related matter', 'Other'];
const steps = [
  ['1. Describe what happened', 'Dates, parties involved and how you were contacted. Short and factual is best.'],
  ['2. We review your complaint', 'A member of our team assesses it and replies to confirm whether we can take the matter on.'],
  ['3. We advise on next steps', 'Evidence preservation, official reports and legal action where appropriate.'],
];

export default function Complaint() {
  return (
    <section id="complaint">
      <div className="w">
        <h2>File a <span>Complaint</span> with Us</h2>
        <p className="lead">Use this form to open a complaint matter with Sabetilaw P.C. for review by our legal and investigative team.</p>
        <div className="alert">
          <b>This is not a report to law enforcement.</b>
          Submitting this form does not notify any police or government agency. To report a crime to the authorities, contact your local police or emergency number, or for cyber-enabled crime in the U.S. use the{' '}
          <a href="https://www.ic3.gov" target="_blank" rel="noopener noreferrer">FBI’s Internet Crime Complaint Center (IC3)</a>. We can help you prepare and file those reports.
        </div>
        <div className="cols">
          <div className="grid stack">
            {steps.map(([title, text]) => (
              <div className="card" key={title}><h3>{title}</h3><p>{text}</p></div>
            ))}
          </div>
          <IntakeForm
            endpoint="/complaints"
            types={types}
            withDate
            consentText="I understand this form does not create an attorney-client relationship and is not a report to any government agency. I will not include passwords, card numbers or identity documents."
            submitLabel="File Complaint"
            successText="Your complaint has been received. Please keep copies of all related records."
          />
        </div>
      </div>
    </section>
  );
}
