# Bhasme Sir Coaching Center — Website

A single-page, mobile-first website for **Math's Coaching by Bhasme Sir**.
Built with plain HTML, CSS and JavaScript — no build step, no dependencies.

## Files

```
bhasme-math-coaching/
├── index.html      # All page sections (Home, About, Courses, Why Us, Results, Contact)
├── styles.css      # Styling (logo color scheme, fully responsive)
├── script.js       # Mobile menu, form handling, footer year
├── assets/
│   └── logo.png    # Your academy logo
└── README.md
```

## 1. Things to customise before going live

Open `index.html` and replace the placeholders:

| Placeholder | Where | What to put |
|---|---|---|
| `[Add your academy address here]` | Contact section | Your physical address |
| `+91 00000 00000` / `tel:+910000000000` | Contact section | Your phone number |
| `info@example.com` | Contact section | Your email |
| `https://wa.me/910000000000` | WhatsApp button (bottom of file) | Your WhatsApp number (country code, no +, no spaces) |
| Google Maps `iframe src` | Contact section | Your location embed (Google Maps → Share → Embed a map) |
| Stats (`15+`, `2000+`, `95%`) | Hero section | Your real numbers |
| Testimonials | Results section | Real student reviews |

## 2. Contact form (optional)

The form currently uses a placeholder. To receive enquiries by email for free:

1. Create a free account at [formspree.io](https://formspree.io).
2. Create a form and copy your endpoint (looks like `https://formspree.io/f/abcdwxyz`).
3. In `index.html`, replace `https://formspree.io/f/your-form-id` in the `<form action="...">`.

Until then, visitors are prompted to call/WhatsApp instead.

## 3. Preview locally

Just open `index.html` in a browser, or run a tiny local server:

```bash
cd bhasme-math-coaching
python3 -m http.server 8000
# then open http://localhost:8000
```

## 4. Deploy to GitHub Pages (free)

1. Create a new repository on GitHub (e.g. `bhasme-math-coaching`).
2. Push these files to the repo root:

```bash
cd bhasme-math-coaching
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/<your-username>/bhasme-math-coaching.git
git push -u origin main
```

3. On GitHub: **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **main**, folder: **/ (root)** → Save.
4. Wait ~1 minute. Your site goes live at:
   `https://<your-username>.github.io/bhasme-math-coaching/`

### Custom domain (optional)
In **Settings → Pages → Custom domain**, add your domain (e.g. `bhasmemaths.com`) and
create a `CNAME` record at your domain registrar pointing to `<your-username>.github.io`.

## Notes
- The site is fully responsive (phones, tablets, desktops).
- Colors follow the logo (navy, orange, teal). Adjust them in `:root` at the top of `styles.css`.
