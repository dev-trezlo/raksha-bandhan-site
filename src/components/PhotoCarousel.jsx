"use client"

import { motion } from "motion/react"
import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFlip, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-flip"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function PhotoCarousel({ onNext }) {
    const swiperRef = useRef(null)

    const photos = [
        {
            id: 1,
            src: "/images/1.jpg",
        },
        {
            id: 2,
            src: "/images/2.jpg",
        },
        {
            id: 3,
            src: "/images/3.jpg",
        },
        {
            id: 4,
            src: "/images/4.jpg",
        },
    ]

    return (
        <motion.div
            className="min-h-screen overflow-hidden flex flex-col items-center justify-center px-4 py-8"
        >
            <motion.div
                animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute top-10 md:top-20 right-10 text-3xl opacity-30"
            >
                🪔
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-12"
            >
                <h2 className="text-5xl md:text-6xl font-bold text-rose-100 mb-4" style={{ textShadow: "0 0 15px rgba(251, 113, 133, 0.3)" }}>
                    Flashback of Us 📸
                </h2>
                <p className="text-rose-200/80 text-xl">From silly fights to endless laughs, here’s our little journey</p>
            </motion.div>

            <div className="w-full max-w-sm mb-12">
                <Swiper
                    ref={swiperRef}
                    effect="flip"
                    grabCursor={true}
                    modules={[EffectFlip, Pagination]}
                    pagination={{
                        clickable: true,
                        bulletClass: "swiper-pagination-bullet clean-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active clean-bullet-active",
                    }}
                >
                    {photos.map((photo) => (
                        <SwiperSlide key={photo.id}>
                            <div className="relative">
                                <motion.div
                                    animate={{
                                        boxShadow: [
                                            "0 15px 40px rgba(251, 113, 133, 0.25)",
                                            "0 15px 40px rgba(168, 85, 247, 0.25)",
                                            "0 15px 40px rgba(251, 113, 133, 0.25)",
                                        ],
                                    }}
                                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                                >
                                    <img
                                        src={photo.src}
                                        alt={`Memory ${photo.id}`}
                                        className="w-full h-90 object-cover rounded-xl shadow-lg"
                                    />
                                </motion.div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={onNext}
                className="px-8 py-3 bg-gradient-to-r from-rose-500 to-purple-500 text-white font-semibold text-lg rounded-xl hover:from-rose-400 hover:to-purple-400 transition-all duration-300 shadow-lg"
            >
                Final Message 💕
            </motion.button>
        </motion.div>
    )
}
