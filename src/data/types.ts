export type Lang = 'en' | 'kn'

export type Localized = Record<Lang, string>

export interface Category {
  id: string
  icon: string // lucide icon key, see components/Icon.tsx
  image: string
  section: 'health' | 'nutrition'
  name: Localized
  description: Localized
}

export interface GuideContent {
  title: string
  summary: string
  /** Light markdown: "## heading", "- list item", "+ do", "x don't", "! warning", "![caption](image-url)" = picture, blank line = new paragraph */
  body: string
}

export interface Guide {
  id: string
  slug: string
  categoryId: string
  ageGroup: string
  status: 'published' | 'draft'
  featured?: boolean
  readMins: number
  updatedAt: string
  reviewedAt: string
  videoId?: string
  image?: string
  en: GuideContent
  kn: GuideContent
}

export interface Video {
  id: string
  youtubeId: string
  image?: string
  category: Localized
  title: Localized
  description: Localized
  duration: string
  featured?: boolean
}

export interface DoctorProfile {
  name: Localized
  title: Localized
  intro: Localized
  welcome: Localized
  approach: Localized
  yearsExperience: number
  familiesCared: string
  qualifications: { degree: string; institution: Localized; year: string }[]
  journey: { year: string; title: Localized; text: Localized }[]
  specialisations: Localized[]
}

export interface ClinicSettings {
  clinicName: Localized
  address: Localized
  phone: string
  whatsapp: string // digits only, with country code
  email: string
  mapQuery: string
  timings: { days: Localized; hours: string }[]
  youtubeChannel: string
  instagram: string
  facebook: string
}
