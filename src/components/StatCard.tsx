import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Stat } from '../types'
import { useCountUp } from '../hooks/useCountUp'
import { SURFACE_CARD_CLASS } from '../constants'

export function StatCard({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const value = useCountUp(stat.value, inView)

  const display =
    stat.value >= 1000
      ? `${(value / 1000).toFixed(value === stat.value ? 1 : 0)}K`
      : value.toString()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.4 }}
      className={`${SURFACE_CARD_CLASS} px-6 py-5 backdrop-blur-sm`}
    >
      <p className="text-3xl font-semibold tracking-tight text-sky-600 dark:text-sky-300">
        {display}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300/80">
        {stat.label}
      </p>
    </motion.div>
  )
}
