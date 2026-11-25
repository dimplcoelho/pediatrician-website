import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'
import { useEffect } from 'react'
import { useLang } from '../context/LanguageContext'
import type { Video } from '../data/types'

export default function VideoModal({ video, onClose }: { video: Video | null; onClose: () => void }) {
  const { l } = useLang()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    if (video) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [video, onClose])

  const youtubeId = video?.youtubeId || 'JE_m6Nfvivg'

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          className="fixed inset-0 z-[70] grid place-items-center p-3 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-teal-dark/75 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Window */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={l(video.title)}
            initial={{ scale: 0.94, y: 24, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 16, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="relative z-10 w-full max-w-2xl sm:max-w-3xl overflow-hidden rounded-2xl sm:rounded-3xl bg-ivory shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close video player"
              className="absolute right-3 top-3 z-20 grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full bg-black/60 text-white backdrop-blur-md transition-transform hover:scale-110 active:scale-95 hover:bg-black/80"
            >
              <X size={18} />
            </button>

            {/* In-page Video Player Screen */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title={l(video.title)}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Video Details Bar */}
            <div className="p-4 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-powder/80 px-2.5 py-0.5 text-xs font-semibold text-teal">
                    {l(video.category)}
                  </span>
                  {video.duration && (
                    <span className="text-xs font-medium text-muted">
                      {video.duration}
                    </span>
                  )}
                </div>

                {/* Subtle optional link if user explicitly wants to open in YouTube tab */}
                <a
                  href={`https://www.youtube.com/watch?v=${youtubeId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-muted transition hover:text-teal"
                >
                  <span>Open in YouTube</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              <h3 className="mt-2.5 font-display text-lg font-semibold leading-snug text-teal sm:text-xl">
                {l(video.title)}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted">
                {l(video.description)}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
