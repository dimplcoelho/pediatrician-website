import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

const list = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } }
const item = { hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0, transition: { duration: 0.4 } } }

export default function DosDontsCard({ dos, donts, compact }: { dos: string[]; donts: string[]; compact?: boolean }) {
  const { t } = useLang()
  const cols = [
    { key: 'do', title: t.common.dos, items: dos, I: Check, box: 'border-sage-deep/30 bg-[#eef4ec]', badge: 'bg-sage-deep text-white', dot: 'bg-sage-deep/15 text-sage-deep' },
    { key: 'dont', title: t.common.donts, items: donts, I: X, box: 'border-coral/30 bg-[#fdf0eb]', badge: 'bg-coral text-white', dot: 'bg-coral/15 text-coral' },
  ]
  return (
    <div className={`not-prose grid gap-4 ${compact ? '' : 'my-8'} sm:grid-cols-2`}>
      {cols.map(({ key, title, items, I, box, badge, dot }) => (
        <motion.div key={key} variants={list} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }} className={`rounded-3xl border p-5 sm:p-6 ${box}`}>
          <p className="flex items-center gap-2.5 font-display text-xl font-semibold text-teal">
            <span className={`grid h-8 w-8 place-items-center rounded-full ${badge}`}><I size={17} strokeWidth={3} /></span>{title}
          </p>
          <ul className="mt-4 space-y-3">
            {items.map((x) => (
              <motion.li key={x} variants={item} className="flex gap-3 text-[0.97rem] leading-6 text-ink/85">
                <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${dot}`}><I size={12} strokeWidth={3} /></span>{x}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  )
}
