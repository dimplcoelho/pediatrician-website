import { motion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'
import { useContent } from '../context/ContentContext'
import { useLang } from '../context/LanguageContext'
import { whatsappChat } from '../lib/utils'

export default function FloatingWhatsApp() {
  const { settings } = useContent()
  const { t } = useLang()
  const telHref = `tel:${settings.phone.replace(/\s/g, '')}`

  return (
    <div className="fixed bottom-5 right-5 z-40 hidden flex-col items-center gap-3 lg:flex">
      <motion.a
        href={telHref}
        aria-label={t.common.callNow}
        title={`${t.common.callNow}: ${settings.phone}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.1, type: 'spring', stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative grid h-14 w-14 place-items-center rounded-full bg-teal text-white shadow-lift"
      >
        <Phone size={24} className="relative" />
      </motion.a>

      <motion.a
        href={whatsappChat(settings.whatsapp)}
        target="_blank"
        rel="noreferrer"
        aria-label={t.common.whatsapp}
        title={t.common.whatsapp}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping [animation-duration:3s]" />
        <MessageCircle size={26} className="relative" />
      </motion.a>
    </div>
  )
}
