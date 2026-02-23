import { Section } from './Section'
import { StatCard } from './StatCard'
import { STATS } from '../data/stats'

export function ImpactSnapshot() {
  return (
    <Section id="impact" className="space-y-6">
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
        {STATS.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </div>
    </Section>
  )
}
