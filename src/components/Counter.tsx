import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

/** Animates the numeric part of a value like "20,000+" or 15 when scrolled into view. */
export default function Counter({ value }: { value: string | number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const str = String(value)
  const num = parseInt(str.replace(/[^\d]/g, ''), 10)
  const suffix = str.replace(/[\d,]/g, '')
  const [display, setDisplay] = useState(isNaN(num) ? str : '0' + suffix)

  useEffect(() => {
    if (!inView || isNaN(num)) return
    const controls = animate(0, num, { duration: 1.8, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setDisplay(Math.round(v).toLocaleString('en-IN') + suffix) })
    return () => controls.stop()
  }, [inView, num, suffix])

  return <span ref={ref}>{display}</span>
}
