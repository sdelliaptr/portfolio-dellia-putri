# Dellia Putri Santoso — Portfolio

A personal portfolio site built with React, Vite, and Tailwind CSS. All content
is sourced from the provided CV — nothing has been invented.

## Getting started

```bash
npm install
npm run dev       # local development at http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  data/            # all content lives here — edit these files, not the components
    personal.js
    education.js
    projects.js         # doubles as "Experience" timeline data
    trainings.js
    certifications.js
    organizations.js
    skills.js
    brandIconData.json  # small local set of brand icon paths (see below)
  components/      # Navbar, Hero, ProjectCard, ProjectModal, etc.
  lib/             # theme + scroll-spy hooks
public/
  images/
    profile/       # add your photo here
    projects/       # add project screenshots here
    certificates/   # add certificate images here
  CV_Master_DelliaPutri.pdf   # powers the "Download CV" button
```

## Things left as placeholders (nothing was invented)

1. **Profile photo** — no photo was supplied, so the hero section shows a
   "DPS" monogram. To add a real photo: drop a file at
   `public/images/profile/photo.jpg` and set `photo: "/images/profile/photo.jpg"`
   in `src/data/personal.js`.
2. **Project & certificate screenshots** — the CV didn't come with images, so
   each project shows four labeled placeholder tiles. Add real screenshots to
   `public/images/projects/<project-id>/` and update the `images` array for
   that project in `src/data/projects.js` (same pattern for
   `src/data/certifications.js`).
3. **GitHub profile / repo links** — no GitHub URL was listed on the CV. Add
   yours in `src/data/personal.js` (`github` field) and per-project in
   `src/data/projects.js` (`github` / `demo` fields) to have the buttons
   appear automatically.

## Brand icons

Technology logos (Python, Flask, MySQL, GitHub, etc.) are stored as a small
local dataset in `src/data/brandIconData.json` — this keeps the production
bundle small instead of pulling in a full icon library. To add another
brand icon, find its path data at https://simpleicons.org and add an entry
with the same `{ title, hex, path }` shape.

## Deploying to GitHub Pages

1. Set the `base` option in `vite.config.js` to your repo name, e.g.
   `base: "/your-repo-name/"`.
2. Build the site: `npm run build`.
3. Deploy the `dist/` folder to the `gh-pages` branch (or use a GitHub Action
   such as `actions/deploy-pages`).

## Theming

Light/dark mode is class-based (`dark` class on `<html>`) and the user's
choice is saved to `localStorage`. Color tokens live in `tailwind.config.js`
under `theme.extend.colors` (`periwinkle` = blue, `lavender` = purple).
