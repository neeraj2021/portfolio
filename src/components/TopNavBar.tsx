import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

interface TopNavBarProps {
  currentView: 'home' | 'dms-case-study'
}

export const TopNavBar: React.FC<TopNavBarProps> = ({ currentView }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (e: React.MouseEvent, sectionId?: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    if (location.pathname !== '/') {
      navigate(sectionId ? `/#${sectionId}` : '/')
    } else if (sectionId) {
      const el = document.getElementById(sectionId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 left-1/2 z-50 flex w-full max-w-320 -translate-x-1/2 items-center justify-between border-b border-outline-variant bg-background/80 px-6 py-4 backdrop-blur-md">
      <div
        className="cursor-pointer text-xl font-bold text-on-surface transition-colors hover:text-primary"
        onClick={(e) => handleNavClick(e)}
      >
        Neeraj Kumar Mahawar
      </div>

      {/* Desktop Menu */}
      <div className="hidden items-center gap-6 md:flex">
        <a
          className="cursor-pointer font-medium text-on-surface-variant transition-colors hover:text-primary"
          href="#about"
          onClick={(e) => handleNavClick(e, 'about')}
        >
          About
        </a>
        <a
          className={`cursor-pointer font-medium transition-colors ${
            currentView === 'dms-case-study'
              ? 'border-b-2 border-primary pb-0.5 font-bold text-primary'
              : 'text-on-surface-variant hover:text-primary'
          }`}
          href="#work"
          onClick={(e) => handleNavClick(e, 'work')}
        >
          Work
        </a>
        <a
          className="cursor-pointer font-medium text-on-surface-variant transition-colors hover:text-primary"
          href="#experience"
          onClick={(e) => handleNavClick(e, 'experience')}
        >
          Experience
        </a>
        <a
          className="cursor-pointer font-medium text-on-surface-variant transition-colors hover:text-primary"
          href="#skills"
          onClick={(e) => handleNavClick(e, 'skills')}
        >
          Skills
        </a>
        <a
          className="cursor-pointer font-medium text-on-surface-variant transition-colors hover:text-primary"
          href="#contact"
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Contact
        </a>
        <button
          onClick={() => window.open('#', '_blank')}
          className="rounded-lg bg-primary px-4 py-1.5 font-semibold text-on-primary transition-all hover:bg-primary-fixed active:scale-95"
        >
          Resume
        </button>
      </div>

      {/* Mobile menu toggle */}
      <div className="flex items-center gap-3 md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-on-surface hover:text-primary"
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 flex w-full flex-col gap-4 border-b border-outline-variant bg-surface-container p-6 shadow-2xl md:hidden">
          <a
            className="border-b border-outline-variant/40 py-1 text-lg text-on-surface"
            href="#about"
            onClick={(e) => handleNavClick(e, 'about')}
          >
            About
          </a>
          <a
            className="border-b border-outline-variant/40 py-1 text-lg text-on-surface"
            href="#work"
            onClick={(e) => handleNavClick(e, 'work')}
          >
            Work
          </a>
          <a
            className="border-b border-outline-variant/40 py-1 text-lg text-on-surface"
            href="#experience"
            onClick={(e) => handleNavClick(e, 'experience')}
          >
            Experience
          </a>
          <a
            className="border-b border-outline-variant/40 py-1 text-lg text-on-surface"
            href="#skills"
            onClick={(e) => handleNavClick(e, 'skills')}
          >
            Skills
          </a>
          <a
            className="border-b border-outline-variant/40 py-1 text-lg text-on-surface"
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Contact
          </a>
          <button
            onClick={() => window.open('#', '_blank')}
            className="w-full rounded-lg bg-primary py-2 font-semibold text-on-primary"
          >
            Resume
          </button>
        </div>
      )}
    </nav>
  )
}
