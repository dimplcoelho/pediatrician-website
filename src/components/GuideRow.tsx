import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useContent } from '../context/ContentContext'
import { useLang } from '../context/LanguageContext'
import type { Guide } from '../data/types'
import { categoryTint } from '../lib/categoryTint'
import { cn } from '../lib/utils'
import Icon from './Icon'

/** Quiet one-line guide entry: category icon, title, reading time. Used where a photo card would be too much. */
export default function GuideRow({ guide }: { guide: Guide }) {
  const { lang, t } = useLang()
  const { categories } = useContent()
  const cat = categories.find((c) => c.id === guide.categoryId)
  const tint = categoryTint(guide.categoryId)

  return (
    <Link to={`/guides/${guide.slug}`} className="group flex items-center gap-3.5 rounded-2xl px-3 py-3.5 transition-colors hover:bg-ivory sm:gap-4 sm:px-4">
      <span className={cn('grid h-11 w-11 shrink-0 place-items-center rounded-2xl', tint.tile)}>
        <Icon name={cat?.icon ?? 'book'} size={19} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-display text-[15px] font-semibold leading-snug text-teal sm:text-base">{guide[lang].title}</span>
        <span className="mt-0.5 block text-xs text-muted">{guide.readMins} {t.common.minRead}{guide.ageGroup && ` · ${guide.ageGroup}`}</span>
      </span>
      <ChevronRight size={18} className="shrink-0 text-teal/40 transition-transform group-hover:translate-x-0.5 group-hover:text-teal" />
    </Link>
  )
}
