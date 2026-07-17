import { useState } from 'react'
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

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'dms-case-study'>('home')

  const handleNavigate = (view: 'home' | 'dms-case-study', sectionId?: string) => {
    setCurrentView(view)
    if (view === 'home' && sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 50)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleOpenCaseStudy = () => {
    setCurrentView('dms-case-study')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToHome = () => {
    setCurrentView('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-on-surface selection:bg-primary selection:text-on-primary">
      <TopNavBar currentView={currentView} onNavigate={handleNavigate} />

      {currentView === 'home' ? (
        <main className="flex-grow">
          <HeroSection onExploreClick={() => handleNavigate('home', 'work')} />
          <ImpactMetrics />
          <AboutSection />
          <WorkSection onOpenDmsCaseStudy={handleOpenCaseStudy} />
          <TechnicalExpertise />
          <ExperienceSection onOpenDmsCaseStudy={handleOpenCaseStudy} />
          <PrinciplesSection />
          <ContactSection />
        </main>
      ) : (
        <main className="flex-grow">
          <DmsCaseStudy onBack={handleBackToHome} />
        </main>
      )}

      <Footer />
    </div>
  )
}

export default App
