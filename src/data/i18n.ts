const en = {
  nav: { home: 'Home', about: 'About', health: 'Health & Nutrition', nutrition: 'Nutrition & Growth', videos: 'Videos', contact: 'Contact', dashboard: 'Doctor Login' },
  common: {
    readMore: 'Read guide', minRead: 'min read', viewAll: 'View all', search: 'Search guides…', searchBig: 'Search by symptom, topic or age…', clear: 'Clear search', all: 'All',
    ageGroup: 'Age group', reviewed: 'Doctor-reviewed on', updated: 'Updated', share: 'Share', copyLink: 'Copy link',
    copied: 'Link copied!', shareWhatsApp: 'Share on WhatsApp', back: 'Back', noResults: 'No guides match your search.',
    watch: 'Watch video', callNow: 'Call now', whatsapp: 'WhatsApp', directions: 'Get directions', guides: 'guides', guide: 'guide', role: 'Pediatrician',
    comingSoon: 'Video coming soon', comingSoonText: 'This video will be available here shortly. Meanwhile, visit the YouTube channel.',
    visitChannel: 'Visit YouTube channel', related: 'Related guides', inThisGuide: 'In this guide', menu: 'Menu', close: 'Close', dos: 'Do', donts: 'Don’t',
  },
  home: {
    eyebrow: 'Pediatrician · Bengaluru',
    heroTitleA: 'Trusted Pediatric Care for', heroTitleB: 'Your Child’s Health & Growth',
    ctaGuides: 'Explore health guides', ctaContact: 'Visit the clinic',
    years: 'Years of experience', families: 'Families cared for', guides: 'Health guides', languages: 'Languages',
    welcomeEyebrow: 'A note from the doctor',
    featuredEyebrow: 'Parent Reading Library', featuredTitle: 'Doctor-Reviewed Health Guides',
    featuredText: 'Reliable medical advice written by Dr. Manjunath to help you make confident health decisions between visits.',
    topicsEyebrow: 'For Parents', topicsTitle: 'Little worries, clear answers',
    topicsSubtitle: 'Simple, doctor-reviewed help for everyday parenting questions.',
    videosEyebrow: 'Video library', videosTitle: 'Watch, learn, feel confident',
    contactEyebrow: 'Visit us', contactTitle: 'We’re here for your family',
    ddEyebrow: 'Quick guide', ddTitle: 'Everyday Dos & Don’ts for parents', ddText: 'Simple, doctor-approved rules of thumb for the situations parents face most.', ddRead: 'Read the full guide',
    trust1: 'Doctor-reviewed content', trust2: 'English & ಕನ್ನಡ', trust3: 'No sign-up needed',
  },
  about: {
    eyebrow: 'About the doctor', qualifications: 'Qualifications', experience: 'Professional journey',
    specialisation: 'Areas of specialisation', approach: 'My approach to child healthcare', quote: 'Healthy children grow from informed, confident parents.',
    meetTitle: 'Meet your *Pediatrician*', heroText: 'Evidence-based child healthcare and calm, clear guidance for parents in Bengaluru, in English and Kannada.', book: 'Book a consultation',
    galleryEyebrow: 'Gallery', galleryTitle: 'Moments of care',
  },
  health: {
    eyebrow: 'Parent library', title: 'Child Health, Nutrition & Growth',
    text: 'Clear, evidence-based guides from birth through age 18, covering common illnesses, vaccines, feeding and milestones.',
  },
  nutrition: {
    eyebrow: 'Nutrition & growth', title: 'Nourishing healthy growth, one meal at a time',
    text: 'From the first spoonful to school lunches: feeding, growth, milestones, sleep and behaviour.',
    milestonesTitle: 'Milestones at a glance',
  },
  videos: { eyebrow: 'Video library', title: 'Short videos, real answers', text: 'Practical explainers recorded by the doctor for parents.' },
  contact: {
    eyebrow: 'Contact', title: 'Get in touch with the clinic', text: 'For consultations, please call or send a WhatsApp message during clinic hours.',
    address: 'Clinic address', phone: 'Phone', timings: 'Consultation timings', follow: 'Follow for parenting tips',
    emergencyTitle: 'In an emergency', emergencyText: 'If your child is struggling to breathe, unconscious, having a seizure or seriously injured, go to the nearest hospital emergency department or call 108 immediately.',
  },
  disclaimer: {
    title: 'Medical disclaimer',
    text: 'This information is for general education and does not replace a consultation with your pediatrician. Every child is different, so please seek medical advice for your child’s specific condition.',
  },
  footer: { tagline: 'Trusted child-health guidance for parents, in English and Kannada.', explore: 'Explore', clinic: 'Clinic', rights: 'All rights reserved.', note: 'For general information only, not a substitute for medical advice.' },
}

