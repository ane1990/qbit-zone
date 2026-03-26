# System Patterns: qbit.zone Landing Page

## Architecture Overview

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Landing page (single file)
│   └── globals.css         # Tailwind imports + custom styles
└── public/                 # Static assets
```

## Component Structure

All sections are in `page.tsx` for simplicity:
- Hero section
- State of the Art section
- Challenges section
- Impact section (including crypto migration)
- Possibilities section
- NewsSlider (Client Component for interactivity)

## Design Patterns

### 1. Server vs Client Components
- `page.tsx` is a Server Component (static content)
- `NewsSlider` is a Client Component (`"use client"` for auto-scroll)

### 2. Styling Pattern
- Dark theme with cyan/purple accents
- Glass-morphism cards with backdrop blur
- CSS animations for quantum-themed effects
- Tailwind utility classes

### 3. SEO Pattern
- Proper heading hierarchy (h1 > h2 > h3)
- Meta tags for search engines
- Open Graph tags for social sharing
