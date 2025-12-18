"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const DeitySection = ({
    name,
    title,
    description,
    image,
    reverse = false
}: {
    name: string;
    title: string;
    description: string;
    image: string;
    reverse?: boolean;
}) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="py-24 px-4 md:px-20 min-h-screen flex items-center overflow-hidden">
            <div className={`container mx-auto flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
                {/* Text content */}
                <motion.div
                    style={{ opacity }}
                    className="flex-1 space-y-6"
                >
                    <h3 className="text-saffron text-sm tracking-[0.3em] uppercase">{title}</h3>
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase">{name}</h2>
                    <p className="text-ash text-lg leading-relaxed max-w-xl">
                        {description}
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-black transition-colors duration-300"
                    >
                        Explore Essence
                    </motion.button>
                </motion.div>

                {/* Image Parallax */}
                <div className="flex-1 relative aspect-[4/5] w-full max-w-md">
                    <motion.div
                        style={{ y }}
                        className="absolute inset-0 bg-divine-grey rounded-lg overflow-hidden shadow-2xl border border-white/10"
                    >
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover opacity-80 hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-divine-black/80 via-transparent to-transparent" />
                    </motion.div>
                    {/* Decorative aura behind image */}
                    <div className="absolute -inset-10 bg-gold/5 blur-[80px] -z-10 rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default DeitySection;
