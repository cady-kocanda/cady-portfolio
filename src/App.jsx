import Nav from './components/Nav'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Connect from './components/Connect'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Connect />
      </main>
      <Footer />
    </>
  )
}
