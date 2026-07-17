import React from 'react'

export const TechnicalExpertise: React.FC = () => {
  const groups = [
    {
      category1: {
        title: 'Backend',
        skills: [
          { name: 'Node.js / TypeScript', level: '5+ yrs' },
          { name: 'NestJS / Express', level: '5+ yrs' },
          { name: 'Microservices Arch', level: '4+ yrs' },
          { name: 'Event-Driven Dev', level: '4+ yrs' },
        ],
      },
      category2: {
        title: 'Databases',
        skills: [
          { name: 'PostgreSQL / MySQL', level: '4+ yrs' },
          { name: 'Redis (Caching/Queues)', level: '4+ yrs' },
          { name: 'Cassandra DB', level: '2+ yrs' },
          { name: 'Vector DBs (pgvector)', level: '1+ yrs' },
        ],
      },
    },
    {
      category1: {
        title: 'AI Engineering',
        skills: [
          { name: 'LangChain / LangGraph', level: '2+ yrs' },
          { name: 'RAG Implementation', level: '2+ yrs' },
          { name: 'Prompt Engineering', level: '2+ yrs' },
          { name: 'Agentic AI/Workflows', level: '2+ yrs' },
        ],
      },
      category2: {
        title: 'Cloud/Infra',
        skills: [
          { name: 'Azure', level: '2+ yrs' },
          { name: 'Kubernetes / Docker', level: '3+ yrs' },
          { name: 'CI/CD (GitHub Actions)', level: '3+ yrs' },
        ],
      },
    },
    {
      category1: {
        title: 'Frontend',
        skills: [
          { name: 'React / Next.js', level: '5+ yrs' },
          { name: 'Tailwind CSS', level: '4+ yrs' },
          { name: 'State Mgmt (Redux)', level: '2+ yrs' },
        ],
      },
      category2: {
        title: 'Observability',
        skills: [
          { name: 'Prometheus/Grafana', level: '3+ yrs' },
          { name: 'GroundCover', level: '2+ yrs' },
        ],
      },
    },
  ]

  return (
    <section className="mx-auto max-w-7xl px-6 py-20" id="skills">
      <h2 className="mb-12 text-center text-3xl font-bold text-on-surface md:text-4xl">
        Technical Expertise
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {groups.map((col, cIdx) => (
          <div key={cIdx} className="space-y-8">
            {/* Category 1 */}
            <div className="rounded-xl border border-outline-variant/40 bg-surface-container/40 p-6">
              <h3 className="mb-4 border-b border-outline-variant pb-2 font-mono text-xs font-semibold tracking-widest text-primary uppercase">
                {col.category1.title}
              </h3>
              <ul className="space-y-3">
                {col.category1.skills.map((s, idx) => (
                  <li key={idx} className="flex items-center justify-between text-sm md:text-base">
                    <span className="text-on-surface">{s.name}</span>
                    <span className="rounded bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary/60">
                      {s.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Category 2 */}
            <div className="rounded-xl border border-outline-variant/40 bg-surface-container/40 p-6">
              <h3 className="mb-4 border-b border-outline-variant pb-2 font-mono text-xs font-semibold tracking-widest text-primary uppercase">
                {col.category2.title}
              </h3>
              <ul className="space-y-3">
                {col.category2.skills.map((s, idx) => (
                  <li key={idx} className="flex items-center justify-between text-sm md:text-base">
                    <span className="text-on-surface">{s.name}</span>
                    <span className="rounded bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary/60">
                      {s.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
