import React from 'react'

export const ContactSection: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden bg-surface-container-high py-20 text-on-surface"
      id="contact"
    >
      <div className="relative z-10 mx-auto max-w-container-max px-6 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
          Let's Build Something Impactful
        </h2>
        <p className="mx-auto mb-12 text-base leading-relaxed text-on-surface-variant md:text-lg">
          Currently open to collaborations on distributed systems architecture, AI-native product
          development, and consulting for scalable backends.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          <a
            href="mailto:neeraj.mahawar@example.com"
            className="group flex flex-col items-center gap-2 transition-transform hover:scale-105"
          >
            <span className="material-symbols-outlined rounded-full bg-primary p-4 text-2xl text-on-primary transition-colors group-hover:bg-primary-fixed">
              alternate_email
            </span>
            <span className="font-mono text-sm text-on-surface">Email</span>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 transition-transform hover:scale-105"
          >
            <span className="material-symbols-outlined rounded-full bg-primary p-4 text-2xl text-on-primary transition-colors group-hover:bg-primary-fixed">
              code
            </span>
            <span className="font-mono text-sm text-on-surface">GitHub</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 transition-transform hover:scale-105"
          >
            <span className="material-symbols-outlined rounded-full bg-primary p-4 text-2xl text-on-primary transition-colors group-hover:bg-primary-fixed">
              share
            </span>
            <span className="font-mono text-sm text-on-surface">LinkedIn</span>
          </a>

          <a
            href="https://medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 transition-transform hover:scale-105"
          >
            <span className="material-symbols-outlined rounded-full bg-primary p-4 text-2xl text-on-primary transition-colors group-hover:bg-primary-fixed">
              article
            </span>
            <span className="font-mono text-sm text-on-surface">Medium</span>
          </a>
        </div>
      </div>
    </section>
  )
}
