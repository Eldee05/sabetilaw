import IntakeForm from './IntakeForm';

const types = ['Fraud & financial crime', 'Cross-border dispute', 'Immigration law', 'Corporate compliance', 'Other'];

export default function Contact() {
  return (
    <section id="contact" className="band">
      <div className="w cols">
        <div>
          <h2>Request a <span>Case Review</span></h2>
          <p className="lead">Tell us briefly what happened. A member of our team will respond to confirm whether we can assist. Do not send passwords, card numbers or identity documents through this form.</p>
          <p className="light">If anyone is in immediate danger, contact your local emergency number.</p>
        </div>
        <IntakeForm
          endpoint="/contact"
          types={types}
          submitLabel="Submit Request"
          successText="Thank you. Your request has been received and our team will be in touch."
        />
      </div>
    </section>
  );
}
