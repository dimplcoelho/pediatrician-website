import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { dictionaries, type Dict } from '../data/i18n'
import type { Lang, Localized } from '../data/types'

interface LanguageCtx {
  lang: Lang
  setLang: (l: Lang) => void
  t: Dict
  /** pick the current-language string from a Localized value */
  l: (v: Localized) => string
}

const Ctx = createContext<LanguageCtx | null>(null)

function initialLang(): Lang {
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (fromUrl === 'kn' || fromUrl === 'en') return fromUrl
  const saved = localStorage.getItem('lang')
  return saved === 'kn' ? 'kn' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    localStorage.setItem('lang', next)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo<LanguageCtx>(
    () => ({ lang, setLang, t: dictionaries[lang], l: (v) => v[lang] || v.en }),
    [lang, setLang],
  )
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useLang() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider')
  return ctx
}
