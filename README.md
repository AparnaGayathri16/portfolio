# Aparna Gayathri Narasimman — Portfolio

A minimalist, JSON-driven personal portfolio site built with vanilla HTML, CSS, and JavaScript. No build step, no frameworks — just open `index.html` in a browser, or deploy to GitHub Pages.

## Site map

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Hero + every section in one scroll |
| Projects | `projects.html` | Full grid of every project |
| Experience | `experience.html` | Detailed career timeline with bullets |
| About | `about.html` | Detailed bio, education, skills, certifications |
| Contact | `contact.html` | Contact cards + form |

## Updating content

All changing content lives in JSON files — no HTML edits required.

- **`projects.json`** — list of projects (id, title, description, tags, image, glyph, link, github, date)
- **`certifications.json`** — list of certs (id, title, issuer, date, description, tags, link)

Push the file → site refreshes. That's it.

## Customisation

- **Accent color & theme** — toggle from the floating toolbar in the bottom-right of any page. Saved to your browser. Defaults defined in the `:root` block at the top of `styles.css`.
- **Resume** — drop your `resume.pdf` into the `assets/` folder, then update the Resume button's `href` in `index.html` to either `assets/resume.pdf` or your Google Drive share link.
- **Profile photo** — drop a square or 4:5 image at `assets/profile.jpg`, then replace the `<div class="about-photo"><span class="initials">…` markup in `index.html` and `about.html` with an `<img>` tag.
- **Bio, education, experience** — edit directly in the HTML files (`index.html`, `about.html`, `experience.html`).
- **Skills** — categorised chips inside `index.html` and `about.html`.
- **Social links** — search the project for `LINKEDIN` / `EMAIL` / `GITHUB` placeholders and update.
- **Fonts** — edit the Google Fonts import in `styles.css` and the `font-family` definitions.

## Hosting on GitHub Pages

1. Create a public GitHub repo (name it `<your-username>.github.io` for the cleanest URL).
2. Push all files to `main`.
3. Settings → Pages → Source: `main` / `(root)` → Save.
4. ~1 minute later it's live at `https://<your-username>.github.io`.
5. Every push auto-rebuilds.

## File structure

```
aparna-portfolio/
├── index.html              # Homepage — all sections in one scroll
├── projects.html           # Full grid of projects
├── about.html              # Detailed bio + ed + skills + certs
├── experience.html         # Career timeline with bullets
├── contact.html            # Contact form + cards
├── styles.css              # Shared design system
├── app.js                  # Shared JS (nav, scrollspy, toolbar, JSON loaders)
├── projects.json           # ← edit content here
├── certifications.json     # ← edit content here
├── assets/                 # resume.pdf, profile.jpg, etc.
└── README.md
```

## Local preview

For JSON `fetch()` calls to work, you need an HTTP server (not `file://`). Easiest:

```bash
# Python 3
python3 -m http.server 8000

# Node (npx)
npx serve .
```

Then open `http://localhost:8000` in a browser.
