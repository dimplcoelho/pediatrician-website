import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import type { Video } from '../data/types'

const gradients = ['from-teal to-teal-light', 'from-sage-deep to-teal', 'from-powder-deep to-teal-light', 'from-teal-light to-sage-deep']

export default function VideoCard({ video, index = 0, onPlay }: { video: Video; index?: number; onPlay: (v: Video) => void }) {
  const { l } = useLang()

  return (
    <motion.button
      onClick={() => onPlay(video)}
      whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="group w-full overflow-hidden text-left rounded-2xl border border-teal/[0.08] bg-white shadow-soft transition-all duration-300 hover:shadow-lift sm:rounded-3xl"
    >
      <div className={`relative aspect-video overflow-hidden bg-gradient-to-br ${gradients[index % gradients.length]}`}>
        {(video.youtubeId || video.image) && (
          <img src={video.youtubeId ? `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg` : video.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
        )}
        {!video.youtubeId && !video.image && (
          <div aria-hidden className="absolute inset-0 opacity-30 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:18px_18px]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/60 via-transparent to-transparent" />
        <span className="absolute inset-0 m-auto grid h-14 w-14 place-items-center rounded-full bg-ivory/95 text-teal shadow-lift transition-transform duration-500 group-hover:scale-105">
          <Play size={24} className="relative ml-1" fill="currentColor" />
        </span>
        <span className="absolute bottom-3 right-3 rounded-md bg-black/60 px-2 py-0.5 text-xs font-semibold text-white">{video.duration}</span>
        <span className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-teal">{l(video.category)}</span>
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="font-display text-lg font-semibold leading-snug text-teal transition-colors group-hover:text-teal-light">{l(video.title)}</h3>
        <p className="mt-2.5 line-clamp-2 text-[15px] leading-relaxed text-muted">{l(video.description)}</p>
      </div>
    </motion.button>
  )
}
