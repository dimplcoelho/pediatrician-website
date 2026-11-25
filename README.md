# Pediatrician Website — Frontend

React + TypeScript + Tailwind CSS v4 + Framer Motion, built from [scope.md](scope.md).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## What's included
- **Public site:** Home, About, Child Health library, Nutrition & Growth, guide pages you can share, Video library, Contact (map, WhatsApp, timings, emergency notice).
- **English / ಕನ್ನಡ** switcher on every page. A shared link like `/guides/fever-in-children?lang=kn` opens in that language.
- **Doctor dashboard** at `/admin` (demo password `demo123`): overview, guides (create, edit, preview, draft, publish), categories, videos (paste a YouTube link), profile and settings. Guides can be shared by copying the link or through WhatsApp, in either language.
- **Animations:** page transitions, scroll reveals, animated background (parallax blobs, floating shapes), counters, hover effects. All motion is reduced when the visitor has "reduce motion" turned on.

## No backend yet
All content lives in [src/data/seed.ts](src/data/seed.ts) and is stored in the browser's `localStorage` by [src/context/ContentContext.tsx](src/context/ContentContext.tsx). To connect the Spring Boot API, replace the setters in that file with API calls. Login is demo-only; the backend must enforce real authentication.

## Replace before launch
- Doctor name, qualifications, clinic address, phone, WhatsApp number and social links (in `seed.ts`, or through the dashboard).
- **Photos** in [public/images/](public/images/) are free Unsplash photos of Indian children, families and food (Unsplash License). Each guide and video has its own photo, mapped in [src/data/images.ts](src/data/images.ts). `doctor.jpg` is a stock model, **not the doctor**: replace it with the real photograph before launch.
- YouTube video IDs (currently empty, so videos show "coming soon").
- Have the doctor review all health content and the Kannada translations.
