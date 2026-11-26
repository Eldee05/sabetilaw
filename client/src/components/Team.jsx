const people = [
  { name: 'Name Surname', role: 'Legal Counsel', image: '/team/personnel-01.jpg' },
  { name: 'Name Surname', role: 'Investigator', image: '/team/personnel-02.jpg' },
];
export default function Team() {
  return (
    <section id="team" className="public-section personnel-section">
      <div className="w">
        <div className="section-index"><span>04</span><span>PEOPLE &amp; PROFESSIONAL OVERSIGHT</span></div>
        <div className="public-section-heading"><div><h2>Professional guidance, responsibly delivered.</h2><p className="lead">Our legal and investigative personnel support the organisation's intermediary role within its licensed scope.</p></div><span className="section-stamp">PERSONNEL<br/>DIRECTORY</span></div>
        <div className="personnel-list">
          {people.map((person, index) => <article className="personnel-row" key={person.role}><span className="personnel-number">0{index + 1}</span><img className="personnel-portrait" src={person.image} alt={`${person.name}, ${person.role}`} /><div className="personnel-details"><strong>{person.name}</strong><span>{person.role}</span></div><span className="personnel-status">ORGANISATION PERSONNEL</span></article>)}
        </div>
      </div>
    </section>
  );
}
