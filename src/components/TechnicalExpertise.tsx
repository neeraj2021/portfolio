import React from 'react'

export const TechnicalExpertise: React.FC = () => {
  const groups = [
    {
      category1: {
        title: 'Backend',
        skills: [
          { name: 'Node.js / TypeScript', level: '8+ yrs' },
          { name: 'NestJS / Express', level: 'Exp' },
          { name: 'Microservices Arch', level: 'Adv' },
          { name: 'Event-Driven Dev', level: 'Adv' },
        ],
      },
      category2: {
        title: 'Databases',
        skills: [
          { name: 'PostgreSQL / MySQL', level: 'Adv' },
          { name: 'Redis (Caching/Queues)', level: 'Adv' },
          { name: 'MongoDB / NoSQL', level: 'Exp' },
          { name: 'Vector DBs (Pinecone)', level: 'Mid' },
        ],
      },
    },
    {
      category1: {
        title: 'AI Engineering',
        skills: [
          { name: 'LangChain / LangGraph', level: 'Adv' },
          { name: 'RAG Implementation', level: 'Adv' },
          { name: 'Prompt Engineering', level: 'Exp' },
          { name: 'Python / PyTorch', level: 'Mid' },
        ],
      },
      category2: {
        title: 'Cloud/Infra',
        skills: [
          { name: 'AWS / GCP', level: 'Adv' },
          { name: 'Kubernetes / Docker', level: 'Adv' },
          { name: 'CI/CD (GitHub Actions)', level: 'Exp' },
          { name: 'Terraform / IaC', level: 'Mid' },
        ],
      },
    },
    {
      category1: {
        title: 'Frontend',
        skills: [
          { name: 'React / Next.js', level: 'Exp' },
          { name: 'Tailwind CSS', level: 'Adv' },
          { name: 'State Mgmt (Redux)', level: 'Exp' },
        ],
      },
      category2: {
        title: 'Observability',
        skills: [
          { name: 'Prometheus/Grafana', level: 'Adv' },
          { name: 'ELK Stack', level: 'Exp' },
          { name: 'Distributed Tracing', level: 'Mid' },
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
