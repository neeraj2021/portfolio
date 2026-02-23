import { motion } from 'framer-motion'
import type { NavSection } from '../types'
import { LINKEDIN_URL, MEDIUM_URL } from '../constants'
import { HERO_TAGS, HERO_HIGHLIGHTS } from '../data/hero'
import { Section } from './Section'

type HeroProps = {
  onScrollTo: (id: NavSection) => void
}

export function Hero({ onScrollTo }: HeroProps) {
  return (
    <Section id="hero" animateOnMount className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
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
        <p className="max-w-xl text-sm text-slate-600 sm:text-base dark:text-slate-300/90">
          From{' '}
          <span className="font-semibold text-sky-300">50K+ sellers</span> to{' '}
          <span className="font-semibold text-sky-300">800+ RPS</span> production
          traffic — I design resilient, distributed systems that solve real-world
          business problems.
        </p>
        <div className="flex flex-wrap gap-2 text-[11px] font-medium text-slate-700 dark:text-slate-200">
          {HERO_TAGS.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1"
            >
              {tag}
            </span>
          ))}
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
            onClick={() => onScrollTo('contact')}
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
            {HERO_HIGHLIGHTS.map((h) => (
              <div
                key={h.title}
                className={`rounded-2xl bg-slate-50 p-3 ring-1 dark:bg-slate-900/90 ${h.ringClass}`}
              >
                <p className={`text-[11px] ${h.labelClass}`}>{h.label}</p>
                <p className="mt-2 text-sm font-semibold">{h.title}</p>
                <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                  {h.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="pointer-events-none absolute -bottom-10 left-10 hidden h-20 w-20 rounded-full bg-linear-to-tr from-sky-500/60 to-transparent blur-2xl md:block"
        />
      </div>
    </Section>
  )
}
