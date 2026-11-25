import { motion, useScroll, useSpring } from 'framer-motion'
import { AlertTriangle, ArrowLeft } from 'lucide-react'
import { useEffect, useMemo } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import Disclaimer from '../components/Disclaimer'
import DosDontsCard from '../components/DosDontsCard'
import GuideCard from '../components/GuideCard'
import GuideFigure from '../components/GuideFigure'
import Icon from '../components/Icon'
import PageTransition from '../components/PageTransition'
import { Reveal } from '../components/Reveal'
import { useContent } from '../context/ContentContext'
import { useLang } from '../context/LanguageContext'
import { categoryTint } from '../lib/categoryTint'
import { cn, formatDate, parseBody } from '../lib/utils'
import NotFound from './NotFound'

export default function GuideDetail() {
  const { slug } = useParams()
  const [params] = useSearchParams()
  const { lang, setLang, t, l } = useLang()
  const { publishedGuides, categories, videos } = useContent()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  // language-specific shared links: /guides/slug?lang=kn
  useEffect(() => {
    const q = params.get('lang')
    if (q === 'en' || q === 'kn') setLang(q)
  }, [params, setLang])

  const guide = publishedGuides.find((g) => g.slug === slug)
  const blocks = useMemo(() => (guide ? parseBody(guide[lang].body) : []), [guide, lang])
  if (!guide) return <NotFound />

  const c = guide[lang]
  const cat = categories.find((x) => x.id === guide.categoryId)
  const related = publishedGuides.filter((g) => g.categoryId === guide.categoryId && g.id !== guide.id).slice(0, 3)
  const fallbackRelated = related.length ? related : publishedGuides.filter((g) => g.id !== guide.id).slice(0, 3)
  const video = videos.find((v) => v.youtubeId && v.youtubeId === guide.videoId)
  const back = '/health'

  return (
    <PageTransition>
      <motion.div style={{ scaleX: progress }} className="fixed inset-x-0 top-0 z-[55] h-1 origin-left bg-sage-deep" />
      <article className="container-x pt-20 sm:pt-28">
        <div className="mx-auto max-w-3xl">
          <Link to={back} className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:underline underline-offset-4"><ArrowLeft size={16} />{t.common.back}</Link>
          {cat && (
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={cn('mt-4 flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold', categoryTint(cat.id).tile)}>
              <Icon name={cat.icon} size={14} />{l(cat.name)}
            </motion.span>
          )}
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mt-4 font-display text-[1.75rem] font-semibold leading-tight text-teal sm:text-5xl">{c.title}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-3 text-base leading-relaxed text-muted sm:mt-4 sm:text-lg">{c.summary}</motion.p>

          {guide.image && (
            <motion.img
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
              src={guide.image} alt="" className="mt-6 aspect-[16/9] w-full rounded-2xl bg-ivory-deep object-cover sm:mt-8 sm:aspect-[2/1] sm:rounded-3xl"
            />
          )}

          <div className="prose-guide mt-6 sm:mt-8">
            {blocks.map((b, i) => {
              if (b.type === 'h') return <Reveal key={i} y={14}><h2>{b.text}</h2></Reveal>
              if (b.type === 'p') return <Reveal key={i} y={14}><p>{b.text}</p></Reveal>
              if (b.type === 'img') return <Reveal key={i} y={14}><GuideFigure src={b.src} caption={b.caption} /></Reveal>
              if (b.type === 'dd') return <DosDontsCard key={i} dos={b.dos} donts={b.donts} />
              if (b.type === 'ul') return <Reveal key={i} y={14}><ul>{b.items.map((it, j) => <li key={j}>{it}</li>)}</ul></Reveal>
              return (
                <Reveal key={i} y={14}>
                  <div className="my-8 flex gap-4 rounded-2xl border border-coral/30 bg-[#fdf0eb] p-5">
                    <AlertTriangle className="shrink-0 text-coral" size={22} />
                    <p className="!my-0 !text-base font-medium !leading-7 text-ink">{b.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>

          {video && (
            <div className="mt-10 aspect-video overflow-hidden rounded-3xl shadow-soft">
              <iframe className="h-full w-full" src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0`} title={l(video.title)} allowFullScreen loading="lazy" />
            </div>
          )}

          <div className="mt-10 space-y-4">
            <Disclaimer />
            <p className="text-xs text-muted">{t.common.updated}: {formatDate(guide.updatedAt, lang)}</p>
          </div>
        </div>
      </article>

      {fallbackRelated.length > 0 && (
        <section className="container-x mt-12 sm:mt-20">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-teal">{t.common.related}</h2>
          <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {fallbackRelated.map((g, i) => <GuideCard key={g.id} guide={g} index={i} />)}
          </div>
        </section>
      )}
    </PageTransition>
  )
}
