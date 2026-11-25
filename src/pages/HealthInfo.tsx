import Disclaimer from '../components/Disclaimer'
import GuideLibrary from '../components/GuideLibrary'
import PageHero from '../components/PageHero'
import PageTransition from '../components/PageTransition'
import { useLang } from '../context/LanguageContext'

export default function HealthInfo() {
  const { t } = useLang()
  return (
    <PageTransition>
      <PageHero
        backTo={{ to: '/', label: t.nav.home }}
        title={t.health.title}
        text={t.health.text}
      />
      <GuideLibrary section="all" />
      <div className="container-x mt-8 sm:mt-16"><Disclaimer /></div>
    </PageTransition>
  )
}
