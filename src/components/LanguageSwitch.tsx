import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import type { Lang } from '../data/types'
import { cn } from '../lib/utils'

const options: { id: Lang; label: string }[] = [{ id: 'en', label: 'EN' }, { id: 'kn', label: 'ಕನ್ನಡ' }]

export default function LanguageSwitch({ className }: { className?: string }) {
  const { lang, setLang } = useLang()
  return (
    <div role="group" aria-label="Language" className={cn('relative flex rounded-full border border-teal/15 bg-white/70 p-1 text-xs font-semibold backdrop-blur', className)}>
      {options.map((o) => (
        <button
          key={o.id}
          onClick={() => setLang(o.id)}
          aria-pressed={lang === o.id}
          className={cn('relative z-10 rounded-full px-3 py-1.5 transition-colors', lang === o.id ? 'text-ivory' : 'text-teal hover:text-teal-light', o.id === 'kn' && 'font-kn')}
        >
          {lang === o.id && <motion.span layoutId="lang-pill" className="absolute inset-0 -z-10 rounded-full bg-teal" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
          {o.label}
        </button>
      ))}
    </div>
  )
}
