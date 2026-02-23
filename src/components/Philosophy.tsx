import { motion } from 'framer-motion'
import { Section } from './Section'
import { SURFACE_CARD_CLASS } from '../constants'
import { PHILOSOPHY_BULLETS } from '../data/content'

export function Philosophy() {
  return (
    <Section
      id="philosophy"
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
          {PHILOSOPHY_BULLETS.map((bullet) => (
            <li key={bullet}>• {bullet}</li>
          ))}
        </ul>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.4 }}
        className={`${SURFACE_CARD_CLASS} border-sky-300/60 bg-sky-50/80 p-5 text-xs dark:border-sky-500/30 dark:bg-linear-to-br dark:from-sky-500/15 dark:via-slate-900 dark:to-indigo-500/10 dark:shadow-sky-900/40`}
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
    </Section>
  )
}
