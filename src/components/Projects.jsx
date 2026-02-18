export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <ul className="project-list">
        <li className="project-card">
          <h3>tinyphotobooth</h3>
          <p>a fun, cute way to get a photobooth strip... for free!</p>
          <p>this is also deployed on <a href="#" className="link">tinyphotobooth.com</a></p>
          <a href="https://github.com/cady-kocanda/tinyphotobooth" className="link">View project</a>
        </li>
        <li className="project-card">
          <h3>trivia game</h3>
          <p>group trivia! utilizes the trivia DB API</p>
          <a href="https://github.com/cady-kocanda/triviagame" className="link">View project</a>
        </li>
        <li className="project-card">
          <h3>momenta</h3>
          <p>a website to to track your goals, to dos, and more!</p>
          <a href="https://github.com/cady-kocanda/momenta" className="link">View project</a>
        </li>
        {/* <li className="project-card">
          <h3>budget tracker</h3>
          <p>set your budget, track your expenses, and monitor your progress</p>
          <a href="https://github.com/cady-kocanda/budget-tracker" className="link">View project</a>
        </li> */}
      </ul>
    </section>
  )
}
