# AGENTS.md - Development Guidelines for Scrummente

## Project Overview

This is a minimalist static website for the Agile Manifesto built with Tailwind CSS. It consists of HTML pages and CSS files. There is no JavaScript/TypeScript source code, no tests, and no linting configured.

## Build Commands

```bash
# Install dependencies
npm install

# Development mode (watch for changes)
npm run dev

# Production build (minified)
npm run build
```

- **No test commands** - This project has no tests
- **No lint commands** - No linter is configured

## Tech Stack

- **Styling**: Tailwind CSS v3.4
- **Build Tool**: Tailwind CLI
- **Fonts**: Plus Jakarta Sans, Material Symbols Outlined (Google Fonts)
- **No JavaScript frameworks** - Pure HTML/CSS

## Code Style Guidelines

### HTML

- Use semantic HTML5 elements (`<header>`, `<main>`, `<footer>`, `<nav>`)
- Include `lang` attribute on `<html>` element
- Use accessible meta tags (viewport, charset)
- Use Tailwind CSS utility classes for styling
- Follow BEM-like naming for custom CSS classes (e.g., `manifesto-gradient`)

### Tailwind CSS

- Use Tailwind CDN for development (via CDN in HTML head)
- Define custom colors and fonts in both:
  - `tailwind.config.js` (for build)
  - Inline `<script>` in HTML (for CDN preview)
- Use `@layer` directives in `src/input.css` for custom styles
- Follow Tailwind's default color palette (slate, primary blue `#2563eb`)
- Support dark mode via `dark:` modifier and `darkMode: "class"`

### CSS Custom Properties / Custom Classes

- Define reusable gradients in `@layer components`
- Use `manifesto-gradient` pattern for hero sections
- Custom colors defined:
  - `primary`: `#2563eb`
  - `background-light`: `#f8fafc`
  - `background-dark`: `#0f172a`

### File Structure

```
src/
  input.css       # Tailwind source (imports + custom layers)
  index.html      # Main manifesto page
  principles.html # 12 principles page
  authors.html    # Manifesto authors
  translations.html
dist/
  styles.css      # Compiled Tailwind output (generated)
tailwind.config.js
```

### Naming Conventions

- **Classes**: kebab-case (e.g., `manifesto-gradient`, `layout-content-container`)
- **Custom colors**: lowercase with hyphens (e.g., `background-light`)
- **Font families**: lowercase with hyphens (e.g., `font-display`)

### Accessibility

- Use meaningful alt text where applicable
- Use semantic elements for navigation
- Ensure sufficient color contrast
- Use appropriate heading hierarchy (h1 > h2 > h3...)

### Icons

- Use Material Symbols Outlined from Google Fonts
- Classes: `material-symbols-outlined`
- Use `!text-{size}` for icon sizing when needed

### Dark Mode

- Toggle via `class="dark"` on `<html>` element
- Use `dark:` prefix for dark mode variants
- Test both light and dark themes

## Development Workflow

1. Edit HTML files in `src/`
2. Edit CSS in `src/input.css` for custom styles
3. Run `npm run dev` to watch for CSS changes
4. For production, run `npm run build`

## Notes for Agents

- This is a simple static site - no complex build processes
- No TypeScript, React, or other frameworks
- No automated testing suite
- No Prettier or ESLint configured
- All styling is done via Tailwind utility classes
- Custom CSS should be minimal and go in `src/input.css`
