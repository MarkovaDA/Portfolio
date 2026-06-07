import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'
import { Contact, Footer } from '../components/Contact'

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
