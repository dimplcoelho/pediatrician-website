import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import { cn } from '../lib/utils'
import LanguageSwitch from './LanguageSwitch'
import Logo from './Logo'

export default function Navbar() {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY, scrollYProgress } = useScroll()
  const location = useLocation()

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 24))
  useEffect(() => setOpen(false), [location.pathname])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/health', label: t.nav.health },
    { to: '/videos', label: t.nav.videos },
    { to: '/contact', label: t.nav.contact },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn('fixed inset-x-0 top-0 z-50 transition-all duration-500', scrolled ? 'py-2' : 'py-2.5 sm:py-4')}
      >
        <div className="container-x">
          <nav className={cn('flex items-center justify-between rounded-full px-2 py-2 pl-3 transition-all duration-500 sm:px-3 sm:pl-4', scrolled ? 'border border-teal/10 bg-ivory/80 shadow-soft backdrop-blur-xl' : 'bg-transparent')}>
            <Logo />
            <ul className="hidden items-center gap-1 lg:flex">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} end={link.to === '/'} className={({ isActive }) => cn('relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors', isActive ? 'text-teal' : 'text-ink/70 hover:text-teal')}>
                    {({ isActive }) => (
                      <>
                        {isActive && <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-powder/80" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
                        {link.label}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2">
              <LanguageSwitch className="scale-90 sm:scale-100" />
              <button onClick={() => setOpen(true)} className="grid h-10 w-10 place-items-center rounded-full bg-teal text-ivory sm:h-11 sm:w-11 lg:hidden" aria-label={t.common.menu}>
                <Menu size={20} />
              </button>
            </div>
          </nav>
        </div>
        <motion.div style={{ scaleX: scrollYProgress }} className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-sage-deep via-teal-light to-powder-deep" />
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[60] lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-teal-dark/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.aside
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 300, damping: 34 }}
              className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-ivory p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <LanguageSwitch />
                <button onClick={() => setOpen(false)} className="grid h-11 w-11 place-items-center rounded-full bg-powder text-teal" aria-label={t.common.close}><X size={20} /></button>
              </div>
              <ul className="mt-10 space-y-1">
                {links.map((link, i) => (
                  <motion.li key={link.to} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 + i * 0.05 }}>
                    <NavLink to={link.to} end={link.to === '/'} className={({ isActive }) => cn('block rounded-2xl px-4 py-3.5 font-display text-2xl transition', isActive ? 'bg-powder/70 text-teal' : 'text-ink/80 hover:bg-white')}>
                      {link.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
