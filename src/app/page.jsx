"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import WelcomeScreen from "@/components/WelcomeScreen"
import MemoryLaneScreen from "@/components/MemoryLaneScreen"
import PhotoCarousel from "@/components/PhotoCarousel"
import FinalMessage from "@/components/FinalMessage"

export default function RakshaBandhanSite() {
  const [currentScreen, setCurrentScreen] = useState(0)

  const nextScreen = () => {
    setCurrentScreen((prev) => prev + 1)
  }

  const screens = [
    <WelcomeScreen key="welcome" onNext={nextScreen} />,
    <MemoryLaneScreen key="memory" onNext={nextScreen} />,
    <PhotoCarousel key="photos" onNext={nextScreen} />,
    <FinalMessage key="final" />,
  ]

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a0f1a] to-[#050505]">

      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0, scale: 0.95, }}
          animate={{ opacity: 1, scale: 1, }}
          exit={{ opacity: 0, scale: 1.05, }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}

        >
          {screens[currentScreen]}
        </motion.div>
      </AnimatePresence>

      {/* Watermark */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="fixed bottom-4 right-4 text-[13px] text-white/30 pointer-events-none z-40 font-thin">
        @anujbuilds
      </motion.div>
    </div>
  )
}
