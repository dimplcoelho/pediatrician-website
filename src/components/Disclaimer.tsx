import { ShieldAlert } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

export default function Disclaimer() {
  const { t } = useLang()
  return (
    <aside className="flex gap-4 rounded-2xl border border-sage-deep/25 bg-sage/20 p-5 text-sm text-ink/80">
      <ShieldAlert className="shrink-0 text-sage-deep" size={22} />
      <div><p className="font-semibold text-teal">{t.disclaimer.title}</p><p className="mt-1 leading-relaxed">{t.disclaimer.text}</p></div>
    </aside>
  )
}
