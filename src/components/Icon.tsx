import {
  Apple, Baby, BookOpen, Heart, Moon, Ruler, Sparkles, Stethoscope, Syringe, Thermometer, Utensils,
  type LucideIcon,
} from 'lucide-react'

/** Category icons: clean, modern stroke icons matching the site design system. */
const map: Record<string, LucideIcon> = {
  stethoscope: Stethoscope,
  thermometer: Thermometer,
  apple: Apple,
  sparkles: Sparkles,
  syringe: Syringe,
  heart: Heart,
  baby: Baby,
  salad: Utensils,
  ruler: Ruler,
  moon: Moon,
  book: BookOpen,
}

export const iconKeys = Object.keys(map)

export default function Icon({ name, size = 18, className }: { name: string; size?: number; className?: string }) {
  const Component = map[name] ?? BookOpen
  return <Component size={size} className={className} strokeWidth={1.85} />
}
