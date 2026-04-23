# Muhammad Ahmad — Portfolio v2 (Editorial / Brutalist)

A completely redesigned static portfolio in **HTML5 + CSS3 + vanilla JS**,
with **GSAP / ScrollTrigger** for animations.

## Highlights

- Editorial / brutalist aesthetic — warm cream paper + ink + vermillion accent
- **Light & Dark mode** toggle (top-right, persisted in localStorage)
- Fully **responsive** — scales from 360px to 4K
- **Custom cursor** with hover state (auto-disabled on touch)
- **Loader** with animated counter
- **GSAP scroll animations**: split-word hero, word-by-word section reveals, magnetic buttons, parallax band
- **Drag-to-scroll horizontal projects rail** (also wheel-scrollable)
- **Accordion** for skills/expertise
- **Modal** for project case studies & certificate previews
- Live **Lahore clock** in the hero meta bar
- Marquee bands (top ticker + skills band + footer)

## Run locally

Just open `index.html` in your browser, or serve it:

```bash
python3 -m http.server 8080
# or
npx serve .
```

Then visit http://localhost:8080

## Files

- `index.html` — markup, modal scaffold, CDN script tags
- `styles.css` — design tokens, layout, animations, light/dark themes
- `script.js` — data, rendering, GSAP setup, modal, cursor, drag rail
- `assets/` — certificate images

## Customize

- **Email**: edit the `mailto:` links in `index.html` and the contact grid
- **Projects / Skills / Certifications**: edit the data arrays at the top of `script.js`
- **Colors**: edit the `:root[data-theme="light"]` and `:root[data-theme="dark"]` blocks at the top of `styles.css`
- **Fonts**: change the Google Fonts `<link>` in `index.html` and the `font-family` declarations at the top of `styles.css`

## Hosting

Drop the folder on Netlify, Vercel, GitHub Pages, Cloudflare Pages — any static host.
