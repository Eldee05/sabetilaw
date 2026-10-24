import Avatar from './Avatar';

const people = [
  { name: 'Name Surname', role: 'Lead Attorney' },
  { name: 'Name Surname', role: 'Senior Investigator' },
];

export default function Team() {
  return (
    <section id="team" className="band">
      <div className="w">
        <h2>Our <span>Investigators</span></h2>
        <p className="lead">Experienced professionals leading each matter.</p>
        <div className="ph" style={{ maxWidth: 560 }}>
          {people.map((p) => (
            <div className="person" key={p.role}>
              <Avatar /><b>{p.name}</b><small>{p.role}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
