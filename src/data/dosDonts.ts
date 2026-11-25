import type { Guide, Lang } from './types'

export interface DosDonts { dos: string[]; donts: string[] }

/** Dos & Don'ts per guide slug. Appended to each guide body as "+ do" / "x don't" lines. */
export const dosDonts: Record<string, Record<Lang, DosDonts>> = {
  'fever-in-children': {
    en: {
      dos: ['Check temperature with a digital thermometer', 'Give plenty of fluids and light food', 'Dress your child in light cotton clothes'],
      donts: ['Don’t wrap your child in blankets', 'Don’t sponge with cold water or alcohol', 'Don’t ignore warning signs if your child seems very unwell'],
    },
    kn: {
      dos: ['ಡಿಜಿಟಲ್ ಥರ್ಮಾಮೀಟರ್‌ನಿಂದ ತಾಪಮಾನ ಪರಿಶೀಲಿಸಿ', 'ಸಾಕಷ್ಟು ದ್ರವ ಮತ್ತು ಹಗುರ ಆಹಾರ ಕೊಡಿ', 'ಹಗುರವಾದ ಹತ್ತಿ ಬಟ್ಟೆ ತೊಡಿಸಿ'],
      donts: ['ಕಂಬಳಿಯಲ್ಲಿ ಸುತ್ತಬೇಡಿ', 'ತಣ್ಣೀರು ಅಥವಾ ಆಲ್ಕೋಹಾಲ್‌ನಿಂದ ಒರೆಸಬೇಡಿ', 'ಮಗು ತುಂಬಾ ಅಸ್ವಸ್ಥವಾಗಿ ಕಂಡರೆ ನಿರ್ಲಕ್ಷಿಸಬೇಡಿ'],
    },
  },
  'vaccination-schedule': {
    en: {
      dos: ['Keep the vaccination card safe and bring it to every visit', 'Feed or cuddle your baby during the shot', 'Use a cool compress on the injection site', 'Ask about catch-up doses if one was missed'],
      donts: ['Don’t delay vaccines for a mild cold', 'Don’t rub or apply oil on the injection site', 'Don’t skip boosters', 'Don’t believe unverified social media claims'],
    },
    kn: {
      dos: ['ಲಸಿಕೆ ಕಾರ್ಡ್ ಸುರಕ್ಷಿತವಾಗಿಟ್ಟು ಪ್ರತಿ ಭೇಟಿಗೂ ತನ್ನಿ', 'ಲಸಿಕೆ ವೇಳೆ ಮಗುವಿಗೆ ಹಾಲುಣಿಸಿ ಅಥವಾ ಅಪ್ಪಿಕೊಳ್ಳಿ', 'ಚುಚ್ಚಿದ ಜಾಗಕ್ಕೆ ತಣ್ಣನೆಯ ಬಟ್ಟೆ ಇಡಿ', 'ಡೋಸ್ ತಪ್ಪಿದ್ದರೆ ಕ್ಯಾಚ್-ಅಪ್ ಬಗ್ಗೆ ಕೇಳಿ'],
      donts: ['ಸಣ್ಣ ನೆಗಡಿಗೆ ಲಸಿಕೆ ಮುಂದೂಡಬೇಡಿ', 'ಚುಚ್ಚಿದ ಜಾಗವನ್ನು ಉಜ್ಜಬೇಡಿ ಅಥವಾ ಎಣ್ಣೆ ಹಚ್ಚಬೇಡಿ', 'ಬೂಸ್ಟರ್ ಡೋಸ್ ಬಿಡಬೇಡಿ', 'ಪರಿಶೀಲಿಸದ ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ ಸುದ್ದಿಗಳನ್ನು ನಂಬಬೇಡಿ'],
    },
  },
  'starting-solid-foods': {
    en: {
      dos: ['Start at around 6 months', 'Introduce one new food every 3 days', 'Let your baby sit upright while eating', 'Continue breastfeeding'],
      donts: ['Don’t add salt, sugar or honey', 'Don’t force-feed or distract with screens', 'Don’t give whole nuts or hard pieces', 'Don’t start before 4 months'],
    },
    kn: {
      dos: ['ಸುಮಾರು 6 ತಿಂಗಳಲ್ಲಿ ಆರಂಭಿಸಿ', '3 ದಿನಕ್ಕೊಮ್ಮೆ ಒಂದು ಹೊಸ ಆಹಾರ ಪರಿಚಯಿಸಿ', 'ತಿನ್ನುವಾಗ ಮಗುವನ್ನು ನೇರವಾಗಿ ಕೂರಿಸಿ', 'ಎದೆಹಾಲು ಮುಂದುವರಿಸಿ'],
      donts: ['ಉಪ್ಪು, ಸಕ್ಕರೆ ಅಥವಾ ಜೇನುತುಪ್ಪ ಸೇರಿಸಬೇಡಿ', 'ಬಲವಂತವಾಗಿ ತಿನ್ನಿಸಬೇಡಿ ಅಥವಾ ಪರದೆ ತೋರಿಸಬೇಡಿ', 'ಇಡೀ ಬೀಜಗಳು ಅಥವಾ ಗಟ್ಟಿ ತುಂಡುಗಳನ್ನು ಕೊಡಬೇಡಿ', '4 ತಿಂಗಳ ಮೊದಲು ಆರಂಭಿಸಬೇಡಿ'],
    },
  },
  'cough-and-cold': {
    en: {
      dos: ['Offer warm fluids', 'Let your child rest', 'Wash hands often to prevent spread'],
      donts: ['Don’t give honey under 1 year', 'Don’t smoke near your child'],
    },
    kn: {
      dos: ['ಬೆಚ್ಚಗಿನ ದ್ರವ ಕೊಡಿ', 'ಮಗುವಿಗೆ ವಿಶ್ರಾಂತಿ ನೀಡಿ', 'ಹರಡುವುದನ್ನು ತಡೆಯಲು ಆಗಾಗ ಕೈ ತೊಳೆಯಿರಿ'],
      donts: ['1 ವರ್ಷದೊಳಗೆ ಜೇನುತುಪ್ಪ ಕೊಡಬೇಡಿ', 'ಮಗುವಿನ ಹತ್ತಿರ ಧೂಮಪಾನ ಮಾಡಬೇಡಿ'],
    },
  },
  'loose-motions-and-dehydration': {
    en: {
      dos: ['Give ORS after every loose stool', 'Continue breastfeeding and normal meals', 'Watch the number of wet nappies'],
      donts: ['Don’t give fruit juices or soft drinks', 'Don’t stop feeding your child', 'Don’t dilute or over-concentrate ORS'],
    },
    kn: {
      dos: ['ಪ್ರತಿ ಭೇದಿಯ ನಂತರ ಒಆರ್‌ಎಸ್ ಕೊಡಿ', 'ಎದೆಹಾಲು ಮತ್ತು ಸಾಮಾನ್ಯ ಊಟ ಮುಂದುವರಿಸಿ', 'ಮೂತ್ರ ವಿಸರ್ಜನೆಯ ಸಂಖ್ಯೆ ಗಮನಿಸಿ'],
      donts: ['ಹಣ್ಣಿನ ರಸ ಅಥವಾ ತಂಪು ಪಾನೀಯ ಕೊಡಬೇಡಿ', 'ಆಹಾರ ಕೊಡುವುದನ್ನು ನಿಲ್ಲಿಸಬೇಡಿ', 'ಒಆರ್‌ಎಸ್ ಅನ್ನು ತೆಳು ಅಥವಾ ದಪ್ಪ ಮಾಡಬೇಡಿ'],
    },
  },
  'eczema-in-babies': {
    en: {
      dos: ['Moisturise at least twice daily', 'Use mild, fragrance-free cleansers', 'Dress your child in soft cotton', 'Keep nails short to prevent scratching'],
      donts: ['Don’t use hot water for baths', 'Don’t use scented soaps or powders', 'Don’t let your child overheat', 'Don’t stop prescribed creams suddenly'],
    },
    kn: {
      dos: ['ದಿನಕ್ಕೆ ಕನಿಷ್ಠ ಎರಡು ಬಾರಿ ಮಾಯಿಶ್ಚರೈಸ್ ಮಾಡಿ', 'ಸೌಮ್ಯ, ಸುಗಂಧರಹಿತ ಕ್ಲೆನ್ಸರ್ ಬಳಸಿ', 'ಮೃದು ಹತ್ತಿ ಬಟ್ಟೆ ತೊಡಿಸಿ', 'ಕೆರೆಯದಂತೆ ಉಗುರು ಚಿಕ್ಕದಾಗಿಡಿ'],
      donts: ['ಸ್ನಾನಕ್ಕೆ ಬಿಸಿನೀರು ಬಳಸಬೇಡಿ', 'ಸುಗಂಧಯುಕ್ತ ಸೋಪು ಅಥವಾ ಪೌಡರ್ ಬಳಸಬೇಡಿ', 'ಮಗುವಿಗೆ ಅತಿಯಾದ ಬಿಸಿ ಆಗದಂತೆ ನೋಡಿ', 'ಸೂಚಿಸಿದ ಕ್ರೀಮ್ ಅನ್ನು ಹಠಾತ್ ನಿಲ್ಲಿಸಬೇಡಿ'],
    },
  },
  'picky-eating': {
    en: {
      dos: ['Eat together as a family', 'Offer small portions and new foods repeatedly', 'Keep regular meal and snack times', 'Praise trying, not finishing'],
      donts: ['Don’t force, bribe or punish', 'Don’t use screens at mealtimes', 'Don’t fill up on milk or juice between meals', 'Don’t cook separate meals every time'],
    },
    kn: {
      dos: ['ಕುಟುಂಬದೊಂದಿಗೆ ಒಟ್ಟಿಗೆ ಊಟ ಮಾಡಿ', 'ಸಣ್ಣ ಪ್ರಮಾಣದಲ್ಲಿ, ಹೊಸ ಆಹಾರ ಮತ್ತೆ ಮತ್ತೆ ಕೊಡಿ', 'ನಿಯಮಿತ ಊಟ ಮತ್ತು ತಿಂಡಿ ಸಮಯ ಇಡಿ', 'ಮುಗಿಸಿದ್ದಕ್ಕಲ್ಲ, ಪ್ರಯತ್ನಿಸಿದ್ದಕ್ಕೆ ಮೆಚ್ಚಿ'],
      donts: ['ಬಲವಂತ, ಆಮಿಷ ಅಥವಾ ಶಿಕ್ಷೆ ಬೇಡ', 'ಊಟದ ಸಮಯದಲ್ಲಿ ಪರದೆ ಬೇಡ', 'ಊಟಗಳ ನಡುವೆ ಹಾಲು ಅಥವಾ ರಸದಿಂದ ಹೊಟ್ಟೆ ತುಂಬಿಸಬೇಡಿ', 'ಪ್ರತಿ ಬಾರಿ ಪ್ರತ್ಯೇಕ ಅಡುಗೆ ಮಾಡಬೇಡಿ'],
    },
  },
  'developmental-milestones': {
    en: {
      dos: ['Talk, sing and read to your child every day', 'Give plenty of floor and outdoor play time', 'Use corrected age for premature babies', 'Share any concern early with your pediatrician'],
      donts: ['Don’t compare your child with others', 'Don’t use screens under 2 years', 'Don’t ignore loss of skills', 'Don’t “wait and see” if you are worried'],
    },
    kn: {
      dos: ['ಪ್ರತಿದಿನ ಮಗುವಿನೊಂದಿಗೆ ಮಾತನಾಡಿ, ಹಾಡಿ, ಓದಿ', 'ನೆಲದ ಮೇಲೆ ಮತ್ತು ಹೊರಗೆ ಸಾಕಷ್ಟು ಆಟ ಆಡಿಸಿ', 'ಅವಧಿಪೂರ್ವ ಶಿಶುಗಳಿಗೆ ಸರಿಪಡಿಸಿದ ವಯಸ್ಸು ಬಳಸಿ', 'ಯಾವುದೇ ಆತಂಕವನ್ನು ಬೇಗ ವೈದ್ಯರಿಗೆ ತಿಳಿಸಿ'],
      donts: ['ನಿಮ್ಮ ಮಗುವನ್ನು ಇತರರೊಂದಿಗೆ ಹೋಲಿಸಬೇಡಿ', '2 ವರ್ಷದೊಳಗೆ ಪರದೆ ಬೇಡ', 'ಕೌಶಲ್ಯ ಕಳೆದುಕೊಳ್ಳುವುದನ್ನು ನಿರ್ಲಕ್ಷಿಸಬೇಡಿ', 'ಆತಂಕವಿದ್ದರೆ "ಕಾದು ನೋಡೋಣ" ಎನ್ನಬೇಡಿ'],
    },
  },
  'healthy-sleep-habits': {
    en: {
      dos: ['Keep the same bedtime every night', 'Follow a calm bath–book–bed routine', 'Place babies on their back to sleep', 'Keep the room dark and cool'],
      donts: ['Don’t use screens an hour before bed', 'Don’t put pillows or soft toys in a baby’s cot', 'Don’t give sugary snacks at night', 'Don’t use bedtime as a punishment'],
    },
    kn: {
      dos: ['ಪ್ರತಿ ರಾತ್ರಿ ಒಂದೇ ಸಮಯಕ್ಕೆ ಮಲಗಿಸಿ', 'ಸ್ನಾನ–ಕಥೆ–ನಿದ್ರೆ ದಿನಚರಿ ಪಾಲಿಸಿ', 'ಶಿಶುಗಳನ್ನು ಬೆನ್ನಿನ ಮೇಲೆ ಮಲಗಿಸಿ', 'ಕೋಣೆಯನ್ನು ಕತ್ತಲು ಮತ್ತು ತಂಪಾಗಿಡಿ'],
      donts: ['ಮಲಗುವ ಒಂದು ಗಂಟೆ ಮೊದಲು ಪರದೆ ಬೇಡ', 'ಶಿಶುವಿನ ತೊಟ್ಟಿಲಲ್ಲಿ ದಿಂಬು ಅಥವಾ ಮೃದು ಆಟಿಕೆ ಇಡಬೇಡಿ', 'ರಾತ್ರಿ ಸಿಹಿ ತಿಂಡಿ ಕೊಡಬೇಡಿ', 'ನಿದ್ರೆಯನ್ನು ಶಿಕ್ಷೆಯಾಗಿ ಬಳಸಬೇಡಿ'],
    },
  },
  'hand-washing-and-hygiene': {
    en: {
      dos: ['Wash with soap for at least 20 seconds', 'Wash before meals and after the toilet', 'Teach covering coughs with the elbow', 'Keep nails short and clean'],
      donts: ['Don’t share towels or water bottles', 'Don’t rely only on sanitiser when hands look dirty', 'Don’t let kids eat with unwashed hands after play', 'Don’t skip drying hands properly'],
    },
    kn: {
      dos: ['ಕನಿಷ್ಠ 20 ಸೆಕೆಂಡ್ ಸೋಪಿನಿಂದ ತೊಳೆಯಿರಿ', 'ಊಟದ ಮೊದಲು ಮತ್ತು ಶೌಚದ ನಂತರ ತೊಳೆಯಿರಿ', 'ಮೊಣಕೈಯಿಂದ ಕೆಮ್ಮು ಮುಚ್ಚಲು ಕಲಿಸಿ', 'ಉಗುರುಗಳನ್ನು ಚಿಕ್ಕದಾಗಿ, ಸ್ವಚ್ಛವಾಗಿಡಿ'],
      donts: ['ಟವೆಲ್ ಅಥವಾ ನೀರಿನ ಬಾಟಲ್ ಹಂಚಿಕೊಳ್ಳಬೇಡಿ', 'ಕೈ ಕೊಳಕಾಗಿದ್ದಾಗ ಸ್ಯಾನಿಟೈಸರ್ ಮಾತ್ರ ನಂಬಬೇಡಿ', 'ಆಟದ ನಂತರ ತೊಳೆಯದ ಕೈಯಲ್ಲಿ ತಿನ್ನಲು ಬಿಡಬೇಡಿ', 'ಕೈ ಸರಿಯಾಗಿ ಒರೆಸುವುದನ್ನು ಮರೆಯಬೇಡಿ'],
    },
  },
}

const heading: Record<Lang, string> = { en: '## Dos & Don’ts', kn: '## ಮಾಡಬೇಕಾದದ್ದು ಮತ್ತು ಮಾಡಬಾರದ್ದು' }

function toText(d: DosDonts, lang: Lang) {
  return `\n\n${heading[lang]}\n${d.dos.map((x) => `+ ${x}`).join('\n')}\n${d.donts.map((x) => `x ${x}`).join('\n')}`
}

/** Inserts the Dos & Don'ts section before the first warning box (or at the end). */
export function withDosDonts(g: Guide): Guide {
  const d = dosDonts[g.slug]
  if (!d) return g
  const inject = (body: string, lang: Lang) => {
    const idx = body.indexOf('\n! ')
    const block = toText(d[lang], lang)
    return idx === -1 ? body + block : body.slice(0, idx) + block + '\n' + body.slice(idx)
  }
  return { ...g, en: { ...g.en, body: inject(g.en.body, 'en') }, kn: { ...g.kn, body: inject(g.kn.body, 'kn') } }
}
