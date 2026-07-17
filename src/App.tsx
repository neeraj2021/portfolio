import { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { TopNavBar } from './components/TopNavBar'
import { HeroSection } from './components/HeroSection'
import { ImpactMetrics } from './components/ImpactMetrics'
import { AboutSection } from './components/AboutSection'
import { WorkSection } from './components/WorkSection'
import { TechnicalExpertise } from './components/TechnicalExpertise'
import { ExperienceSection } from './components/ExperienceSection'
import { PrinciplesSection } from './components/PrinciplesSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { DmsCaseStudy } from './components/DmsCaseStudy'

function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 50)
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  return (
    <main className="flex-grow">
      <HeroSection
        onExploreClick={() => {
          const el = document.getElementById('work')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }}
      />
      <ImpactMetrics />
      <AboutSection />
      <WorkSection />
      <TechnicalExpertise />
      <ExperienceSection />
      <PrinciplesSection />
      <ContactSection />
    </main>
  )
}

function DmsCaseStudyPage() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <main className="flex-grow">
      <DmsCaseStudy onBack={() => navigate('/')} />
    </main>
  )
}

function App() {
  const location = useLocation()
  const currentView = location.pathname.startsWith('/case-study') ? 'dms-case-study' : 'home'

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-on-surface selection:bg-primary selection:text-on-primary">
      <TopNavBar currentView={currentView} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study/dms" element={<DmsCaseStudyPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
