import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from './components/Navbar'
import CircuitRail from './components/CircuitRail'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Cocurricular from './components/Cocurricular'
import Contact from './components/Contact'
import Footer from './components/Footer'

import useActiveSection from './hooks/useActiveSection'
import { navLinks } from './data/portfolioData'

const sectionIds = navLinks.map((l) => l.id)

export default function App() {
  const [isDark, setIsDark] = useState(true)
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 60 })
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <>
      <Navbar activeId={activeId} isDark={isDark} onToggleTheme={() => setIsDark((v) => !v)} />
      <CircuitRail activeId={activeId} />

      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Cocurricular />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
