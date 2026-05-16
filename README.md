# learoldan.dev

Personal portfolio website for Leandro Martín Roldán — Fullstack Developer.

**Live:** [learoldan.dev](https://www.learoldan.dev)

## Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **i18n:** next-intl (ES / EN)
- **Icons:** simple-icons
- **Package manager:** pnpm

## Features

- Dark / light mode (persisted in `localStorage`, no flash)
- Bilingual — Spanish and English, switchable without reload
- Fully static, zero JS frameworks on the client beyond React

## Sections

- **Hero** — name, title, intro, links
- **Experience** — work history timeline
- **Skills** — tech stack icon grid
- **About** — bio, education, languages
- **Contact** — contact form + links

## Development

```bash
pnpm dev       # dev server on :3000
pnpm build     # production build
pnpm start     # production server
pnpm lint      # ESLint
```

## Project structure

```
src/
├── app/
│   ├── [locale]/        # locale-scoped layout & page
│   └── globals.css
├── components/
│   ├── sections/        # Hero, Experience, Skills, About, Contact
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   └── LangToggle.tsx
├── i18n/                # next-intl config
└── proxy.ts             # i18n routing (Next.js 16 middleware)
messages/
├── es.json
└── en.json
```
