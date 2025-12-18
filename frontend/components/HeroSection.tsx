"use client";

import { motion } from "framer-motion";
import React from "react";

const HeroSection = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Aura */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="w-[600px] h-[600px] rounded-full bg-gold/10 blur-[100px]"
                />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: "100%", x: Math.random() * 100 + "%", opacity: 0 }}
                        animate={{
                            y: "-10%",
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            delay: Math.random() * 10,
                            ease: "linear",
                        }}
                        className="absolute w-1 h-1 bg-white/20 rounded-full"
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-6xl md:text-8xl font-bold text-gold mb-4 tracking-widest text-glow"
                >
                    DIVINE VERSE
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 2 }}
                    className="text-ash text-xl md:text-2xl font-light tracking-wide italic mb-8"
                >
                    "Exploration of the Eternal Knowledge"
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1.5 }}
                    className="flex gap-4 justify-center"
                >
                    <span className="text-saffron text-2xl">ॐ</span>
                    <span className="text-saffron text-2xl">शिवाय नमः</span>
                    <span className="text-saffron text-2xl">विष्णवे नमः</span>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/50"
            >
                <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-gold rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
