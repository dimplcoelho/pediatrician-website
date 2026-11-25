import { AnimatePresence, motion } from 'framer-motion'
import { Check, Link2, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { useLang } from '../context/LanguageContext'
import { cn } from '../lib/utils'

export async function copyText(text: string) {
  try { await navigator.clipboard.writeText(text) } catch {
    const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove()
  }
}

export default function ShareActions({ url, title, compact, className }: { url: string; title: string; compact?: boolean; className?: string }) {
  const { t } = useLang()
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await copyText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)}>
      <a href={`https://wa.me/?text=${encodeURIComponent(`${title}\n${url}`)}`} target="_blank" rel="noreferrer" className={cn('btn-whatsapp', compact && 'px-4 py-2 text-xs')}>
        <MessageCircle size={16} />{t.common.shareWhatsApp}
      </a>
      <button onClick={copy} className={cn('btn-ghost relative', compact && 'px-4 py-2 text-xs')}>
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.span key="ok" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} className="flex items-center gap-2 text-sage-deep"><Check size={16} />{t.common.copied}</motion.span>
          ) : (
            <motion.span key="copy" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} className="flex items-center gap-2"><Link2 size={16} />{t.common.copyLink}</motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  )
}
