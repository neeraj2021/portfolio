import React from 'react'

export const AboutSection: React.FC = () => {
  return (
    <section className="mx-auto max-w-320 px-6 py-20" id="about">
      <div className="flex flex-col items-center gap-12 md:flex-row">
        {/* Left container with empty space for image per request */}
        <div className="relative aspect-square w-full md:w-1/3">
          <div className="absolute inset-0 m-3 -translate-2 rounded border border-primary/60"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded border border-outline-variant bg-surface-container p-6 text-center shadow-inner">
            <span className="material-symbols-outlined mb-2 text-4xl text-outline/40">image</span>
            <span className="font-mono text-xs tracking-widest text-outline/60 uppercase">Image Placeholder</span>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-2/3">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-on-surface">About Me</h2>
          <div className="space-y-4 text-base leading-relaxed text-on-surface-variant md:text-lg">
            <p>
              I am a Senior Software Engineer with a deep obsession for technical excellence and system architecture. My journey has been defined by solving complex bottlenecks in high-traffic environments, from scaling logistics platforms to orchestrating microservices in K8s.
            </p>
            <p>
              Currently, I am heavily focused on the intersection of <strong className="text-on-surface">Backend Engineering</strong> and <strong className="text-on-surface">AI Engineering</strong>. I leverage LangGraph and RAG patterns to build agentic systems that don't just "chat," but perform complex reasoning and autonomous tasks within enterprise workflows.
            </p>
            
            <div className="mt-6 grid grid-cols-1 gap-6 border-t border-outline-variant/60 pt-6 sm:grid-cols-2">
              <div>
                <span className="mb-1 block font-mono text-xs font-semibold tracking-wider text-primary uppercase">Expertise</span>
                <p className="text-sm text-secondary">Distributed Systems, Event-Driven Architecture, LLM Orchestration.</p>
              </div>
              <div>
                <span className="mb-1 block font-mono text-xs font-semibold tracking-wider text-primary uppercase">Philosophy</span>
                <p className="text-sm text-secondary">Complexity is a cost. Systems must be observable, scalable, and resilient.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
