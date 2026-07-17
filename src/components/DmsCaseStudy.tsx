import React from 'react'

interface DmsCaseStudyProps {
  onBack: () => void
}

export const DmsCaseStudy: React.FC<DmsCaseStudyProps> = ({ onBack }) => {
  return (
    <div className="mx-auto min-h-screen max-w-320 px-4 pt-28 pb-20 md:px-6">
      {/* Back button */}
      <button 
        onClick={onBack}
        className="mb-8 flex cursor-pointer items-center gap-2 rounded-lg border border-outline-variant bg-surface-container px-4 py-2 font-mono text-sm text-primary transition-all hover:gap-1"
      >
        <span className="material-symbols-outlined text-base">arrow_back</span> Back to Portfolio
      </button>

      {/* Header */}
      <header className="mb-16">
        <div className="mb-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <div className="mb-2 font-mono text-xs font-semibold tracking-widest text-tertiary uppercase">
              Case Study — Technical
            </div>
            <h1 className="mb-4 text-3xl leading-tight font-bold text-on-surface md:text-5xl">
              High-Scale Distributor Management Platform
            </h1>
            <p className="border-l-2 border-primary-container pl-4 text-base text-on-surface-variant italic md:text-lg">
              Designed and evolved scalable backend systems powering inventory, ordering, invoicing, and financial workflows.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <span className="mb-1 font-mono text-xs text-outline">ROLE</span>
            <span className="font-mono text-base font-bold text-primary">Senior Software Engineer</span>
          </div>
        </div>

        <div className="technical-divider my-8"></div>

        <div className="flex flex-wrap gap-2">
          {['NESTJS', 'TYPESCRIPT', 'POSTGRESQL', 'REDIS', 'KUBERNETES', 'MICROSERVICES'].map((tag) => (
            <span 
              key={tag} 
              className="rounded-full border border-outline-variant bg-surface-container-low px-3 py-1 font-mono text-xs text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Bento Grid */}
      <div className="bento-grid">
        {/* 01 The Problem */}
        <section className="relative col-span-12 overflow-hidden rounded-xl border border-outline-variant bg-surface-container p-6 shadow-xl md:col-span-7 md:p-8">
          <span className="step-number absolute top-4 right-4 text-5xl opacity-20 select-none md:text-6xl">01</span>
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-on-surface">
            <span className="material-symbols-outlined text-primary">report_problem</span>
            The Problem
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-on-surface-variant">
            <p>
              The legacy Distributor Management System (DMS) was struggling to keep pace with rapid business growth. As the distributor network expanded, the monolithic architecture encountered severe performance degradation during peak ordering windows.
            </p>
            <p>
              Inventory synchronization was prone to race conditions, leading to over-ordering and financial discrepancies. The system lacked the necessary abstraction to handle complex regional tax logic and high-frequency real-time stock updates across thousands of concurrent sessions.
            </p>
          </div>
        </section>

        {/* 02 Requirements */}
        <section className="relative col-span-12 rounded-xl border border-outline-variant bg-surface-container-high p-6 shadow-xl md:col-span-5 md:p-8">
          <span className="step-number absolute top-4 right-4 text-5xl opacity-20 select-none md:text-6xl">02</span>
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-on-surface">
            <span className="material-symbols-outlined text-tertiary">rule</span>
            Requirements
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined mt-0.5 text-xl text-primary">check_circle</span>
              <div>
                <span className="block font-mono text-sm font-semibold text-on-surface">Throughput</span>
                <span className="text-xs text-on-surface-variant md:text-sm">Handle 800+ Requests Per Second (RPS) reliably.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined mt-0.5 text-xl text-primary">check_circle</span>
              <div>
                <span className="block font-mono text-sm font-semibold text-on-surface">Reliability</span>
                <span className="text-xs text-on-surface-variant md:text-sm">99.9% uptime for financial transaction processing.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined mt-0.5 text-xl text-primary">check_circle</span>
              <div>
                <span className="block font-mono text-sm font-semibold text-on-surface">Data Integrity</span>
                <span className="text-xs text-on-surface-variant md:text-sm">ACID compliance for inventory and wallet deductions.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined mt-0.5 text-xl text-primary">check_circle</span>
              <div>
                <span className="block font-mono text-sm font-semibold text-on-surface">Bulk Processing</span>
                <span className="text-xs text-on-surface-variant md:text-sm">Ability to process 100K+ row CSV uploads for invoicing.</span>
              </div>
            </li>
          </ul>
        </section>

        {/* 03 System Architecture */}
        <section className="relative col-span-12 overflow-hidden rounded-xl border border-outline-variant bg-surface-container-low p-6 shadow-xl md:p-8">
          <span className="step-number absolute top-4 right-4 text-5xl opacity-20 select-none md:text-6xl">03</span>
          <h2 className="mb-8 text-center text-2xl font-bold text-on-surface">System Architecture</h2>

          <div className="relative flex flex-col items-center justify-center gap-4 md:flex-row">
            <div className="flex w-full flex-col items-center rounded border border-outline-variant bg-background p-4 text-center md:w-1/6">
              <span className="material-symbols-outlined mb-1 text-primary">devices</span>
              <span className="font-mono text-xs text-on-surface">CLIENT</span>
            </div>

            <span className="material-symbols-outlined rotate-90 text-outline md:rotate-0">trending_flat</span>

            <div className="flex w-full flex-col items-center rounded border border-outline-variant bg-surface-container p-4 text-center md:w-1/6">
              <span className="material-symbols-outlined mb-1 text-secondary">router</span>
              <span className="font-mono text-xs text-on-surface">API GATEWAY</span>
            </div>

            <span className="material-symbols-outlined rotate-90 text-outline md:rotate-0">trending_flat</span>

            <div className="flex w-full flex-col items-center rounded border border-dashed border-primary/40 bg-primary-container/10 p-4 text-center md:w-1/4">
              <span className="material-symbols-outlined mb-1 text-primary">settings_input_component</span>
              <span className="font-mono text-xs font-semibold text-on-surface">NESTJS SERVICES</span>
              <div className="mt-2 flex gap-1">
                <div className="h-2 w-4 rounded bg-primary/40"></div>
                <div className="h-2 w-4 rounded bg-primary/40"></div>
                <div className="h-2 w-4 rounded bg-primary/40"></div>
              </div>
            </div>

            <span className="material-symbols-outlined rotate-90 text-outline md:rotate-0">sync_alt</span>

            <div className="flex w-full flex-col gap-3 md:w-1/5">
              <div className="flex items-center justify-between rounded border border-outline-variant bg-background p-2">
                <span className="font-mono text-xs text-on-surface">QUEUES (BullMQ)</span>
                <span className="material-symbols-outlined text-sm text-tertiary">reorder</span>
              </div>
              <div className="flex items-center justify-between rounded border border-outline-variant bg-background p-2">
                <span className="font-mono text-xs text-on-surface">WORKERS</span>
                <span className="material-symbols-outlined text-sm text-secondary">engineering</span>
              </div>
            </div>

            <span className="material-symbols-outlined rotate-90 text-outline md:rotate-0">database</span>

            <div className="flex w-full flex-col items-center rounded border border-outline-variant bg-surface-variant p-4 text-center md:w-1/6">
              <span className="material-symbols-outlined mb-1 text-on-surface">storage</span>
              <span className="font-mono text-xs text-on-surface">POSTGRESQL</span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 border-t border-outline-variant pt-6 md:grid-cols-3">
            <div className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-full bg-primary/20 text-primary">
                <span className="material-symbols-outlined text-sm">cached</span>
              </div>
              <span className="text-sm text-on-surface-variant">Redis Caching Layer</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-full bg-tertiary/20 text-tertiary">
                <span className="material-symbols-outlined text-sm">cloud</span>
              </div>
              <span className="text-sm text-on-surface-variant">Kubernetes HPA Auto-scaler</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                <span className="material-symbols-outlined text-sm">security</span>
              </div>
              <span className="text-sm text-on-surface-variant">Isolated DB Connection Pools</span>
            </div>
          </div>
        </section>

        {/* 04 Role & Decisions */}
        <section className="relative col-span-12 rounded-xl border border-outline-variant bg-background p-6 shadow-xl md:col-span-6 md:p-8">
          <span className="step-number absolute top-4 right-4 text-5xl opacity-20 select-none md:text-6xl">04</span>
          <h2 className="mb-4 text-2xl font-bold text-on-surface">My Role & Impact</h2>
          <p className="mb-8 text-base leading-relaxed text-on-surface-variant">
            I took end-to-end ownership of the core backend services, focusing on architectural stability and system optimization. My primary objective was to refactor high-traffic endpoints and introduce robust queuing mechanisms to decouple synchronous processes.
          </p>

          <h3 className="mb-4 text-lg font-bold text-primary">Key Technical Decisions</h3>
          <div className="space-y-4">
            <div className="rounded border border-outline-variant bg-surface-container p-4">
              <h4 className="mb-1 font-mono text-sm font-bold text-on-surface">Redis Caching Strategy</h4>
              <p className="text-xs text-on-surface-variant md:text-sm">Implemented a Write-Through cache for SKU availability to reduce DB read pressure by 80%.</p>
            </div>
            <div className="rounded border border-outline-variant bg-surface-container p-4">
              <h4 className="mb-1 font-mono text-sm font-bold text-on-surface">Microservices Decomposition</h4>
              <p className="text-xs text-on-surface-variant md:text-sm">Split the Monolith into targeted services: Identity, Inventory, and Order Orchestrator.</p>
            </div>
            <div className="rounded border border-outline-variant bg-surface-container p-4">
              <h4 className="mb-1 font-mono text-sm font-bold text-on-surface">Kubernetes HPA</h4>
              <p className="text-xs text-on-surface-variant md:text-sm">Configured Horizontal Pod Autoscaler based on custom memory and CPU metrics for scaling stability.</p>
            </div>
          </div>
        </section>

        {/* 05 Deep Technical Challenges */}
        <section className="relative col-span-12 rounded-xl border border-outline-variant bg-surface-container-low p-6 shadow-xl md:col-span-6 md:p-8">
          <span className="step-number absolute top-4 right-4 text-5xl opacity-20 select-none md:text-6xl">05</span>
          <h2 className="mb-6 text-2xl font-bold text-on-surface">Deep Technical Challenges</h2>
          <div className="space-y-6">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-error">warning</span>
                <h3 className="text-lg font-semibold text-on-surface">Inventory Race Conditions</h3>
              </div>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                Simultaneous orders for the same SKU led to "Phantom Stock" errors. I solved this by implementing <strong className="text-on-surface">Distributed Locking</strong> using Redis (Redlock algorithm) ensuring atomicity across the clustered environment.
              </p>
            </div>

            <div className="technical-divider my-4"></div>

            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-error">timer</span>
                <h3 className="text-lg font-semibold text-on-surface">Latency Bottlenecks</h3>
              </div>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                Complex JOINs in the invoicing module were taking upwards of 10 seconds. Optimized via <strong className="text-on-surface">Database Indexing</strong> and transitioning legacy synchronous exports to an <strong className="text-on-surface">Asynchronous Job Pipeline</strong> with BullMQ.
              </p>
            </div>
          </div>
        </section>

        {/* 06 Quantifiable Success */}
        <section className="relative col-span-12 overflow-hidden rounded-xl border border-outline-variant bg-surface-container-high p-8 text-on-surface shadow-2xl">
          <div className="relative z-10">
            <h2 className="mb-8 text-center text-2xl font-bold text-on-surface">Quantifiable Success</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
              <div className="border-r border-outline-variant/30 text-center last:border-0">
                <div className="mb-1 font-sans text-4xl font-extrabold text-on-surface">800+</div>
                <div className="font-mono text-xs tracking-wider uppercase text-on-surface-variant">Requests Per Second</div>
              </div>
              <div className="border-r border-outline-variant/30 text-center last:border-0">
                <div className="mb-1 font-sans text-4xl font-extrabold text-on-surface">70%</div>
                <div className="font-mono text-xs tracking-wider uppercase text-on-surface-variant">Latency Reduction</div>
              </div>
              <div className="border-r border-outline-variant/30 text-center last:border-0">
                <div className="mb-1 font-sans text-4xl font-extrabold text-on-surface">3.5m</div>
                <div className="font-mono text-xs tracking-wider uppercase text-on-surface-variant">2K Orders Processing</div>
              </div>
              <div className="text-center last:border-0">
                <div className="mb-1 font-sans text-4xl font-extrabold text-on-surface">0%</div>
                <div className="font-mono text-xs tracking-wider uppercase text-on-surface-variant">Inventory Discrepancy</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
