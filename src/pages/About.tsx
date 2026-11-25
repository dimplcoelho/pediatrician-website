import { motion } from 'framer-motion'
import { CalendarCheck, Check, GraduationCap, Phone } from 'lucide-react'
import Gallery from '../components/Gallery'
import Highlight from '../components/Highlight'
import PageTransition from '../components/PageTransition'
import { Reveal } from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { useContent } from '../context/ContentContext'
import { useLang } from '../context/LanguageContext'
import { seedGallery } from '../data/seed'
import { cn, whatsappChat } from '../lib/utils'

const ease = [0.22, 1, 0.36, 1] as const

const specTints = [
  { bg: 'bg-[#fefaf0]', border: 'border-[#f5e3be]/70', iconBg: 'bg-[#faeed6]', iconText: 'text-[#9c6a1b]' },
  { bg: 'bg-[#f3f9f5]', border: 'border-[#cee8d7]/70', iconBg: 'bg-[#dcefe2]', iconText: 'text-[#2c7350]' },
  { bg: 'bg-[#f3f7fb]', border: 'border-[#cde0f0]/70', iconBg: 'bg-[#dce9f5]', iconText: 'text-[#2c6a92]' },
  { bg: 'bg-[#fdf6f4]', border: 'border-[#f7d8d0]/70', iconBg: 'bg-[#fbe2da]', iconText: 'text-[#b0503a]' },
  { bg: 'bg-[#f8f6fc]', border: 'border-[#e4def3]/70', iconBg: 'bg-[#ece7f7]', iconText: 'text-[#5b4c9c]' },
  { bg: 'bg-[#f4f7f3]', border: 'border-[#d4e2d1]/70', iconBg: 'bg-[#e1ece0]', iconText: 'text-[#42613d]' },
]

export default function About() {
  const { t, l } = useLang()
  const { doctor, settings } = useContent()
  const degrees = doctor.qualifications.map((q) => q.degree).slice(0, 2).join(' · ')

  return (
    <PageTransition>
      {/* Centred page title */}
      <section className="container-x pt-24 text-center sm:pt-32">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="eyebrow">{t.about.eyebrow}</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7, ease }} className="mt-5 font-display text-[2.1rem] font-bold leading-tight text-teal sm:text-5xl lg:text-[3.25rem]">
          <Highlight text={t.about.meetTitle} />
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {t.about.heroText}
        </motion.p>
      </section>

      {/* Profile: framed photo with stat badge · name, bio, qualifications card, CTA */}
      <section className="container-x section-y pt-10 sm:pt-14 lg:pt-16">
        <div className="grid items-start gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15, ease }} className="relative mx-auto w-full max-w-[20rem] sm:max-w-sm lg:sticky lg:top-28">
            <div className="rounded-[2rem] bg-white p-3 shadow-lift">
              <img src="/images/doctor-photo.jpg" alt={l(doctor.name)} fetchPriority="high" className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-[center_12%]" />
            </div>
            <div className="absolute -bottom-6 right-1/2 translate-x-1/2 rounded-2xl bg-teal px-5 py-3.5 text-center text-ivory shadow-lift sm:-right-6 sm:translate-x-0 lg:-right-8">
              <p className="font-display text-3xl font-bold leading-none">{doctor.yearsExperience}+</p>
              <p className="mt-1.5 max-w-[7.5rem] text-[10px] font-semibold uppercase leading-tight tracking-[0.1em] text-ivory/85">{t.home.years}</p>
            </div>
          </motion.div>

          <div>
            <Reveal className="text-center lg:text-left">
              <h2 className="font-display text-3xl font-bold text-teal sm:text-4xl">{l(doctor.name)}</h2>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.1em] text-accent sm:text-sm">{degrees} · {l(doctor.title)}</p>
            </Reveal>
            <Reveal delay={0.04} className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a href={whatsappChat(settings.whatsapp)} target="_blank" rel="noreferrer" className="btn-primary px-6 py-3 text-[15px]"><CalendarCheck size={18} />{t.about.book}</a>
              <a href={`tel:${settings.phone.replace(/\s/g, '')}`} className="btn-ghost bg-white px-6 py-3 text-[15px]"><Phone size={17} />{t.common.callNow}</a>
            </Reveal>
            <Reveal delay={0.05} className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted sm:text-base">
              <p>{l(doctor.intro)}</p>
              <p>{l(doctor.welcome)}</p>
              <p>{l(doctor.approach)}</p>
            </Reveal>

            {/* Qualifications card */}
            <Reveal delay={0.1} className="card mt-8 p-5 sm:p-8">
              <h3 className="flex items-center gap-2.5 border-b border-teal/[0.08] pb-4 font-display text-lg font-semibold text-teal">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-powder/70 text-teal"><GraduationCap size={18} /></span>
                {t.about.qualifications}
              </h3>
              <dl className="divide-y divide-teal/[0.06]">
                {doctor.qualifications.map((q) => (
                  <div key={q.degree} className="grid grid-cols-[3.75rem_1fr] gap-3 py-3.5 sm:grid-cols-[4.5rem_1fr] sm:gap-4">
                    <dt className="font-display text-base font-semibold text-accent">{q.year}</dt>
                    <dd className="text-sm leading-relaxed text-ink/85 sm:text-[15px]"><strong className="font-semibold text-teal">{q.degree}</strong>, {l(q.institution)}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            {/* Areas of specialisation card */}
            <Reveal delay={0.12} className="card mt-6 p-5 sm:p-8">
              <h3 className="flex items-center gap-2.5 border-b border-teal/[0.08] pb-4 font-display text-lg font-semibold text-teal">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-honey text-teal"><Check size={18} strokeWidth={3} /></span>
                {t.about.specialisation}
              </h3>
              <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {doctor.specialisations.map((s, idx) => {
                  const tint = specTints[idx % specTints.length]
                  return (
                    <div key={s.en} className="flex items-center gap-2.5 rounded-xl border border-teal/[0.08] bg-white p-2.5 sm:px-3.5 sm:py-2.5 shadow-soft transition-all duration-300">
                      <span className={cn('grid h-5 w-5 shrink-0 place-items-center rounded-full', tint.iconBg, tint.iconText)}>
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="text-[13.5px] font-medium leading-snug text-ink/85">{l(s)}</span>
                    </div>
                  )
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="container-x section-y pt-0 sm:pt-0 lg:pt-0">
        <SectionHeading eyebrow={t.about.galleryEyebrow} title={t.about.galleryTitle} />
        <Gallery photos={seedGallery} />
      </section>
    </PageTransition>
  )
}
