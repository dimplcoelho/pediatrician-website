import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useContent } from '../context/ContentContext'
import { useLang } from '../context/LanguageContext'
import Logo from './Logo'

export default function Footer() {
  const { t, l } = useLang()
  const { settings, doctor } = useContent()
  const links = [
    { to: '/about', label: t.nav.about }, { to: '/health', label: t.nav.health },
    { to: '/videos', label: t.nav.videos }, { to: '/contact', label: t.nav.contact },
  ]
  const socials = [{ href: settings.youtubeChannel, I: Youtube, n: 'YouTube' }, { href: settings.instagram, I: Instagram, n: 'Instagram' }, { href: settings.facebook, I: Facebook, n: 'Facebook' }]
  const heading = 'text-[11px] font-semibold uppercase tracking-[0.16em] text-sage'

  return (
    <footer className="mt-16 bg-teal-dark pb-24 text-ivory sm:mt-24 lg:pb-0">
      <div className="container-x py-10 md:py-14">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="flex items-center justify-between md:col-span-5 md:block">
            <div>
              <Logo light />
              <p className="mt-4 hidden max-w-xs text-sm leading-relaxed text-ivory/60 md:block">{t.footer.tagline}</p>
            </div>
            <div className="flex gap-2 md:mt-6">
              {socials.map(({ href, I, n }) => (
                <a key={n} href={href} target="_blank" rel="noreferrer" aria-label={n} className="grid h-9 w-9 place-items-center rounded-full bg-ivory/10 text-ivory/80 transition hover:bg-ivory hover:text-teal">
                  <I size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 border-t border-ivory/10 pt-8 md:col-span-7 md:grid-cols-7 md:gap-10 md:border-0 md:pt-0">
            {/* Explore */}
            <nav className="md:col-span-3" aria-label={t.footer.explore}>
              <h3 className={heading}>{t.footer.explore}</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {links.map((x) => <li key={x.to}><Link to={x.to} className="text-ivory/70 transition hover:text-ivory">{x.label}</Link></li>)}
              </ul>
            </nav>

            {/* Clinic */}
            <div className="md:col-span-4">
              <h3 className={heading}>{t.footer.clinic}</h3>
              <ul className="mt-4 space-y-3 text-sm text-ivory/70">
                <li><a href={`tel:${settings.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 transition hover:text-ivory"><Phone size={14} className="shrink-0 text-sage" />{settings.phone}</a></li>
                <li><a href={`mailto:${settings.email}`} className="flex items-center gap-2 break-all transition hover:text-ivory"><Mail size={14} className="shrink-0 text-sage" />{settings.email}</a></li>
                <li className="flex gap-2 leading-relaxed"><MapPin size={14} className="mt-1 shrink-0 text-sage" />{l(settings.address)}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-x flex flex-col gap-1 py-5 text-xs text-ivory/45 md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} {l(doctor.name)}. {t.footer.rights}</span>
          <span className="hidden md:block">{t.footer.note}</span>
        </div>
      </div>
    </footer>
  )
}
