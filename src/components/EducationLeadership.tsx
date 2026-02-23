import { motion } from 'framer-motion'
import { Section } from './Section'
import { SURFACE_CARD_CLASS } from '../constants'
import { LEADERSHIP_BULLETS } from '../data/content'

export function EducationLeadership() {
  return (
    <Section id="education" className="grid gap-6 md:grid-cols-2">
      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl dark:text-slate-50">
          Education
        </h2>
        <div className={`${SURFACE_CARD_CLASS} p-5`}>
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
            B.Tech – Mechanical Engineering
          </p>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
            Indian Institute of Technology (IIT ISM), Dhanbad
          </p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            2017 – 2021
          </p>
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
          className={`${SURFACE_CARD_CLASS} space-y-1.5 p-5 text-sm text-slate-700 dark:text-slate-300/90`}
        >
          {LEADERSHIP_BULLETS.map((bullet) => (
            <p key={bullet}>• {bullet}</p>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
