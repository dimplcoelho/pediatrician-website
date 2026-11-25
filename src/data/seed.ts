import { withDosDonts } from './dosDonts'
import { guideImages } from './images'
import type { Category, ClinicSettings, DoctorProfile, Guide, Localized, Video } from './types'

/* ------------------------------------------------------------------
 * Placeholder content. Replace with the doctor's real details.
 * In production this comes from the Spring Boot API; here it seeds
 * the in-browser store (see context/ContentContext.tsx).
 * ------------------------------------------------------------------ */

export const seedDoctor: DoctorProfile = {
  name: { en: 'Dr. Manjunath', kn: 'ಡಾ. ಮಂಜುನಾಥ್' },
  title: { en: 'Consultant Pediatrician & Neonatologist', kn: 'ಸಲಹಾ ಮಕ್ಕಳ ತಜ್ಞರು ಮತ್ತು ನವಜಾತ ಶಿಶು ತಜ್ಞರು' },
  intro: {
    en: 'Caring for little ones from their very first breath through their teenage years, with patience, warmth and evidence-based care.',
    kn: 'ಮಗುವಿನ ಮೊದಲ ಉಸಿರಿನಿಂದ ಹದಿಹರೆಯದವರೆಗೆ ತಾಳ್ಮೆ, ಆತ್ಮೀಯತೆ ಮತ್ತು ವೈಜ್ಞಾನಿಕ ಆಧಾರಿತ ಆರೈಕೆ.',
  },
  welcome: {
    en: 'Every child is unique, and so is every parent’s worry. This website is my way of sharing reliable, doctor-reviewed guidance so you can make confident decisions for your child’s health between visits and beyond.',
    kn: 'ಪ್ರತಿ ಮಗುವೂ ವಿಶಿಷ್ಟ, ಹಾಗೆಯೇ ಪ್ರತಿ ಪೋಷಕರ ಚಿಂತೆಯೂ. ನಿಮ್ಮ ಮಗುವಿನ ಆರೋಗ್ಯದ ಬಗ್ಗೆ ಆತ್ಮವಿಶ್ವಾಸದಿಂದ ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳಲು ನೆರವಾಗುವ ವಿಶ್ವಾಸಾರ್ಹ, ವೈದ್ಯರು ಪರಿಶೀಲಿಸಿದ ಮಾಹಿತಿಯನ್ನು ಹಂಚಿಕೊಳ್ಳುವುದು ಈ ವೆಬ್‌ಸೈಟ್‌ನ ಉದ್ದೇಶ.',
  },
  approach: {
    en: 'I believe in listening first. Parents know their children best, so every consultation is a partnership. I explain the “why” behind each recommendation, and focus on prevention, nutrition and healthy development as much as treatment.',
    kn: 'ಮೊದಲು ಕೇಳುವುದರಲ್ಲಿ ನನಗೆ ನಂಬಿಕೆ. ಪೋಷಕರಿಗೆ ತಮ್ಮ ಮಕ್ಕಳ ಬಗ್ಗೆ ಹೆಚ್ಚು ತಿಳಿದಿರುತ್ತದೆ, ಆದ್ದರಿಂದ ಪ್ರತಿ ಸಮಾಲೋಚನೆಯೂ ಒಂದು ಸಹಭಾಗಿತ್ವ. ಪ್ರತಿ ಸಲಹೆಯ ಹಿಂದಿನ ಕಾರಣವನ್ನು ವಿವರಿಸುತ್ತೇನೆ ಮತ್ತು ಚಿಕಿತ್ಸೆಯಷ್ಟೇ ತಡೆಗಟ್ಟುವಿಕೆ, ಪೋಷಣೆ ಹಾಗೂ ಆರೋಗ್ಯಕರ ಬೆಳವಣಿಗೆಗೆ ಗಮನ ಕೊಡುತ್ತೇನೆ.',
  },
  yearsExperience: 15,
  familiesCared: '20,000+',
  qualifications: [
    { degree: 'MBBS', institution: { en: 'Bangalore Medical College & Research Institute', kn: 'ಬೆಂಗಳೂರು ವೈದ್ಯಕೀಯ ಕಾಲೇಜು ಮತ್ತು ಸಂಶೋಧನಾ ಸಂಸ್ಥೆ' }, year: '2006' },
    { degree: 'MD (Pediatrics)', institution: { en: 'JSS Medical College, Mysuru', kn: 'ಜೆಎಸ್‌ಎಸ್ ವೈದ್ಯಕೀಯ ಕಾಲೇಜು, ಮೈಸೂರು' }, year: '2010' },
    { degree: 'Fellowship in Neonatology', institution: { en: 'Indian Academy of Pediatrics', kn: 'ಭಾರತೀಯ ಮಕ್ಕಳ ವೈದ್ಯಕೀಯ ಅಕಾಡೆಮಿ' }, year: '2012' },
  ],
  journey: [
    { year: '2010', title: { en: 'Residency & early practice', kn: 'ರೆಸಿಡೆನ್ಸಿ ಮತ್ತು ಆರಂಭಿಕ ಸೇವೆ' }, text: { en: 'Completed MD in Pediatrics with a special interest in newborn care.', kn: 'ನವಜಾತ ಶಿಶು ಆರೈಕೆಯಲ್ಲಿ ವಿಶೇಷ ಆಸಕ್ತಿಯೊಂದಿಗೆ ಮಕ್ಕಳ ವೈದ್ಯಕೀಯದಲ್ಲಿ ಎಂಡಿ ಪೂರ್ಣಗೊಳಿಸಿದರು.' } },
    { year: '2012', title: { en: 'Neonatal intensive care', kn: 'ನವಜಾತ ತೀವ್ರ ನಿಗಾ ಘಟಕ' }, text: { en: 'Led the NICU team at a tertiary care hospital in Bengaluru.', kn: 'ಬೆಂಗಳೂರಿನ ಪ್ರಮುಖ ಆಸ್ಪತ್ರೆಯಲ್ಲಿ ಎನ್‌ಐಸಿಯು ತಂಡವನ್ನು ಮುನ್ನಡೆಸಿದರು.' } },
    { year: '2016', title: { en: 'Own practice', kn: 'ಸ್ವಂತ ಕ್ಲಿನಿಕ್' }, text: { en: 'Founded a family-friendly pediatric clinic focused on preventive care.', kn: 'ತಡೆಗಟ್ಟುವ ಆರೈಕೆಗೆ ಒತ್ತು ನೀಡುವ ಕುಟುಂಬ ಸ್ನೇಹಿ ಮಕ್ಕಳ ಕ್ಲಿನಿಕ್ ಸ್ಥಾಪಿಸಿದರು.' } },
    { year: '2021', title: { en: 'Parent education', kn: 'ಪೋಷಕರ ಶಿಕ್ಷಣ' }, text: { en: 'Started a bilingual YouTube channel answering parents’ everyday questions.', kn: 'ಪೋಷಕರ ದಿನನಿತ್ಯದ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸುವ ದ್ವಿಭಾಷಾ ಯೂಟ್ಯೂಬ್ ಚಾನೆಲ್ ಆರಂಭಿಸಿದರು.' } },
  ],
  specialisations: [
    { en: 'Newborn & premature baby care', kn: 'ನವಜಾತ ಮತ್ತು ಅವಧಿಪೂರ್ವ ಶಿಶು ಆರೈಕೆ' },
    { en: 'Vaccinations & preventive care', kn: 'ಲಸಿಕೆ ಮತ್ತು ತಡೆಗಟ್ಟುವ ಆರೈಕೆ' },
    { en: 'Growth & developmental assessment', kn: 'ಬೆಳವಣಿಗೆ ಮತ್ತು ವಿಕಾಸ ಮೌಲ್ಯಮಾಪನ' },
    { en: 'Childhood nutrition', kn: 'ಮಕ್ಕಳ ಪೋಷಣೆ' },
    { en: 'Allergies & asthma', kn: 'ಅಲರ್ಜಿ ಮತ್ತು ಅಸ್ತಮಾ' },
    { en: 'Adolescent health', kn: 'ಹದಿಹರೆಯದ ಆರೋಗ್ಯ' },
  ],
}

export const seedSettings: ClinicSettings = {
  clinicName: { en: 'Little Steps Child Clinic', kn: 'ಲಿಟಲ್ ಸ್ಟೆಪ್ಸ್ ಮಕ್ಕಳ ಕ್ಲಿನಿಕ್' },
  address: {
    en: '#24, 2nd Floor, 7th Cross, Jayanagar 4th Block, Bengaluru – 560011',
    kn: '#24, 2ನೇ ಮಹಡಿ, 7ನೇ ಅಡ್ಡರಸ್ತೆ, ಜಯನಗರ 4ನೇ ಬ್ಲಾಕ್, ಬೆಂಗಳೂರು – 560011',
  },
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
  email: 'hello@example.com',
  mapQuery: 'Jayanagar 4th Block, Bengaluru',
  timings: [
    { days: { en: 'Monday – Friday', kn: 'ಸೋಮವಾರ – ಶುಕ್ರವಾರ' }, hours: '10:00 AM – 1:30 PM · 5:30 PM – 8:30 PM' },
    { days: { en: 'Saturday', kn: 'ಶನಿವಾರ' }, hours: '10:00 AM – 2:00 PM' },
    { days: { en: 'Sunday', kn: 'ಭಾನುವಾರ' }, hours: 'Emergencies only' },
  ],
  youtubeChannel: 'https://www.youtube.com/',
  instagram: 'https://www.instagram.com/',
  facebook: 'https://www.facebook.com/',
}

