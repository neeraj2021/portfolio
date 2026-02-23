import { Section } from './Section'
import { WHATSAPP_LINK } from '../constants'

export function Contact() {
  return (
    <Section id="contact" className="space-y-6">
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
    </Section>
  )
}
