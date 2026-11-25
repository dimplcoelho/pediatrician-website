import { AnimatePresence, motion } from 'framer-motion'
import { Youtube } from 'lucide-react'
import { useState } from 'react'
import PageHero from '../components/PageHero'
import PageTransition from '../components/PageTransition'
import VideoCard from '../components/VideoCard'
import VideoModal from '../components/VideoModal'
import { useContent } from '../context/ContentContext'
import { useLang } from '../context/LanguageContext'
import type { Video } from '../data/types'
import { cn } from '../lib/utils'

export default function Videos() {
  const { t, l } = useLang()
  const { videos, settings } = useContent()
  const [playing, setPlaying] = useState<Video | null>(null)
  const [active, setActive] = useState('all')
  const cats = Array.from(new Map(videos.map((v) => [v.category.en, v.category])).values())
  const list = videos.filter((v) => active === 'all' || v.category.en === active)

  return (
    <PageTransition>
      <PageHero eyebrow={t.videos.eyebrow} title={t.videos.title} text={t.videos.text}>
        <motion.a initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} href={settings.youtubeChannel} target="_blank" rel="noreferrer" className="btn mt-5 bg-[#ff0033] sm:mt-8 text-white shadow-soft hover:-translate-y-0.5 hover:brightness-95">
          <Youtube size={18} />{t.common.visitChannel}
        </motion.a>
      </PageHero>
      <section className="container-x">
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0">
          {[{ en: 'all', kn: 'all' }, ...cats].map((c) => (
            <button key={c.en} onClick={() => setActive(c.en)} className={cn('relative shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition-colors', active === c.en ? 'text-ivory' : 'border border-teal/10 bg-white/70 text-teal hover:bg-white')}>
              {active === c.en && <motion.span layoutId="vid-cat" className="absolute inset-0 -z-10 rounded-full bg-teal" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
              {c.en === 'all' ? t.common.all : l(c)}
            </button>
          ))}
        </div>
        <motion.div layout className="mt-5 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((v, i) => (
              <motion.div key={v.id} layout initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <VideoCard video={v} index={i} onPlay={setPlaying} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
      <VideoModal video={playing} onClose={() => setPlaying(null)} />
    </PageTransition>
  )
}
