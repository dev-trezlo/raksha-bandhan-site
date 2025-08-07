"use client"

import { motion } from "motion/react"
import { useState } from "react"
import confetti from "canvas-confetti"

export default function MemoryLaneScreen({ onNext }) {
    const [currentMemory, setCurrentMemory] = useState(0)

    const memories = [
        {
            title: "Remember our childhood days?",
            description: "Fighting over toys, but never letting anyone else mess with us",
            emoji: "👶",
            color: "#fb7185",
        },
        {
            title: "Our secret midnight adventures",
            description: "Sneaking to the kitchen for late night snacks together",
            emoji: "🍪",
            color: "#a855f7",
        },
        {
            title: "You being my protector",
            description: "Always standing up for me and teaching me to be brave",
            emoji: "🛡️",
            color: "#fbbf24",
        },
        {
            title: "All our silly moments",
            description: "Laughing until our stomachs hurt over the silliest things",
            emoji: "😂",
            color: "#10b981",
        },
        {
            title: "You being my best friend",
            description: "The person I can always count on, no matter what",
            emoji: "💕",
            color: "#f97316",
        },
    ]

    const handleNext = () => {
        if (currentMemory < memories.length - 1) {
            setCurrentMemory(currentMemory + 1)
        } else {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.7 },
                colors: ["#fb7185", "#a855f7", "#fbbf24"],
            })
        }
    }

    const handleContinue = () => {
        confetti({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.6 },
            colors: ["#fb7185", "#a855f7", "#fbbf24"],
        })
        setTimeout(() => onNext(), 1000)
    }

    return (
        <motion.div
            className="min-h-screen flex flex-col items-center justify-center px-4 py-6"
        >
            <div className="max-w-4xl w-full text-center">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-14"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 premium-text">
                        Our Memory Lane
                    </h2>
                    <p className="text-rose-200/90 text-xl md:text-2xl font-medium">
                        Every moment was fun with you ✨
                    </p>
                </motion.div>

                {/* Memory Display */}
                <motion.div
                    key={currentMemory}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 min-h-[320px] md:min-h-[360px] flex flex-col items-center justify-center"
                >
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0],
                        }}
                        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        className="text-7xl mb-8"
                        style={{
                            filter: `drop-shadow(0 0 20px ${memories[currentMemory].color})`,
                        }}
                    >
                        {memories[currentMemory].emoji}
                    </motion.div>

                    <h3 className="text-4xl md:text-5xl font-bold text-rose-100 mb-8 leading-relaxed">
                        {memories[currentMemory].title}
                    </h3>

                    <p className="text-xl md:text-2xl text-rose-200/90 leading-relaxed max-w-3xl mx-auto">
                        {memories[currentMemory].description}
                    </p>
                </motion.div>

                {/* Progress Dots */}
                <div className="flex justify-center space-x-3 mb-12">
                    {memories.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index <= currentMemory ? "bg-rose-400 scale-110" : "bg-rose-900/40"
                                }`}
                            style={{
                                boxShadow: index <= currentMemory ? "0 0 15px rgba(251, 113, 133, 0.6)" : "none",
                            }}
                        />
                    ))}
                </div>

                {/* Button */}
                {currentMemory < memories.length - 1 ? (
                    <motion.button
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleNext}
                        className="px-8 py-4 bg-gradient-to-r from-rose-500 to-purple-500 text-white font-semibold text-lg rounded-2xl hover:from-rose-400 hover:to-purple-400 transition-all duration-300 shadow-xl"
                        style={{
                            boxShadow: "0 15px 35px rgba(251, 113, 133, 0.3)"
                        }}
                    >
                        Next Memory →
                    </motion.button>
                ) : (
                    <motion.button
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleContinue}
                        className="px-10 py-4 bg-gradient-to-r from-rose-500 to-purple-500 text-white font-semibold text-lg rounded-2xl hover:from-rose-400 hover:to-purple-400 transition-all duration-300 shadow-xl"
                        style={{
                            boxShadow: "0 15px 35px rgba(251, 113, 133, 0.3)"
                        }}
                    >
                        See Our Photos ✨
                    </motion.button>
                )}

            </div>
        </motion.div>
    )
}
