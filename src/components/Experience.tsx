import { Section } from './Section'
import { TimelineItemComponent } from './TimelineItem'
import { EXPERIENCE } from '../data/experience'

export function Experience() {
  return (
    <Section id="experience" className="space-y-8">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl dark:text-slate-50">
          Professional journey
        </h2>
        <p className="text-sm text-slate-400">
          Timeline across DMS, hyperlocal commerce, and frontend engineering.
        </p>
      </div>

      <div className="space-y-10">
        {EXPERIENCE.map((entry) => (
          <TimelineItemComponent key={entry.title} {...entry} />
        ))}
      </div>
    </Section>
  )
}
