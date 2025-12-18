"use client";

import HeroSection from "@/components/HeroSection";
import DeitySection from "@/components/DeitySection";
import SmoothScroll from "@/components/SmoothScroll";
import React from "react";

export default function Home() {
    return (
        <SmoothScroll>
            <main className="bg-divine-black">
                <HeroSection />

                <DeitySection
                    name="Lord Shiva"
                    title="The Destroyer & Transformer"
                    description="In the silence of the Himalayas, Mahadev resides in eternal meditation. He is the beginning and the end, the stillness and the cosmic dance of Tandava."
                    image="/images/shiva/meditation.png"
                />

                <DeitySection
                    name="Lord Vishnu"
                    title="The Preserver of Dharma"
                    description="Resting upon the cosmic serpent Sheshanaga, Lord Vishnu maintains the cosmic order. Through His Dashavatara, He descends to Earth to restore balance and righteousness."
                    image="/images/vishnu/vaikuntha.png"
                    reverse={true}
                />

                <DeitySection
                    name="Kedarnath"
                    title="The Sacred Abode"
                    description="High in the Garhwal Himalayas, Kedarnath stands as one of the holiest shrines of Lord Shiva. A place where the soul meets the divine amidst the eternal snows."
                    image="/images/temples/kedarnath.png"
                />

                {/* Scriptures Preview Section */}
                <section className="py-32 px-4 md:px-20 bg-divine-charcoal">
                    <div className="container mx-auto">
                        <h2 className="text-4xl md:text-6xl text-center mb-16 text-gold">THE SACRED SCRIPTURES</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {['Rig Veda', 'Sama Veda', 'Yajur Veda', 'Atharva Veda'].map((veda, i) => (
                                <div key={i} className="glass-card p-8 rounded-xl border border-gold/20 hover:border-gold/50 transition-all duration-500 group">
                                    <h4 className="text-saffron mb-4">Veda {i + 1}</h4>
                                    <h3 className="text-2xl text-white mb-4 group-hover:text-gold transition-colors">{veda}</h3>
                                    <p className="text-ash/70 text-sm">Explore the ancient hymns and mystical knowledge of the {veda}.</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <footer className="py-20 text-center border-t border-white/5">
                    <p className="text-ash/50">© 2025 DivineVerse | Sacred Knowledge Platform</p>
                    <div className="mt-4 text-gold/30 text-xs tracking-[0.5em]">SANATANA DHARMA</div>
                </footer>
            </main>
        </SmoothScroll>
    );
}
