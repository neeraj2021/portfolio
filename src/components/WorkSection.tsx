import React from 'react'
import { Link } from 'react-router-dom'

export const WorkSection: React.FC = () => {
  return (
    <section className="mx-auto max-w-320 px-6 py-20" id="work">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-on-surface md:text-4xl">Featured Engineering Work</h2>
          <p className="mt-1 text-base text-on-surface-variant md:text-lg">Systems I've built and scaled.</p>
        </div>
        <span className="font-mono text-sm text-outline">/PROJECTS_05</span>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Project 1: DMS Platform */}
        <div className="glass-card flex flex-col justify-between rounded-xl p-6 shadow-xl transition-all duration-300 hover:border-primary/50">
          <div>
            <div className="mb-4 flex items-start justify-between">
              <span className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">SCALABILITY</span>
              <span className="material-symbols-outlined text-outline">hub</span>
            </div>
            <h3 className="mb-2 text-2xl font-semibold text-on-surface">DMS Platform</h3>
            <p className="mb-4 text-sm leading-relaxed text-on-surface-variant">
              Centralized distribution management system handling high-volume inventory and transaction flows.
            </p>
            <div className="mb-6 flex flex-wrap gap-2">
              {['Node.js', 'PostgreSQL', 'Redis'].map((tag) => (
                <span key={tag} className="rounded bg-outline-variant/30 px-2.5 py-1 font-mono text-[11px] text-outline uppercase">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mb-6 grid grid-cols-2 gap-3">
              <div className="rounded border border-outline-variant/40 bg-background/60 p-3">
                <span className="block text-lg font-bold text-primary">800+ RPS</span>
                <span className="font-mono text-[10px] text-outline uppercase">Peak Load</span>
              </div>
              <div className="rounded border border-outline-variant/40 bg-background/60 p-3">
                <span className="block text-lg font-bold text-primary">70% ↓</span>
                <span className="font-mono text-[10px] text-outline uppercase">Latency</span>
              </div>
            </div>
          </div>
          <Link 
            to="/case-study/dms"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-max cursor-pointer items-center gap-1.5 font-mono text-sm font-medium text-primary transition-all hover:gap-3 hover:text-primary-fixed"
          >
            VIEW CASE STUDY <span className="material-symbols-outlined text-base">open_in_new</span>
          </Link>
        </div>

        {/* Project 2: AI Stock Agent */}
        <div className="glass-card flex flex-col justify-between rounded-xl p-6 shadow-xl transition-all duration-300 hover:border-primary/50">
          <div>
            <div className="mb-4 flex items-start justify-between">
              <span className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">AGENTIC AI</span>
              <span className="material-symbols-outlined text-outline">finance</span>
            </div>
            <h3 className="mb-2 text-2xl font-semibold text-on-surface">AI Stock Agent</h3>
            <p className="mb-4 text-sm leading-relaxed text-on-surface-variant">
              Multi-agent system using LangGraph for real-time market analysis and sentiment-based stock prediction.
            </p>
            <div className="mb-6 flex flex-wrap gap-2">
              {['Python', 'LangChain', 'FastAPI'].map((tag) => (
                <span key={tag} className="rounded bg-outline-variant/30 px-2.5 py-1 font-mono text-[11px] text-outline uppercase">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mb-6 grid grid-cols-2 gap-3">
              <div className="rounded border border-outline-variant/40 bg-background/60 p-3">
                <span className="block text-lg font-bold text-primary">92%</span>
                <span className="font-mono text-[10px] text-outline uppercase">Accuracy</span>
              </div>
              <div className="rounded border border-outline-variant/40 bg-background/60 p-3">
                <span className="block text-lg font-bold text-primary">&lt;2s</span>
                <span className="font-mono text-[10px] text-outline uppercase">Inference</span>
              </div>
            </div>
          </div>
          <Link 
            to="/case-study/dms"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-max cursor-pointer items-center gap-1.5 font-mono text-sm font-medium text-primary transition-all hover:gap-3 hover:text-primary-fixed"
          >
            VIEW CASE STUDY <span className="material-symbols-outlined text-base">open_in_new</span>
          </Link>
        </div>

        {/* Project 3: K8s Observability (Span 2) */}
        <div className="glass-card flex flex-col justify-between rounded-xl p-6 shadow-xl transition-all duration-300 hover:border-primary/50 md:col-span-2">
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="md:w-1/2">
              <div className="mb-4 flex items-start justify-between">
                <span className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">INFRASTRUCTURE</span>
                <span className="material-symbols-outlined text-outline">monitoring</span>
              </div>
              <h3 className="mb-2 text-2xl font-semibold text-on-surface">K8s Observability Dashboard</h3>
              <p className="mb-4 text-sm leading-relaxed text-on-surface-variant">
                Full-stack observability stack integrating Prometheus, Grafana, and custom Go-based metrics exporters for cluster health.
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {['Go', 'Prometheus', 'Grafana', 'K8s'].map((tag) => (
                  <span key={tag} className="rounded bg-outline-variant/30 px-2.5 py-1 font-mono text-[11px] text-outline uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 self-center md:w-1/2">
              <div className="rounded border border-outline-variant/40 bg-background/60 p-4 text-center">
                <span className="block text-2xl font-bold text-primary">99.9%</span>
                <span className="font-mono text-[10px] text-outline uppercase">Uptime Tracked</span>
              </div>
              <div className="rounded border border-outline-variant/40 bg-background/60 p-4 text-center">
                <span className="block text-2xl font-bold text-primary">50ms</span>
                <span className="font-mono text-[10px] text-outline uppercase">Metric Latency</span>
              </div>
            </div>
          </div>
          <div className="mt-4 border-t border-outline-variant/40 pt-4">
            <Link 
              to="/case-study/dms"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-max cursor-pointer items-center gap-1.5 font-mono text-sm font-medium text-primary transition-all hover:gap-3 hover:text-primary-fixed"
            >
              VIEW CASE STUDY <span className="material-symbols-outlined text-base">open_in_new</span>
            </Link>
          </div>
        </div>

        {/* Project 4: Sprint Analysis Agent */}
        <div className="glass-card flex flex-col justify-between rounded-xl p-6 shadow-xl transition-all duration-300 hover:border-primary/50">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-on-surface">Sprint Analysis Agent</h3>
            <p className="mb-4 text-sm leading-relaxed text-on-surface-variant">
              Automated backlog grooming and sprint capacity forecasting using historical Jira data.
            </p>
            <div className="rounded-r border-l-2 border-primary bg-background/40 p-3">
              <span className="block font-mono text-xs font-semibold text-primary">40% Efficiency Gain</span>
            </div>
          </div>
          <Link 
            to="/case-study/dms"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex w-max cursor-pointer items-center gap-1 font-mono text-sm font-medium text-primary transition-all hover:gap-2"
          >
            VIEW DETAILS <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>

        {/* Project 5: RAG Assistant */}
        <div className="glass-card flex flex-col justify-between rounded-xl p-6 shadow-xl transition-all duration-300 hover:border-primary/50">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-on-surface">RAG Assistant</h3>
            <p className="mb-4 text-sm leading-relaxed text-on-surface-variant">
              Enterprise knowledge base with vector embeddings for semantic search over technical docs.
            </p>
            <div className="rounded-r border-l-2 border-primary bg-background/40 p-3">
              <span className="block font-mono text-xs font-semibold text-primary">85% Query Accuracy</span>
            </div>
          </div>
          <Link 
            to="/case-study/dms"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex w-max cursor-pointer items-center gap-1 font-mono text-sm font-medium text-primary transition-all hover:gap-2"
          >
            VIEW DETAILS <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
