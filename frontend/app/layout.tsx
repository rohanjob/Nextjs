import type { Metadata } from "next";
import "../styles/globals.css";
import React from "react";

export const metadata: Metadata = {
    title: "DivineVerse | Sacred Knowledge of Sanatana",
    description: "Explore the ancient Indian scriptures, deities, and temples in an immersive spiritual experience.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-divine-black min-h-screen">
                {children}
            </body>
        </html>
    );
}
