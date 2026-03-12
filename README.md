# Agile Manifesto

A minimalist static website showcasing the Agile Manifesto, its 12 principles, and translations. Built with Tailwind CSS.

## Features

- Clean, zen-like design
- Dark mode support
- Responsive layout
- Material Symbols icons
- Four languages available (English, Spanish, Portuguese, Italian)

## Getting Started

### Prerequisites

- Node.js (18+)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens the site with hot-reload. Edit HTML files in `src/`.

### Production Build

```bash
npm run build
```

Generates minified CSS in `dist/`.

## Project Structure

```
src/
  index.html        # Main manifesto page
  principles.html  # 12 principles
  authors.html      # Manifesto authors
  translations.html # Available translations
  input.css        # Tailwind source
dist/
  styles.css       # Compiled CSS (generated)
```

## Customization

### Colors

Edit `tailwind.config.js` to customize colors:

- `primary`: `#2563eb`
- `background-light`: `#f8fafc`
- `background-dark`: `#0f172a`

### Adding a Translation

1. Copy `translations.html` as template
2. Add language files to `src/locales/`
3. Update navigation links in all pages

## License

The Agile Manifesto content is copyrighted by its authors. This project is for educational/demonstration purposes.
