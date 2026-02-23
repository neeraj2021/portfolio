import { useEffect, useState, useRef } from 'react'

export function useCountUp(
  target: number,
  isActive: boolean,
  durationMs = 1500
): number {
  const [value, setValue] = useState(0)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    if (!isActive) return

    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(1, elapsed / durationMs)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(target * eased))

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick)
      }
    }

    frameRef.current = requestAnimationFrame(tick)

    return () => {
      if (frameRef.current != null) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [target, isActive, durationMs])

  return value
}
