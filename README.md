# 🔱 DivineVerse

DivineVerse is a two-tier devotional web application built using **Next.js** and a **MongoDB** backend, showcasing Indian spiritual heritage through immersive animations, parallax scrolling, and modern UI design.

## 🚀 Key Features
- **Immersive UI**: Dark spiritual theme with saffron and gold accents.
- **Advanced Animations**: Powered by Framer Motion and GSAP for smooth scroll-triggered effects.
- **Two-Tier Architecture**: Scalable frontend and backend integration.
- **Dynamic Content**: Data-driven deity, scripture, and temple information.
- **Docker Ready**: Containerized setup for easy deployment.

## 🛠️ Tech Stack
- **Frontend**: Next.js (App Router), Tailwind CSS, Framer Motion, GSAP, Lenis.
- **Database**: MongoDB (Mongoose models provided).
- **Deployment**: Docker, GitHub Actions.

## 🏃 Quick Start
1. **Clone the repository**
2. **Start with Docker**
   ```bash
   docker-compose up --build
   ```
3. **Local Development**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

## 📂 Structure
- `/frontend`: Next.js application.
- `/database`: Mongoose models and seed scripts.
- `/.github`: CI/CD workflows.
