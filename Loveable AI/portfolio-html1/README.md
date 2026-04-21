# Muhammad Ahmad — Portfolio

Static HTML / CSS / JavaScript portfolio. No build step, no dependencies.

## Run

Just open `index.html` in any modern browser. For local dev with live reload:

```
npx serve .
# or
python3 -m http.server 8000
```

## Edit your content

All text content lives at the top of `script.js`:

- `experience` — your roles
- `projects`   — title, client, description, role, year, tags, highlights, icon
- `services`   — what you offer
- `certifications` — **replace the `url` values** with your real credential links
- `education`, `skills`, `channels`

The contact form composes a `mailto:` to **ahmadazhar955@gmail.com** with the
visitor's name, email, phone and message — opens in their default mail app.

## Deploy

Drag the folder onto Netlify, Vercel, GitHub Pages, or any static host.
