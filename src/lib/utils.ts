import type { Lang } from '../data/types'

export const cn = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(' ')

export const guideUrl = (slug: string, lang: Lang) => `${window.location.origin}/guides/${slug}?lang=${lang}`

export const whatsappShare = (text: string) => `https://wa.me/?text=${encodeURIComponent(text)}`

export const whatsappChat = (number: string, text = '') =>
  `https://wa.me/${number}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export function formatDate(iso: string, lang: Lang) {
  return new Date(iso).toLocaleDateString(lang === 'kn' ? 'kn-IN' : 'en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}

/** Extract an 11-char YouTube id from a URL or raw id. */
export function parseYouTubeId(input: string): string {
  const s = input.trim()
  if (/^[\w-]{11}$/.test(s)) return s
  const m = s.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/)
  return m ? m[1] : ''
}

export const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').replace(/-+/g, '-').slice(0, 60)

export type Block =
  | { type: 'h'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'warn'; text: string }
  | { type: 'dd'; dos: string[]; donts: string[] }
  | { type: 'img'; src: string; caption: string }

/** Tiny parser for the guide body format described in data/types.ts */
export function parseBody(body: string): Block[] {
  const blocks: Block[] = []
  let para: string[] = []
  let list: string[] = []
  let dd: { dos: string[]; donts: string[] } | null = null
  const flushDd = () => { if (dd) { blocks.push({ type: 'dd', ...dd }); dd = null } }
  const flushPara = () => { if (para.length) { blocks.push({ type: 'p', text: para.join(' ') }); para = [] } }
  const flushList = () => { if (list.length) { blocks.push({ type: 'ul', items: list }); list = [] } }

  for (const raw of body.split('\n')) {
    const line = raw.trim()
    if (!line) { flushPara(); flushList(); continue }
    if (line.startsWith('+ ') || line.startsWith('x ')) {
      flushPara(); flushList()
      dd ??= { dos: [], donts: [] }
      ;(line[0] === '+' ? dd.dos : dd.donts).push(line.slice(2))
      continue
    }
    flushDd()
    const img = line.match(/^!\[(.*?)\]\((\S+?)\)$/)
    if (img) { flushPara(); flushList(); blocks.push({ type: 'img', caption: img[1], src: img[2] }); continue }
    if (line.startsWith('## ') || line.startsWith('### ')) { flushPara(); flushList(); blocks.push({ type: 'h', text: line.replace(/^#{2,3}\s+/, '') }) }
    else if (line.startsWith('- ') || line.startsWith('* ')) { flushPara(); list.push(line.slice(2)) }
    else if (line.startsWith('! ') || line.startsWith('> ')) { flushPara(); flushList(); blocks.push({ type: 'warn', text: line.slice(2) }) }
    else { flushList(); para.push(line) }
  }
  flushPara(); flushList(); flushDd()
  return blocks
}