export const seedCategories: Category[] = [
  { id: 'fever', icon: 'thermometer', image: '/images/guide-fever.jpg', section: 'health', name: { en: 'Fever, Cough & Cold', kn: 'ಜ್ವರ, ಕೆಮ್ಮು ಮತ್ತು ನೆಗಡಿ' }, description: { en: 'Fevers, coughs and colds are the most common reasons parents call the clinic. Learn what’s normal, how to keep your child comfortable at home, and which warning signs mean it’s time to see the doctor.', kn: 'ಜ್ವರ, ಕೆಮ್ಮು ಮತ್ತು ನೆಗಡಿ ಪೋಷಕರು ಕ್ಲಿನಿಕ್‌ಗೆ ಕರೆ ಮಾಡುವ ಸಾಮಾನ್ಯ ಕಾರಣಗಳು. ಯಾವುದು ಸಾಮಾನ್ಯ, ಮನೆಯಲ್ಲೇ ಮಗುವನ್ನು ಹೇಗೆ ಆರಾಮವಾಗಿಡುವುದು ಮತ್ತು ಯಾವ ಅಪಾಯದ ಲಕ್ಷಣಗಳು ಕಂಡರೆ ವೈದ್ಯರನ್ನು ಕಾಣಬೇಕು ಎಂದು ತಿಳಿಯಿರಿ.' } },
  { id: 'digestion', icon: 'apple', image: '/images/guide-loose-motions.jpg', section: 'health', name: { en: 'Digestion & Stomach Health', kn: 'ಜೀರ್ಣಕ್ರಿಯೆ ಮತ್ತು ಹೊಟ್ಟೆಯ ಆರೋಗ್ಯ' }, description: { en: 'Loose motions, vomiting, constipation and colic can worry any parent. Find out how to prevent dehydration, what to feed during an upset tummy, and when stomach trouble needs medical attention.', kn: 'ಭೇದಿ, ವಾಂತಿ, ಮಲಬದ್ಧತೆ ಮತ್ತು ಹೊಟ್ಟೆ ನೋವು ಯಾವುದೇ ಪೋಷಕರನ್ನು ಚಿಂತೆಗೀಡುಮಾಡಬಹುದು. ನಿರ್ಜಲೀಕರಣ ತಡೆಯುವುದು ಹೇಗೆ, ಹೊಟ್ಟೆ ಕೆಟ್ಟಾಗ ಏನು ತಿನ್ನಿಸಬೇಕು ಮತ್ತು ಯಾವಾಗ ವೈದ್ಯಕೀಯ ಸಹಾಯ ಬೇಕು ಎಂದು ತಿಳಿಯಿರಿ.' } },
  { id: 'skin', icon: 'sparkles', image: '/images/guide-eczema.jpg', section: 'health', name: { en: 'Skin Conditions & Allergies', kn: 'ಚರ್ಮದ ಸಮಸ್ಯೆಗಳು ಮತ್ತು ಅಲರ್ಜಿ' }, description: { en: 'A child’s skin is delicate and reacts easily. Learn to recognise common rashes, care for eczema and dry skin, manage allergies, and know which signs need a doctor’s visit.', kn: 'ಮಗುವಿನ ಚರ್ಮ ಮೃದುವಾಗಿದ್ದು ಬೇಗ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತದೆ. ಸಾಮಾನ್ಯ ದದ್ದುಗಳನ್ನು ಗುರುತಿಸುವುದು, ಎಕ್ಸಿಮಾ ಮತ್ತು ಒಣ ಚರ್ಮದ ಆರೈಕೆ, ಅಲರ್ಜಿ ನಿರ್ವಹಣೆ ಮತ್ತು ಯಾವ ಲಕ್ಷಣಗಳಿಗೆ ವೈದ್ಯರನ್ನು ಕಾಣಬೇಕು ಎಂದು ತಿಳಿಯಿರಿ.' } },
  { id: 'vaccination', icon: 'syringe', image: '/images/guide-vaccination.jpg', section: 'health', name: { en: 'Vaccination Guidance', kn: 'ಲಸಿಕೆ ಮಾರ್ಗದರ್ಶನ' }, description: { en: 'Vaccines protect your child from serious illnesses. Keep track of the recommended schedule, know what to expect after each shot, and get clear answers to common vaccine myths.', kn: 'ಲಸಿಕೆಗಳು ನಿಮ್ಮ ಮಗುವನ್ನು ಗಂಭೀರ ಕಾಯಿಲೆಗಳಿಂದ ರಕ್ಷಿಸುತ್ತವೆ. ಶಿಫಾರಸು ಮಾಡಲಾದ ವೇಳಾಪಟ್ಟಿ, ಪ್ರತಿ ಲಸಿಕೆಯ ನಂತರ ಏನನ್ನು ನಿರೀಕ್ಷಿಸಬೇಕು ಮತ್ತು ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆಗಳಿಗೆ ಸ್ಪಷ್ಟ ಉತ್ತರಗಳನ್ನು ತಿಳಿಯಿರಿ.' } },
  { id: 'care', icon: 'heart', image: '/images/guide-hygiene.jpg', section: 'health', name: { en: 'General Child Care', kn: 'ಸಾಮಾನ್ಯ ಮಕ್ಕಳ ಆರೈಕೆ' }, description: { en: 'Small daily habits make a big difference to a child’s health. Practical tips on hygiene, hand-washing and everyday routines that help prevent infections and keep your child happy and active.', kn: 'ಸಣ್ಣ ದಿನನಿತ್ಯದ ಅಭ್ಯಾಸಗಳು ಮಗುವಿನ ಆರೋಗ್ಯದಲ್ಲಿ ದೊಡ್ಡ ಬದಲಾವಣೆ ತರುತ್ತವೆ. ಸೋಂಕುಗಳನ್ನು ತಡೆಯಲು ಮತ್ತು ಮಗುವನ್ನು ಸಂತೋಷವಾಗಿ, ಚುರುಕಾಗಿ ಇರಿಸಲು ಸ್ವಚ್ಛತೆ, ಕೈ ತೊಳೆಯುವುದು ಮತ್ತು ದಿನಚರಿಯ ಬಗ್ಗೆ ಉಪಯುಕ್ತ ಸಲಹೆಗಳು.' } },
  { id: 'infant-feeding', icon: 'baby', image: '/images/guide-solid-foods.jpg', section: 'nutrition', name: { en: 'Infant Feeding', kn: 'ಶಿಶು ಆಹಾರ' }, description: { en: 'Feeding your baby well in the first year builds the base for lifelong health. Guidance on breastfeeding, formula, and when and how to start solid foods safely.', kn: 'ಮೊದಲ ವರ್ಷದಲ್ಲಿ ಮಗುವಿಗೆ ಸರಿಯಾದ ಆಹಾರ ಜೀವನಪರ್ಯಂತ ಆರೋಗ್ಯಕ್ಕೆ ಅಡಿಪಾಯ. ಎದೆಹಾಲು, ಫಾರ್ಮುಲಾ ಮತ್ತು ಘನ ಆಹಾರವನ್ನು ಯಾವಾಗ, ಹೇಗೆ ಸುರಕ್ಷಿತವಾಗಿ ಆರಂಭಿಸಬೇಕು ಎಂಬ ಮಾರ್ಗದರ್ಶನ.' } },
  { id: 'toddler-nutrition', icon: 'salad', image: '/images/guide-picky-eating.jpg', section: 'nutrition', name: { en: 'Toddler Nutrition & Picky Eating', kn: 'ಪುಟ್ಟ ಮಕ್ಕಳ ಪೋಷಣೆ ಮತ್ತು ಆಹಾರದ ಹಠ' }, description: { en: 'Toddlers are often choosy about food, and that’s normal. Ideas for balanced meals, healthy snacks and calm mealtimes that help your child build good eating habits.', kn: 'ಪುಟ್ಟ ಮಕ್ಕಳು ಆಹಾರದ ವಿಷಯದಲ್ಲಿ ಹಠ ಮಾಡುವುದು ಸಾಮಾನ್ಯ. ಸಮತೋಲಿತ ಊಟ, ಆರೋಗ್ಯಕರ ತಿಂಡಿಗಳು ಮತ್ತು ಶಾಂತ ಊಟದ ಸಮಯದ ಮೂಲಕ ಮಗುವಿನಲ್ಲಿ ಉತ್ತಮ ಆಹಾರ ಅಭ್ಯಾಸ ಬೆಳೆಸುವ ಸಲಹೆಗಳು.' } },
  { id: 'growth', icon: 'ruler', image: '/images/guide-milestones.jpg', section: 'nutrition', name: { en: 'Growth & Milestones', kn: 'ಬೆಳವಣಿಗೆ ಮತ್ತು ಮೈಲಿಗಲ್ಲುಗಳು' }, description: { en: 'Every child grows at their own pace. Understand height and weight growth, the key milestones for movement, speech and play, and when a delay is worth discussing with your doctor.', kn: 'ಪ್ರತಿ ಮಗುವೂ ತನ್ನದೇ ವೇಗದಲ್ಲಿ ಬೆಳೆಯುತ್ತದೆ. ಎತ್ತರ ಮತ್ತು ತೂಕದ ಬೆಳವಣಿಗೆ, ಚಲನೆ, ಮಾತು ಮತ್ತು ಆಟದ ಪ್ರಮುಖ ಮೈಲಿಗಲ್ಲುಗಳು ಹಾಗೂ ವಿಳಂಬದ ಬಗ್ಗೆ ಯಾವಾಗ ವೈದ್ಯರೊಂದಿಗೆ ಮಾತನಾಡಬೇಕು ಎಂದು ತಿಳಿಯಿರಿ.' } },
  { id: 'sleep', icon: 'moon', image: '/images/guide-sleep.jpg', section: 'nutrition', name: { en: 'Sleep & Behaviour', kn: 'ನಿದ್ರೆ ಮತ್ತು ನಡವಳಿಕೆ' }, description: { en: 'Good sleep helps children grow, learn and manage their feelings. How much sleep your child needs at each age, how to build a calm bedtime routine, and how to handle tantrums and everyday behaviour.', kn: 'ಉತ್ತಮ ನಿದ್ರೆ ಮಕ್ಕಳು ಬೆಳೆಯಲು, ಕಲಿಯಲು ಮತ್ತು ಭಾವನೆಗಳನ್ನು ನಿಭಾಯಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಪ್ರತಿ ವಯಸ್ಸಿನಲ್ಲಿ ಎಷ್ಟು ನಿದ್ರೆ ಬೇಕು, ಶಾಂತ ಮಲಗುವ ದಿನಚರಿ ರೂಪಿಸುವುದು ಮತ್ತು ಹಠ ಹಾಗೂ ದಿನನಿತ್ಯದ ನಡವಳಿಕೆಯನ್ನು ನಿಭಾಯಿಸುವುದು ಹೇಗೆ.' } },
]

