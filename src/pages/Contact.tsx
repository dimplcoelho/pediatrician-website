import { Clock, Facebook, Instagram, MapPin, MessageCircle, Navigation, Phone, Siren, Youtube } from 'lucide-react'
import PageHero from '../components/PageHero'
import PageTransition from '../components/PageTransition'
import { Reveal, Stagger, StaggerItem } from '../components/Reveal'
import { useContent } from '../context/ContentContext'
import { useLang } from '../context/LanguageContext'
import { whatsappChat } from '../lib/utils'

export default function Contact() {
  const { t, l } = useLang()
  const { settings } = useContent()
  const tel = `tel:${settings.phone.replace(/\s/g, '')}`

  return (
    <PageTransition>
      <PageHero eyebrow={t.contact.eyebrow} title={t.contact.title} text={t.contact.text} />
      <section className="container-x grid gap-5 sm:gap-8 lg:grid-cols-5">
        <Stagger className="space-y-3 sm:space-y-5 lg:col-span-2">
          <StaggerItem>
            <div className="rounded-2xl border border-teal/[0.08] bg-white p-5 shadow-soft sm:rounded-3xl sm:p-8">
              <div className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl sm:h-12 sm:w-12 sm:rounded-2xl bg-[#dce9f5] text-[#2c6a92]"><MapPin size={22} /></span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#2c6a92]">{t.contact.address}</p>
                  <p className="mt-1 font-semibold text-teal">{l(settings.clinicName)}</p>
                  <p className="mt-1 text-muted">{l(settings.address)}</p>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(settings.mapQuery)}`} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2c6a92] hover:underline underline-offset-4"><Navigation size={14} />{t.common.directions}</a>
                </div>
              </div>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="rounded-2xl border border-teal/[0.08] bg-white p-5 shadow-soft sm:rounded-3xl sm:p-8">
              <div className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl sm:h-12 sm:w-12 sm:rounded-2xl bg-[#e1ece0] text-[#42613d]"><Phone size={22} /></span>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#42613d]">{t.contact.phone}</p>
                  <a href={tel} className="mt-1 block font-display text-xl font-semibold text-teal sm:text-2xl">{settings.phone}</a>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a href={tel} className="btn-primary px-5 py-2.5"><Phone size={15} />{t.common.callNow}</a>
                    <a href={whatsappChat(settings.whatsapp)} target="_blank" rel="noreferrer" className="btn-whatsapp px-5 py-2.5"><MessageCircle size={15} />{t.common.whatsapp}</a>
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="rounded-2xl border border-teal/[0.08] bg-white p-5 shadow-soft sm:rounded-3xl sm:p-8">
              <div className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl sm:h-12 sm:w-12 sm:rounded-2xl bg-[#faeed6] text-[#9c6a1b]"><Clock size={22} /></span>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#9c6a1b]">{t.contact.timings}</p>
                  <ul className="mt-2 divide-y divide-teal/10">
                    {settings.timings.map((x) => (
                      <li key={x.days.en} className="flex flex-col py-2.5 sm:flex-row sm:justify-between sm:gap-4">
                        <span className="font-semibold text-teal">{l(x.days)}</span>
                        <span className="text-sm text-muted sm:text-right">{x.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="rounded-2xl border border-teal/[0.08] bg-white p-5 shadow-soft sm:rounded-3xl sm:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-[#5b4c9c]">{t.contact.follow}</p>
              <div className="mt-4 flex gap-3">
                {[{ href: settings.youtubeChannel, I: Youtube, n: 'YouTube', c: 'hover:bg-[#ff0033]' }, { href: settings.instagram, I: Instagram, n: 'Instagram', c: 'hover:bg-[#d62976]' }, { href: settings.facebook, I: Facebook, n: 'Facebook', c: 'hover:bg-[#1877f2]' }].map(({ href, I, n, c }) => (
                  <a key={n} href={href} target="_blank" rel="noreferrer" aria-label={n} className={`grid h-12 w-12 place-items-center rounded-2xl bg-ivory-deep text-teal transition duration-300 hover:-translate-y-1 hover:text-white ${c}`}><I size={20} /></a>
                ))}
              </div>
            </div>
          </StaggerItem>
        </Stagger>

        <Reveal delay={0.15} className="lg:col-span-3">
          <div className="card h-full min-h-[260px] overflow-hidden p-1.5 sm:min-h-[380px] sm:p-2">
            <iframe
              title="Clinic location"
              className="h-full min-h-[260px] w-full rounded-xl sm:min-h-[380px] sm:rounded-[1.25rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(settings.mapQuery)}&z=15&output=embed`}
            />
          </div>
        </Reveal>
      </section>

      <section className="container-x mt-4 sm:mt-10">
        <Reveal>
          <div className="flex gap-4 rounded-2xl border border-coral/30 bg-[#fdf0eb] p-4 sm:rounded-3xl sm:p-8">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-coral text-white sm:h-12 sm:w-12 sm:rounded-2xl"><Siren size={20} /></span>
            <div>
              <p className="font-display text-lg font-semibold text-teal sm:text-xl">{t.contact.emergencyTitle}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink/80 sm:text-base">{t.contact.emergencyText}</p>
            </div>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  )
}
