# Muhammad Ahmad — Portfolio (HTML / CSS / JS)

Static portfolio built with vanilla HTML5, CSS3, and JavaScript.
Animations: GSAP + ScrollTrigger, AOS (scroll reveals), and a custom
cursor-reactive canvas background.

## Run locally

Just open `index.html` in your browser, or serve it with any static server:

```bash
# Python
python3 -m http.server 8080

# Node (npx)
npx serve .
```

Then visit http://localhost:8080

## Files

- `index.html` — markup, modals, and CDN script tags
- `styles.css` — design system, layout, animations
- `script.js` — data, rendering, modals, cursor, canvas grid, GSAP

## Customize

- **Email**: change `TO_EMAIL` in `script.js` (currently `ahmadazhar955@gmail.com`)
- **Projects / Skills / Certifications**: edit the arrays at the top of `script.js`
- **Colors**: edit the CSS variables at the top of `styles.css` (`--primary`, `--gradient-brand`, etc.)
- **Certificate images**: replace the `cert-image` placeholder block in `script.js` (`openModal` for certs) with `<img src="...">`

## Hosting

Drop the folder on Netlify, Vercel, GitHub Pages, or any static host.

