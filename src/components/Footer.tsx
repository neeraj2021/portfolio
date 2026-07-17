import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-outline-variant bg-surface-container px-6 py-10">
      <div className="mx-auto flex max-w-320 flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-mono text-sm font-semibold text-on-surface">Neeraj Kumar Mahawar</span>
          <span className="mt-1 text-xs text-on-surface-variant">© 2026 Neeraj Kumar Mahawar. Built for performance.</span>
        </div>
        <div className="flex gap-6 text-sm">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant transition-colors hover:text-primary">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant transition-colors hover:text-primary">
            GitHub
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant transition-colors hover:text-primary">
            Twitter
          </a>
          <a href="mailto:neeraj.mahawar@example.com" className="text-on-surface-variant transition-colors hover:text-primary">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
