import headshot from '../photos/headshot.png'

export default function About() {
  return (
    <section id="about" className="section section-blush hero">
      <div className="hero-text">
        <p className="eyebrow">forward deployed engineer</p>
        <h1 className="display hero-title">Cady Kocanda.</h1>
        <p className="hero-tagline">
          developer, designer, <em>and</em> creator.
        </p>
        <p className="hero-body">
          i'm passionate about problem solving, sharing knowledge, and building products that are both functional & beautiful.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="pill pill-dark">see my work</a>
          <a href="#connect" className="pill pill-outline">say hello</a>
        </div>
      </div>
      <img src={headshot} alt="Cady Kocanda" className="hero-photo" />
    </section>
  )
}
