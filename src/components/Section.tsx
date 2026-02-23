import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  children: ReactNode
  className?: string
  /** Use for hero (animate on mount). Default: whileInView. */
  animateOnMount?: boolean
}

export function Section({
  id,
  children,
  className = '',
  animateOnMount = false,
}: SectionProps) {
  if (animateOnMount) {
    return (
      <motion.section
        id={id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className={className}
      >
        {children}
      </motion.section>
    )
  }

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.section>
  )
}