const rawGuides: Guide[] = [
  {
    id: 'g1', slug: 'fever-in-children', categoryId: 'fever', ageGroup: '0–12 years', status: 'published', featured: true, readMins: 5,
    updatedAt: '2026-10-12', reviewedAt: '2026-10-12',
    en: {
      title: 'Fever in Children: What Every Parent Should Know',
      summary: 'Fever is usually the body fighting an infection. Learn how to measure it, care for your child at home and spot warning signs.',
      body: `Fever itself is not an illness; it is a sign that your child's body is fighting an infection. Most fevers in children are caused by viral infections and settle in 2–3 days.

## How to measure temperature
- Use a digital thermometer under the arm (axilla) for children of all ages.
- A temperature of 100.4°F (38°C) or above is considered a fever.
- Avoid touching the forehead to judge fever, as it is not reliable.

## Caring for your child at home
- Offer plenty of fluids: breast milk, water, ORS, soups or coconut water.
- Dress your child in light cotton clothes; avoid wrapping in blankets.
- Let your child rest, but there is no need to force sleep.

! See a doctor immediately if your baby is under 3 months with any fever, or if your child has trouble breathing, is unusually drowsy, has a seizure, a rash that does not fade on pressing, or is not passing urine.

## When to call the clinic
If the fever lasts more than 3 days, keeps coming back, or your child seems more unwell than you'd expect, please call or WhatsApp the clinic.`,
    },
    kn: {
      title: 'ಮಕ್ಕಳಲ್ಲಿ ಜ್ವರ: ಪ್ರತಿ ಪೋಷಕರು ತಿಳಿಯಬೇಕಾದದ್ದು',
      summary: 'ಜ್ವರ ಸಾಮಾನ್ಯವಾಗಿ ದೇಹವು ಸೋಂಕಿನ ವಿರುದ್ಧ ಹೋರಾಡುತ್ತಿರುವುದರ ಸಂಕೇತ. ಅದನ್ನು ಅಳೆಯುವುದು, ಮನೆಯಲ್ಲಿ ಆರೈಕೆ ಮಾಡುವುದು ಮತ್ತು ಎಚ್ಚರಿಕೆಯ ಲಕ್ಷಣಗಳನ್ನು ಗುರುತಿಸುವುದನ್ನು ತಿಳಿಯಿರಿ.',
      body: `ಜ್ವರ ಸ್ವತಃ ಒಂದು ಕಾಯಿಲೆಯಲ್ಲ; ಅದು ನಿಮ್ಮ ಮಗುವಿನ ದೇಹ ಸೋಂಕಿನ ವಿರುದ್ಧ ಹೋರಾಡುತ್ತಿದೆ ಎಂಬುದರ ಸಂಕೇತ. ಮಕ್ಕಳಲ್ಲಿ ಹೆಚ್ಚಿನ ಜ್ವರಗಳು ವೈರಲ್ ಸೋಂಕಿನಿಂದ ಬರುತ್ತವೆ ಮತ್ತು 2–3 ದಿನಗಳಲ್ಲಿ ಕಡಿಮೆಯಾಗುತ್ತವೆ.

## ತಾಪಮಾನವನ್ನು ಅಳೆಯುವುದು ಹೇಗೆ
- ಎಲ್ಲಾ ವಯಸ್ಸಿನ ಮಕ್ಕಳಿಗೆ ಕಂಕುಳಲ್ಲಿ ಡಿಜಿಟಲ್ ಥರ್ಮಾಮೀಟರ್ ಬಳಸಿ.
- 100.4°F (38°C) ಅಥವಾ ಅದಕ್ಕಿಂತ ಹೆಚ್ಚು ತಾಪಮಾನವನ್ನು ಜ್ವರ ಎಂದು ಪರಿಗಣಿಸಲಾಗುತ್ತದೆ.
- ಹಣೆ ಮುಟ್ಟಿ ಜ್ವರ ನಿರ್ಧರಿಸಬೇಡಿ, ಅದು ವಿಶ್ವಾಸಾರ್ಹವಲ್ಲ.

## ಮನೆಯಲ್ಲಿ ಆರೈಕೆ
- ಸಾಕಷ್ಟು ದ್ರವಗಳನ್ನು ಕೊಡಿ: ಎದೆಹಾಲು, ನೀರು, ಒಆರ್‌ಎಸ್, ಸೂಪ್ ಅಥವಾ ಎಳನೀರು.
- ಹಗುರವಾದ ಹತ್ತಿ ಬಟ್ಟೆ ತೊಡಿಸಿ; ಕಂಬಳಿಯಲ್ಲಿ ಸುತ್ತಬೇಡಿ.
- ಮಗುವಿಗೆ ವಿಶ್ರಾಂತಿ ನೀಡಿ, ಆದರೆ ಬಲವಂತವಾಗಿ ಮಲಗಿಸುವ ಅಗತ್ಯವಿಲ್ಲ.

! 3 ತಿಂಗಳೊಳಗಿನ ಮಗುವಿಗೆ ಯಾವುದೇ ಜ್ವರವಿದ್ದರೆ, ಅಥವಾ ಉಸಿರಾಟದ ತೊಂದರೆ, ಅತಿಯಾದ ನಿದ್ರಾವಸ್ಥೆ, ಸೆಳೆತ, ಒತ್ತಿದರೂ ಮಾಸದ ದದ್ದು ಅಥವಾ ಮೂತ್ರ ವಿಸರ್ಜನೆ ಆಗದಿದ್ದರೆ ತಕ್ಷಣ ವೈದ್ಯರನ್ನು ಭೇಟಿ ಮಾಡಿ.

## ಕ್ಲಿನಿಕ್‌ಗೆ ಯಾವಾಗ ಕರೆ ಮಾಡಬೇಕು
ಜ್ವರ 3 ದಿನಗಳಿಗಿಂತ ಹೆಚ್ಚು ಇದ್ದರೆ, ಮತ್ತೆ ಮತ್ತೆ ಬರುತ್ತಿದ್ದರೆ ಅಥವಾ ಮಗು ನಿರೀಕ್ಷೆಗಿಂತ ಹೆಚ್ಚು ಅಸ್ವಸ್ಥವಾಗಿ ಕಂಡರೆ, ದಯವಿಟ್ಟು ಕ್ಲಿನಿಕ್‌ಗೆ ಕರೆ ಅಥವಾ ವಾಟ್ಸಾಪ್ ಮಾಡಿ.`,
    },
  },
  {
    id: 'g2', slug: 'vaccination-schedule', categoryId: 'vaccination', ageGroup: '0–18 years', status: 'published', featured: true, readMins: 6,
    updatedAt: '2026-09-28', reviewedAt: '2026-09-28',
    en: {
      title: 'Your Child’s Vaccination Schedule, Simplified',
      summary: 'A clear walk-through of the recommended vaccines from birth to adolescence, what to expect after a shot and common myths.',
      body: `Vaccines are one of the safest and most effective ways to protect your child from serious diseases. Following the recommended schedule gives your child protection at the age when they need it most.

## Key milestones
- At birth: BCG, OPV-0, Hepatitis B-1
- 6, 10 & 14 weeks: DTaP/DTwP, IPV, Hib, Hepatitis B, Rotavirus, PCV
- 6–9 months: Influenza (yearly), Typhoid conjugate
- 9 months: MMR-1
- 12–15 months: Hepatitis A, MMR-2, Varicella, PCV booster
- 16–18 months onwards: DTaP booster, Hib, IPV boosters
- 9–14 years: HPV, Tdap

## After the vaccine
- Mild fever, fussiness and soreness at the injection site are common and settle within 1–2 days.
- A cool compress helps with swelling. Do not apply oil or rub the area.

! Contact the clinic urgently if your child has a high fever above 104°F, continuous crying for over 3 hours, swelling of face or lips, or difficulty breathing after a vaccine.

## Missed a dose?
Don't worry, you rarely need to restart. Bring your vaccination card and we'll create a catch-up plan.`,
    },
    kn: {
      title: 'ನಿಮ್ಮ ಮಗುವಿನ ಲಸಿಕೆ ವೇಳಾಪಟ್ಟಿ, ಸರಳವಾಗಿ',
      summary: 'ಜನನದಿಂದ ಹದಿಹರೆಯದವರೆಗೆ ಶಿಫಾರಸು ಮಾಡಲಾದ ಲಸಿಕೆಗಳು, ಲಸಿಕೆಯ ನಂತರ ಏನನ್ನು ನಿರೀಕ್ಷಿಸಬೇಕು ಮತ್ತು ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆಗಳ ಸ್ಪಷ್ಟ ವಿವರಣೆ.',
      body: `ಗಂಭೀರ ಕಾಯಿಲೆಗಳಿಂದ ನಿಮ್ಮ ಮಗುವನ್ನು ರಕ್ಷಿಸಲು ಲಸಿಕೆಗಳು ಅತ್ಯಂತ ಸುರಕ್ಷಿತ ಮತ್ತು ಪರಿಣಾಮಕಾರಿ ಮಾರ್ಗ. ಶಿಫಾರಸು ಮಾಡಿದ ವೇಳಾಪಟ್ಟಿಯನ್ನು ಪಾಲಿಸುವುದರಿಂದ ಮಗುವಿಗೆ ಅಗತ್ಯವಿರುವ ವಯಸ್ಸಿನಲ್ಲೇ ರಕ್ಷಣೆ ದೊರೆಯುತ್ತದೆ.

## ಪ್ರಮುಖ ಹಂತಗಳು
- ಜನನದಲ್ಲಿ: ಬಿಸಿಜಿ, ಒಪಿವಿ-0, ಹೆಪಟೈಟಿಸ್ ಬಿ-1
- 6, 10 ಮತ್ತು 14 ವಾರಗಳು: ಡಿಟಿಪಿ, ಐಪಿವಿ, ಎಚ್‌ಐಬಿ, ಹೆಪಟೈಟಿಸ್ ಬಿ, ರೋಟಾವೈರಸ್, ಪಿಸಿವಿ
- 6–9 ತಿಂಗಳು: ಇನ್ಫ್ಲುಯೆಂಜಾ (ಪ್ರತಿ ವರ್ಷ), ಟೈಫಾಯಿಡ್
- 9 ತಿಂಗಳು: ಎಂಎಂಆರ್-1
- 12–15 ತಿಂಗಳು: ಹೆಪಟೈಟಿಸ್ ಎ, ಎಂಎಂಆರ್-2, ವೆರಿಸೆಲ್ಲಾ, ಪಿಸಿವಿ ಬೂಸ್ಟರ್
- 16–18 ತಿಂಗಳ ನಂತರ: ಡಿಟಿಪಿ, ಎಚ್‌ಐಬಿ, ಐಪಿವಿ ಬೂಸ್ಟರ್‌ಗಳು
- 9–14 ವರ್ಷಗಳು: ಎಚ್‌ಪಿವಿ, ಟಿಡಾಪ್

## ಲಸಿಕೆಯ ನಂತರ
- ಸ್ವಲ್ಪ ಜ್ವರ, ಕಿರಿಕಿರಿ ಮತ್ತು ಚುಚ್ಚಿದ ಜಾಗದಲ್ಲಿ ನೋವು ಸಾಮಾನ್ಯ ಮತ್ತು 1–2 ದಿನಗಳಲ್ಲಿ ಕಡಿಮೆಯಾಗುತ್ತದೆ.
- ಊತಕ್ಕೆ ತಣ್ಣನೆಯ ಬಟ್ಟೆ ಇಡಿ. ಎಣ್ಣೆ ಹಚ್ಚಬೇಡಿ ಅಥವಾ ಉಜ್ಜಬೇಡಿ.

! ಲಸಿಕೆಯ ನಂತರ 104°F ಗಿಂತ ಹೆಚ್ಚು ಜ್ವರ, 3 ಗಂಟೆಗಳಿಗಿಂತ ಹೆಚ್ಚು ನಿರಂತರ ಅಳು, ಮುಖ ಅಥವಾ ತುಟಿ ಊತ, ಅಥವಾ ಉಸಿರಾಟದ ತೊಂದರೆ ಇದ್ದರೆ ತಕ್ಷಣ ಕ್ಲಿನಿಕ್ ಸಂಪರ್ಕಿಸಿ.

## ಡೋಸ್ ತಪ್ಪಿಹೋಗಿದೆಯೇ?
ಚಿಂತಿಸಬೇಡಿ, ಮತ್ತೆ ಆರಂಭಿಸುವ ಅಗತ್ಯ ಅಪರೂಪ. ಲಸಿಕೆ ಕಾರ್ಡ್ ತನ್ನಿ, ನಾವು ಹೊಸ ಯೋಜನೆ ಮಾಡುತ್ತೇವೆ.`,
    },
  },
  {
    id: 'g3', slug: 'starting-solid-foods', categoryId: 'infant-feeding', ageGroup: '6–12 months', status: 'published', featured: true, readMins: 5,
    updatedAt: '2026-10-02', reviewedAt: '2026-10-02',
    en: {
      title: 'Starting Solid Foods at 6 Months',
      summary: 'When and how to begin complementary feeding, first foods to try, textures by age and foods to avoid.',
      body: `Around 6 months, breast milk alone no longer meets all of your baby's nutritional needs. This is the right time to introduce complementary foods while continuing breastfeeding.

## Signs your baby is ready
- Can sit with support and hold their head steady.
- Shows interest in food and opens mouth when food approaches.
- Has lost the tongue-thrust reflex that pushes food out.

## Good first foods
- Mashed ragi porridge, rice and dal, khichdi
- Mashed banana, steamed apple or pear
- Well-cooked, mashed vegetables like carrot, pumpkin and potato

## Tips for success
- Start with 1–2 teaspoons once a day and slowly increase.
- Introduce one new food every 3 days to watch for reactions.
- Move from smooth purées to mashed and finger foods by 9 months.

! Avoid honey before 1 year, added salt and sugar, whole nuts, and cow's milk as a main drink before 1 year.`,
    },
    kn: {
      title: '6 ತಿಂಗಳಲ್ಲಿ ಘನ ಆಹಾರ ಆರಂಭಿಸುವುದು',
      summary: 'ಪೂರಕ ಆಹಾರವನ್ನು ಯಾವಾಗ ಮತ್ತು ಹೇಗೆ ಆರಂಭಿಸಬೇಕು, ಮೊದಲ ಆಹಾರಗಳು, ವಯಸ್ಸಿಗೆ ತಕ್ಕ ಆಹಾರದ ರಚನೆ ಮತ್ತು ತಪ್ಪಿಸಬೇಕಾದ ಆಹಾರಗಳು.',
      body: `ಸುಮಾರು 6 ತಿಂಗಳಲ್ಲಿ ಕೇವಲ ಎದೆಹಾಲು ಮಗುವಿನ ಎಲ್ಲಾ ಪೌಷ್ಟಿಕ ಅಗತ್ಯಗಳನ್ನು ಪೂರೈಸುವುದಿಲ್ಲ. ಎದೆಹಾಲು ಮುಂದುವರಿಸುತ್ತಲೇ ಪೂರಕ ಆಹಾರ ಆರಂಭಿಸಲು ಇದು ಸರಿಯಾದ ಸಮಯ.

## ಮಗು ಸಿದ್ಧವಾಗಿದೆ ಎಂಬ ಲಕ್ಷಣಗಳು
- ಆಧಾರದೊಂದಿಗೆ ಕುಳಿತುಕೊಳ್ಳಬಲ್ಲದು ಮತ್ತು ತಲೆಯನ್ನು ಸ್ಥಿರವಾಗಿ ಹಿಡಿಯಬಲ್ಲದು.
- ಆಹಾರದಲ್ಲಿ ಆಸಕ್ತಿ ತೋರಿಸುತ್ತದೆ ಮತ್ತು ಆಹಾರ ಹತ್ತಿರ ಬಂದಾಗ ಬಾಯಿ ತೆರೆಯುತ್ತದೆ.
- ಆಹಾರವನ್ನು ನಾಲಿಗೆಯಿಂದ ಹೊರತಳ್ಳುವ ಪ್ರತಿವರ್ತನ ಕಡಿಮೆಯಾಗಿದೆ.

## ಉತ್ತಮ ಮೊದಲ ಆಹಾರಗಳು
- ರಾಗಿ ಗಂಜಿ, ಅನ್ನ ಮತ್ತು ಬೇಳೆ, ಕಿಚಡಿ
- ಹಿಸುಕಿದ ಬಾಳೆಹಣ್ಣು, ಬೇಯಿಸಿದ ಸೇಬು ಅಥವಾ ಪೇರು
- ಚೆನ್ನಾಗಿ ಬೇಯಿಸಿ ಹಿಸುಕಿದ ಕ್ಯಾರೆಟ್, ಕುಂಬಳಕಾಯಿ ಮತ್ತು ಆಲೂಗಡ್ಡೆ

## ಯಶಸ್ಸಿಗೆ ಸಲಹೆಗಳು
- ದಿನಕ್ಕೆ ಒಮ್ಮೆ 1–2 ಚಮಚದಿಂದ ಆರಂಭಿಸಿ ನಿಧಾನವಾಗಿ ಹೆಚ್ಚಿಸಿ.
- ಪ್ರತಿಕ್ರಿಯೆ ಗಮನಿಸಲು 3 ದಿನಕ್ಕೊಮ್ಮೆ ಒಂದು ಹೊಸ ಆಹಾರ ಪರಿಚಯಿಸಿ.
- 9 ತಿಂಗಳ ವೇಳೆಗೆ ನಯವಾದ ಪ್ಯೂರಿಯಿಂದ ಹಿಸುಕಿದ ಮತ್ತು ಕೈಯಲ್ಲಿ ತಿನ್ನುವ ಆಹಾರಕ್ಕೆ ಬದಲಿಸಿ.

! 1 ವರ್ಷದೊಳಗೆ ಜೇನುತುಪ್ಪ, ಹೆಚ್ಚುವರಿ ಉಪ್ಪು ಮತ್ತು ಸಕ್ಕರೆ, ಇಡೀ ಬೀಜಗಳು ಮತ್ತು ಮುಖ್ಯ ಪಾನೀಯವಾಗಿ ಹಸುವಿನ ಹಾಲು ಕೊಡಬೇಡಿ.`,
    },
  },
  {
    id: 'g4', slug: 'cough-and-cold', categoryId: 'fever', ageGroup: '0–12 years', status: 'published', readMins: 4,
    updatedAt: '2026-08-19', reviewedAt: '2026-08-19',
    en: {
      title: 'Cough & Cold: Gentle Home Care',
      summary: 'Most coughs and colds get better on their own. Here is how to keep your child comfortable and when to seek help.',
      body: `Children can catch 6–8 colds a year, especially when they start daycare or school. Most are viral and settle on their own with comfort care.

## Comfort measures
- Warm fluids, and for children over 1 year, a teaspoon of honey can soothe a cough.
- Steam from a warm shower in a closed bathroom can ease congestion.
- Keep your child resting comfortably and upright when possible.

## Avoid
- Honey for babies under 1 year of age.
- Smoke or strong fragrances near your child.

! Seek care if your child breathes fast, the chest pulls in with each breath, lips look bluish, or there's a whistling sound while breathing.`,
    },
    kn: {
      title: 'ಕೆಮ್ಮು ಮತ್ತು ನೆಗಡಿ: ಮನೆಯಲ್ಲಿ ಸೌಮ್ಯ ಆರೈಕೆ',
      summary: 'ಹೆಚ್ಚಿನ ಕೆಮ್ಮು ಮತ್ತು ನೆಗಡಿ ತಾವಾಗಿಯೇ ಗುಣವಾಗುತ್ತವೆ. ಮಗುವನ್ನು ಆರಾಮವಾಗಿಡುವುದು ಮತ್ತು ಯಾವಾಗ ಸಹಾಯ ಪಡೆಯಬೇಕೆಂದು ತಿಳಿಯಿರಿ.',
      body: `ಮಕ್ಕಳಿಗೆ ವರ್ಷಕ್ಕೆ 6–8 ಬಾರಿ ನೆಗಡಿ ಬರಬಹುದು, ವಿಶೇಷವಾಗಿ ಡೇಕೇರ್ ಅಥವಾ ಶಾಲೆ ಆರಂಭಿಸಿದಾಗ. ಹೆಚ್ಚಿನವು ವೈರಲ್ ಆಗಿದ್ದು ವಿಶ್ರಾಂತಿ ಮತ್ತು ಆರೈಕೆಯಿಂದ ತಾವಾಗಿಯೇ ಕಡಿಮೆಯಾಗುತ್ತವೆ.

## ಆರಾಮದ ಕ್ರಮಗಳು
- ಬೆಚ್ಚಗಿನ ದ್ರವಗಳು, ಮತ್ತು 1 ವರ್ಷ ಮೇಲ್ಪಟ್ಟ ಮಕ್ಕಳಿಗೆ ಒಂದು ಚಮಚ ಜೇನುತುಪ್ಪ ಕೆಮ್ಮನ್ನು ಶಮನಗೊಳಿಸಬಹುದು.
- ಮುಚ್ಚಿದ ಸ್ನಾನಗೃಹದಲ್ಲಿ ಬಿಸಿನೀರಿನ ಹಬೆ ಕಟ್ಟುವಿಕೆಯನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.
- ಮಗುವಿಗೆ ಆರಾಮವಾಗಿ ವಿಶ್ರಾಂತಿ ನೀಡಿ.

## ತಪ್ಪಿಸಿ
- 1 ವರ್ಷದೊಳಗಿನ ಶಿಶುಗಳಿಗೆ ಜೇನುತುಪ್ಪ ಕೊಡಬೇಡಿ.
- ಮಗುವಿನ ಹತ್ತಿರ ಹೊಗೆ ಅಥವಾ ತೀವ್ರ ವಾಸನೆ ಬಾರದಂತೆ ನೋಡಿ.

! ಮಗು ವೇಗವಾಗಿ ಉಸಿರಾಡುತ್ತಿದ್ದರೆ, ಪ್ರತಿ ಉಸಿರಿಗೂ ಎದೆ ಒಳಕ್ಕೆ ಎಳೆಯುತ್ತಿದ್ದರೆ, ತುಟಿಗಳು ನೀಲಿಯಾಗಿ ಕಂಡರೆ ಅಥವಾ ಉಸಿರಾಡುವಾಗ ಸೀಟಿಯ ಶಬ್ದ ಬಂದರೆ ತಕ್ಷಣ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.`,
    },
  },
  {
    id: 'g5', slug: 'loose-motions-and-dehydration', categoryId: 'digestion', ageGroup: '0–12 years', status: 'published', featured: true, readMins: 4,
    updatedAt: '2026-09-05', reviewedAt: '2026-09-05',
    en: {
      title: 'Loose Motions & Preventing Dehydration',
      summary: 'ORS and zinc are the cornerstones of treating diarrhoea at home. Learn how to use them and watch for dehydration.',
      body: `Diarrhoea is common in children and is usually caused by a viral infection. The biggest risk is dehydration, which can be prevented with the right fluids.

## What to do
- Give ORS after every loose stool: about 50–100 ml for children under 2 years, and 100–200 ml for older children.
- Continue breastfeeding and normal, light meals.
- Zinc supplements for 14 days help recovery; ask your pediatrician for the dose.

## Signs of dehydration
- Fewer wet nappies or passing urine less than 4 times a day
- Dry mouth, no tears while crying
- Sunken eyes, unusual sleepiness

! Visit the clinic urgently if there is blood in the stool, repeated vomiting, signs of dehydration, or your baby is under 6 months.`,
    },
    kn: {
      title: 'ಭೇದಿ ಮತ್ತು ನಿರ್ಜಲೀಕರಣ ತಡೆಗಟ್ಟುವಿಕೆ',
      summary: 'ಮನೆಯಲ್ಲಿ ಭೇದಿ ಚಿಕಿತ್ಸೆಗೆ ಒಆರ್‌ಎಸ್ ಮತ್ತು ಜಿಂಕ್ ಮೂಲಾಧಾರ. ಅವುಗಳ ಬಳಕೆ ಮತ್ತು ನಿರ್ಜಲೀಕರಣದ ಲಕ್ಷಣಗಳನ್ನು ತಿಳಿಯಿರಿ.',
      body: `ಮಕ್ಕಳಲ್ಲಿ ಭೇದಿ ಸಾಮಾನ್ಯ ಮತ್ತು ಸಾಮಾನ್ಯವಾಗಿ ವೈರಲ್ ಸೋಂಕಿನಿಂದ ಉಂಟಾಗುತ್ತದೆ. ದೊಡ್ಡ ಅಪಾಯವೆಂದರೆ ನಿರ್ಜಲೀಕರಣ, ಸರಿಯಾದ ದ್ರವಗಳಿಂದ ಇದನ್ನು ತಡೆಯಬಹುದು.

## ಏನು ಮಾಡಬೇಕು
- ಪ್ರತಿ ಭೇದಿಯ ನಂತರ ಒಆರ್‌ಎಸ್ ಕೊಡಿ: 2 ವರ್ಷದೊಳಗಿನ ಮಕ್ಕಳಿಗೆ ಸುಮಾರು 50–100 ಮಿಲಿ, ದೊಡ್ಡ ಮಕ್ಕಳಿಗೆ 100–200 ಮಿಲಿ.
- ಎದೆಹಾಲು ಮತ್ತು ಸಾಮಾನ್ಯ ಹಗುರ ಊಟ ಮುಂದುವರಿಸಿ.
- 14 ದಿನಗಳ ಜಿಂಕ್ ಪೂರಕ ಚೇತರಿಕೆಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ; ಪ್ರಮಾಣಕ್ಕಾಗಿ ವೈದ್ಯರನ್ನು ಕೇಳಿ.

## ನಿರ್ಜಲೀಕರಣದ ಲಕ್ಷಣಗಳು
- ದಿನಕ್ಕೆ 4 ಬಾರಿಗಿಂತ ಕಡಿಮೆ ಮೂತ್ರ ವಿಸರ್ಜನೆ
- ಒಣ ಬಾಯಿ, ಅಳುವಾಗ ಕಣ್ಣೀರು ಬರದಿರುವುದು
- ಕಣ್ಣುಗಳು ಒಳಸೇರಿರುವುದು, ಅಸಾಮಾನ್ಯ ನಿದ್ರಾವಸ್ಥೆ

! ಮಲದಲ್ಲಿ ರಕ್ತ, ಪದೇ ಪದೇ ವಾಂತಿ, ನಿರ್ಜಲೀಕರಣದ ಲಕ್ಷಣಗಳು ಇದ್ದರೆ ಅಥವಾ ಮಗು 6 ತಿಂಗಳೊಳಗಿದ್ದರೆ ತಕ್ಷಣ ಕ್ಲಿನಿಕ್‌ಗೆ ಭೇಟಿ ನೀಡಿ.`,
    },
  },
  {
    id: 'g6', slug: 'eczema-in-babies', categoryId: 'skin', ageGroup: '0–5 years', status: 'published', readMins: 4,
    updatedAt: '2026-07-21', reviewedAt: '2026-07-21',
    en: {
      title: 'Eczema in Babies & Young Children',
      summary: 'Dry, itchy patches are common in little ones. A simple daily skin-care routine keeps most eczema under control.',
      body: `Atopic eczema causes dry, itchy and red skin, often on the cheeks, elbows and behind the knees. It tends to come and go, and most children outgrow it.

## Daily skin care
- Bathe in lukewarm water for 5–10 minutes using a mild, fragrance-free cleanser.
- Pat dry and apply a thick moisturiser within 3 minutes of bathing.
- Moisturise at least twice a day, even when the skin looks clear.

## Common triggers
- Soaps, perfumes and woollen clothing
- Overheating and sweating
- Dust mites and, in some children, certain foods

! See your doctor if the skin becomes weepy, crusted, painful or your child has a fever, as these can be signs of infection.`,
    },
    kn: {
      title: 'ಶಿಶುಗಳು ಮತ್ತು ಪುಟ್ಟ ಮಕ್ಕಳಲ್ಲಿ ಎಕ್ಸಿಮಾ',
      summary: 'ಒಣ, ತುರಿಕೆಯ ಕಲೆಗಳು ಪುಟ್ಟ ಮಕ್ಕಳಲ್ಲಿ ಸಾಮಾನ್ಯ. ಸರಳ ದೈನಂದಿನ ಚರ್ಮದ ಆರೈಕೆ ಹೆಚ್ಚಿನ ಎಕ್ಸಿಮಾವನ್ನು ನಿಯಂತ್ರಣದಲ್ಲಿಡುತ್ತದೆ.',
      body: `ಅಟೋಪಿಕ್ ಎಕ್ಸಿಮಾ ಒಣ, ತುರಿಕೆಯ ಮತ್ತು ಕೆಂಪು ಚರ್ಮವನ್ನು ಉಂಟುಮಾಡುತ್ತದೆ, ಹೆಚ್ಚಾಗಿ ಕೆನ್ನೆ, ಮೊಣಕೈ ಮತ್ತು ಮೊಣಕಾಲಿನ ಹಿಂಭಾಗದಲ್ಲಿ. ಇದು ಬಂದು ಹೋಗುತ್ತಿರುತ್ತದೆ, ಹೆಚ್ಚಿನ ಮಕ್ಕಳು ಬೆಳೆದಂತೆ ಇದರಿಂದ ಮುಕ್ತರಾಗುತ್ತಾರೆ.

## ದೈನಂದಿನ ಚರ್ಮದ ಆರೈಕೆ
- ಸೌಮ್ಯ, ಸುಗಂಧರಹಿತ ಕ್ಲೆನ್ಸರ್ ಬಳಸಿ 5–10 ನಿಮಿಷ ಉಗುರುಬೆಚ್ಚಗಿನ ನೀರಿನಲ್ಲಿ ಸ್ನಾನ ಮಾಡಿಸಿ.
- ಮೃದುವಾಗಿ ಒರೆಸಿ, ಸ್ನಾನದ 3 ನಿಮಿಷಗಳೊಳಗೆ ದಪ್ಪ ಮಾಯಿಶ್ಚರೈಸರ್ ಹಚ್ಚಿ.
- ಚರ್ಮ ಚೆನ್ನಾಗಿ ಕಂಡರೂ ದಿನಕ್ಕೆ ಕನಿಷ್ಠ ಎರಡು ಬಾರಿ ಮಾಯಿಶ್ಚರೈಸ್ ಮಾಡಿ.

## ಸಾಮಾನ್ಯ ಪ್ರಚೋದಕಗಳು
- ಸೋಪು, ಸುಗಂಧ ದ್ರವ್ಯ ಮತ್ತು ಉಣ್ಣೆಯ ಬಟ್ಟೆ
- ಅತಿಯಾದ ಬಿಸಿ ಮತ್ತು ಬೆವರು
- ಧೂಳಿನ ಹುಳಗಳು ಮತ್ತು ಕೆಲವು ಮಕ್ಕಳಲ್ಲಿ ಕೆಲವು ಆಹಾರಗಳು

! ಚರ್ಮದಿಂದ ನೀರು ಸೋರಿದರೆ, ಹಕ್ಕಳೆ ಕಟ್ಟಿದರೆ, ನೋವಿದ್ದರೆ ಅಥವಾ ಜ್ವರವಿದ್ದರೆ ವೈದ್ಯರನ್ನು ಭೇಟಿ ಮಾಡಿ, ಏಕೆಂದರೆ ಇವು ಸೋಂಕಿನ ಲಕ್ಷಣಗಳಾಗಿರಬಹುದು.`,
    },
  },
  {
    id: 'g7', slug: 'picky-eating', categoryId: 'toddler-nutrition', ageGroup: '1–5 years', status: 'published', featured: true, readMins: 5,
    updatedAt: '2026-10-18', reviewedAt: '2026-10-18',
    en: {
      title: 'Picky Eating: Calm Strategies That Work',
      summary: 'Food fussiness is a normal phase. These practical, pressure-free tips help toddlers build a healthy relationship with food.',
      body: `Between ages 1 and 5, many children become choosy about food. Their growth slows down compared to infancy, so appetite naturally reduces. This is normal.

## Your role and your child's role
You decide what, when and where food is served. Your child decides whether to eat and how much. This simple division of responsibility removes mealtime battles.

## Practical tips
- Offer a new food alongside a familiar favourite. It can take 10–15 tries before a child accepts it.
- Eat together as a family and keep screens away from the table.
- Serve small portions; let them ask for more.
- Avoid using sweets as a reward for eating vegetables.
- Involve children in washing vegetables or setting the table.

! Talk to your pediatrician if your child is losing weight, eats fewer than 20 foods in total, gags or vomits often, or mealtimes cause severe distress.`,
    },
    kn: {
      title: 'ಆಹಾರದ ಹಠ: ಪರಿಣಾಮಕಾರಿ ಶಾಂತ ತಂತ್ರಗಳು',
      summary: 'ಆಹಾರದ ಹಠ ಒಂದು ಸಾಮಾನ್ಯ ಹಂತ. ಈ ಪ್ರಾಯೋಗಿಕ, ಒತ್ತಡರಹಿತ ಸಲಹೆಗಳು ಮಕ್ಕಳಿಗೆ ಆಹಾರದೊಂದಿಗೆ ಆರೋಗ್ಯಕರ ಸಂಬಂಧ ಬೆಳೆಸಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ.',
      body: `1 ರಿಂದ 5 ವರ್ಷದ ನಡುವೆ ಅನೇಕ ಮಕ್ಕಳು ಆಹಾರದ ಬಗ್ಗೆ ಹಠ ಮಾಡುತ್ತಾರೆ. ಶೈಶವಕ್ಕೆ ಹೋಲಿಸಿದರೆ ಬೆಳವಣಿಗೆ ನಿಧಾನವಾಗುವುದರಿಂದ ಹಸಿವು ಸಹಜವಾಗಿ ಕಡಿಮೆಯಾಗುತ್ತದೆ. ಇದು ಸಾಮಾನ್ಯ.

## ನಿಮ್ಮ ಪಾತ್ರ ಮತ್ತು ಮಗುವಿನ ಪಾತ್ರ
ಏನು, ಯಾವಾಗ ಮತ್ತು ಎಲ್ಲಿ ಆಹಾರ ಕೊಡಬೇಕೆಂದು ನೀವು ನಿರ್ಧರಿಸಿ. ತಿನ್ನಬೇಕೇ ಮತ್ತು ಎಷ್ಟು ತಿನ್ನಬೇಕೆಂದು ಮಗು ನಿರ್ಧರಿಸಲಿ. ಈ ಸರಳ ಜವಾಬ್ದಾರಿ ಹಂಚಿಕೆ ಊಟದ ಸಮಯದ ಜಗಳಗಳನ್ನು ತಪ್ಪಿಸುತ್ತದೆ.

## ಪ್ರಾಯೋಗಿಕ ಸಲಹೆಗಳು
- ಹೊಸ ಆಹಾರವನ್ನು ಪರಿಚಿತ ಇಷ್ಟದ ಆಹಾರದೊಂದಿಗೆ ಕೊಡಿ. ಮಗು ಒಪ್ಪಿಕೊಳ್ಳಲು 10–15 ಪ್ರಯತ್ನಗಳು ಬೇಕಾಗಬಹುದು.
- ಕುಟುಂಬದೊಂದಿಗೆ ಒಟ್ಟಿಗೆ ಊಟ ಮಾಡಿ ಮತ್ತು ಊಟದ ಮೇಜಿನಿಂದ ಪರದೆಗಳನ್ನು ದೂರವಿಡಿ.
- ಸಣ್ಣ ಪ್ರಮಾಣದಲ್ಲಿ ಬಡಿಸಿ; ಬೇಕಾದರೆ ಅವರೇ ಕೇಳಲಿ.
- ತರಕಾರಿ ತಿಂದಿದ್ದಕ್ಕೆ ಸಿಹಿತಿಂಡಿಯನ್ನು ಬಹುಮಾನವಾಗಿ ಕೊಡಬೇಡಿ.
- ತರಕಾರಿ ತೊಳೆಯುವುದು ಅಥವಾ ಮೇಜು ಸಿದ್ಧಪಡಿಸುವುದರಲ್ಲಿ ಮಕ್ಕಳನ್ನು ತೊಡಗಿಸಿ.

! ಮಗುವಿನ ತೂಕ ಕಡಿಮೆಯಾಗುತ್ತಿದ್ದರೆ, ಒಟ್ಟು 20ಕ್ಕಿಂತ ಕಡಿಮೆ ಆಹಾರ ತಿನ್ನುತ್ತಿದ್ದರೆ, ಆಗಾಗ ವಾಕರಿಕೆ ಅಥವಾ ವಾಂತಿ ಆಗುತ್ತಿದ್ದರೆ ವೈದ್ಯರೊಂದಿಗೆ ಮಾತನಾಡಿ.`,
    },
  },
  {
    id: 'g8', slug: 'developmental-milestones', categoryId: 'growth', ageGroup: '0–5 years', status: 'published', featured: true, readMins: 6,
    updatedAt: '2026-10-08', reviewedAt: '2026-10-08',
    en: {
      title: 'Developmental Milestones: Birth to 5 Years',
      summary: 'A quick guide to movement, speech and social milestones, plus gentle signs that it may be worth a check-up.',
      body: `Every child develops at their own pace, but milestones give us a helpful guide. If your baby was born early, use their corrected age.

## Key milestones
- 2 months: Smiles at people, follows faces with eyes
- 4 months: Holds head steady, laughs, reaches for toys
- 6 months: Rolls over, sits with support, babbles
- 9 months: Sits without support, crawls, responds to name
- 12 months: Stands holding on, says "mama/dada", waves bye-bye
- 18 months: Walks alone, says several words, points to show things
- 2 years: Runs, uses 2-word phrases, follows simple instructions
- 3 years: Climbs well, speaks in sentences, plays pretend
- 5 years: Hops, tells stories, knows colours and counts to 10

! Please see your pediatrician if your child loses skills they once had, does not respond to their name by 12 months, has no words by 16 months, or you have any concerns.`,
    },
    kn: {
      title: 'ವಿಕಾಸದ ಮೈಲಿಗಲ್ಲುಗಳು: ಜನನದಿಂದ 5 ವರ್ಷಗಳವರೆಗೆ',
      summary: 'ಚಲನೆ, ಮಾತು ಮತ್ತು ಸಾಮಾಜಿಕ ಮೈಲಿಗಲ್ಲುಗಳ ತ್ವರಿತ ಮಾರ್ಗದರ್ಶಿ, ಮತ್ತು ತಪಾಸಣೆ ಅಗತ್ಯವಿರಬಹುದಾದ ಲಕ್ಷಣಗಳು.',
      body: `ಪ್ರತಿ ಮಗುವೂ ತನ್ನದೇ ವೇಗದಲ್ಲಿ ಬೆಳೆಯುತ್ತದೆ, ಆದರೆ ಮೈಲಿಗಲ್ಲುಗಳು ಉಪಯುಕ್ತ ಮಾರ್ಗದರ್ಶಿ. ಮಗು ಅವಧಿಗೆ ಮುಂಚೆ ಜನಿಸಿದ್ದರೆ, ಸರಿಪಡಿಸಿದ ವಯಸ್ಸನ್ನು ಬಳಸಿ.

## ಪ್ರಮುಖ ಮೈಲಿಗಲ್ಲುಗಳು
- 2 ತಿಂಗಳು: ಜನರನ್ನು ನೋಡಿ ನಗುತ್ತದೆ, ಮುಖಗಳನ್ನು ಕಣ್ಣಿನಿಂದ ಹಿಂಬಾಲಿಸುತ್ತದೆ
- 4 ತಿಂಗಳು: ತಲೆ ಸ್ಥಿರವಾಗಿ ಹಿಡಿಯುತ್ತದೆ, ನಗುತ್ತದೆ, ಆಟಿಕೆಗಳತ್ತ ಕೈ ಚಾಚುತ್ತದೆ
- 6 ತಿಂಗಳು: ಮಗುಚುತ್ತದೆ, ಆಧಾರದೊಂದಿಗೆ ಕುಳಿತುಕೊಳ್ಳುತ್ತದೆ, ತೊದಲುತ್ತದೆ
- 9 ತಿಂಗಳು: ಆಧಾರವಿಲ್ಲದೆ ಕೂರುತ್ತದೆ, ಅಂಬೆಗಾಲಿಡುತ್ತದೆ, ಹೆಸರಿಗೆ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತದೆ
- 12 ತಿಂಗಳು: ಹಿಡಿದು ನಿಲ್ಲುತ್ತದೆ, "ಅಮ್ಮ/ಅಪ್ಪ" ಎನ್ನುತ್ತದೆ, ಟಾಟಾ ಮಾಡುತ್ತದೆ
- 18 ತಿಂಗಳು: ಒಂಟಿಯಾಗಿ ನಡೆಯುತ್ತದೆ, ಕೆಲವು ಪದಗಳನ್ನು ಹೇಳುತ್ತದೆ, ಬೆರಳು ತೋರಿಸುತ್ತದೆ
- 2 ವರ್ಷ: ಓಡುತ್ತದೆ, 2 ಪದಗಳ ವಾಕ್ಯ ಬಳಸುತ್ತದೆ, ಸರಳ ಸೂಚನೆ ಪಾಲಿಸುತ್ತದೆ
- 3 ವರ್ಷ: ಚೆನ್ನಾಗಿ ಹತ್ತುತ್ತದೆ, ವಾಕ್ಯಗಳಲ್ಲಿ ಮಾತನಾಡುತ್ತದೆ, ಕಾಲ್ಪನಿಕ ಆಟ ಆಡುತ್ತದೆ
- 5 ವರ್ಷ: ಕುಪ್ಪಳಿಸುತ್ತದೆ, ಕಥೆ ಹೇಳುತ್ತದೆ, ಬಣ್ಣಗಳನ್ನು ಗುರುತಿಸುತ್ತದೆ ಮತ್ತು 10ರವರೆಗೆ ಎಣಿಸುತ್ತದೆ

! ಮಗು ಹಿಂದೆ ಕಲಿತ ಕೌಶಲ್ಯಗಳನ್ನು ಕಳೆದುಕೊಂಡರೆ, 12 ತಿಂಗಳಲ್ಲಿ ಹೆಸರಿಗೆ ಪ್ರತಿಕ್ರಿಯಿಸದಿದ್ದರೆ, 16 ತಿಂಗಳಲ್ಲಿ ಯಾವುದೇ ಪದ ಹೇಳದಿದ್ದರೆ ಅಥವಾ ನಿಮಗೆ ಯಾವುದೇ ಆತಂಕವಿದ್ದರೆ ದಯವಿಟ್ಟು ವೈದ್ಯರನ್ನು ಭೇಟಿ ಮಾಡಿ.`,
    },
  },
  {
    id: 'g9', slug: 'healthy-sleep-habits', categoryId: 'sleep', ageGroup: '0–12 years', status: 'published', readMins: 4,
    updatedAt: '2026-08-30', reviewedAt: '2026-08-30',
    en: {
      title: 'Healthy Sleep Habits for Every Age',
      summary: 'How much sleep children need, how to build a calming bedtime routine and safe sleep for babies.',
      body: `Good sleep supports growth, learning, mood and immunity. A predictable routine is the most powerful tool you have.

## How much sleep is enough?
- Newborns (0–3 months): 14–17 hours
- Infants (4–12 months): 12–16 hours including naps
- Toddlers (1–2 years): 11–14 hours
- Preschoolers (3–5 years): 10–13 hours
- School-age (6–12 years): 9–12 hours

## A calming bedtime routine
- Same time every night: bath, pyjamas, brush teeth, story, lights out.
- No screens for at least 1 hour before bed.
- Keep the bedroom cool, dark and quiet.

! For safe infant sleep, always place babies on their back, on a firm flat surface, without pillows, bumpers or soft toys.`,
    },
    kn: {
      title: 'ಪ್ರತಿ ವಯಸ್ಸಿಗೆ ಆರೋಗ್ಯಕರ ನಿದ್ರೆಯ ಅಭ್ಯಾಸಗಳು',
      summary: 'ಮಕ್ಕಳಿಗೆ ಎಷ್ಟು ನಿದ್ರೆ ಬೇಕು, ಶಾಂತ ಮಲಗುವ ದಿನಚರಿ ರೂಪಿಸುವುದು ಮತ್ತು ಶಿಶುಗಳಿಗೆ ಸುರಕ್ಷಿತ ನಿದ್ರೆ.',
      body: `ಉತ್ತಮ ನಿದ್ರೆ ಬೆಳವಣಿಗೆ, ಕಲಿಕೆ, ಮನಸ್ಥಿತಿ ಮತ್ತು ರೋಗನಿರೋಧಕ ಶಕ್ತಿಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ. ನಿಯಮಿತ ದಿನಚರಿ ನಿಮ್ಮ ಬಳಿ ಇರುವ ಅತ್ಯಂತ ಶಕ್ತಿಶಾಲಿ ಸಾಧನ.

## ಎಷ್ಟು ನಿದ್ರೆ ಸಾಕು?
- ನವಜಾತ (0–3 ತಿಂಗಳು): 14–17 ಗಂಟೆ
- ಶಿಶು (4–12 ತಿಂಗಳು): ಹಗಲು ನಿದ್ರೆ ಸೇರಿ 12–16 ಗಂಟೆ
- ಪುಟ್ಟ ಮಕ್ಕಳು (1–2 ವರ್ಷ): 11–14 ಗಂಟೆ
- ಶಾಲಾಪೂರ್ವ (3–5 ವರ್ಷ): 10–13 ಗಂಟೆ
- ಶಾಲಾ ವಯಸ್ಸು (6–12 ವರ್ಷ): 9–12 ಗಂಟೆ

## ಶಾಂತ ಮಲಗುವ ದಿನಚರಿ
- ಪ್ರತಿ ರಾತ್ರಿ ಒಂದೇ ಸಮಯ: ಸ್ನಾನ, ರಾತ್ರಿ ಉಡುಪು, ಹಲ್ಲುಜ್ಜುವುದು, ಕಥೆ, ದೀಪ ಆರಿಸುವುದು.
- ಮಲಗುವ ಕನಿಷ್ಠ 1 ಗಂಟೆ ಮೊದಲು ಪರದೆಗಳಿಲ್ಲ.
- ಮಲಗುವ ಕೋಣೆಯನ್ನು ತಂಪಾಗಿ, ಕತ್ತಲಾಗಿ ಮತ್ತು ಶಾಂತವಾಗಿಡಿ.

! ಶಿಶುಗಳ ಸುರಕ್ಷಿತ ನಿದ್ರೆಗಾಗಿ, ಯಾವಾಗಲೂ ಬೆನ್ನಿನ ಮೇಲೆ, ಗಟ್ಟಿಯಾದ ಸಮತಟ್ಟಾದ ಮೇಲ್ಮೈಯಲ್ಲಿ, ದಿಂಬು ಅಥವಾ ಮೃದು ಆಟಿಕೆಗಳಿಲ್ಲದೆ ಮಲಗಿಸಿ.`,
    },
  },
  {
    id: 'g10', slug: 'hand-washing-and-hygiene', categoryId: 'care', ageGroup: '2–12 years', status: 'published', readMins: 3,
    updatedAt: '2026-06-14', reviewedAt: '2026-06-14',
    en: {
      title: 'Hand-washing & Everyday Hygiene',
      summary: 'Simple habits that prevent most common infections in children, and fun ways to teach them.',
      body: `Clean hands are the single most effective way to prevent infections like diarrhoea, colds and flu.

## When to wash hands
- Before eating and after using the toilet
- After playing outside or with pets
- After coughing, sneezing or blowing the nose

## Make it fun
- Sing "Happy Birthday" twice; that's 20 seconds.
- Use a step stool so children can reach the sink.
- Let them choose their own towel or soap dispenser.`,
    },
    kn: {
      title: 'ಕೈ ತೊಳೆಯುವುದು ಮತ್ತು ದೈನಂದಿನ ಸ್ವಚ್ಛತೆ',
      summary: 'ಮಕ್ಕಳಲ್ಲಿ ಹೆಚ್ಚಿನ ಸಾಮಾನ್ಯ ಸೋಂಕುಗಳನ್ನು ತಡೆಯುವ ಸರಳ ಅಭ್ಯಾಸಗಳು ಮತ್ತು ಅವುಗಳನ್ನು ಕಲಿಸುವ ಮೋಜಿನ ವಿಧಾನಗಳು.',
      body: `ಭೇದಿ, ನೆಗಡಿ ಮತ್ತು ಫ್ಲೂನಂತಹ ಸೋಂಕುಗಳನ್ನು ತಡೆಯಲು ಸ್ವಚ್ಛ ಕೈಗಳೇ ಅತ್ಯಂತ ಪರಿಣಾಮಕಾರಿ ಮಾರ್ಗ.

## ಯಾವಾಗ ಕೈ ತೊಳೆಯಬೇಕು
- ಊಟದ ಮೊದಲು ಮತ್ತು ಶೌಚಾಲಯ ಬಳಸಿದ ನಂತರ
- ಹೊರಗೆ ಅಥವಾ ಸಾಕುಪ್ರಾಣಿಗಳೊಂದಿಗೆ ಆಡಿದ ನಂತರ
- ಕೆಮ್ಮಿದ, ಸೀನಿದ ಅಥವಾ ಮೂಗು ಒರೆಸಿದ ನಂತರ

## ಮೋಜಿನಿಂದ ಕಲಿಸಿ
- "ಹ್ಯಾಪಿ ಬರ್ತ್‌ಡೇ" ಹಾಡನ್ನು ಎರಡು ಬಾರಿ ಹಾಡಿ, ಅದು 20 ಸೆಕೆಂಡುಗಳು.
- ಮಕ್ಕಳು ಸಿಂಕ್ ತಲುಪಲು ಸ್ಟೂಲ್ ಬಳಸಿ.
- ಅವರದೇ ಟವೆಲ್ ಅಥವಾ ಸೋಪು ಆಯ್ಕೆ ಮಾಡಲು ಬಿಡಿ.`,
    },
  },
  {
    id: 'g11', slug: 'iron-rich-foods', categoryId: 'toddler-nutrition', ageGroup: '1–12 years', status: 'draft', readMins: 3,
    updatedAt: '2026-11-20', reviewedAt: '2026-11-20',
    en: { title: 'Iron-Rich Foods for Growing Kids', summary: 'Preventing anaemia with everyday Indian foods.', body: 'Draft in progress.' },
    kn: { title: 'ಬೆಳೆಯುವ ಮಕ್ಕಳಿಗೆ ಕಬ್ಬಿಣಾಂಶಯುಕ್ತ ಆಹಾರಗಳು', summary: 'ದೈನಂದಿನ ಭಾರತೀಯ ಆಹಾರಗಳಿಂದ ರಕ್ತಹೀನತೆ ತಡೆಗಟ್ಟುವಿಕೆ.', body: 'ಕರಡು ಪ್ರಗತಿಯಲ್ಲಿದೆ.' },
  },
]

