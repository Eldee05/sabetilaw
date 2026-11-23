import Avatar from './Avatar';

const people = [
  { name: 'Name Surname', role: 'Legal Counsel' },
  { name: 'Name Surname', role: 'Investigator' },
];

export default function Team() {
  return (
    <section id="team" className="team-institutional">
      <div className="w">
        <div className="section-index section-index-light"><span>04</span><span>PEOPLE &amp; PROFESSIONAL OVERSIGHT</span></div>
        <h2>Professional guidance, <em>responsibly delivered.</em></h2>
        <p className="team-intro">Our legal and investigative personnel support the organisation's intermediary role within its licensed scope.</p>
        <div className="team-list">
          {people.map((person) => (
            <article className="team-row" key={person.role}>
              <Avatar />
              <div><strong>{person.name}</strong><span>{person.role}</span></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
