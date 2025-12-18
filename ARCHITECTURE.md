# System Architecture

## Overview
DivineVerse follows a classic two-tier architecture:
1. **Presentation Tier (Frontend)**: A Next.js application that serves the UI and communicates with the data layer.
2. **Data Tier (Backend/DB)**: A MongoDB database and Mongoose models for structured devotional content.

## Frontend Design
- **Animation Strategy**: Uses Framer Motion for component-level animations and Lenis for smooth scrolling.
- **Styling**: Tailwind CSS with custom color tokens (`saffron`, `gold`, `divine-black`).
- **Data Fetching**: Next.js Server Components for SEO and fast initial load.

## Data Schema
- **Gods**: Name, description, mantra, and image references.
- **Scriptures**: Veda/Purana details and significance.
- **Temples**: Location, history, and associated deities.

## Deployment Flow
1. **GitHub Actions**: Runs build tests on push.
2. **Docker**: Packages the application and database into containers.
3. **VM/Cloud**: Host the docker-compose deployment.
