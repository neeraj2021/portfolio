import { Section } from './Section'
import { SURFACE_CARD_CLASS } from '../constants'
import { TECH_STACK } from '../data/techStack'

export function TechStackSection() {
  return (
    <Section id="stack" className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl dark:text-slate-50">
          Tech stack
        </h2>
        <p className="text-sm text-slate-400">
          The tools I use to design, build, and ship resilient systems.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {TECH_STACK.map((cat) => (
          <div key={cat.title} className={`${SURFACE_CARD_CLASS} p-4`}>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              {cat.title}
            </h3>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
              {cat.items}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
