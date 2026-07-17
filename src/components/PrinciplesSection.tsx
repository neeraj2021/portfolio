import React from 'react'

export const PrinciplesSection: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'Design for Scale',
      desc: "Don't just build for today's load. Architect with horizontal scalability and partitioning in mind from day zero.",
    },
    {
      num: '02',
      title: 'Measure First',
      desc: 'Optimization without metrics is just a guess. Every bottleneck must be identified through observability and profiling.',
    },
    {
      num: '03',
      title: 'Think Beyond API',
      desc: "Engineering is more than CRUD. It's about data integrity, queue management, and system resilience.",
    },
    {
      num: '04',
      title: 'Value-Driven AI',
      desc: 'LLMs are tools, not solutions. Use AI only where it solves complex reasoning problems or automates high-value workflows.',
    },
  ]

  return (
    <section className="mx-auto max-w-320 px-6 py-20">
      <h2 className="mb-12 text-3xl font-bold text-on-surface md:text-4xl">
        How I Approach Engineering
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {principles.map((p, idx) => (
          <div
            key={idx}
            className="group rounded-xl border border-outline-variant bg-surface-container/30 p-6 transition-all hover:border-primary"
          >
            <span className="mb-3 block font-sans text-4xl font-extrabold text-primary/30 transition-colors group-hover:text-primary">
              {p.num}
            </span>
            <h3 className="mb-2 text-xl font-semibold text-on-surface">{p.title}</h3>
            <p className="text-sm leading-relaxed text-on-surface-variant">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
