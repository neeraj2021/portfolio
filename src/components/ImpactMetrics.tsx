import React from 'react'

export const ImpactMetrics: React.FC = () => {
  const metrics = [
    { value: '800+', label: 'RPS Throughput' },
    { value: '100K+', label: 'Rows Processed' },
    { value: '~70%', label: 'Latency Reduction' },
    { value: '50K+', label: 'Sellers Supported' },
    { value: '2K', label: 'Orders / 3 Mins' },
    { value: '85%', label: 'Error Reduction' }
  ]

  return (
    <section className="border-y border-outline-variant bg-surface-container-low py-10">
      <div className="mx-auto max-w-320 px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {metrics.map((m, idx) => (
            <div key={idx} className="rounded-r-lg border-l-2 border-primary/40 bg-surface-container/30 p-4 transition-all hover:border-primary">
              <div className="text-2xl font-bold tracking-tight text-primary lg:text-3xl">{m.value}</div>
              <div className="mt-1 font-mono text-[11px] font-medium tracking-wider text-outline uppercase">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
