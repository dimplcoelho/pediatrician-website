import { motion } from 'framer-motion'
import { Baby, Footprints, MessageSquareText, PersonStanding, Puzzle, Smile } from 'lucide-react'
import Disclaimer from '../components/Disclaimer'
import GuideLibrary from '../components/GuideLibrary'
import PageHero from '../components/PageHero'
import PageTransition from '../components/PageTransition'
import { Stagger, StaggerItem } from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { useLang } from '../context/LanguageContext'
import { cn } from '../lib/utils'

const milestones = [
  { age: { en: '2 months', kn: '2 ತಿಂಗಳು' }, text: { en: 'Social smile', kn: 'ಸಾಮಾಜಿಕ ನಗು' }, I: Smile, bg: 'bg-[#faeed6]', textCol: 'text-[#9c6a1b]', border: 'border-[#f5e3be]' },
  { age: { en: '6 months', kn: '6 ತಿಂಗಳು' }, text: { en: 'Sits with support', kn: 'ಆಧಾರದೊಂದಿಗೆ ಕೂರುವುದು' }, I: Baby, bg: 'bg-[#ece7f7]', textCol: 'text-[#5b4c9c]', border: 'border-[#e4def3]' },
  { age: { en: '9 months', kn: '9 ತಿಂಗಳು' }, text: { en: 'Crawls', kn: 'ಅಂಬೆಗಾಲು' }, I: PersonStanding, bg: 'bg-[#e1ece0]', textCol: 'text-[#42613d]', border: 'border-[#d4e2d1]' },
  { age: { en: '12 months', kn: '12 ತಿಂಗಳು' }, text: { en: 'First words', kn: 'ಮೊದಲ ಪದಗಳು' }, I: MessageSquareText, bg: 'bg-[#dcefe2]', textCol: 'text-[#2c7350]', border: 'border-[#cee8d7]' },
  { age: { en: '18 months', kn: '18 ತಿಂಗಳು' }, text: { en: 'Walks alone', kn: 'ಒಂಟಿಯಾಗಿ ನಡೆಯುವುದು' }, I: Footprints, bg: 'bg-[#dce9f5]', textCol: 'text-[#2c6a92]', border: 'border-[#cde0f0]' },
  { age: { en: '3 years', kn: '3 ವರ್ಷ' }, text: { en: 'Pretend play', kn: 'ಕಾಲ್ಪನಿಕ ಆಟ' }, I: Puzzle, bg: 'bg-[#fde5d2]', textCol: 'text-[#a85a22]', border: 'border-[#fae1d2]' },
]

export default function Nutrition() {
  const { t, l } = useLang()
  return (
    <PageTransition>
      <PageHero
        backTo={{ to: '/', label: t.nav.home }}
        eyebrow={t.nutrition.eyebrow}
        title={t.nutrition.title}
        text={t.nutrition.text}
      />

      <section className="container-x mb-10 sm:mb-16">
        <SectionHeading title={t.nutrition.milestonesTitle} className="mb-5 sm:mb-10" />
        <div className="relative">
          <motion.div aria-hidden initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease: 'easeInOut' }} className="absolute left-0 right-0 top-8 hidden h-0.5 origin-left bg-gradient-to-r from-powder-deep via-sage-deep to-teal lg:block" />
          <Stagger className="grid grid-cols-3 gap-x-2 gap-y-5 rounded-2xl border border-teal/10 bg-white p-4 sm:gap-4 sm:border-0 sm:bg-transparent sm:p-0 lg:grid-cols-6">
            {milestones.map(({ age, text, I, bg, textCol, border }) => (
              <StaggerItem key={age.en} className="relative text-center">
                <motion.span whileHover={{ scale: 1.1, rotate: -6 }} className={cn('relative mx-auto grid h-11 w-11 place-items-center rounded-full border shadow-soft transition-all duration-300 sm:h-16 sm:w-16 sm:border-4', bg, textCol, border)}>
                  <I size={20} />
                </motion.span>
                <p className="mt-2 font-display text-sm font-semibold text-teal sm:mt-3 sm:text-lg">{l(age)}</p>
                <p className="text-[11px] leading-tight text-muted sm:text-sm">{l(text)}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <GuideLibrary section="nutrition" />
      <div className="container-x mt-8 sm:mt-16"><Disclaimer /></div>
    </PageTransition>
  )
}
