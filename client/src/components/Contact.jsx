import IntakeForm from './IntakeForm';
const types = ['Fraud & financial crime', 'Cross-border dispute', 'Immigration law', 'Corporate compliance', 'Other'];
export default function Contact() {
  return (
    <section id="contact" className="public-section contact-section">
      <div className="w">
        <div className="section-index"><span>06</span><span>CONTACT &amp; INITIAL ENQUIRIES</span></div>
        <div className="contact-panel">
          <div className="contact-copy"><span className="contact-kicker">REQUEST INFORMATION</span><h2>Request an initial case review</h2><p>Tell us briefly what happened. A member of our team will respond to confirm whether we can assist.</p><div className="contact-guidance"><strong>Before you submit</strong><span>Do not send passwords, card numbers or identity documents through this form.</span></div><p className="contact-emergency">If anyone is in immediate danger, contact your local emergency number.</p></div>
          <div className="contact-form-wrap"><IntakeForm endpoint="/contact" types={types} submitLabel="Submit Request" successText="Thank you. Your request has been received and our team will be in touch." /></div>
        </div>
      </div>
    </section>
  );
}
