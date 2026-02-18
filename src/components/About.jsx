import headshot from '../photos/headshot.png'

export default function About() {
  return (
    <section id="about" className="section">
      <img src={headshot} alt="Cady Kocanda" className="about-headshot" />
      <h1 className="hero-title">Cady Kocanda</h1>
      <p className="hero-subtitle">
        developer, designer, and creator.
      </p>
      <div></div>
      <p className="hero-subtitle">
        i'm passionate about problem solving, sharing knowledge, and building products that are both functional & beautiful.
      </p>
    </section>
  )
}
