import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { seedCategories, seedDoctor, seedGuides, seedSettings, seedVideos } from '../data/seed'
import type { Category, ClinicSettings, DoctorProfile, Guide, Video } from '../data/types'

/**
 * Frontend-only content store. Persists to localStorage so the admin
 * dashboard and the public site stay in sync without a backend.
 * Swap these setters for API calls when the Spring Boot backend is ready.
 */
interface ContentState {
  doctor: DoctorProfile
  settings: ClinicSettings
  categories: Category[]
  guides: Guide[]
  videos: Video[]
}

interface ContentCtx extends ContentState {
  publishedGuides: Guide[]
  saveGuide: (g: Guide) => void
  deleteGuide: (id: string) => void
  saveCategory: (c: Category) => void
  deleteCategory: (id: string) => void
  saveVideo: (v: Video) => void
  deleteVideo: (id: string) => void
  setDoctor: (d: DoctorProfile) => void
  setSettings: (s: ClinicSettings) => void
  resetAll: () => void
  isAdmin: boolean
  login: (email: string, password: string) => boolean
  logout: () => void
}

const STORAGE_KEY = 'peds-content-v7'
const seed: ContentState = { doctor: seedDoctor, settings: seedSettings, categories: seedCategories, guides: seedGuides, videos: seedVideos }

function load(): ContentState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return seed
    const parsed = JSON.parse(raw) as ContentState
    // Ensure all videos have verified working reference YouTube IDs
    const updatedVideos = (parsed.videos && parsed.videos.length > 0 ? parsed.videos : seedVideos).map((v: Video) => {
      if (!v.youtubeId || v.youtubeId === 'A-UjZ_J7k8g') {
        const match = seedVideos.find((sv) => sv.id === v.id)
        return match?.youtubeId ? { ...v, youtubeId: match.youtubeId } : v
      }
      return v
    })
    // Undo a short-lived icon refresh: browsers that saved the new icon keys get the original ones back
    const retired: Record<string, string> = {
      cough: 'thermometer', stomach: 'apple', allergy: 'sparkles', child: 'heart', breastfeeding: 'baby', carrot: 'salad', seedling: 'ruler',
    }
    // Upgrade the original one-line category descriptions (or missing ones) to the fuller seed text; doctor-edited text is kept
    const shortDescs = new Set([
      'Home care and red-flag signs.', 'Colic, constipation, loose motions and more.', 'Rashes, eczema and allergy care.',
      'Schedules, side effects and myths.', 'Everyday tips for healthy, happy kids.', 'Breastfeeding, formula and starting solids.',
      'Healthy habits and fuss-free mealtimes.', 'Physical growth and developmental milestones.', 'Healthy sleep and emotional development.',
    ])
    const categories = (parsed.categories ?? seedCategories).map((c) => {
      const cat = retired[c.icon] ? { ...c, icon: retired[c.icon] } : c
      const fresh = seedCategories.find((sc) => sc.id === cat.id)
      return fresh && (!cat.description?.en || shortDescs.has(cat.description.en)) ? { ...cat, description: fresh.description } : cat
    })
    // Browsers that saved the old placeholder name get the new one; a doctor-edited name is kept
    const doctor = parsed.doctor?.name?.en === 'Dr. Arjun Kulkarni' ? { ...parsed.doctor, name: seedDoctor.name } : parsed.doctor
    return { ...seed, ...parsed, ...(doctor ? { doctor } : {}), categories, videos: updatedVideos }
  } catch {
    return seed
  }
}

const Ctx = createContext<ContentCtx | null>(null)

const upsert = <T extends { id: string }>(list: T[], item: T) =>
  list.some((x) => x.id === item.id) ? list.map((x) => (x.id === item.id ? item : x)) : [item, ...list]

export function ContentProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ContentState>(load)
  const [isAdmin, setIsAdmin] = useState(() => sessionStorage.getItem('peds-admin') === '1')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const value = useMemo<ContentCtx>(() => ({
    ...state,
    publishedGuides: state.guides.filter((g) => g.status === 'published'),
    saveGuide: (g) => setState((s) => ({ ...s, guides: upsert(s.guides, g) })),
    deleteGuide: (id) => setState((s) => ({ ...s, guides: s.guides.filter((g) => g.id !== id) })),
    saveCategory: (c) => setState((s) => ({ ...s, categories: upsert(s.categories, c) })),
    deleteCategory: (id) => setState((s) => ({ ...s, categories: s.categories.filter((c) => c.id !== id) })),
    saveVideo: (v) => setState((s) => ({ ...s, videos: upsert(s.videos, v) })),
    deleteVideo: (id) => setState((s) => ({ ...s, videos: s.videos.filter((v) => v.id !== id) })),
    setDoctor: (doctor) => setState((s) => ({ ...s, doctor })),
    setSettings: (settings) => setState((s) => ({ ...s, settings })),
    resetAll: () => setState(seed),
    isAdmin,
    // Demo-only auth. Real auth must be enforced by the backend.
    login: (email, password) => {
      const ok = email.trim().length > 0 && password === 'demo123'
      if (ok) { sessionStorage.setItem('peds-admin', '1'); setIsAdmin(true) }
      return ok
    },
    logout: () => { sessionStorage.removeItem('peds-admin'); setIsAdmin(false) },
  }), [state, isAdmin])

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useContent() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useContent must be used inside ContentProvider')
  return ctx
}
