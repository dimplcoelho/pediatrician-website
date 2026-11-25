import { AnimatePresence, motion } from 'framer-motion'
import { Search, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useContent } from '../context/ContentContext'
import { useLang } from '../context/LanguageContext'
import type { Category } from '../data/types'
import { cn } from '../lib/utils'
import GuideCard from './GuideCard'
import Icon from './Icon'

export default function GuideLibrary({ section = 'all' }: { section?: Category['section'] | 'all' }) {
  const { t, l, lang } = useLang()
  const { categories, publishedGuides } = useContent()
  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const active = params.get('category') ?? 'all'

  const cats = (section === 'all' ? categories : categories.filter((c) => c.section === section)).filter((c) =>
    publishedGuides.some((g) => g.categoryId === c.id),
  )
  const catIds = new Set(cats.map((c) => c.id))

  const guides = useMemo(() => {
    const q = query.trim().toLowerCase()
    return publishedGuides
      .filter((g) => catIds.has(g.categoryId))
      .filter((g) => active === 'all' || g.categoryId === active)
      .filter((g) => !q || `${g[lang].title} ${g[lang].summary} ${g[lang].body} ${g.en.title} ${g.ageGroup}`.toLowerCase().includes(q))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publishedGuides, active, query, lang, section])

  const select = (id: string) => {
    const next = new URLSearchParams(params)
    if (id === 'all') next.delete('category'); else next.set('category', id)
    setParams(next, { replace: true })
  }

  return (
    <section className="container-x">
      {/* Search */}
      <label className="relative mx-auto block max-w-xl">
        <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-teal sm:left-5" />
        <input
          type="search" value={query} onChange={(e) => setQuery(e.target.value)}
          placeholder={t.common.searchBig} aria-label={t.common.search}
          className="h-12 w-full rounded-full border border-teal/10 bg-white pl-11 pr-12 text-sm text-ink shadow-soft outline-none transition placeholder:text-muted/70 focus:border-teal-light focus:ring-4 focus:ring-powder sm:h-13 sm:pl-12 sm:text-[15px] [&::-webkit-search-cancel-button]:hidden"
        />
        {query && (
          <button type="button" onClick={() => setQuery('')} aria-label={t.common.clear} className="absolute right-2.5 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-ivory-deep text-teal transition hover:bg-powder sm:right-3">
            <X size={15} />
          </button>
        )}
      </label>

      {/* Topic chips: one swipeable row on phones, balanced compact rows from tablet up */}
      <div className="-mx-5 mt-4 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-auto sm:mt-5 sm:max-w-5xl sm:flex-wrap sm:justify-center sm:px-0 [&::-webkit-scrollbar]:hidden">
        {[{ id: 'all', icon: 'book', name: { en: t.common.all, kn: t.common.all } }, ...cats].map((c) => (
          <button
            key={c.id} onClick={() => select(c.id)}
            className={cn('relative flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors sm:py-2 sm:text-[13px]', active === c.id ? 'text-ivory' : 'bg-white text-teal shadow-soft hover:bg-powder/40')}
          >
            {active === c.id && <motion.span layoutId={`cat-${section}`} className="absolute inset-0 -z-10 rounded-full bg-teal shadow-soft" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
            <Icon name={c.icon} size={13} />{l(c.name)}
          </button>
        ))}
      </div>

      <p className="mt-6 border-t border-teal/10 pt-5 text-sm font-medium text-muted sm:mt-8">
        {guides.length} {guides.length === 1 ? t.common.guide : t.common.guides}
      </p>

      <motion.div layout className="mt-4 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {guides.map((g, i) => (
            <motion.div key={g.id} layout initial={{ opacity: 0, scale: 0.94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.94 }} transition={{ duration: 0.4, delay: i * 0.04 }}>
              <GuideCard guide={g} index={i} variant="icon" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {guides.length === 0 && <p className="py-20 text-center text-muted">{t.common.noResults}</p>}
    </section>
  )
}
