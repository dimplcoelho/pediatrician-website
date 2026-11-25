/** Photo library (Unsplash License — free to use). Every guide and video has its own photo. */
export const guideImages: Record<string, string> = {
  'fever-in-children': '/images/guide-fever.jpg',
  'cough-and-cold': '/images/guide-cough-cold.jpg',
  'vaccination-schedule': '/images/guide-vaccination.jpg',
  'starting-solid-foods': '/images/guide-solid-foods.jpg',
  'loose-motions-and-dehydration': '/images/guide-loose-motions.jpg',
  'eczema-in-babies': '/images/guide-eczema.jpg',
  'picky-eating': '/images/guide-picky-eating.jpg',
  'developmental-milestones': '/images/guide-milestones.jpg',
  'healthy-sleep-habits': '/images/guide-sleep.jpg',
  'hand-washing-and-hygiene': '/images/guide-hygiene.jpg',
  'iron-rich-foods': '/images/guide-iron-foods.jpg',
}

/** Choices offered in the dashboard photo pickers. */
export const photoLibrary = [
  ...Object.values(guideImages),
  '/images/video-fever.jpg', '/images/video-first-foods.jpg', '/images/video-vaccines.jpg',
  '/images/video-talking.jpg', '/images/video-bedtime.jpg', '/images/video-ors.jpg',
  '/images/extra-baby-bindi.jpg', '/images/extra-baby-crawling.jpg', '/images/extra-mother-newborn.jpg',
  '/images/extra-thali.jpg', '/images/extra-boy-smiling.jpg', '/images/welcome-family.jpg',
]
