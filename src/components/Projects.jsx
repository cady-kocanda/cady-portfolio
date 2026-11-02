const PROJECTS = [
  {
    name: 'racely',
    description: 'find running races near you, filtered your way',
    repo: 'https://github.com/cady-kocanda/race-radar',
    site: 'https://race-radar.vercel.app',
    siteLabel: 'race-radar.vercel.app',
  },
  {
    name: 'tinyphotobooth',
    description: 'a fun, cute way to get a photobooth strip... for free!',
    repo: 'https://github.com/cady-kocanda/tinyphotobooth',
    site: 'https://tinyphotobooths.com',
    siteLabel: 'tinyphotobooths.com',
  },
  {
    name: 'trivia game',
    description: 'group trivia! utilizes the trivia DB API',
    repo: 'https://github.com/cady-kocanda/triviagame',
  },
  {
    name: 'momenta',
    description: 'a website to track your goals, to dos, and more!',
    repo: 'https://github.com/cady-kocanda/momenta',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section section-cream">
      <h2 className="display section-title">Built <em>for</em> fun.</h2>
      <ul className="project-list">
        {PROJECTS.map((project) => (
          <li className="project-card" key={project.name}>
            <h3 className="display">{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="pill pill-dark">view project</a>
              {project.site && (
                <a href={project.site} target="_blank" rel="noopener noreferrer" className="pill pill-outline">{project.siteLabel} ↗</a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
