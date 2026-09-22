# Infinite Solutions — Website

The official website for Infinite Solutions, built with Next.js, React, TypeScript and Tailwind CSS.

## Getting started

```bash
npm run dev
```

Then open **http://localhost:3000** in your browser (if that port is busy, the terminal will tell you which port it used instead, e.g. `http://localhost:3001`).

Press `Ctrl + C` in the terminal to stop the server.

## Editing content

All editable content lives in a few clearly-named files:

| What you want to change | File to edit |
| --- | --- |
| Phone / WhatsApp number, email, address, tagline | `src/lib/config.ts` |
| Services list | `src/data/services.ts` |
| Projects / case studies | `src/data/projects.ts` |
| Technology stack badges | `src/data/techstack.ts` |
| Homepage layout | `src/app/page.tsx` |
| Company logo/name in the header | `src/components/Navbar.tsx` |
| Footer content | `src/components/Footer.tsx` |
| Privacy policy text | `src/app/privacy/page.tsx` |

## Production build

```bash
npm run build
npm run start
```

`npm run build` compiles an optimized production version and reports any errors. `npm run start` serves that build locally so you can double-check it before deploying.

## Project structure

```
src/
  app/            Pages (Home, About, Services, Projects, Contact, Privacy) + SEO files
  components/     Reusable UI pieces (Navbar, Footer, Hero, ServiceCard, ContactForm, ...)
  data/           Content arrays for services, projects, and the technology stack
  lib/            Central config (config.ts) and the WhatsApp link helper (whatsapp.ts)
```
