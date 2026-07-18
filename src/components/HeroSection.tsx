import React from 'react'
import { RESUME_URL } from '../constants/resume'

interface HeroSectionProps {
  onExploreClick: () => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section className="relative mx-auto flex min-h-[750px] max-w-7xl flex-col items-start justify-center overflow-hidden px-6 pt-28 pb-16">
      <div className="pointer-events-none absolute top-0 right-0 size-full bg-[radial-gradient(#adc6ff_1px,transparent_1px)] bg-size-[24px_24px] opacity-10"></div>
      <div className="z-10 max-w-3xl">
        <span className="mb-6 inline-block rounded-md border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs font-medium tracking-wider text-primary uppercase md:text-sm">
          SYSTEMS ARCHITECT & AI ENGINEER
        </span>
        <h1 className="mb-6 font-sans text-4xl leading-tight font-bold tracking-tight text-on-surface md:text-6xl">
          Building scalable distributed systems and AI-powered applications.
        </h1>
        <p className="mb-8 max-w-2xl text-base leading-relaxed text-on-surface-variant md:text-xl">
          I specialize in backend engineering, microservices, distributed systems, cloud-native
          infrastructure, and Agentic AI — building production systems designed for scale,
          reliability, and performance.
        </p>

        <div className="mb-10 flex flex-wrap gap-2 opacity-90">
          {[
            'Node.js',
            'TypeScript',
            'NestJS',
            'PostgreSQL',
            'Redis',
            'Kubernetes',
            'Python',
            'LangGraph',
          ].map((tech) => (
            <span
              key={tech}
              className="rounded border border-outline-variant bg-surface-container/60 px-3 py-1 font-mono text-xs text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={onExploreClick}
            className="flex cursor-pointer items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-on-primary shadow-lg shadow-primary/10 transition-all hover:bg-primary-fixed"
          >
            Explore My Work <span className="material-symbols-outlined text-xl">arrow_forward</span>
          </button>
          <button
            onClick={() => window.open(RESUME_URL, '_blank')}
            className="cursor-pointer rounded-lg border border-outline-variant px-6 py-3 font-semibold text-on-surface transition-colors hover:bg-surface-container"
          >
            View Resume
          </button>
        </div>
      </div>
    </section>
  )
}
