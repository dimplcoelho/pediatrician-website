import { Reveal } from './Reveal'
import { cn } from '../lib/utils'

export default function SectionHeading({ eyebrow, title, text, center, className }: { eyebrow?: string; title: string; text?: string; center?: boolean; className?: string }) {
  return (
    <Reveal className={cn('max-w-2xl', center && 'mx-auto text-center', className)}>
      {eyebrow && <span className="eyebrow mb-2 sm:mb-2.5">{eyebrow}</span>}
      <h2 className="font-display text-[1.5rem] font-semibold leading-tight text-teal sm:text-3xl lg:text-[2.25rem]">{title}</h2>
      {text && <p className="mt-2 text-[14px] leading-relaxed text-muted sm:mt-2.5 sm:text-[15px]">{text}</p>}
    </Reveal>
  )
}
