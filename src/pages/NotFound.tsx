import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import { useLang } from '../context/LanguageContext'

export default function NotFound() {
  const { t } = useLang()
  return (
    <PageTransition>
      <section className="container-x flex min-h-[70vh] flex-col items-center justify-center pt-32 text-center">
        <motion.p initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring' }} className="font-display text-8xl font-semibold text-teal/20 sm:text-9xl">404</motion.p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-teal">This page took a little detour.</h1>
        <p className="mt-3 text-muted">The page may have moved or is no longer published.</p>
        <Link to="/" className="btn-primary mt-8">{t.nav.home}</Link>
      </section>
    </PageTransition>
  )
}
