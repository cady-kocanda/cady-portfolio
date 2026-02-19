export default function Nav() {
  return (
    <nav className="nav">
      <button
        className="nav-logo-button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <img src="/src/photos/ck.png" alt="Cady logo" className="nav-logo" />
      </button>
      <a href="#about" className="nav-about">about</a>
      <a href="#projects">projects</a>
      <a href="#skills">skills</a>
      <a href="#connect">connect</a>
    </nav>
  )
}
