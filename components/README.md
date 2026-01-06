# Components Directory

This folder contains all React components for the portfolio.

## Structure

### `sections/`
Full-page sections of the portfolio:
- `HeroSection.tsx` - Landing section with name and intro
- `AboutSection.tsx` - About me, experience, education
- `SkillsSection.tsx` - Skills and technologies
- `ProjectsSection.tsx` - Project showcase
- `ContactSection.tsx` - Contact form and certifications

### `portfolio/`
Reusable portfolio-specific components:
- `ProjectCard.tsx` - Individual project card
- `ExperienceCard.tsx` - Job experience item
- `EducationCard.tsx` - Education item
- `SkillBadge.tsx` - Skill pill/badge
- `CertificationCard.tsx` - Certification item

### `layout/`
Layout wrapper components:
- `Footer.tsx` - Site footer
- `ScrollToTop.tsx` - Scroll to top button

### `ui/`
shadcn/ui base components (auto-generated):
- `card.tsx`, `badge.tsx`, `button.tsx`, etc.

### Root Level
- `Navigation.tsx` - Main navigation bar

## Naming Convention

- **PascalCase** for component files: `ProjectCard.tsx`
- **Descriptive names**: `SkillBadge.tsx` not `Badge.tsx`
- **Component suffix**: `HeroSection`, not `Hero`