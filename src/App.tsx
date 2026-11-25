import { AnimatePresence, MotionConfig } from 'framer-motion'
import { useEffect } from 'react'
import { Outlet, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Footer from './components/Footer'
import MobileTabBar from './components/MobileTabBar'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import GuideDetail from './pages/GuideDetail'
import HealthInfo from './pages/HealthInfo'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Videos from './pages/Videos'

function PublicLayout() {
  return (
    <div className="relative min-h-screen">
      {/* Ambient multi-colour pediatric gradient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-50 overflow-hidden"
      >
        {/* Soft morning sunshine / honey glow top-right */}
        <div className="absolute -top-[10%] -right-[10%] h-[38rem] w-[38rem] rounded-full bg-gradient-to-br from-[#fdecd2]/60 via-[#faeed6]/40 to-transparent blur-[110px] sm:h-[48rem] sm:w-[48rem]" />
        {/* Calming sky powder-blue wash upper-left */}
        <div className="absolute top-[12%] -left-[12%] h-[34rem] w-[34rem] rounded-full bg-gradient-to-tr from-[#d6e7f0]/55 via-[#cde0f0]/35 to-transparent blur-[100px] sm:h-[44rem] sm:w-[44rem]" />
        {/* Gentle lavender glow mid-page */}
        <div className="absolute top-[45%] -right-[12%] h-[36rem] w-[36rem] rounded-full bg-gradient-to-bl from-[#ece7f7]/50 via-[#e4def3]/30 to-transparent blur-[110px] sm:h-[46rem] sm:w-[46rem]" />
        {/* Fresh mint / sage glow lower-page */}
        <div className="absolute bottom-[10%] -left-[8%] h-[36rem] w-[36rem] rounded-full bg-gradient-to-tr from-[#dcefe2]/50 via-[#e1ece0]/35 to-transparent blur-[110px] sm:h-[46rem] sm:w-[46rem]" />
        {/* Delicate blush accent near footer */}
        <div className="absolute -bottom-[8%] right-[15%] h-[32rem] w-[32rem] rounded-full bg-gradient-to-t from-[#fbe2da]/45 to-transparent blur-[100px] sm:h-[40rem] sm:w-[40rem]" />
      </div>

      <Navbar />
      <Outlet />
      <Footer />
      <FloatingWhatsApp />
      <MobileTabBar />
    </div>
  )
}

export default function App() {
  const location = useLocation()

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }) }, [location.pathname])

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="health" element={<HealthInfo />} />
            <Route path="nutrition" element={<Navigate to="/health" replace />} />
            <Route path="guides/:slug" element={<GuideDetail />} />
            <Route path="videos" element={<Videos />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </MotionConfig>
  )
}
