# Muhammad Ahmad — Portfolio (HTML / CSS / JS)

Static portfolio site. No build step.

## Run locally
```bash
# any static server, e.g.
python3 -m http.server 8080
# then open http://localhost:8080
```

## Files
- `index.html`  — markup
- `styles.css`  — design system + sections (dark + light themes)
- `script.js`   — rendering, modals, contact (mailto), interactive grid, GSAP, AOS
- `assets/`     — certification dummy images

## Features
- Cursor-reactive animated grid background (canvas)
- Light / Dark theme toggle (persisted in localStorage)
- Mobile hamburger menu with animated open/close + X swap
- Skill / Project / Certification modals
- Global "Get in Touch" modal → opens mail client (mailto:ahmadazhar955@gmail.com)
- AOS scroll reveals + GSAP parallax

## Libraries (CDN)
- AOS 2.3.4
- GSAP 3.12.5 + ScrollTrigger
- Lucide icon font (some inline SVGs for theme + nav toggle)