export const seedGuides: Guide[] = rawGuides.map(withDosDonts).map((g) => ({ ...g, image: guideImages[g.slug] }))

/* Real verified embeddable reference pediatric videos */
export const seedVideos: Video[] = [
  { id: 'v1', youtubeId: 'JE_m6Nfvivg', image: '/images/video-fever.jpg', duration: '8:24', featured: true, category: { en: 'Fever & Infections', kn: 'ಜ್ವರ ಮತ್ತು ಸೋಂಕು' }, title: { en: 'When should you worry about fever?', kn: 'ಜ್ವರದ ಬಗ್ಗೆ ಯಾವಾಗ ಚಿಂತಿಸಬೇಕು?' }, description: { en: 'Red-flag signs every parent should know, explained simply.', kn: 'ಪ್ರತಿ ಪೋಷಕರು ತಿಳಿಯಬೇಕಾದ ಅಪಾಯದ ಲಕ್ಷಣಗಳು, ಸರಳವಾಗಿ.' } },
  { id: 'v2', youtubeId: '_SarGw8McWo', image: '/images/video-first-foods.jpg', duration: '11:02', featured: true, category: { en: 'Nutrition', kn: 'ಪೋಷಣೆ' }, title: { en: 'First foods for your 6-month-old', kn: 'ನಿಮ್ಮ 6 ತಿಂಗಳ ಮಗುವಿಗೆ ಮೊದಲ ಆಹಾರಗಳು' }, description: { en: 'Easy home-made recipes and a week-one feeding plan.', kn: 'ಸುಲಭ ಮನೆ ಅಡುಗೆ ಮತ್ತು ಮೊದಲ ವಾರದ ಆಹಾರ ಯೋಜನೆ.' } },
  { id: 'v3', youtubeId: 'kHehMXOAioc', image: '/images/video-vaccines.jpg', duration: '6:45', featured: true, category: { en: 'Vaccination', kn: 'ಲಸಿಕೆ' }, title: { en: 'Vaccine myths vs facts', kn: 'ಲಸಿಕೆ ತಪ್ಪು ಕಲ್ಪನೆಗಳು ಮತ್ತು ಸತ್ಯಗಳು' }, description: { en: 'Answering the questions parents ask most at the clinic.', kn: 'ಕ್ಲಿನಿಕ್‌ನಲ್ಲಿ ಪೋಷಕರು ಹೆಚ್ಚಾಗಿ ಕೇಳುವ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರ.' } },
  { id: 'v4', youtubeId: '_SarGw8McWo', image: '/images/video-talking.jpg', duration: '9:10', category: { en: 'Development', kn: 'ಬೆಳವಣಿಗೆ' }, title: { en: 'Is my child talking late?', kn: 'ನನ್ನ ಮಗು ತಡವಾಗಿ ಮಾತನಾಡುತ್ತಿದೆಯೇ?' }, description: { en: 'Speech milestones and simple ways to encourage language.', kn: 'ಮಾತಿನ ಮೈಲಿಗಲ್ಲುಗಳು ಮತ್ತು ಭಾಷೆ ಪ್ರೋತ್ಸಾಹಿಸುವ ಸರಳ ವಿಧಾನಗಳು.' } },
  { id: 'v5', youtubeId: 'kHehMXOAioc', image: '/images/video-bedtime.jpg', duration: '7:33', category: { en: 'Sleep', kn: 'ನಿದ್ರೆ' }, title: { en: 'Building a bedtime routine', kn: 'ಮಲಗುವ ದಿನಚರಿ ರೂಪಿಸುವುದು' }, description: { en: 'Step-by-step routine for calmer nights.', kn: 'ಶಾಂತ ರಾತ್ರಿಗಳಿಗಾಗಿ ಹಂತ ಹಂತದ ದಿನಚರಿ.' } },
  { id: 'v6', youtubeId: 'JE_m6Nfvivg', image: '/images/video-ors.jpg', duration: '5:58', category: { en: 'Digestion', kn: 'ಜೀರ್ಣಕ್ರಿಯೆ' }, title: { en: 'How to make and give ORS', kn: 'ಒಆರ್‌ಎಸ್ ತಯಾರಿಸುವುದು ಮತ್ತು ಕೊಡುವುದು ಹೇಗೆ' }, description: { en: 'The right way to prevent dehydration at home.', kn: 'ಮನೆಯಲ್ಲಿ ನಿರ್ಜಲೀಕರಣ ತಡೆಯುವ ಸರಿಯಾದ ವಿಧಾನ.' } },
]

