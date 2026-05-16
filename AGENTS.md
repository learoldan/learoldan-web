<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

## Project overview

Personal website — Next.js 16 (canary) + React 19 + Tailwind CSS v4 + TypeScript, using the App Router exclusively.

## Commands

```bash
pnpm dev        # start dev server on :3000
pnpm build      # production build
pnpm start      # run production server
pnpm lint       # ESLint (flat config, eslint.config.mjs)
```

> **Package manager**: always use `pnpm`. Do not use `npm` or `yarn`.

## Key conventions

| Topic | Detail |
|---|---|
| Router | App Router only (`src/app/`). No Pages Router. |
| Path alias | `@/*` → `./src/*` |
| Styling | Tailwind CSS **v4** — see below |
| TypeScript | Strict mode |

## Tailwind CSS v4 — breaking changes from v3

Your training data likely targets v3. This project uses **v4**, which is incompatible in several ways:

- **No `tailwind.config.js`**. All config lives in CSS via `@theme` blocks.
- **Import**: `@import "tailwindcss"` (not `@tailwind base`/`components`/`utilities`).
- **Design tokens**: defined with `@theme inline { ... }` in `globals.css`.
- **Arbitrary values**: same bracket syntax `text-[14px]` still works.
- PostCSS plugin: `@tailwindcss/postcss` (not `tailwindcss` as the plugin).

Refer to `src/app/globals.css` for the current theme setup.

## Notable Next.js 16 APIs (not in training data)

- **`use cache`** directive — replaces `unstable_cache`; attach to async functions or components to opt into caching. Read `node_modules/next/dist/docs/01-app/03-api-reference/04-functions/unstable_cache.md`.
- **`unstable_instant`** export — add to route files to enable instant client-side navigations. Read `node_modules/next/dist/docs/01-app/02-guides/instant-navigation.md`.
- **`cacheLife` / `cacheTag`** — fine-grained cache control. Read the corresponding files in `node_modules/next/dist/docs/01-app/03-api-reference/04-functions/`.
- **`proxy.ts`** replaces `middleware.ts` — the file convention is renamed; export a named `proxy` function instead of a default export. Read `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/proxy.md`.

For all other Next.js APIs, check `node_modules/next/dist/docs/` first.
