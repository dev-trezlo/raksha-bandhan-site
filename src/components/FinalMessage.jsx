"use client"

import { motion } from "motion/react"
import { useEffect, useState } from "react"
import confetti from "canvas-confetti"
import { Heart, Sparkles, Star } from "lucide-react"

export default function FinalMessage() {
    const [titleComplete, setTitleComplete] = useState(false)
    const [isFlipped, setIsFlipped] = useState(false);

    const message = `Dear Sister,

    On this Raksha Bandhan, I just want to say how lucky I am to have you in my life. You've always been there with your love, support, and those little moments that mean the world to me.
    
    From silly fights to fun memories, every moment with you has been special. You're not just my sister, but also a friend I can always count on.
    
    Thanks for being you. Wishing you all the happiness and success you deserve.
    
    Happy Raksha Bandhan!
    
    With lots of love,  
    Your Brother ✨`


    const titleWords = ["Happy", "Raksha", "Bandhan!"]

    useEffect(() => {
        const celebrate = () => {
            confetti({
                particleCount: 80,
                spread: 70,
                origin: { y: 0.6 },
                colors: ["#fb7185", "#a855f7", "#fbbf24"],
                ticks: 300,
            })
        }

        celebrate()
        const interval = setInterval(celebrate, 20000)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            setTitleComplete(true)
        }, 4000)

        return () => clearTimeout(timer)
    }, [])


    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-6 relative">

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="w-full max-w-6xl"
            >
                {/* Main Title */}
                <motion.div
                    className="text-center mb-16 relative z-10"
                >
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mb-8 leading-tight premium-text"
                        style={{
                            background: "linear-gradient(45deg, #fb7185, #a855f7, #fbbf24)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            textShadow: "0 0 30px rgba(251, 113, 133, 0.3)",
                        }}
                    >
                        {titleWords.map((word, wordIndex) => (
                            <span key={wordIndex} className="inline-block mr-2">
                                {word.split("").map((letter, letterIndex) => {
                                    const delay =
                                        titleWords.slice(0, wordIndex).reduce((acc, w) => acc + w.length, 0) * 0.12 + letterIndex * 0.12
                                    return (
                                        <motion.span
                                            key={letterIndex}
                                            className="inline-block"
                                            initial={{ opacity: 0, y: -50, scale: 0 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            transition={{
                                                delay,
                                                duration: 0.8,
                                                ease: "backOut",
                                            }}
                                        >
                                            {letter}
                                        </motion.span>
                                    )
                                })}
                            </span>
                        ))}
                    </motion.h1>
                </motion.div>

                {/* Card */}
                <div className={`${titleComplete ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                    <motion.div
                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1, }}
                        transition={{ duration: 1.2 }}
                        className={`relative z-10 flex justify-center`}
                    >
                        <div className="flip-card w-80 h-96 relative" onClick={() => setIsFlipped(!isFlipped)}>

                            <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>

                                {/* Front Side */}
                                <div className="flip-card-front">
                                    <div className="w-full h-full bg-gradient-to-br from-[#FFE5EC] via-[#FFD6E0] to-[#FFB6C1] rounded-2xl shadow-[0_8px_24px_rgba(255,192,203,0.4)] flex flex-col items-center justify-center cursor-pointer relative">

                                        {/* Decorative Corners */}
                                        <div className="absolute top-2 left-2 text-2xl text-pink-400">🌸</div>
                                        <div className="absolute top-2 right-2 text-2xl text-pink-400">💖</div>
                                        <div className="absolute bottom-2 left-2 text-2xl text-pink-400">💖</div>
                                        <div className="absolute bottom-2 right-2 text-2xl text-pink-400">🌸</div>

                                        <div>
                                            <img src="/rakhi.gif" className="w-40 mb-4" alt="" />
                                        </div>

                                        <h2 className="text-xl font-bold text-[#C026D3] drop-shadow-sm">Rakhi Card</h2>
                                        <p className="text-[#9D174D] text-center px-4 mt-1">Tap to read message 💌</p>

                                    </div>
                                </div>

                                {/* Back Side */}
                                <div className="flip-card-back">
                                    <div className="w-full h-full bg-gradient-to-br from-white to-pink-50 rounded-2xl shadow-[0_8px_24px_rgba(255,192,203,0.3)] p-6 cursor-pointer">
                                        <div className="h-full flex flex-col">

                                            <div className="text-center mb-4">
                                                <h3 className="text-lg font-semibold text-[#DB2777]">💫 Raksha Bandhan 💫</h3>
                                            </div>

                                            <div className="flex-1 overflow-y-auto premium-scrollbar pr-1">
                                                <p className="text-gray-700 text- leading-relaxed whitespace-pre-line">
                                                    {message}
                                                </p>
                                            </div>

                                            <div className="text-center mt-4">
                                                <p className="text-xs text-gray-400">Tap to close 💌</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </motion.div>
                </div>
            </motion.div >
        </div >
    )
}
