import { motion } from 'framer-motion'
import { HeartPulse, Home, Phone, PlayCircle } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import { cn } from '../lib/utils'

/** App-style bottom navigation for phones and tablets. */
export default function MobileTabBar() {
  const { t, lang } = useLang()
  const tabs = [
    { to: '/', label: t.nav.home, I: Home },
    { to: '/health', label: lang === 'kn' ? 'ಆರೋಗ್ಯ' : 'Health', I: HeartPulse },
    { to: '/videos', label: t.nav.videos, I: PlayCircle },
    { to: '/contact', label: t.nav.contact, I: Phone },
  ]
  return (
    <motion.nav
      initial={{ y: 100 }} animate={{ y: 0 }} transition={{ delay: 0.4, type: 'spring', stiffness: 260, damping: 28 }}
      className="fixed inset-x-3 bottom-3 z-50 rounded-[1.6rem] border border-teal/10 bg-ivory/90 px-1.5 py-1.5 shadow-lift backdrop-blur-xl lg:hidden"
      style={{ paddingBottom: 'max(0.375rem, env(safe-area-inset-bottom))' }}
      aria-label="Primary"
    >
      <ul className="grid grid-cols-4">
        {tabs.map(({ to, label, I }) => (
          <li key={to}>
            <NavLink to={to} end={to === '/'} className={({ isActive }) => cn('relative flex flex-col items-center gap-0.5 rounded-2xl py-2 text-[10.5px] font-semibold transition-colors', isActive ? 'text-ivory' : 'text-teal/70')}>
              {({ isActive }) => (
                <>
                  {isActive && <motion.span layoutId="tab-pill" className="absolute inset-0 -z-10 rounded-2xl bg-teal" transition={{ type: 'spring', stiffness: 420, damping: 32 }} />}
                  <motion.span animate={isActive ? { y: -1, scale: 1.1 } : { y: 0, scale: 1 }}><I size={20} strokeWidth={isActive ? 2.4 : 2} /></motion.span>
                  <span className="max-w-full truncate px-1">{label}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
