# Agents.md — Guidance for AI Coding Agents

This file provides context and conventions for AI coding agents (Claude Code, Copilot, Cursor, etc.) working in this repository.

## Project overview

This is a **static single-page website** for the speed785 open-source ecosystem. It showcases five AI agent tooling projects. The site is deployed via GitHub Pages at [speed785.github.io](https://speed785.github.io).

There is **no build step, no package manager, and no framework**. The entire site is three files: `index.html`, `style.css`, and `script.js`.

## Architecture

```
index.html   → All markup (nav, hero, tool cards, stats bar, footer)
style.css    → All styles (CSS custom properties, responsive breakpoints at 900px/600px)
script.js    → Two features: IntersectionObserver fade-in + canvas matrix rain animation
assets/      → SVG icons (one per tool)
```

### Key design decisions

- **No dependencies.** Do not introduce npm, bundlers, or frameworks. Keep this as vanilla HTML/CSS/JS.
- **Single page.** All content lives in `index.html`. Do not split into multiple HTML files.
- **Dark theme.** The site uses a dark "hacker aesthetic" with CSS custom properties defined in `:root` in `style.css`. Always respect the existing color palette.
- **Responsive.** Two breakpoints exist: 900px (tablet) and 600px (mobile). Any layout changes must work at all three sizes.

## Conventions

### HTML
- Sections use semantic elements (`<nav>`, `<header>`, `<section>`, `<article>`, `<footer>`).
- Tool cards are `<article class="tool-card">` elements with a `data-accent` attribute for per-tool color theming.
- Elements that should animate on scroll get the `fade-in` class.

### CSS
- All colors are defined as CSS custom properties in `:root` (lines 5-30 of `style.css`).
- Tool accent colors: green (agentlens), purple (neuromem), red (sentinel-inject), cyan (synapse-orchestrator), orange (evalforge).
- Font stacks: `var(--font-mono)` for headings/code, `var(--font-body)` for body text.
- Class naming is flat (no BEM, no utility classes). Keep it simple.

### JavaScript
- Everything is wrapped in an IIFE with `'use strict'`.
- The canvas animation uses `requestAnimationFrame` and references the `#particles` canvas element.
- Smooth scroll is handled manually for anchor links.

## Adding a new tool

1. **HTML:** Duplicate an existing `<article class="tool-card">` block in `index.html`. Update the `data-accent`, icon path, name, tagline, features, and links.
2. **CSS:** If the new tool needs a unique accent color, add the color variable to `:root` and create matching `btn-outline-<color>` and `btn-sm` button variants in `style.css`.
3. **Assets:** Add an SVG icon to `assets/<toolname>-icon.svg`. Icons should be 80x80 and match the style of existing icons.
4. **Stats bar:** Update the tool count in the stats section if applicable.

## Testing

There are no automated tests. Verify changes by:

1. Opening `index.html` in a browser (or serving with `python -m http.server`).
2. Checking all three viewport sizes (desktop, tablet at 900px, mobile at 600px).
3. Confirming the matrix rain animation renders correctly on the canvas.
4. Confirming scroll fade-in animations trigger as sections enter the viewport.

## Things to avoid

- Do not add a build step or package manager.
- Do not change the color scheme or font stack without explicit instruction.
- Do not add external JS libraries (the site is intentionally dependency-free).
- Do not modify the canvas animation parameters without testing — small changes can break the visual effect.
- Do not remove the `fade-in` / `visible` class pattern; it drives all scroll animations.

## Deployment

The site is deployed automatically via GitHub Pages from the default branch. Any push to `main` is live immediately — there is no CI/CD pipeline or build process.

## Code ownership

All files are owned by `@speed785` (see `.github/CODEOWNERS`).
