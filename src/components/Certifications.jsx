const CERTIFICATIONS = [
  {
    name: 'Claude Resident Engineer',
    issuer: 'Anthropic',
    date: 'Issued Oct 2026',
  },
  {
    name: 'Certified SOLIDWORKS Associate',
    issuer: 'Dassault Systèmes',
    date: 'Issued Dec 2023',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <h2 className="section-title">Certifications</h2>
      <ul className="certifications-list">
        {CERTIFICATIONS.map((cert) => (
          <li className="certification-card" key={cert.name}>
            <h3>{cert.name}</h3>
            <p className="certification-meta">
              {cert.issuer} · {cert.date}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
