# Global Solutions PTE LTD — Website

Premium one-pager for Global Solutions PTE LTD, built for Netlify deployment.

## Stack

- Pure HTML / CSS / JS — zero dependencies, zero build step
- Fonts loaded from Google Fonts (Cormorant Garamond + Inter)
- Netlify for hosting with custom headers

## Project structure

```
global-solutions/
├── index.html          # Single page
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Scroll animations, nav, parallax
├── assets/             # Drop logo/images here
├── netlify.toml        # Cache + security headers
└── README.md
```

## Local development

No build step required — open `index.html` directly in a browser, or use a
simple local server:

```bash
# Python
python3 -m http.server 8080

# Node (npx)
npx serve .
```

## Deploy to Netlify

### Option A — Netlify CLI (recommended with Claude Code)

```bash
npm install -g netlify-cli
netlify login
netlify init          # connect or create a site
netlify deploy --prod # deploy from this directory
```

### Option B — Drag & drop

Go to [app.netlify.com](https://app.netlify.com), drag the `global-solutions/`
folder onto the deploy drop-zone.

### Option C — GitHub + Netlify CI

1. Push this repo to GitHub
2. In Netlify: **Add new site → Import from Git**
3. Set **Publish directory** to `.` (root of this folder)
4. Netlify auto-deploys on every push to `main`

## Custom domain

In Netlify → Domain settings → Add custom domain, then update your DNS to
point to Netlify's nameservers. Netlify issues a free TLS cert via Let's
Encrypt automatically.

## Adding the logo

Drop your exported logo file (PNG/SVG) into `assets/` and add it to the nav:

```html
<!-- In index.html, replace the .nav__logo-mark span with: -->
<img src="assets/logo.png" alt="Global Solutions" class="nav__logo-img" />
```

Add to style.css:
```css
.nav__logo-img { height: 36px; width: auto; }
```

## WhatsApp number

The WhatsApp widget links to `+4917628554554`.
To change it, find-replace `4917628554554` across `index.html`.
