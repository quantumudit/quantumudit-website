# Project Structure

This document explains the organizational structure of the QuantumUdit website project.

## Philosophy

The project follows a **context-based organization** pattern that separates:
1. **Brand site** content (homepage, marketing pages)
2. **Portfolio** content (detailed professional showcase)
3. **Shared** resources (used across both contexts)
4. **Future sections** (services, resources, courses, blog - reserved with `.gitkeep` files)

This approach ensures:
- ✅ Clear code discoverability
- ✅ Scalability for future features
- ✅ Maintainability without over-complication
- ✅ Logical grouping of related functionality

## Directory Structure

```
quantumudit-website/
├── .agent/                     # AI assistant rules and workflows
├── .gemini/                    # AI conversation artifacts
├── app/                        # Next.js App Router
│   ├── layout.tsx             # Root layout (fonts, metadata)
│   ├── globals.css            # Global styles and CSS variables
│   ├── page.tsx               # Brand homepage
│   ├── portfolio/             
│   │   └── page.tsx           # Portfolio page
│   ├── services/              
│   │   └── page.tsx           # Services (LaunchingSoon)
│   ├── training/              
│   │   └── page.tsx           # Training (LaunchingSoon)
│   ├── resources/             
│   │   └── page.tsx           # Resources (LaunchingSoon)
│   ├── courses/               
│   │   └── page.tsx           # Courses (LaunchingSoon)
│   └── blog/                  
│       └── page.tsx           # Blog (LaunchingSoon)
│
├── components/
│   ├── sections/              # Page sections (context-organized)
│   │   ├── brand/             # Brand homepage sections
│   │   │   ├── BrandHero.tsx
│   │   │   ├── TrustSection.tsx
│   │   │   ├── ServicesOverview.tsx
│   │   │   └── FeaturedWorkSection.tsx
│   │   ├── portfolio/         # Portfolio page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── services/          # Reserved for future services sections
│   │   │   └── .gitkeep
│   │   ├── resources/         # Reserved for future resources sections
│   │   │   └── .gitkeep
│   │   ├── courses/           # Reserved for future courses sections
│   │   │   └── .gitkeep
│   │   ├── blog/              # Reserved for future blog sections
│   │   │   └── .gitkeep
│   │   └── shared/            # Cross-context sections
│   │       └── .gitkeep
│   ├── layout/                # Navigation and footer
│   │   ├── GlobalNavigation.tsx    # Brand site navigation
│   │   ├── PortfolioNavigation.tsx # Portfolio navigation
│   │   └── Footer.tsx
│   ├── ui/                    # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── badge.tsx
│   │   ├── LaunchingSoon.tsx
│   │   └── ...
│   └── portfolio/             # Portfolio-specific reusable components
│       ├── project-card.tsx
│       ├── skill-badge.tsx
│       └── ...
│
├── data/                      # JSON data files (context-organized)
│   ├── portfolio/             # Portfolio data
│   │   ├── profile.json       # Personal info, bio, contact
│   │   ├── experience.json    # Work experience
│   │   ├── education.json     # Educational background
│   │   ├── certifications.json # Professional certifications
│   │   ├── skills.json        # Technical skills
│   │   └── projects.json      # Project showcase
│   ├── brand/                 # Brand site data
│   │   └── services.json      # Service offerings
│   ├── services/              # Reserved for future services data
│   │   └── .gitkeep
│   ├── resources/             # Reserved for future resources data
│   │   └── .gitkeep
│   ├── courses/               # Reserved for future courses data
│   │   └── .gitkeep
│   ├── blog/                  # Reserved for future blog data
│   │   └── .gitkeep
│   └── shared/                # Cross-context data
│       └── .gitkeep
│
├── lib/                       # Utilities and helpers
│   └── data.ts               # Data access layer (typed helpers)
│
├── notes/                     # Development notes and guides
│   ├── fix-git-lock.md
│   ├── fix-typescript-error.md
│   └── lab17-commit-guide.md
│
├── public/                    # Static assets
│   └── images/
│
├── types/                     # TypeScript type definitions
│   └── portfolio.ts
│
├── .eslintrc.json            # ESLint configuration
├── .gitignore                # Git ignore rules
├── next.config.ts            # Next.js configuration
├── package.json              # Dependencies and scripts
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── CONTRIBUTING.md           # Development contribution guide
├── PROJECT-STRUCTURE.md      # This file
└── README.md                 # Project overview
```

## Import Path Conventions

The project uses TypeScript path aliases defined in `tsconfig.json`:

```typescript
// Components
import Navigation from '@/components/layout/GlobalNavigation';
import BrandHero from '@/components/sections/brand/BrandHero';
import HeroSection from '@/components/sections/portfolio/HeroSection';

// Data (via helpers)
import { getProfile, getProjects } from '@/lib/data';

// Types
import type { Project } from '@/types/portfolio';

// UI Components
import { Button } from '@/components/ui/button';
```

## Naming Conventions

### Files
- **Components**: PascalCase (`BrandHero.tsx`, `ServicesOverview.tsx`)
- **Data files**: kebab-case or singular (`profile.json`, `services.json`)
- **Utility files**: camelCase (`data.ts`, `utils.ts`)

### Components
- **Page Components**: `export default function PageName()`
- **Section Components**: `export default function SectionName()`
- **UI Components**: Named exports for shadcn/ui compatibility

### Data Files
- Use descriptive, context-specific names
- Store in appropriate context folders (`portfolio/`, `brand/`, `shared/`)
- Follow consistent JSON schema patterns

## Reserved Folders

Folders marked with `.gitkeep` are reserved for future expansion:
- `components/sections/{services,resources,courses,blog,shared}/`
- `data/{services,resources,courses,blog,shared}/`

These ensure a consistent organizational pattern as the site grows.

## Best Practices

1. **Modularity**: Keep components focused and single-purpose
2. **Data-Driven**: Use JSON files for content, not hardcoding
3. **Type Safety**: Define TypeScript interfaces for all data structures
4. **Separation of Concerns**: Separate presentation (components) from data (JSON) and logic (lib/)
5. **Context-Based Organization**: Group by context (brand/portfolio) rather than type
6. **Future-Proofing**: Use reserved folders for planned features

## References

- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [shadcn/ui Component Library](https://ui.shadcn.com/)
- [Tailwind CSS v4 Beta](https://tailwindcss.com/)
- Brand Guidelines: `.agent/rules/07-brand-specs.md`
