import Avatar from './Avatar';

export default function About() {
  return (
    <section id="about">
      <div className="w two">
        <div>
          <h2>About <span>Sabetilaw P.C.</span></h2>
          <p className="lead">We are a professional corporation that brings legal strategy and investigative discipline together. Our work is documented, confidential and conducted within the law.</p>
          <p className="lead">From fraud and financial-crime matters to cross-border disputes and immigration-related legal questions, our approach is the same: establish the facts, preserve the evidence, advise clearly.</p>
          <a className="btn" href="#contact">Speak With Our Team</a>
        </div>
        <div className="person"><Avatar /></div>
      </div>
    </section>
  );
}
