const SKILLS = [
  'HTML & CSS',
  'javaScript / react',
  'typeScript',
  'node.js',
  'git & version control',
  'python',
  'java',
  'canva',
  'figma',
  'very comfortable utilizing AI tools from copilot to codex to cursor',
]

export default function Skills() {
  return (
    <section id="skills" className="section section-blush">
      <h2 className="display section-title">Tools <em>of the</em> trade.</h2>
      <ul className="skills-list">
        {SKILLS.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}
