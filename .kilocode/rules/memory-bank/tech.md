# Technical Context: qbit.zone Landing Page

## Technology Stack

| Technology   | Version | Purpose                         |
| ------------ | ------- | ------------------------------- |
| Next.js      | 16.x    | React framework with App Router |
| React        | 19.x    | UI library                      |
| TypeScript   | 5.9.x   | Type-safe JavaScript            |
| Tailwind CSS | 4.x     | Utility-first CSS               |
| Bun          | Latest  | Package manager & runtime       |

## Project Structure

```
/
├── src/app/
│   ├── layout.tsx      # Root layout with SEO metadata
│   ├── page.tsx        # Main landing page
│   └── globals.css     # Global styles
├── public/             # Static assets
└── package.json
```

## Key Features

### Sections

1. **Hero Section** - Full viewport, animated quantum-themed background
2. **State of the Art** - Cards showing current quantum milestones
3. **Challenges** - Problems quantum computing addresses
4. **Impact** - Grid showing world-changing applications + crypto migration
5. **Possibilities** - Future opportunities visualization
6. **News Slider** - Auto-scrolling news with latest quantum breakthroughs

### Design Language

- Dark theme with cyan/purple quantum accents
- Gradient backgrounds and glowing effects
- Clean typography with Inter font
- Smooth scroll animations
- Glass-morphism cards

## Performance

- Server Components by default
- Client components only for interactive elements (news slider)
- Optimized images via next/image
- Minimal bundle size
