import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type NavSection =
  | 'hero'
  | 'impact'
  | 'experience'
  | 'stack'
  | 'philosophy'
  | 'education'
  | 'leadership'
  | 'contact'

const sections: { id: NavSection; label: string }[] = [
  { id: 'hero', label: 'Home' },
  { id: 'impact', label: 'Impact' },
  { id: 'experience', label: 'Experience' },
  { id: 'stack', label: 'Tech Stack' },
  { id: 'philosophy', label: 'Architecture' },
  { id: 'education', label: 'Education' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
]

type Stat = {
  label: string
  value: number
  suffix?: string
}

const stats: Stat[] = [
  { label: 'Requests per second in production', value: 800, suffix: '+' },
  { label: 'Rows processed asynchronously', value: 100_000, suffix: '+' },
  { label: 'Sellers in financial workflows', value: 50_000, suffix: '+' },
  { label: 'API latency reduction', value: 70, suffix: '%' },
  { label: 'Developers mentored', value: 8, suffix: '+' },
]

const WHATSAPP_LINK =
  'https://wa.me/919264238020?text=Hi%20Neeraj%2C%20I%27d%20like%20to%20connect%20about%20an%20opportunity.'
const LINKEDIN_URL = 'https://www.linkedin.com/in/neeraj-kumar-/'
const MEDIUM_URL = 'https://medium.com/@neeraj_kumar_'

const surfaceCard =
  'rounded-2xl border border-slate-200 bg-white shadow-md shadow-slate-200/80 dark:border-slate-800/70 dark:bg-slate-900/80 dark:shadow-slate-900/40'

function useCountUp(target: number, isActive: boolean, durationMs = 1500) {
  const [value, setValue] = useState(0)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    if (!isActive) return

    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(1, elapsed / durationMs)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(target * eased))

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick)
      }
    }

    frameRef.current = requestAnimationFrame(tick)

    return () => {
      if (frameRef.current != null) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [target, isActive, durationMs])

  return value
}

function StatCard({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const value = useCountUp(stat.value, inView)

  const display =
    stat.value >= 1000
      ? `${(value / 1000).toFixed(value === stat.value ? 1 : 0)}K`
      : value.toString()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.4 }}
      className={`${surfaceCard} px-6 py-5 backdrop-blur-sm`}
    >
      <p className="text-3xl font-semibold tracking-tight text-sky-600 dark:text-sky-300">
        {display}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300/80">{stat.label}</p>
    </motion.div>
  )
}

