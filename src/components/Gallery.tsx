import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { useLang } from '../context/LanguageContext'
import type { Localized } from '../data/types'
import { cn } from '../lib/utils'
import { Stagger, StaggerItem } from './Reveal'

export interface GalleryPhoto { src: string; caption: Localized }

/** How many tiles the grid shows; the last one carries a "+N" badge when there are more photos. */
const VISIBLE = 5

/**
 * Photo grid (one large tile + four small) with a full-screen viewer.
 * Phones: large tile on top, 2×2 below. Desktop: large tile on the left, 2×2 on the right.
 */
export default function Gallery({ photos }: { photos: GalleryPhoto[] }) {
  const { l, t } = useLang()
  const [open, setOpen] = useState<number | null>(null)
  const shown = photos.slice(0, VISIBLE)
  const extra = photos.length - shown.length

  const close = useCallback(() => setOpen(null), [])
  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + photos.length) % photos.length)), [photos.length])

  // keyboard: Esc closes, arrows move; page scroll is locked while the viewer is open
  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [open, close, step])

  if (!photos.length) return null
  const current = open !== null ? photos[open] : null

  return (
    <>
      <Stagger className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-6 sm:gap-3 lg:grid-cols-4 lg:grid-rows-2">
        {shown.map((p, i) => {
          const isLast = i === shown.length - 1 && extra > 0
          return (
            <StaggerItem key={p.src} className={cn(i === 0 ? 'col-span-2 lg:row-span-2' : '')}>
              <button
                onClick={() => setOpen(i)}
                aria-label={l(p.caption)}
                className={cn(
                  'group relative block w-full overflow-hidden rounded-2xl bg-ivory-deep shadow-soft sm:rounded-3xl',
                  i === 0 ? 'aspect-[16/10] lg:aspect-auto lg:h-full' : 'aspect-square',
                )}
              >
                <img src={p.src} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0 opacity-80 transition-opacity group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 text-left sm:p-4">
                  <span className={cn('font-semibold leading-snug text-white drop-shadow', i === 0 ? 'text-sm sm:text-base' : 'text-xs sm:text-sm')}>{l(p.caption)}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/90 text-teal opacity-0 transition-opacity group-hover:opacity-100"><Expand size={14} /></span>
                </span>
                {isLast && (
                  <span className="absolute inset-0 grid place-items-center bg-teal/55 font-display text-2xl font-semibold text-white backdrop-blur-[2px] sm:text-3xl">+{extra}</span>
                )}
              </button>
            </StaggerItem>
          )
        })}
      </Stagger>

      {/* full-screen viewer */}
      <AnimatePresence>
        {current && open !== null && (
          <motion.div
            role="dialog" aria-modal="true" aria-label={l(current.caption)}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex flex-col bg-ink/90 backdrop-blur-sm"
            onClick={close}
          >
            <div className="flex items-center justify-between p-3 text-white/85 sm:p-5">
              <span className="text-sm font-medium tabular-nums">{open + 1} / {photos.length}</span>
              <button onClick={close} aria-label={t.common.close} className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"><X size={20} /></button>
            </div>
            <div className="relative flex min-h-0 flex-1 items-center justify-center px-3 sm:px-20">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.src}
                  src={current.src} alt={l(current.caption)}
                  initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.25 }}
                  onClick={(e) => e.stopPropagation()}
                  className="max-h-full max-w-full rounded-2xl object-contain shadow-lift"
                />
              </AnimatePresence>
              {photos.length > 1 && (
                <>
                  <button onClick={(e) => { e.stopPropagation(); step(-1) }} aria-label="Previous photo" className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/30 sm:left-5"><ChevronLeft size={22} /></button>
                  <button onClick={(e) => { e.stopPropagation(); step(1) }} aria-label="Next photo" className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/30 sm:right-5"><ChevronRight size={22} /></button>
                </>
              )}
            </div>
            <p className="p-4 text-center text-sm font-medium text-white/90 sm:p-6 sm:text-base">{l(current.caption)}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
