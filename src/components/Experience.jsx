const EXPERIENCE = [
  {
    title: 'AI Engineer',
    company: 'Optum',
    dates: 'May 2026 - Present',
    bullets: [
      'Architect enterprise AI platforms as a Forward Deployed Engineer, partnering with business leaders to deliver AI solutions for complex workflows.',
      'Design cloud-native infrastructure on GCP with Terraform and build developer tooling that accelerates AI deployment.',
      'Lead an internal FDE engagement platform covering use case intake, delivery, and executive reporting.',
      'Set AI governance and technical standards balancing innovation with security and operations.',
    ],
  },
  {
    title: 'Associate Software Engineer',
    company: 'Optum',
    dates: 'Jul 2025 - Jul 2026',
    bullets: [
      'Built a unified operational intelligence platform for real-time system health across apps and infrastructure.',
      'Scaled AI-powered observability, cutting incident response time and avoiding $1M+ in annual operational losses.',
      'Designed data pipelines and MCP servers enabling AI agents to navigate complex system relationships.',
      'Co-host of the AI-Snackables podcast, a 15K-member AI community.',
    ],
  },
  {
    title: 'Software Engineering Intern',
    company: 'Optum',
    dates: 'Jun 2022 - May 2025',
    bullets: [
      'Containerized 52 .NET APIs and 10 Angular apps using Docker, Kubernetes, and Helm.',
      'Built CI/CD pipelines with GitHub Actions and Octopus Deploy to automate build, test, and deployment.',
      'Used generative AI and bash scripting to automate cloud migration and intake workflows.',
    ],
  },
  {
    title: 'Research Assistant',
    company: 'University of Minnesota',
    dates: 'Sep 2022 - May 2023',
    location: 'Minneapolis, Minnesota, United States',
    bullets: [
      'Assisted in neurosurgical procedures for in vivo neuromodulation studies, including microelectrode implantation.',
      'Analyzed neural recordings in MATLAB through signal processing and statistical analysis.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      <ul className="experience-list">
        {EXPERIENCE.map((job) => (
          <li className="experience-card" key={`${job.company}-${job.title}`}>
            <div className="experience-header">
              <h3>{job.title}</h3>
              <span className="experience-dates">{job.dates}</span>
            </div>
            <p className="experience-meta">
              {job.company}
              {job.location ? ` · ${job.location}` : ''}
            </p>
            <ul className="experience-bullets">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}
