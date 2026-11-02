import logo from '../photos/ck.png'

export default function Nav() {
  return (
    <nav className="nav">
      <button
        className="nav-logo-button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <img src={logo} alt="Cady logo" className="nav-logo" />
      </button>
      <div className="nav-links">
        <a href="#about">about</a>
        <a href="#experience">experience</a>
        <a href="#projects">projects</a>
        <a href="#skills">skills</a>
        <a href="#certifications">certifications</a>
        <a href="#connect">connect</a>
      </div>
      <a href="#connect" className="pill pill-blush nav-cta">say hi</a>
    </nav>
  )
}
