# Contributing to QuantumUdit Website

Thank you for considering contributing to the QuantumUdit website! This document provides guidelines and best practices for development.

## Development Workflow

### Branch Strategy

We use feature branches and merge to `main`:

```bash
# Create a new feature branch
git checkout -b feat/your-feature-name

# Or for other types:
git checkout -b fix/bug-description
git checkout -b chore/maintenance-task
git checkout -b docs/documentation-update
```

**Branch naming conventions:**
- `feat/` - New features or enhancements
- `fix/` - Bug fixes
- `chore/` - Maintenance tasks (dependencies, refactoring, organization)
- `docs/` - Documentation updates
- `test/` - Test additions or modifications

### Commit Message Format

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Examples:**

```bash
# Simple commit
git commit -m "feat(nav): add courses link to GlobalNavigation menu"

# Multi-line commit (recommended)
git commit -m "chore(data): organize portfolio data into subdirectory

- Moved profile, experience, education, certifications, skills, projects JSON files
- New path: data/portfolio/*
- Mirrors component organization structure
- Improves data layer clarity"
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `chore` - Maintenance (refactoring, dependencies, organization)
- `refactor` - Code refactoring (no functional changes)
- `test` - Adding or updating tests
- `perf` - Performance improvements
- `style` - Code style changes (formatting, missing semicolons)

**Scopes (examples):**
- `nav` - Navigation components
- `portfolio` - Portfolio page
- `homepage` - Brand homepage
- `data` - Data layer
- `components` - Components
- `sections` - Section components
- `structure` - Project organization

### Atomic Commits

Group logical changes into atomic commits:
- ✅ One commit per logical change
- ✅ Each commit should build successfully
- ✅ Commits should tell a story
- ❌ Don't mix unrelated changes in one commit

**Good:**
```
1. chore(structure): add placeholder folders for future expansion
2. chore(components): organize portfolio sections into subdirectory
3. chore(components): organize brand sections into subdirectory
4. refactor(portfolio): update imports after section reorganization
```

**Bad:**
```
1. refactor: reorganize everything and update imports
```

## Code Style

### TypeScript

- Use TypeScript for all new files
- Define interfaces for data structures
- Avoid `any` types
- Use type imports: `import type { ... } from '...'`

### React Components

```typescript
// Functional components with TypeScript
interface ComponentProps {
    title: string;
    description?: string;
}

export default function Component({ title, description }: ComponentProps) {
    return (
        <div>
            <h1>{title}</h1>
            {description && <p>{description}</p>}
        </div>
    );
}
```

### File Organization

- One component per file
- Co-locate related files
- Use index files sparingly
- Follow the established folder structure (see PROJECT-STRUCTURE.md)

### Styling

- Use Tailwind CSS utility classes
- Follow brand color variables (see `app/globals.css`)
- Prefer composition over duplication
- Use shadcn/ui components where possible

**Brand colors:**
```tsx
// Use CSS variables
className="text-quantum-blue dark:text-blue-400"
className="bg-quantum-light hover:bg-quantum-blue"
```

##Testing

### Before Committing

1. **Build Check**: `npm run build` (must succeed)
2. **Type Check**: Ensure no TypeScript errors
3. **Lint**: `npm run lint` (fix all errors)
4. **Dev Server**: Run `npm run dev` and manually test changes

### Manual Testing Checklist

- [ ] Changes render correctly on homepage
- [ ] Changes render correctly on portfolio page
- [ ] Navigation works (all links functional)
- [ ] No console errors
- [ ] Responsive on mobile/tablet/desktop
- [ ] Dark mode works (if applicable)

## Pull Request Process

1. **Ensure all tests pass** (build, lint, type-check)
2. **Update documentation** if needed (README, PROJECT-STRUCTURE)
3. **Follow commit conventions** (atomic commits, conventional format)
4. **Provide clear PR description** with context and reasoning
5. **Request review** from project maintainer

## Development Tools

### Recommended VS Code Extensions

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features

### Configuration Files

- `.eslintrc.json` - ESLint rules
- `tsconfig.json` - TypeScript compiler options
- `tailwind.config.ts` - Tailwind CSS configuration
- `next.config.ts` - Next.js configuration

## Need Help?

- Check PROJECT-STRUCTURE.md for organization guidelines
- Review brand guidelines in `.agent/rules/`
- Open an issue for questions or clarifications

---

Thank you for contributing to QuantumUdit! 🚀
