"use client"

import { motion } from "motion/react"
import confetti from "canvas-confetti"

export default function WelcomeScreen({ onNext }) {

    const handleStart = () => {
        confetti({
            particleCount: 100,
            spread: 80,
            origin: { y: 0.7 },
            colors: ["#fb7185", "#a855f7", "#fbbf24"],
            ticks: 300,
        })

        setTimeout(() => {
            onNext()
        }, 1200)
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-x-hidden">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full max-w-6xl"
            >
                {/* Main Content */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1.2 }}
                    className="text-center mb-24 max-w-4xl mx-auto"
                >
                    <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        <motion.span
                            className="block text-rose-100"
                            style={{
                                textShadow: "0 0 30px rgba(251, 113, 133, 0.3)",
                                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))"
                            }}
                        >
                            Hello, my
                        </motion.span>

                        <motion.span
                            className="block premium-text"
                            style={{
                                background: "linear-gradient(45deg, #fb7185, #a855f7, #fbbf24)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundSize: "200% 200%",
                            }}
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            }}
                            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        >
                            Beautiful Sister
                        </motion.span>

                        <motion.span className="inline-block ml-2">💖</motion.span>
                    </motion.h1>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="space-y-6 mt-8">
                        <p className="text-rose-200 text-2xl md:text-3xl font-medium">
                            I’ve made something really special just for you...
                        </p>
                    </motion.div>
                </motion.div>

                {/* Button */}
                <div className="flex justify-center">
                    <motion.button
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 }}
                        whileHover={{
                            scale: 1.05,
                            y: -5,
                            boxShadow: "0 20px 40px rgba(251, 113, 133, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleStart}
                        className="group relative px-12 py-5 rounded-2xl font-semibold text-xl text-white transition-all duration-500"
                        style={{
                            background: "linear-gradient(135deg, #fb7185, #a855f7)",
                            boxShadow: "0 15px 35px rgba(251, 113, 133, 0.3)",
                        }}
                    >
                        <span className="relative z-10 flex items-center space-x-2">
                            <span>Open Your Surprise</span>
                            <motion.span
                                animate={{
                                    rotate: [0, 15, -15, 0],
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                            >
                                🎁
                            </motion.span>
                        </span>
                    </motion.button>
                </div>
            </motion.div>
        </div>
    )
}
