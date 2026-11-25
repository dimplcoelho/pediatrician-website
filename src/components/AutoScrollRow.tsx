import { useEffect, useRef, type ReactNode } from 'react'
import { cn } from '../lib/utils'

/**
 * A horizontal row that drifts sideways on its own and loops forever.
 * It stops while the pointer is over it (or a finger / keyboard focus is on it), and can still be
 * swiped or scrolled by hand. The items are drawn three times so the loop has no visible gap;
 * the extra copies are hidden from screen readers and keyboard focus.
 * Stays still for visitors who ask their system for reduced motion.
 */
export default function AutoScrollRow({
  children,
  speed = 28,
  className,
  gapClass = 'gap-2.5 pr-2.5',
}: {
  children: ReactNode
  /** pixels per second */
  speed?: number
  className?: string
  /** gap between items; the right padding must match it so the loop seam is even */
  gapClass?: string
}) {
  const rowRef = useRef<HTMLDivElement>(null)
  const setRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const row = rowRef.current
    const set = setRef.current
    if (!row || !set || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let paused = false
    let pos = row.scrollLeft
    let last = performance.now()
    let raf = 0
    let resumeTimer = 0

    const wrap = () => {
      const w = set.offsetWidth
      if (w && pos >= w) pos -= w
    }
    const tick = (now: number) => {
      const dt = Math.min(now - last, 50) // no jump after the tab was in the background
      last = now
      if (!paused) {
        pos += (speed * dt) / 1000
        wrap()
        row.scrollLeft = pos
      }
      raf = requestAnimationFrame(tick)
    }
    const pause = () => {
      paused = true
      window.clearTimeout(resumeTimer)
    }
    const resume = (delay = 0) => {
      window.clearTimeout(resumeTimer)
      resumeTimer = window.setTimeout(() => {
        pos = row.scrollLeft // continue from wherever the visitor scrolled to
        wrap()
        row.scrollLeft = pos
        paused = false
      }, delay)
    }

    const onLeave = () => resume()
    const onTouchEnd = () => resume(2500) // give a phone user time to tap after swiping
    const onFocusOut = () => resume()

    row.addEventListener('mouseenter', pause)
    row.addEventListener('mouseleave', onLeave)
    row.addEventListener('touchstart', pause, { passive: true })
    row.addEventListener('touchend', onTouchEnd)
    row.addEventListener('focusin', pause)
    row.addEventListener('focusout', onFocusOut)
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.clearTimeout(resumeTimer)
      row.removeEventListener('mouseenter', pause)
      row.removeEventListener('mouseleave', onLeave)
      row.removeEventListener('touchstart', pause)
      row.removeEventListener('touchend', onTouchEnd)
      row.removeEventListener('focusin', pause)
      row.removeEventListener('focusout', onFocusOut)
    }
  }, [speed])

  return (
    <div ref={rowRef} className={cn('flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden', className)}>
      <div ref={setRef} className={cn('flex shrink-0', gapClass)}>{children}</div>
      <div aria-hidden inert className={cn('flex shrink-0', gapClass)}>{children}</div>
      <div aria-hidden inert className={cn('flex shrink-0', gapClass)}>{children}</div>
    </div>
  )
}
