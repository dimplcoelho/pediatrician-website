import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useContent } from '../context/ContentContext'
import { useLang } from '../context/LanguageContext'
import type { Guide } from '../data/types'
import { cn } from '../lib/utils'
import Icon from './Icon'

/**
 * Clean doctor-authored article card: compact list item on phones (when `layout="auto"`),
 * photo-banner card from `sm` up.
 */
export default function GuideCard({
  guide,
  layout = 'auto',
}: {
  guide: Guide
  index?: number
  layout?: 'auto' | 'card'
  variant?: 'auto' | 'photo' | 'icon'
}) {
  const { lang, l } = useLang()
  const { categories } = useContent()
  const cat = categories.find((c) => c.id === guide.categoryId)
  const c = guide[lang]
  const listOnMobile = layout === 'auto'

  const categoryLabel = cat
    ? l(cat.name).replace(/ Guidance/i, '').split(/[,&]/)[0].trim()
    : ''

  return (
    <Link
      to={`/guides/${guide.slug}`}
      className={cn(
        'group flex h-full w-full overflow-hidden rounded-2xl border border-teal/[0.08] bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-teal/25 hover:shadow-lift sm:rounded-3xl',
        listOnMobile ? 'flex-row items-center gap-3.5 p-3 sm:flex-col sm:items-stretch sm:gap-0 sm:p-0' : 'flex-col',
      )}
    >
      {/* Photo Header / Mobile Thumbnail */}
      <div
        className={cn(
          'relative overflow-hidden bg-ivory-deep',
          listOnMobile
            ? 'h-20 w-20 shrink-0 rounded-xl sm:aspect-[16/10] sm:h-auto sm:w-full sm:rounded-none'
            : 'aspect-[16/10] w-full',
        )}
      >
        {guide.image ? (
          <img
            src={guide.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-powder/60 to-sage/40">
            <Icon name={cat?.icon ?? 'book'} size={listOnMobile ? 24 : 32} className="text-teal sm:h-8 sm:w-8" />
          </div>
        )}
        <div className={cn('pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent', listOnMobile && 'hidden sm:block')} />

        {/* Category Pill floating bottom-left (desktop / card view) */}
        <div className={cn('absolute bottom-3 left-3', listOnMobile && 'hidden sm:block')}>
          <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-teal shadow-soft backdrop-blur">
            {categoryLabel}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className={cn('flex min-w-0 flex-1 flex-col', listOnMobile ? 'p-0 sm:p-6' : 'p-5 sm:p-6')}>
        {listOnMobile && categoryLabel && (
          <span className="mb-1 text-[10px] font-bold uppercase tracking-wider text-teal-light sm:hidden">
            {categoryLabel}
          </span>
        )}
        <h3
          className={cn(
            'font-display font-bold leading-snug text-teal transition-colors group-hover:text-teal-light',
            listOnMobile ? 'line-clamp-2 text-[15px] sm:line-clamp-none sm:text-[18.5px]' : 'text-[17px] sm:text-[18.5px]',
          )}
        >
          {c.title}
        </h3>

        <p
          className={cn(
            'text-xs leading-relaxed text-muted sm:text-[13.5px]',
            listOnMobile ? 'mt-1 line-clamp-1 sm:mt-2 sm:line-clamp-3' : 'mt-2 line-clamp-3',
          )}
        >
          {c.summary}
        </p>
      </div>

      {listOnMobile && (
        <ChevronRight size={18} className="shrink-0 text-teal/40 transition-transform group-hover:translate-x-0.5 group-hover:text-teal sm:hidden" />
      )}
    </Link>
  )
}
