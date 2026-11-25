import { motion } from 'framer-motion'
import { ArrowLeft, Home } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export default function PageHero({
  eyebrow,
  title,
  text,
  image,
  imageAlt = '',
  backTo,
  children,
}: {
  eyebrow?: string
  title: string
  text?: string
  image?: string
  imageAlt?: string
  backTo?: { to: string; label: string }
  children?: ReactNode
}) {
  return (
    <section className={`container-x relative pt-24 pb-6 sm:pt-32 sm:pb-10 ${image ? 'grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14' : ''}`}>
      {/* Soft multi-colour gradient bloom behind inner page hero */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-16 -top-12 h-64 w-64 rounded-full bg-powder/40 blur-3xl sm:h-80 sm:w-80" />
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-honey/40 blur-3xl sm:h-80 sm:w-80" />
      </div>

      <div>
        {backTo && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="mb-3.5">
            <Link
              to={backTo.to}
              className="group inline-flex items-center gap-1.5 rounded-full border border-teal/15 bg-white/80 px-3 py-1 text-xs font-semibold text-teal shadow-soft backdrop-blur transition hover:bg-white hover:border-teal/30 active:scale-95"
            >
              <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-0.5" />
              <Home size={12} className="opacity-75" />
              <span>{backTo.label}</span>
            </Link>
          </motion.div>
        )}
        {eyebrow && <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="eyebrow">{eyebrow}</motion.span>}
        <motion.h1
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-3xl font-display text-[1.85rem] font-semibold leading-[1.12] text-teal sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {text && (
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-3 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {text}
          </motion.p>
        )}
        {children}
      </div>
      {image && (
        <motion.div initial={{ opacity: 0, scale: 0.95, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} className="relative">
          <div aria-hidden className="absolute -inset-3 rotate-[-3deg] rounded-[2.4rem] bg-gradient-to-br from-powder to-sage/60" />
          <div className="relative aspect-[16/11] overflow-hidden rounded-[2rem] shadow-lift">
            <motion.img initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }} src={image} alt={imageAlt} className="h-full w-full object-cover" />
          </div>
        </motion.div>
      )}
    </section>
  )
}
