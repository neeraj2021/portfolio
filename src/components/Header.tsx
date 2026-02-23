import type { NavSection } from '../types'
import type { Theme } from '../types'
import { NAV_SECTIONS } from '../constants'

type HeaderProps = {
  theme: Theme
  onThemeToggle: () => void
  onNavClick: (id: NavSection) => void
}

export function Header({ theme, onThemeToggle, onNavClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/60 bg-white/80 backdrop-blur-md dark:border-slate-800/60 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => onNavClick('hero')}
          className="flex items-center gap-2"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-linear-to-br from-sky-400 to-indigo-500 text-xs font-semibold text-slate-950 shadow-md shadow-sky-500/40">
            N
          </span>
          <span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            Neeraj Kumar Mahawar
          </span>
        </button>

        <nav className="hidden items-center gap-5 md:flex">
          {NAV_SECTIONS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => onNavClick(s.id)}
              className="text-xs font-medium text-slate-600 transition-colors hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-300"
            >
              {s.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={onThemeToggle}
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
  )
}