/* About-page gallery. Placeholder clinic photos (Pexels License, free to use) until the clinic's own photos arrive:
 * swap in pictures of the real clinic, waiting area, health camps or awards, and keep a short caption for each.
 * The first photo is shown large; the grid shows 5 and the rest open in the viewer. */
export const seedGallery: { src: string; caption: Localized }[] = [
  { src: '/images/gallery-clinic-room.jpg', caption: { en: 'A bright, child-friendly consultation room', kn: 'ಬೆಳಕಿನಿಂದ ಕೂಡಿದ, ಮಕ್ಕಳ ಸ್ನೇಹಿ ಸಮಾಲೋಚನಾ ಕೊಠಡಿ' } },
  { src: '/images/gallery-checkup.jpg', caption: { en: 'Gentle, unhurried check-ups', kn: 'ಸೌಮ್ಯ, ಆತುರವಿಲ್ಲದ ತಪಾಸಣೆ' } },
  { src: '/images/gallery-vaccination.jpg', caption: { en: 'Vaccinations on schedule', kn: 'ಸಮಯಕ್ಕೆ ಸರಿಯಾದ ಲಸಿಕೆಗಳು' } },
  { src: '/images/gallery-teddy-checkup.jpg', caption: { en: 'Making doctor visits less scary', kn: 'ವೈದ್ಯರ ಭೇಟಿಯ ಭಯ ಕಡಿಮೆ ಮಾಡುವುದು' } },
  { src: '/images/gallery-waiting-area.jpg', caption: { en: 'A calm, clean waiting area', kn: 'ಶಾಂತ, ಸ್ವಚ್ಛ ಕಾಯುವ ಸ್ಥಳ' } },
  { src: '/images/gallery-stethoscope.jpg', caption: { en: 'Careful examinations', kn: 'ಎಚ್ಚರಿಕೆಯ ಪರೀಕ್ಷೆ' } },
  { src: '/images/gallery-teddy-vaccine.jpg', caption: { en: 'Explaining every step to children', kn: 'ಮಕ್ಕಳಿಗೆ ಪ್ರತಿ ಹಂತವನ್ನೂ ವಿವರಿಸುವುದು' } },
  { src: '/images/gallery-fever-care.jpg', caption: { en: 'Fever, cough & cold care', kn: 'ಜ್ವರ, ಕೆಮ್ಮು ಮತ್ತು ನೆಗಡಿ ಆರೈಕೆ' } },
]
