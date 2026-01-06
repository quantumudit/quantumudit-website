# Project Structure

Last Updated: 2026-01-06

## Directory Overview

```
quantumudit-website
├── app/                    # Next.js App Router
│   ├── page.tsx            # Home page
│   ├── layout.tsx          # Root layout
│   ├── globals.css         # Global styles
│   └── favicon.ico         # Site icon
│
├── components/
│   ├── sections/           # Page sections (5 files)
│   ├── portfolio/          # Portfolio components (5 files)
│   ├── layout/             # Layout components (2 files)
│   ├── ui/                 # shadcn components (7+ files)
│   └── Navigation.tsx      # Main navigation
│
├── data/                   # JSON data (6 files)
├── lib/                    # Utilities (2 files)
├── types/                  # TypeScript types (1 file)
├── public/images/          # Static images
│
├── node_modules/           # Dependencies (auto-generated)
├── .next/                  # Build output (auto-generated)
│
└── Configuration files:
    ├── package.json
    ├── tsconfig.json
    ├── tailwind.config.ts
    ├── next.config.ts
    └── components.json
```

## File Count Targets

By project completion:

- **Total files**: ~35
- **Component files**: ~20
- **Data files**: 6
- **Configuration files**: 5

## Guidelines

### Component Organization
- One component per file
- Max 200 lines per file
- Related components in same folder

### Naming Conventions
- **Components**: PascalCase (`ProjectCard.tsx`)
- **Utilities**: camelCase (`data.ts`)
- **shadcn**: kebab-case (`hover-card.tsx`)

### Import Aliases
```tsx
import Component from '@/components/sections/Component'
import { getData } from '@/lib/data'
import type { Project } from '@/types/portfolio'
```

## Future Additions

Potential future folders:
- `hooks/` - Custom React hooks
- `contexts/` - React context providers
- `utils/` - Additional utility functions
- `constants/` - App constants
