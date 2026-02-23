import { motion } from 'framer-motion'
import type { TimelineEntry } from '../types'
import { SURFACE_CARD_CLASS } from '../constants'

export function TimelineItemComponent({
  side,
  title,
  subtitle,
  period,
  location,
  bullets,
}: TimelineEntry) {
  return (
    <div className="relative grid grid-cols-[3rem_1fr] gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-10">
      <div
        className={`col-start-1 hidden md:block ${side === 'left' ? 'space-y-2 text-right' : ''}`}
      />

      <div className="col-start-1 row-start-1 flex flex-col items-center pt-1 md:col-start-2 md:row-start-auto">
        <div className="absolute left-[0.6875rem] top-8 bottom-0 w-px bg-gradient-to-b from-sky-500/60 via-sky-400/40 to-transparent md:relative md:left-auto md:top-auto md:h-full md:w-px" />
        <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-sky-400/60 bg-slate-950 dark:bg-slate-950" />
      </div>

      <motion.div
        initial={{ opacity: 0, x: side === 'left' ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.4 }}
        className={`${SURFACE_CARD_CLASS} col-start-2 min-w-0 space-y-2 p-5 md:col-start-3`}
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
