import React from 'react'

interface ExperienceSectionProps {
  onOpenDmsCaseStudy: () => void
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenDmsCaseStudy }) => {
  return (
    <section className="border-y border-outline-variant bg-surface-container-low py-20" id="experience">
      <div className="mx-auto max-w-320 px-6">
        <h2 className="mb-16 text-center text-3xl font-bold text-on-surface md:text-left md:text-4xl">
          Professional Journey
        </h2>

        <div className="relative">
          {/* Vertical central divider line for desktop */}
          <div className="absolute inset-y-0 left-0 hidden w-px -translate-x-1/2 bg-outline-variant md:left-1/2 md:block"></div>

          {/* Experience 1: Beehyv */}
          <div className="relative mb-12 flex flex-col gap-8 md:flex-row">
            <div className="md:w-1/2 md:text-right">
              <span className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">PRESENT</span>
              <h3 className="mt-1 text-2xl font-semibold text-on-surface">Senior Software Engineer</h3>
              <p className="text-sm text-outline">Beehyv Software Solutions</p>
            </div>
            <div className="absolute left-0 z-10 mt-2 hidden size-4 -translate-x-1/2 rounded-full border-4 border-background bg-primary md:left-1/2 md:block"></div>
            <div className="glass-card rounded-xl border border-[#334155] p-5 md:w-1/2">
              <p className="text-sm leading-relaxed text-on-surface-variant">
                Leading development of enterprise-scale microservices. Specialized in optimizing database performance and integrating agentic AI workflows into legacy stacks.
              </p>
            </div>
          </div>

          {/* Experience 2: FieldAssist */}
          <div className="relative mb-12 flex flex-col gap-8 md:flex-row-reverse">
            <div className="md:w-1/2">
              <span className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">2021 - 2023</span>
              <h3 className="mt-1 text-2xl font-semibold text-on-surface">Software Engineer II</h3>
              <p className="text-sm text-outline">FieldAssist</p>
            </div>
            <div className="absolute left-0 z-10 mt-2 hidden size-4 -translate-x-1/2 rounded-full border-4 border-background bg-primary md:left-1/2 md:block"></div>
            <div className="glass-card rounded-xl border border-[#334155] p-5 md:w-1/2 md:text-right">
              <p className="text-sm leading-relaxed text-on-surface-variant">
                Architected a DMS platform that supported 50k+ sellers. Focused on high-availability and zero-downtime deployments.
              </p>
              <button 
                onClick={onOpenDmsCaseStudy}
                className="mt-3 inline-block cursor-pointer font-mono text-xs font-medium text-primary hover:underline"
              >
                CASE STUDY: DMS ARCHITECTURE →
              </button>
            </div>
          </div>

          {/* Experience 3: SharpQuest */}
          <div className="relative flex flex-col gap-8 md:flex-row">
            <div className="md:w-1/2 md:text-right">
              <span className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">2019 - 2021</span>
              <h3 className="mt-1 text-2xl font-semibold text-on-surface">Software Developer</h3>
              <p className="text-sm text-outline">SharpQuest</p>
            </div>
            <div className="absolute left-0 z-10 mt-2 hidden size-4 -translate-x-1/2 rounded-full border-4 border-background bg-primary md:left-1/2 md:block"></div>
            <div className="glass-card rounded-xl border border-[#334155] p-5 md:w-1/2">
              <p className="text-sm leading-relaxed text-on-surface-variant">
                Developed full-stack web applications with React and Node.js. Optimized legacy APIs for mobile app integration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
