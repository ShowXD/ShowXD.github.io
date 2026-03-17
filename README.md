# ShowXD Portfolio

Personal portfolio website for Xue Yi-Zhan (阿薛) — Backend Engineer.

**Live site:** https://showxd.github.io

## Tech Stack

- **Framework:** Vue 3 + TypeScript
- **Build Tool:** Vite 6
- **CSS:** UnoCSS (utility-first)
- **PWA:** vite-plugin-pwa
- **Contact Form:** Formspree
- **Deployment:** GitHub Pages (via GitHub Actions)

## Features

- Particle canvas background with mouse interaction
- Typewriter hero animation
- Scroll-triggered section reveal
- Custom cursor
- Contact form (Formspree)
- PWA support (installable)
- Fully responsive

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build & Preview

```bash
npm run build
npm run preview
```

## Deployment

Pushes to `main` automatically deploy via GitHub Actions → `gh-pages` branch → GitHub Pages.

## Customization

| File | What to change |
|------|---------------|
| `src/data/profile.ts` | Name, bio, avatar, stats |
| `src/data/skills.ts` | Skills list |
| `src/data/projects.ts` | Projects |
| `src/data/experience.ts` | Work experience |
| `src/data/social.ts` | GitHub, LinkedIn URLs |
| `public/images/avatar.jpg` | Profile photo |
