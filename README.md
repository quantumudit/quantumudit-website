# QuantumUdit | Applied Analytics & AI

A professional portfolio and brand website for Udit Choudhary (QuantumUdit), showcasing expertise in analytics, AI, and data engineering.

## 🚀 Tech Stack

- **Framework**: [Next.js 15.1](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Deployment**: Vercel (planned)

## 📁 Project Structure

The project follows a modular organization pattern separating brand site content from portfolio content. For detailed information, see [PROJECT-STRUCTURE.md](./PROJECT-STRUCTURE.md).

```
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Brand homepage
│   ├── portfolio/         # Portfolio page
│   ├── services/          # Services landing (launching soon)
│   ├── training/          # Training programs (launching soon)
│   ├── resources/         # Resources hub (launching soon)
│   ├── courses/           # Courses (launching soon)
│   └── blog/              # Blog (launching soon)
├── components/
│   ├── sections/
│   │   ├── brand/         # Brand homepage sections
│   │   ├── portfolio/     # Portfolio page sections
│   │   └── shared/        # Cross-context sections
│   ├── layout/            # Navigation, footer
│   └── ui/                # Reusable UI components (shadcn/ui)
├── data/
│   ├── portfolio/         # Portfolio data (profile, projects, experience, etc.)
│   ├── brand/             # Brand site data (services)
│   └── shared/            # Cross-context data
└── lib/                   # Utility functions and data helpers
```

## 🏃 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/quantumudit/quantumudit-website.git

# Navigate to project directory
cd quantumudit-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript compiler check |

## 🎨 Brand Guidelines

QuantumUdit follows strict brand guidelines defined in `.agent/rules/07-brand-specs.md`:

- **Primary Colors**: Quantum Blue (`#0A4D8C`), Quantum Light (`#4A90D9`)
- **Typography**: Montserrat (headings), Open Sans (body), JetBrains Mono (code)
- **Tone**: "Quiet Authority" - professional, confident, no hype

## 🗂️ Data Management

All content is driven by JSON files in the `data/` directory. This approach ensures:
- Type-safe content with TypeScript interfaces
- Easy content updates without code changes
- Separation of concerns (content vs. presentation)

See `lib/data.ts` for helper functions to access and transform data.

## 🧩 Component Architecture

Components follow a strict organizational pattern:
- **Brand sections**: For homepage and marketing pages
- **Portfolio sections**: For detailed portfolio showcase
- **Shared components**: Reusable across contexts
- **UI components**: shadcn/ui primitives and custom UI elements

## 🚢 Deployment

The site is deployed on Vercel. Deployment is automated via GitHub Actions (CI/CD pipeline planned).

## 📝 Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our development workflow, commit conventions, and code style guidelines.

## 📄 License

This project is proprietary and confidential. All rights reserved © 2026 Udit Choudhary (QuantumUdit).

## 📧 Contact

- **Website**: [quantumudit.com](https://quantumudit.com) (planned)
- **Email**: quantumudit@gmail.com
- **LinkedIn**: [linkedin.com/in/quantumudit](https://linkedin.com/in/quantumudit)
- **GitHub**: [github.com/quantumudit](https://github.com/quantumudit)

---

**Built with excellence by QuantumUdit** 🚀
