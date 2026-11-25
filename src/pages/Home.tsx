import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, /* BookOpen, */ ChevronLeft, ChevronRight, Clock, GraduationCap, MapPin, MessageCircle, Phone } from 'lucide-react'
import { useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
// import DosDontsCard from '../components/DosDontsCard'
import Icon from '../components/Icon'
import PageTransition from '../components/PageTransition'
import { Reveal, Stagger, StaggerItem } from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import VideoCard from '../components/VideoCard'
import VideoModal from '../components/VideoModal'
import { useContent } from '../context/ContentContext'
import { useLang } from '../context/LanguageContext'
// import { dosDonts } from '../data/dosDonts'
import type { Video } from '../data/types'
import { categoryTint } from '../lib/categoryTint'
import { cn, whatsappChat } from '../lib/utils'

const ease = [0.22, 1, 0.36, 1] as const

/** Horizontal snap carousel on phones, grid from `sm` up. */
function SwipeRow({ children }: { children: ReactNode }) {
  return (
    <Stagger className="-mx-4 mt-4 flex scroll-px-4 snap-x snap-mandatory gap-3.5 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
      {children}
    </Stagger>
  )
}
const swipeItem = 'w-[74%] shrink-0 snap-start sm:w-auto'

export default function Home() {
  const { t, l, lang } = useLang()
  const { doctor, settings, publishedGuides, categories, videos } = useContent()
  const [playing, setPlaying] = useState<Video | null>(null)
  const topicsScrollRef = useRef<HTMLDivElement>(null)
  const featuredVideos = videos.filter((v) => v.featured).slice(0, 3)

  const scrollTopics = (dir: -1 | 1) => {
    topicsScrollRef.current?.scrollBy({ left: dir * 320, behavior: 'smooth' })
  }

  /*
  const ddTopics = [
    'fever-in-children',
    'starting-solid-foods',
    'healthy-sleep-habits',
    'vaccination-schedule',
    'loose-motions-and-dehydration',
    'eczema-in-babies',
    'picky-eating',
    'developmental-milestones',
    'hand-washing-and-hygiene',
  ]
    .map((slug) => publishedGuides.find((g) => g.slug === slug))
    .filter((g): g is NonNullable<typeof g> => !!g && !!dosDonts[g.slug])
  const [ddActive, setDdActive] = useState(0)
  const ddGuide = ddTopics[ddActive]
  */

  const topics = categories.filter((c) => c.id !== 'illnesses' && publishedGuides.some((g) => g.categoryId === c.id))
  const [topicIdx, setTopicIdx] = useState(0)
  const topic = topics[topicIdx] ?? topics[0]

  return (
    <PageTransition>
      {/* HERO: split layout, text left, arched doctor card right */}
      <section className="relative overflow-hidden">
        {/* soft colour wash behind the hero */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-powder/40 blur-3xl" />
          <div className="absolute -right-32 top-20 h-[24rem] w-[24rem] rounded-full bg-sage/25 blur-3xl" />
        </div>

        <div className="container-x grid items-center gap-6 pt-20 pb-2 sm:pt-24 sm:pb-3 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:pt-22 lg:pb-3">
          <div className="text-center lg:text-left">
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="eyebrow">
              {t.home.eyebrow}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08, ease }}
              className="mt-3.5 font-display text-[1.85rem] font-bold leading-[1.1] tracking-tight text-teal sm:text-4xl lg:text-[3rem]"
            >
              {t.home.heroTitleA} <span className="text-accent">{t.home.heroTitleB}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.16 }} className="mx-auto mt-2.5 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base lg:mx-0">
              {l(doctor.intro)}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.24 }} className="mt-4 flex flex-wrap items-center justify-center gap-2.5 sm:mt-5 sm:gap-3 lg:justify-start">
              {/* <Link to="/health" className="btn-primary flex-1 sm:flex-none !px-3 !py-2.5 text-xs sm:!px-6 sm:!py-3 sm:text-sm"><BookOpen size={15} className="shrink-0 sm:h-4 sm:w-4" /><span className="truncate">{t.home.ctaGuides}</span></Link> */}
              <Link to="/contact" className="btn-primary !px-5 !py-2.5 text-xs sm:!px-6 sm:!py-3 sm:text-sm"><MapPin size={15} className="shrink-0 sm:h-4 sm:w-4" /><span>{t.home.ctaContact}</span></Link>
              <a
                href={whatsappChat(settings.whatsapp)} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white py-2 pl-2 pr-3.5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift sm:py-2.5 sm:pl-2.5 sm:pr-4"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[#25D366]/15 text-[#1da851] sm:h-7 sm:w-7"><MessageCircle size={14} /></span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted sm:text-[11px]">{t.common.whatsapp}</span>
                <span className="font-display text-xs font-semibold text-teal sm:text-sm">{settings.phone}</span>
              </a>
            </motion.div>

            {/* compact doctor card: phones & tablets (desktop shows the arched card) */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }} className="mx-auto mt-4 max-w-md lg:hidden">
              <Link to="/about" className="flex items-center gap-3 rounded-2xl bg-white p-2.5 pr-3 text-left shadow-soft transition active:scale-[0.99]">
                <span className="block h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-gradient-to-b from-powder to-sage/50">
                  <img src="/images/doctor-photo.jpg" alt={l(doctor.name)} fetchPriority="high" className="h-full w-full origin-[50%_14%] scale-[1.5] object-cover object-top" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-2">
                    <span className="truncate font-display text-[15px] font-semibold leading-tight text-teal">{l(doctor.name)}</span>
                    <span className="shrink-0 rounded-full bg-powder/70 px-2 py-0.5 text-[11px] font-bold text-teal">{doctor.yearsExperience}+ yrs</span>
                  </span>
                  <span className="mt-1 flex items-end justify-between gap-2">
                    <span className="text-[12.5px] leading-snug text-sage-deep">{l(doctor.title)}</span>
                    <ChevronRight size={18} className="shrink-0 text-teal/50" />
                  </span>
                </span>
              </Link>
            </motion.div>
          </div>

          {/* arched doctor card */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.16, ease }} className="relative mx-auto hidden w-full max-w-[20rem] lg:mr-0 lg:block">
            {/* Ambient soft halo backdrop */}
            <div aria-hidden className="absolute -inset-2.5 rounded-t-full rounded-b-[2.75rem] bg-gradient-to-b from-powder/60 via-teal/[0.04] to-sage/30 blur-sm" />

            {/* Main framed architectural portrait card */}
            <div className="relative rounded-t-full rounded-b-[2.5rem] border border-teal/15 bg-white p-2.5 shadow-lift">
              <div className="overflow-hidden rounded-t-full rounded-b-[2rem] bg-gradient-to-b from-powder/80 to-sage/40">
                <img
                  src="/images/doctor-photo.jpg"
                  alt={l(doctor.name)}
                  fetchPriority="high"
                  className="aspect-square w-full object-cover object-[center_12%]"
                />
              </div>

              {/* Doctor info card seamlessly docked inside the frame */}
              <div className="relative -mt-10 mx-1 rounded-2xl border border-teal/[0.08] bg-white p-4 pt-5 shadow-soft sm:p-5 sm:pt-6">
                {/* years badge docked neatly on the card edge */}
                <div className="absolute -top-3.5 right-4 flex items-center gap-1.5 rounded-full bg-teal px-3 py-1 text-ivory shadow-soft">
                  <span className="font-display text-sm font-bold leading-none">{doctor.yearsExperience}+</span>
                  <span className="text-[10px] font-medium leading-tight text-ivory/85">{t.home.years}</span>
                </div>
                <p className="font-display text-lg font-semibold leading-snug text-teal">{l(doctor.name)}</p>
                <p className="mt-0.5 text-[13px] font-medium leading-snug text-sage-deep">{l(doctor.title)}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {doctor.qualifications.map((q) => (
                    <span key={q.degree} className="inline-flex items-center gap-1 rounded-full bg-ivory-deep px-2.5 py-0.5 text-[11px] font-semibold text-teal">
                      <GraduationCap size={12} />{q.degree}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LITTLE WORRIES, CLEAR ANSWERS: topic cards + detail panel (side by side on desktop, stacked on phones) */}
      <section className="container-x section-y !pt-4 sm:!pt-6 !pb-2">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading title={t.home.topicsTitle} text={t.home.topicsSubtitle} />
          <div className="hidden shrink-0 items-center gap-1.5 sm:flex">
            <button
              type="button"
              onClick={() => scrollTopics(-1)}
              aria-label="Scroll topics left"
              className="grid h-9 w-9 place-items-center rounded-full border border-teal/15 bg-white text-teal shadow-soft transition hover:border-teal/30 hover:bg-powder/30 active:scale-95"
            >
              <ChevronLeft size={17} />
            </button>
            <button
              type="button"
              onClick={() => scrollTopics(1)}
              aria-label="Scroll topics right"
              className="grid h-9 w-9 place-items-center rounded-full border border-teal/15 bg-white text-teal shadow-soft transition hover:border-teal/30 hover:bg-powder/30 active:scale-95"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>
        <div className="mt-4 grid gap-3 sm:mt-6 sm:gap-4">
          {/* topic cards: one swipeable row on every screen size */}
          <div ref={topicsScrollRef} role="tablist" aria-label={t.home.topicsTitle} className="-mx-4 flex snap-x gap-2.5 overflow-x-auto px-4 pb-1 pt-1 [scrollbar-width:none] sm:mx-0 sm:gap-3 sm:px-0 [&::-webkit-scrollbar]:hidden">
            {topics.map((c, i) => {
              const tint = categoryTint(c.id)
              const active = i === topicIdx
              const count = publishedGuides.filter((g) => g.categoryId === c.id).length
              return (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={active}
                  aria-controls="topic-panel"
                  onClick={() => setTopicIdx(i)}
                  className={cn(
                    'group relative flex w-[9.5rem] shrink-0 snap-start flex-col items-start gap-2 rounded-2xl border p-3 text-left transition-all duration-200 sm:w-[10.5rem] sm:p-3.5',
                    active ? 'border-teal/25 bg-white shadow-lift' : 'border-teal/[0.08] bg-white/70 hover:-translate-y-0.5 hover:bg-white hover:shadow-soft',
                  )}
                >
                  {active && <motion.span layoutId="topic-bar" className="absolute inset-x-4 bottom-0 h-1 rounded-t-full bg-teal" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
                  <span className={cn('grid h-9 w-9 shrink-0 place-items-center rounded-xl transition-transform duration-200 group-hover:-rotate-6', tint.tile)}>
                    <Icon name={c.icon} size={18} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[13px] font-semibold leading-snug text-teal sm:text-sm">{l(c.name)}</span>
                    <span className="mt-0.5 block text-[11px] font-medium text-muted">{count} {count === 1 ? t.common.guide : t.common.guides}</span>
                  </span>
                </button>
              )
            })}
          </div>

          {/* detail panel for the selected topic */}
          <div id="topic-panel" role="tabpanel" className="overflow-hidden rounded-2xl border border-teal/[0.08] bg-white shadow-soft sm:rounded-3xl">
            <AnimatePresence mode="wait">
              {topic && (() => {
                const tint = categoryTint(topic.id)
                const list = publishedGuides.filter((g) => g.categoryId === topic.id)
                const href = `/health?category=${topic.id}`
                return (
                  <motion.div key={topic.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.3, ease }} className="lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
                    <div className="relative h-36 overflow-hidden sm:h-48 lg:h-full lg:min-h-[18rem]">
                      <img src={topic.image} alt="" loading="lazy" className="h-full w-full object-cover lg:absolute lg:inset-0" />
                    </div>
                    <div className="p-4 sm:p-6 lg:p-8">
                      <h3 className="font-display text-xl font-semibold leading-snug text-teal sm:text-2xl">{l(topic.name)}</h3>
                      {topic.description?.[lang] && <p className="mt-1.5 text-sm leading-relaxed text-muted sm:text-[15px]">{topic.description[lang]}</p>}

                      <ul className="mt-4 divide-y divide-teal/[0.07] rounded-xl border border-teal/[0.08]">
                        {list.slice(0, 3).map((g) => (
                          <li key={g.id}>
                            <Link to={`/guides/${g.slug}`} className="group flex items-center gap-3 px-3.5 py-3 transition-colors hover:bg-ivory-deep/60">
                              <span className={cn('h-1.5 w-1.5 shrink-0 rounded-full', tint.dot)} />
                              <span className="min-w-0 flex-1 truncate text-sm font-semibold text-teal">{g[lang].title}</span>
                              <ArrowRight size={15} className="shrink-0 text-teal/40 transition-transform group-hover:translate-x-0.5 group-hover:text-teal" />
                            </Link>
                          </li>
                        ))}
                      </ul>

                      <Link to={href} className="btn-primary mt-4 w-full sm:w-auto">
                        {t.common.viewAll} ({list.length})<ArrowRight size={15} />
                      </Link>
                    </div>
                  </motion.div>
                )
              })()}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* DOS & DON'TS (hidden)
      <section className="relative section-y">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#fefaf0]/50 to-transparent" />
                <div className="container-x">
        <SectionHeading eyebrow={t.home.ddEyebrow} title={t.home.ddTitle} />
        <Reveal className="mt-4 sm:mt-6">
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:justify-start sm:px-0">
            {ddTopics.map((g, i) => {
              const cat = categories.find((c) => c.id === g.categoryId)
              return (
                <button key={g.id} onClick={() => setDdActive(i)} className={cn('relative flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-xs sm:text-sm font-medium transition-colors', ddActive === i ? 'text-ivory' : 'border border-teal/10 bg-white/70 text-teal hover:bg-white')}>
                  {ddActive === i && <motion.span layoutId="dd-pill" className="absolute inset-0 -z-10 rounded-full bg-teal shadow-soft" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
                  {cat && <Icon name={cat.icon} size={15} />}{cat ? l(cat.name).replace(/General /i, '').replace(/ Guidance/i, '').split(/[,&]/)[0].trim() : g[lang].title}
                </button>
              )
            })}
          </div>
        </Reveal>
        <div className="mt-4 sm:mt-5 overflow-hidden rounded-2xl sm:rounded-3xl border border-teal/[0.08] bg-white shadow-soft">
          <AnimatePresence mode="wait">
            {ddGuide && (
              <motion.div key={ddGuide.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} >
                <div className="flex flex-col gap-1.5 border-b border-teal/[0.07] p-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-4">
                  <p className="font-display text-base font-semibold leading-snug text-teal sm:text-lg">{ddGuide[lang].title}</p>
                  <Link to={`/guides/${ddGuide.slug}`} className="inline-flex shrink-0 items-center gap-1 text-xs sm:text-sm font-semibold text-teal hover:underline">{t.home.ddRead}<ArrowRight size={14} /></Link>
                </div>
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease }} className="p-3 sm:p-6">
                  <DosDontsCard compact dos={dosDonts[ddGuide.slug][lang].dos} donts={dosDonts[ddGuide.slug][lang].donts} />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        </div>
      </section>
      */}

      {/* VIDEOS */}
      <section className="relative section-y">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-powder/35 to-transparent" />
                <div className="container-x">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <SectionHeading eyebrow={t.home.videosEyebrow} title={t.home.videosTitle} />
            <Reveal className="hidden sm:block"><Link to="/videos" className="btn-ghost shrink-0">{t.common.viewAll}<ArrowRight size={16} /></Link></Reveal>
          </div>
          <SwipeRow>
            {featuredVideos.map((v, i) => <StaggerItem key={v.id} className={swipeItem}><VideoCard video={v} index={i} onPlay={setPlaying} /></StaggerItem>)}
          </SwipeRow>
          <Link to="/videos" className="btn-ghost mt-3.5 w-full sm:hidden">{t.common.viewAll}<ArrowRight size={15} /></Link>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="container-x section-y pt-0 sm:pt-0 lg:pt-0">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] bg-teal p-5 text-ivory sm:rounded-[2.25rem] sm:p-10 lg:p-12">
            <div className="relative grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-8">
              <div>
                <span className="eyebrow bg-ivory/15 text-ivory">{t.home.contactEyebrow}</span>
                <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl lg:text-4xl">{t.home.contactTitle}</h2>
                <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row">
                  <a href={`tel:${settings.phone.replace(/\s/g, '')}`} className="btn w-full bg-ivory text-teal hover:-translate-y-0.5 hover:bg-white sm:w-auto"><Phone size={15} />{t.common.callNow}</a>
                  <a href={whatsappChat(settings.whatsapp)} target="_blank" rel="noreferrer" className="btn-whatsapp w-full sm:w-auto"><MessageCircle size={15} />{t.common.whatsapp}</a>
                </div>
              </div>
              <ul className="space-y-4 text-xs text-ivory/85 sm:text-sm">
                <li className="flex gap-3"><MapPin className="mt-0.5 shrink-0 text-sage" size={17} /><span><strong className="block text-ivory">{l(settings.clinicName)}</strong>{l(settings.address)}</span></li>
                <li className="flex gap-3"><Clock className="mt-0.5 shrink-0 text-sage" size={17} /><span>{settings.timings.map((x) => <span key={x.hours} className="block"><strong className="text-ivory">{l(x.days)}:</strong> {x.hours}</span>)}</span></li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <VideoModal video={playing} onClose={() => setPlaying(null)} />
    </PageTransition>
  )
}
