import { Link } from 'react-router-dom'
import { useContent } from '../context/ContentContext'
import { useLang } from '../context/LanguageContext'

export default function Logo({ light }: { light?: boolean }) {
  const { doctor } = useContent()
  const { l, t } = useLang()
  return (
    <Link to="/" className="group flex items-center gap-2.5">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl sm:h-10 sm:w-10 bg-teal text-ivory shadow-soft transition-transform duration-300 group-hover:scale-105">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          <path d="M12 7.5v5M9.5 10h5" strokeWidth="2.2" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className={`block whitespace-nowrap font-display text-base font-semibold sm:text-lg ${light ? 'text-ivory' : 'text-teal'}`}>{l(doctor.name)}</span>
        <span className={`block text-[10px] font-medium uppercase tracking-[0.14em] sm:text-[11px] ${light ? 'text-ivory/60' : 'text-muted'}`}>{t.common.role}</span>
      </span>
    </Link>
  )
}
