import { useEffect, useState } from 'react'
import type { NavSection } from './types'
import {
  Header,
  Hero,
  HeroBlobs,
  ImpactSnapshot,
  Experience,
  TechStackSection,
  Philosophy,
  EducationLeadership,
  Contact,
} from './components'

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  const scrollTo = (id: NavSection) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-linear-to-b from-slate-50 via-slate-100 to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950" />
      <HeroBlobs />

      <Header
        theme={theme}
        onThemeToggle={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        onNavClick={scrollTo}
      />

      <main className="mx-auto max-w-6xl space-y-24 px-4 pb-20 pt-10 sm:px-6 lg:space-y-28 lg:px-8 lg:pt-14">
        <Hero onScrollTo={scrollTo} />
        <ImpactSnapshot />
        <Experience />
        <TechStackSection />
        <Philosophy />
        <EducationLeadership />
        <Contact />
      </main>
    </div>
  )
}

export default App
