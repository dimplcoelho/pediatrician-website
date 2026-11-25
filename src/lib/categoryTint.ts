/**
 * Subtle multi-color pediatric palette inspired by warm, family-focused clinics like Cherish Clinics.
 * Uses whisper-soft low-saturation ambient washes (4-8% tint) with matching borders, tiles, badges and accents.
 */
export interface Tint {
  card: string      // whisper-soft ambient background wash
  border: string    // delicate matching border
  tile: string      // soft icon well (tint + icon color)
  hover: string     // active/hover color
  badge: string     // tonal category badge
  accent: string    // rich text color for tags & links
  dot: string       // small indicator dot
}

export const tints = {
  honey: {
    card: 'bg-white',
    border: 'border-teal/[0.08] hover:border-[#f5e3be]',
    tile: 'bg-[#faeed6] text-[#9c6a1b]',
    hover: 'group-hover:bg-[#9c6a1b] group-hover:text-white',
    badge: 'bg-[#faeed6] text-[#8f5e13]',
    accent: 'text-[#9c6a1b]',
    dot: 'bg-[#9c6a1b]',
  },
  teal: {
    card: 'bg-white',
    border: 'border-teal/[0.08] hover:border-[#cae4e1]',
    tile: 'bg-[#d8ecea] text-[#0e5552]',
    hover: 'group-hover:bg-[#0e5552] group-hover:text-white',
    badge: 'bg-[#d8ecea] text-[#0e5552]',
    accent: 'text-[#0e5552]',
    dot: 'bg-[#0e5552]',
  },
  blush: {
    card: 'bg-white',
    border: 'border-teal/[0.08] hover:border-[#f7d8d0]',
    tile: 'bg-[#fbe2da] text-[#b0503a]',
    hover: 'group-hover:bg-[#b0503a] group-hover:text-white',
    badge: 'bg-[#fbe2da] text-[#9e432f]',
    accent: 'text-[#b0503a]',
    dot: 'bg-[#b0503a]',
  },
  powder: {
    card: 'bg-white',
    border: 'border-teal/[0.08] hover:border-[#cde0f0]',
    tile: 'bg-[#dce9f5] text-[#2c6a92]',
    hover: 'group-hover:bg-[#2c6a92] group-hover:text-white',
    badge: 'bg-[#dce9f5] text-[#235b7e]',
    accent: 'text-[#2c6a92]',
    dot: 'bg-[#2c6a92]',
  },
  peach: {
    card: 'bg-white',
    border: 'border-teal/[0.08] hover:border-[#fae1d2]',
    tile: 'bg-[#fde5d2] text-[#a85a22]',
    hover: 'group-hover:bg-[#a85a22] group-hover:text-white',
    badge: 'bg-[#fde5d2] text-[#934c19]',
    accent: 'text-[#a85a22]',
    dot: 'bg-[#a85a22]',
  },
  lavender: {
    card: 'bg-white',
    border: 'border-teal/[0.08] hover:border-[#e4def3]',
    tile: 'bg-[#ece7f7] text-[#5b4c9c]',
    hover: 'group-hover:bg-[#5b4c9c] group-hover:text-white',
    badge: 'bg-[#ece7f7] text-[#4f408b]',
    accent: 'text-[#5b4c9c]',
    dot: 'bg-[#5b4c9c]',
  },
  mint: {
    card: 'bg-white',
    border: 'border-teal/[0.08] hover:border-[#cee8d7]',
    tile: 'bg-[#dcefe2] text-[#2c7350]',
    hover: 'group-hover:bg-[#2c7350] group-hover:text-white',
    badge: 'bg-[#dcefe2] text-[#246243]',
    accent: 'text-[#2c7350]',
    dot: 'bg-[#2c7350]',
  },
  sage: {
    card: 'bg-white',
    border: 'border-teal/[0.08] hover:border-[#d4e2d1]',
    tile: 'bg-[#e1ece0] text-[#42613d]',
    hover: 'group-hover:bg-[#42613d] group-hover:text-white',
    badge: 'bg-[#e1ece0] text-[#385434]',
    accent: 'text-[#42613d]',
    dot: 'bg-[#42613d]',
  },
  indigo: {
    card: 'bg-white',
    border: 'border-teal/[0.08] hover:border-[#d3daf1]',
    tile: 'bg-[#e0e6f7] text-[#3b4f8f]',
    hover: 'group-hover:bg-[#3b4f8f] group-hover:text-white',
    badge: 'bg-[#e0e6f7] text-[#32437c]',
    accent: 'text-[#3b4f8f]',
    dot: 'bg-[#3b4f8f]',
  },
} satisfies Record<string, Tint>

const byCategory: Record<string, keyof typeof tints> = {
  fever: 'honey',
  illnesses: 'honey',
  digestion: 'teal',
  skin: 'blush',
  vaccination: 'powder',
  care: 'peach',
  'infant-feeding': 'lavender',
  'toddler-nutrition': 'mint',
  growth: 'sage',
  sleep: 'indigo',
}
const order = Object.keys(tints) as (keyof typeof tints)[]

/** Tint for a category; categories added later get a stable color from their id. */
export function categoryTint(id: string): Tint {
  const key = byCategory[id] ?? order[[...id].reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) >>> 0, 0) % order.length]
  return tints[key]
}