function TimelineItem(props: {
  side: 'left' | 'right'
  title: string
  subtitle?: string
  period?: string
  location?: string
  bullets: string[]
}) {
  const { side, title, subtitle, period, location, bullets } = props

  return (
    <div className="relative grid grid-cols-[3rem_1fr] gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-10">
      {/* Col 1: empty on desktop (or left content), timeline dot+line on mobile */}
      <div
        className={`col-start-1 hidden md:block ${side === 'left' ? 'space-y-2 text-right' : ''}`}
      />

      {/* Col 1 mobile / Col 2 desktop: timeline stem + dot */}
      <div className="col-start-1 row-start-1 flex flex-col items-center pt-1 md:col-start-2 md:row-start-auto">
        <div className="absolute left-[0.6875rem] top-8 bottom-0 w-px bg-gradient-to-b from-sky-500/60 via-sky-400/40 to-transparent md:relative md:left-auto md:top-auto md:h-full md:w-px" />
        <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-sky-400/60 bg-slate-950 dark:bg-slate-950" />
      </div>

      {/* Col 2 mobile / Col 3 desktop: card (full width, no inner scroll) */}
      <motion.div
        initial={{ opacity: 0, x: side === 'left' ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.4 }}
        className={`${surfaceCard} col-start-2 min-w-0 space-y-2 p-5 md:col-start-3`}
      >
        <div className="text-sm font-medium text-sky-700 dark:text-sky-300">
          {subtitle}
          {subtitle && period && ' • '}
          {period}
        </div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
          {title}
        </h3>
        {location && (
          <p className="text-xs text-slate-500 dark:text-slate-400">{location}</p>
        )}
        <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300/90">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  const scrollTo = (id: NavSection) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
      {/* Gradient background & blobs */}
      <div className="pointer-events-none fixed inset-0 -z-20 bg-linear-to-b from-slate-50 via-slate-100 to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950" />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute -left-40 -top-24 h-80 w-80 blur-3xl opacity-70"
          viewBox="0 0 200 200"
        >
          <defs>
            <linearGradient id="blobGradient1" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          <path
            fill="url(#blobGradient1)"
            d="M33.3,-47.3C42.8,-39.5,48.7,-28.3,52.7,-16.2C56.7,-4.1,58.7,9,55.3,21.1C52,33.2,43.4,44.3,32.4,52.1C21.5,59.9,10.7,64.4,-1.4,66.4C-13.5,68.4,-27,67.9,-38.2,61.3C-49.4,54.7,-58.4,42.1,-63.1,28.3C-67.8,14.6,-68.3,-0.4,-63.6,-13.5C-59,-26.6,-49.3,-37.8,-38.1,-45.6C-26.9,-53.4,-13.4,-57.9,-0.4,-57.2C12.7,-56.4,25.3,-50.1,33.3,-47.3Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          className="absolute -right-32 top-40 h-88 w-88 blur-3xl opacity-60"
          viewBox="0 0 200 200"
        >
          <defs>
            <linearGradient id="blobGradient2" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>
          <path
            fill="url(#blobGradient2)"
            d="M39.8,-57C52.1,-51,63.3,-43,67.7,-32.1C72.1,-21.3,69.7,-7.7,65.5,5.6C61.3,18.9,55.3,31.8,45.7,41.6C36,51.3,22.8,57.8,8.2,60.9C-6.4,63.9,-21.4,63.4,-34.6,57.6C-47.8,51.9,-59.2,40.8,-66.1,27.3C-73,13.8,-75.4,-2.1,-70.8,-15.6C-66.2,-29.1,-54.7,-40.3,-42,-45.9C-29.4,-51.5,-14.7,-51.5,-0.5,-50.8C13.8,-50.1,27.5,-48.7,39.8,-57Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-30 border-b border-slate-200/60 bg-white/80 backdrop-blur-md dark:border-slate-800/60 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2"
          >
            <span className="h-7 w-7 rounded-xl bg-linear-to-br from-sky-400 to-indigo-500 text-xs font-semibold text-slate-950 shadow-md shadow-sky-500/40 flex items-center justify-center">
              N
            </span>
            <span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              Neeraj Kumar Mahawar
            </span>
          </button>

          <nav className="hidden items-center gap-5 md:flex">
            {sections.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => scrollTo(s.id)}
                className="text-xs font-medium text-slate-600 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-300 transition-colors"
              >
                {s.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-800 shadow-sm shadow-slate-300 hover:border-sky-400/80 hover:text-sky-900 dark:border-slate-700/80 dark:bg-slate-900/70 dark:text-slate-200 dark:shadow-slate-900/50"
          >
            <span
              className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-linear-to-br from-sky-400 to-indigo-500 text-[10px] text-slate-950"
              aria-hidden
            >
              {theme === 'dark' ? '☾' : '☼'}
            </span>
            <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pt-14 space-y-24 lg:space-y-28">
        {/* Hero */}
        <motion.section
          id="hero"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center"
        >
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300/80">
              Senior Software Developer · Backend · Distributed Systems
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-50">
              I build systems
              <span className="bg-linear-to-r from-sky-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                {' '}
                that scale.
              </span>
            </h1>
            <p className="max-w-xl text-sm sm:text-base text-slate-600 dark:text-slate-300/90">
              From{' '}
              <span className="font-semibold text-sky-300">50K+ sellers</span> to{' '}
              <span className="font-semibold text-sky-300">800+ RPS</span> production
              traffic — I design resilient, distributed systems that solve real-world
              business problems.
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] font-medium text-slate-700 dark:text-slate-200">
              {['NestJS', 'TypeScript', 'PostgreSQL', 'Kubernetes', 'Azure', 'React / Vue'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-2 text-sm text-slate-200/90">
              <div className="space-y-0.5">
                <p className="font-medium">Neeraj Kumar Mahawar</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  India · Senior Software Developer
                </p>
              </div>
              <div className="h-6 w-px bg-slate-300 dark:bg-slate-700/70" />
              <div className="space-y-0.5 text-xs">
                <a
                  href="mailto:neerajkmahawar2017@gmail.com"
                  className="text-sky-600 hover:text-sky-700 dark:text-sky-300 dark:hover:text-sky-200"
                >
                  neerajkmahawar2017@gmail.com
                </a>
                <p className="text-slate-500 dark:text-slate-400">
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-sky-600 hover:text-sky-700 dark:text-sky-300 dark:hover:text-sky-200"
                  >
                    LinkedIn
                  </a>
                  {' · '}
                  <a
                    href={MEDIUM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-sky-600 hover:text-sky-700 dark:text-sky-300 dark:hover:text-sky-200"
                  >
                    Medium
                  </a>
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-sky-400 via-cyan-400 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 hover:brightness-110"
              >
                Let&apos;s build something impactful
                <span aria-hidden>↗</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200 dark:border-slate-800/80 dark:bg-slate-900/80 dark:shadow-slate-900/70"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300/80">
                Systems in numbers
              </p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300/90">
                I architect and own high-throughput, multi-tenant systems with deep
                observability and automation built-in.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-slate-700 dark:text-slate-200/90">
                <div className="rounded-2xl bg-slate-50 p-3 ring-1 ring-sky-500/30 dark:bg-slate-900/90">
                  <p className="text-[11px] text-sky-300/90">Distributor Management</p>
                  <p className="mt-2 text-sm font-semibold">FieldAssist · DMS</p>
                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                    Large-scale financial workflows across 50K+ sellers.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-3 ring-1 ring-indigo-500/30 dark:bg-slate-900/90">
                  <p className="text-[11px] text-indigo-300/90">Hyperlocal B2C</p>
                  <p className="mt-2 text-sm font-semibold">Commerce & Discovery</p>
                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                    Spatial search, cart flows, and role-based dashboards.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="pointer-events-none absolute -bottom-10 left-10 hidden h-20 w-20 rounded-full bg-gradient-to-tr from-sky-500/60 to-transparent blur-2xl md:block"
            />
          </div>
        </motion.section>

        {/* Impact Snapshot */}
        <motion.section
          id="impact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl dark:text-slate-50">
                Impact snapshot
              </h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Animated counters when this section enters the viewport.
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </motion.section>

        {/* Professional Journey */}
        <motion.section
          id="experience"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          <div className="space-y-1">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl dark:text-slate-50">
              Professional journey
            </h2>
            <p className="text-sm text-slate-400">
              Timeline across DMS, hyperlocal commerce, and frontend engineering.
            </p>
          </div>

          <div className="space-y-10">
            <TimelineItem
              side="left"
              title="Senior Software Developer – FieldAssist"
              subtitle="Distributor Management System · Backend & Architecture"
              period="Jan 2022 – Feb 2026"
              location="Gurgaon · India"
              bullets={[
                'Designed and scaled RESTful microservices with NestJS + TypeScript, sustaining 800+ RPS in production.',
                'Built multi-tenant architecture on AKS with HPA auto-scaling and ingress isolation.',
                'Implemented observability with Grafana dashboards and actionable telemetry.',
                'Engineered bulk inventory & invoice engine (100K+ rows async) with queue-based fault-tolerance.',
                'Reduced API latency by ~70% via query optimization, materialized views, and caching strategies.',
                'Designed financial flows handling invoices, returns, claims, incentives for ~50K sellers.',
                'Integrated AI for stock allocation using LangChain + Azure OpenAI (GPT-4) and multi-agent workflows.',
              ]}
            />

            <TimelineItem
              side="right"
              title="Hyperlocal B2C Platform"
              subtitle="Architecture & Data Modeling"
              bullets={[
                'Designed relational + spatial schemas in PostgreSQL for hyperlocal commerce.',
                'Built discovery APIs with robust filtering, pagination, and performance in mind.',
                'Implemented cart, billing, and order flows with clear domain separation.',
                'Created seller dashboards with fine-grained role-based access control.',
              ]}
            />

            <TimelineItem
              side="left"
              title="Associate Software Developer – SharpQuest"
              subtitle="Frontend Engineering"
              period="Aug 2021 – Jan 2022"
              bullets={[
                'Built reusable React component libraries with clear contracts.',
                'Integrated REST APIs with defensive error handling and graceful fallbacks.',
                'Developed dynamic forms with custom validations and UX-focused design.',
                'Collaborated closely with backend teams on stable API contracts.',
              ]}
            />
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          id="stack"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <div className="space-y-1">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl dark:text-slate-50">
              Tech stack
            </h2>
            <p className="text-sm text-slate-400">
              The tools I use to design, build, and ship resilient systems.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className={`${surfaceCard} p-4`}>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                Languages
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                Node.js · TypeScript · JavaScript (ES6+) · C++ · SQL
              </p>
            </div>
            <div className={`${surfaceCard} p-4`}>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                Backend
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                NestJS · Microservices · RESTful APIs · Async workflows
              </p>
            </div>
            <div className={`${surfaceCard} p-4`}>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                Frontend
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                React · Vue · Nuxt · Redux · Vuex
              </p>
            </div>
            <div className={`${surfaceCard} p-4`}>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                DevOps & Databases
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                Docker · Kubernetes (AKS) · Azure · CI/CD · PostgreSQL · CosmosDB
              </p>
            </div>
          </div>
        </motion.section>

        {/* Architecture Philosophy */}
        <motion.section
          id="philosophy"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"
        >
          <div className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl dark:text-slate-50">
              Architecture philosophy
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300/90">
              I believe scalable systems are intentional — not accidental.
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300/90">
              <li>• Clear domain separation that mirrors the business.</li>
              <li>• Idempotent async workflows for safe retries and backpressure.</li>
              <li>• Observability-first deployments with usable signals, not just logs.</li>
              <li>• Secure-by-design APIs with RBAC, limits, and defense-in-depth.</li>
              <li>• Horizontal scalability as a default constraint, not an afterthought.</li>
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.4 }}
            className={`${surfaceCard} border-sky-300/60 bg-sky-50/80 p-5 text-xs dark:border-sky-500/30 dark:bg-linear-to-br dark:from-sky-500/15 dark:via-slate-900 dark:to-indigo-500/10 dark:shadow-sky-900/40`}
          >
            <p className="font-semibold text-sky-800 dark:text-sky-100">
              &ldquo;Ownership over comfort. Learning over title. Responsibility over
              hierarchy.&rdquo;
            </p>
            <p className="mt-3 text-slate-600 dark:text-slate-200/90">
              I&apos;m in the early growth phase of my career and I care deeply about
              building systems that matter — architectures that unlock product growth,
              not just keep things running.
            </p>
          </motion.div>
        </motion.section>

        {/* Education & Leadership */}
        <motion.section
          id="education"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-6 md:grid-cols-2"
        >
          <div className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl dark:text-slate-50">
              Education
            </h2>
            <div className={`${surfaceCard} p-5`}>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                B.Tech – Mechanical Engineering
              </p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                Indian Institute of Technology (IIT ISM), Dhanbad
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">2017 – 2021</p>
            </div>
          </div>

          <motion.div
            id="leadership"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-3"
          >
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl dark:text-slate-50">
              Leadership
            </h2>
            <div
              className={`${surfaceCard} p-5 text-sm text-slate-700 space-y-1.5 dark:text-slate-300/90`}
            >
              <p>• Led and mentored a team of 8 developers.</p>
              <p>• Conducted architecture reviews and technical design sessions.</p>
              <p>• Drove technical alignment across product and platform teams.</p>
            </div>
          </motion.div>
        </motion.section>

        {/* Contact */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl dark:text-slate-50">
              Let&apos;s build something impactful
            </h2>
            <p className="max-w-xl text-sm text-slate-600 dark:text-slate-300/90">
              I&apos;m excited about opportunities where I can design distributed systems,
              lead backend architecture, solve scale challenges, and contribute
              meaningfully to product growth.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-sky-400 via-cyan-400 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 hover:brightness-110"
            >
              Contact me
              <span aria-hidden>↗</span>
            </a>
            <p className="text-xs text-slate-400">
              Preferably roles focused on high-scale backend, architecture, and platform
              engineering.
            </p>
          </div>
        </motion.section>
      </main>
    </div>
  )
}

export default App