type Dict = typeof en

const kn: Dict = {
  nav: { home: 'ಮುಖಪುಟ', about: 'ವೈದ್ಯರ ಬಗ್ಗೆ', health: 'ಆರೋಗ್ಯ ಮತ್ತು ಪೋಷಣೆ', nutrition: 'ಪೋಷಣೆ ಮತ್ತು ಬೆಳವಣಿಗೆ', videos: 'ವೀಡಿಯೊಗಳು', contact: 'ಸಂಪರ್ಕ', dashboard: 'ವೈದ್ಯರ ಲಾಗಿನ್' },
  common: {
    readMore: 'ಮಾರ್ಗದರ್ಶಿ ಓದಿ', minRead: 'ನಿಮಿಷ ಓದು', viewAll: 'ಎಲ್ಲವನ್ನೂ ನೋಡಿ', search: 'ಮಾರ್ಗದರ್ಶಿಗಳನ್ನು ಹುಡುಕಿ…', searchBig: 'ಲಕ್ಷಣ, ವಿಷಯ ಅಥವಾ ವಯಸ್ಸಿನ ಮೂಲಕ ಹುಡುಕಿ…', clear: 'ಹುಡುಕಾಟ ತೆರವುಗೊಳಿಸಿ', all: 'ಎಲ್ಲಾ',
    ageGroup: 'ವಯೋಮಾನ', reviewed: 'ವೈದ್ಯರು ಪರಿಶೀಲಿಸಿದ ದಿನಾಂಕ', updated: 'ನವೀಕರಿಸಲಾಗಿದೆ', share: 'ಹಂಚಿಕೊಳ್ಳಿ', copyLink: 'ಲಿಂಕ್ ನಕಲಿಸಿ',
    copied: 'ಲಿಂಕ್ ನಕಲಿಸಲಾಗಿದೆ!', shareWhatsApp: 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಹಂಚಿಕೊಳ್ಳಿ', back: 'ಹಿಂದೆ', noResults: 'ನಿಮ್ಮ ಹುಡುಕಾಟಕ್ಕೆ ಯಾವುದೇ ಮಾರ್ಗದರ್ಶಿ ಸಿಗಲಿಲ್ಲ.',
    watch: 'ವೀಡಿಯೊ ನೋಡಿ', callNow: 'ಈಗ ಕರೆ ಮಾಡಿ', whatsapp: 'ವಾಟ್ಸಾಪ್', directions: 'ದಾರಿ ತೋರಿಸಿ', guides: 'ಮಾರ್ಗದರ್ಶಿಗಳು', guide: 'ಮಾರ್ಗದರ್ಶಿ', role: 'ಮಕ್ಕಳ ತಜ್ಞರು',
    comingSoon: 'ವೀಡಿಯೊ ಶೀಘ್ರದಲ್ಲೇ', comingSoonText: 'ಈ ವೀಡಿಯೊ ಶೀಘ್ರದಲ್ಲೇ ಇಲ್ಲಿ ಲಭ್ಯವಾಗಲಿದೆ. ಅಲ್ಲಿಯವರೆಗೆ ಯೂಟ್ಯೂಬ್ ಚಾನೆಲ್‌ಗೆ ಭೇಟಿ ನೀಡಿ.',
    visitChannel: 'ಯೂಟ್ಯೂಬ್ ಚಾನೆಲ್ ನೋಡಿ', related: 'ಸಂಬಂಧಿತ ಮಾರ್ಗದರ್ಶಿಗಳು', inThisGuide: 'ಈ ಮಾರ್ಗದರ್ಶಿಯಲ್ಲಿ', menu: 'ಮೆನು', close: 'ಮುಚ್ಚಿ', dos: 'ಮಾಡಿ', donts: 'ಮಾಡಬೇಡಿ',
  },
  home: {
    eyebrow: 'ಮಕ್ಕಳ ತಜ್ಞರು · ಬೆಂಗಳೂರು',
    heroTitleA: 'ನಿಮ್ಮ ಮಗುವಿನ ಆರೋಗ್ಯಕ್ಕಾಗಿ', heroTitleB: 'ವಿಶ್ವಾಸಾರ್ಹ ಮಕ್ಕಳ ಆರೈಕೆ',
    ctaGuides: 'ಆರೋಗ್ಯ ಮಾರ್ಗದರ್ಶಿಗಳು', ctaContact: 'ಕ್ಲಿನಿಕ್‌ಗೆ ಭೇಟಿ ನೀಡಿ',
    years: 'ವರ್ಷಗಳ ಅನುಭವ', families: 'ಕುಟುಂಬಗಳಿಗೆ ಆರೈಕೆ', guides: 'ಆರೋಗ್ಯ ಮಾರ್ಗದರ್ಶಿಗಳು', languages: 'ಭಾಷೆಗಳು',
    welcomeEyebrow: 'ವೈದ್ಯರಿಂದ ಒಂದು ಮಾತು',
    featuredEyebrow: 'ಪೋಷಕರ ಗ್ರಂಥಾಲಯ', featuredTitle: 'ವೈದ್ಯರು ಬರೆದ ಆರೋಗ್ಯ ಮಾರ್ಗದರ್ಶಿಗಳು',
    featuredText: 'ನಿಮ್ಮ ಮಗುವಿನ ಆರೋಗ್ಯದ ಬಗ್ಗೆ ಆತ್ಮವಿಶ್ವಾಸದ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಲು ಡಾ. ಮಂಜುನಾಥ್ ಅವರ ವಿಶ್ವಾಸಾರ್ಹ ಲೇಖನಗಳು.',
    topicsEyebrow: 'ಪೋಷಕರಿಗಾಗಿ', topicsTitle: 'ಸಣ್ಣ ಚಿಂತೆಗಳು, ಸ್ಪಷ್ಟ ಉತ್ತರಗಳು',
    topicsSubtitle: 'ದಿನನಿತ್ಯದ ಪೋಷಕರ ಪ್ರಶ್ನೆಗಳಿಗೆ ಸರಳ, ವೈದ್ಯರು ಪರಿಶೀಲಿಸಿದ ಸಹಾಯ.',
    videosEyebrow: 'ವೀಡಿಯೊ ಗ್ರಂಥಾಲಯ', videosTitle: 'ನೋಡಿ, ಕಲಿಯಿರಿ, ಆತ್ಮವಿಶ್ವಾಸ ಪಡೆಯಿರಿ',
    contactEyebrow: 'ನಮ್ಮನ್ನು ಭೇಟಿ ಮಾಡಿ', contactTitle: 'ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕಾಗಿ ನಾವಿದ್ದೇವೆ',
    ddEyebrow: 'ತ್ವರಿತ ಮಾರ್ಗದರ್ಶಿ', ddTitle: 'ಪೋಷಕರಿಗೆ ದಿನನಿತ್ಯದ ಮಾಡಬೇಕಾದದ್ದು ಮತ್ತು ಮಾಡಬಾರದ್ದು', ddText: 'ಪೋಷಕರು ಹೆಚ್ಚಾಗಿ ಎದುರಿಸುವ ಸಂದರ್ಭಗಳಿಗೆ ಸರಳ, ವೈದ್ಯರು ಅನುಮೋದಿಸಿದ ನಿಯಮಗಳು.', ddRead: 'ಪೂರ್ಣ ಮಾರ್ಗದರ್ಶಿ ಓದಿ',
    trust1: 'ವೈದ್ಯರು ಪರಿಶೀಲಿಸಿದ ಮಾಹಿತಿ', trust2: 'English & ಕನ್ನಡ', trust3: 'ನೋಂದಣಿ ಅಗತ್ಯವಿಲ್ಲ',
  },
  about: {
    eyebrow: 'ವೈದ್ಯರ ಬಗ್ಗೆ', qualifications: 'ವಿದ್ಯಾರ್ಹತೆಗಳು', experience: 'ವೃತ್ತಿಪರ ಪಯಣ',
    specialisation: 'ವಿಶೇಷ ಕ್ಷೇತ್ರಗಳು', approach: 'ಮಕ್ಕಳ ಆರೋಗ್ಯ ಆರೈಕೆಯಲ್ಲಿ ನನ್ನ ದೃಷ್ಟಿಕೋನ', quote: 'ತಿಳುವಳಿಕೆಯುಳ್ಳ, ಆತ್ಮವಿಶ್ವಾಸದ ಪೋಷಕರಿಂದ ಆರೋಗ್ಯವಂತ ಮಕ್ಕಳು ಬೆಳೆಯುತ್ತಾರೆ.',
    meetTitle: '*ನಿಮ್ಮ ಮಕ್ಕಳ ತಜ್ಞರನ್ನು* ಭೇಟಿ ಮಾಡಿ', heroText: 'ಬೆಂಗಳೂರಿನಲ್ಲಿ ವೈಜ್ಞಾನಿಕ ಆಧಾರಿತ ಮಕ್ಕಳ ಆರೋಗ್ಯ ಸೇವೆ ಮತ್ತು ಪೋಷಕರಿಗೆ ಸ್ಪಷ್ಟ, ಶಾಂತ ಮಾರ್ಗದರ್ಶನ, ಇಂಗ್ಲಿಷ್ ಮತ್ತು ಕನ್ನಡದಲ್ಲಿ.', book: 'ಸಮಾಲೋಚನೆ ಕಾಯ್ದಿರಿಸಿ',
    galleryEyebrow: 'ಗ್ಯಾಲರಿ', galleryTitle: 'ಆರೈಕೆಯ ಕ್ಷಣಗಳು',
  },
  health: {
    eyebrow: 'ಪೋಷಕರ ಗ್ರಂಥಾಲಯ', title: 'ಮಕ್ಕಳ ಆರೋಗ್ಯ, ಪೋಷಣೆ ಮತ್ತು ಬೆಳವಣಿಗೆ',
    text: 'ಹುಟ್ಟಿನಿಂದ 18 ವರ್ಷಗಳವರೆಗೆ ಸಾಮಾನ್ಯ ಕಾಯಿಲೆಗಳು, ಲಸಿಕೆಗಳು, ಆಹಾರ ಮತ್ತು ಬೆಳವಣಿಗೆಯ ಕುರಿತು ವೈಜ್ಞಾನಿಕ ಮಾರ್ಗದರ್ಶಿಗಳು.',
  },
  nutrition: {
    eyebrow: 'ಪೋಷಣೆ ಮತ್ತು ಬೆಳವಣಿಗೆ', title: 'ಪ್ರತಿ ಊಟದಲ್ಲೂ ಆರೋಗ್ಯಕರ ಬೆಳವಣಿಗೆ',
    text: 'ಮೊದಲ ತುತ್ತಿನಿಂದ ಶಾಲಾ ಊಟದವರೆಗೆ: ಆಹಾರ, ಬೆಳವಣಿಗೆ, ಮೈಲಿಗಲ್ಲುಗಳು, ನಿದ್ರೆ ಮತ್ತು ನಡವಳಿಕೆ.',
    milestonesTitle: 'ಮೈಲಿಗಲ್ಲುಗಳ ನೋಟ',
  },
  videos: { eyebrow: 'ವೀಡಿಯೊ ಗ್ರಂಥಾಲಯ', title: 'ಚಿಕ್ಕ ವೀಡಿಯೊಗಳು, ನಿಜವಾದ ಉತ್ತರಗಳು', text: 'ಪೋಷಕರಿಗಾಗಿ ವೈದ್ಯರು ರೆಕಾರ್ಡ್ ಮಾಡಿದ ಪ್ರಾಯೋಗಿಕ ವಿವರಣೆಗಳು.' },
  contact: {
    eyebrow: 'ಸಂಪರ್ಕ', title: 'ಕ್ಲಿನಿಕ್ ಅನ್ನು ಸಂಪರ್ಕಿಸಿ', text: 'ಸಮಾಲೋಚನೆಗಾಗಿ ದಯವಿಟ್ಟು ಕ್ಲಿನಿಕ್ ಸಮಯದಲ್ಲಿ ಕರೆ ಮಾಡಿ ಅಥವಾ ವಾಟ್ಸಾಪ್ ಸಂದೇಶ ಕಳುಹಿಸಿ.',
    address: 'ಕ್ಲಿನಿಕ್ ವಿಳಾಸ', phone: 'ದೂರವಾಣಿ', timings: 'ಸಮಾಲೋಚನೆ ಸಮಯ', follow: 'ಪೋಷಕತ್ವದ ಸಲಹೆಗಳಿಗಾಗಿ ಅನುಸರಿಸಿ',
    emergencyTitle: 'ತುರ್ತು ಸಂದರ್ಭದಲ್ಲಿ', emergencyText: 'ನಿಮ್ಮ ಮಗು ಉಸಿರಾಡಲು ಕಷ್ಟಪಡುತ್ತಿದ್ದರೆ, ಪ್ರಜ್ಞೆ ತಪ್ಪಿದ್ದರೆ, ಸೆಳೆತ ಬಂದಿದ್ದರೆ ಅಥವಾ ಗಂಭೀರವಾಗಿ ಗಾಯಗೊಂಡಿದ್ದರೆ, ತಕ್ಷಣ ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಯ ತುರ್ತು ವಿಭಾಗಕ್ಕೆ ಹೋಗಿ ಅಥವಾ 108ಕ್ಕೆ ಕರೆ ಮಾಡಿ.',
  },
  disclaimer: {
    title: 'ವೈದ್ಯಕೀಯ ಹಕ್ಕು ನಿರಾಕರಣೆ',
    text: 'ಈ ಮಾಹಿತಿ ಸಾಮಾನ್ಯ ಶಿಕ್ಷಣಕ್ಕಾಗಿ ಮಾತ್ರ ಮತ್ತು ನಿಮ್ಮ ಮಕ್ಕಳ ವೈದ್ಯರೊಂದಿಗಿನ ಸಮಾಲೋಚನೆಗೆ ಪರ್ಯಾಯವಲ್ಲ. ಪ್ರತಿ ಮಗುವೂ ಭಿನ್ನವಾಗಿರುವುದರಿಂದ, ನಿಮ್ಮ ಮಗುವಿನ ನಿರ್ದಿಷ್ಟ ಸ್ಥಿತಿಗೆ ದಯವಿಟ್ಟು ವೈದ್ಯಕೀಯ ಸಲಹೆ ಪಡೆಯಿರಿ.',
  },
  footer: { tagline: 'ಪೋಷಕರಿಗಾಗಿ ವಿಶ್ವಾಸಾರ್ಹ ಮಕ್ಕಳ ಆರೋಗ್ಯ ಮಾರ್ಗದರ್ಶನ, ಇಂಗ್ಲಿಷ್ ಮತ್ತು ಕನ್ನಡದಲ್ಲಿ.', explore: 'ಅನ್ವೇಷಿಸಿ', clinic: 'ಕ್ಲಿನಿಕ್', rights: 'ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.', note: 'ಸಾಮಾನ್ಯ ಮಾಹಿತಿಗಾಗಿ ಮಾತ್ರ, ವೈದ್ಯಕೀಯ ಸಲಹೆಗೆ ಪರ್ಯಾಯವಲ್ಲ.' },
}

export const dictionaries = { en, kn }
export type { Dict }
