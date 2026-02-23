import type { TimelineEntry } from '../types'

export const EXPERIENCE: TimelineEntry[] = [
  {
    side: 'left',
    title: 'Senior Software Developer – FieldAssist',
    subtitle: 'Distributor Management System · Backend & Architecture',
    period: 'Jan 2022 – Feb 2026',
    location: 'Gurgaon · India',
    bullets: [
      'Designed and scaled RESTful microservices with NestJS + TypeScript, sustaining 800+ RPS in production.',
      'Built multi-tenant architecture on AKS with HPA auto-scaling and ingress isolation.',
      'Implemented observability with Grafana dashboards and actionable telemetry.',
      'Engineered bulk inventory & invoice engine (100K+ rows async) with queue-based fault-tolerance.',
      'Reduced API latency by ~70% via query optimization, materialized views, and caching strategies.',
      'Designed financial flows handling invoices, returns, claims, incentives for ~50K sellers.',
      'Integrated AI for stock allocation using LangChain + Azure OpenAI (GPT-4) and multi-agent workflows.',
    ],
  },
  {
    side: 'right',
    title: 'Hyperlocal B2C Platform',
    subtitle: 'Architecture & Data Modeling',
    bullets: [
      'Designed relational + spatial schemas in PostgreSQL for hyperlocal commerce.',
      'Built discovery APIs with robust filtering, pagination, and performance in mind.',
      'Implemented cart, billing, and order flows with clear domain separation.',
      'Created seller dashboards with fine-grained role-based access control.',
    ],
  },
  {
    side: 'left',
    title: 'Associate Software Developer – SharpQuest',
    subtitle: 'Frontend Engineering',
    period: 'Aug 2021 – Jan 2022',
    bullets: [
      'Built reusable React component libraries with clear contracts.',
      'Integrated REST APIs with defensive error handling and graceful fallbacks.',
      'Developed dynamic forms with custom validations and UX-focused design.',
      'Collaborated closely with backend teams on stable API contracts.',
    ],
  },
]
