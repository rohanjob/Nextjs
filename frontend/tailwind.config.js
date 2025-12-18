/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                saffron: "#FF9933",
                gold: "#D4AF37",
                ash: "#B2BEB5",
                divine: {
                    black: "#050505",
                    charcoal: "#0F0F0F",
                    grey: "#1A1A1A",
                    blue: "#1E3A8A",
                }
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
    plugins: [],
};
