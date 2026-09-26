# RIMONSTAR Game Studio — Website

A cinematic, static website for an independent game studio. Built with HTML5, CSS3, and vanilla JavaScript — no frameworks, no build tools, no backend. Ready to deploy on GitHub Pages.

---

## File Structure

```
rimonstar-website/
├── index.html              # Home page (hero, featured game, news, games, about, careers, contact)
├── games.html              # Games page (detailed project listings)
├── about.html              # About page (studio story, principles)
├── news.html               # News page (articles with full preview)
├── contact.html            # Contact page (email links)
├── privacy.html            # Privacy Policy (placeholder legal content)
├── terms.html              # Terms & Conditions (placeholder legal content)
├── robots.txt              # Search engine instructions
├── sitemap.xml             # Sitemap for search engines
├── README.md               # This file
├── css/
│   └── style.css           # Complete stylesheet (design system, responsive, animations)
├── js/
│   └── main.js             # Navigation, scroll animations, mobile menu, interactions
└── assets/
    ├── favicon.svg          # Browser favicon
    ├── logo.svg             # Full logo (display version)
    ├── logo-small.svg       # Compact logo for navigation
    ├── footer-logo.svg      # Footer logo variant
    ├── hero-bg.svg          # Hero section background artwork
    ├── game-green-valley.svg  # Block Puzzle: Green Valley artwork
    ├── game-capsule-jump.svg  # Capsule Jump artwork
    ├── game-new-project.svg   # New Project placeholder artwork
    ├── about-visual.svg     # About section visual
    ├── careers-visual.svg   # Careers section background
    ├── contact-visual.svg   # Contact section background
    ├── news-1.svg           # News article 1 image
    ├── news-2.svg           # News article 2 image
    └── news-3.svg           # News article 3 image
```

---

## What Each File Does

| File | Purpose |
|------|---------|
| `index.html` | The homepage with all main sections: cinematic hero, featured game, latest news, our games, about, careers, contact, and footer |
| `games.html` | Dedicated games page with full project descriptions for each game |
| `about.html` | Studio story, creative philosophy, and three core principles |
| `news.html` | Full news listing with article previews and images |
| `contact.html` | Contact information with clickable email links |
| `privacy.html` | Privacy policy with clearly marked placeholders for game-specific data |
| `terms.html` | Terms & Conditions with clearly marked placeholders for game-specific terms |
| `css/style.css` | The entire design system — colors, typography, layout, responsive breakpoints, animations |
| `js/main.js` | Sticky nav, mobile menu, scroll reveal animations, parallax, smooth scroll, active nav tracking |
| `assets/*.svg` | All visual assets — logos, game art, backgrounds. All original SVG, no external dependencies |
| `robots.txt` | Tells search engines what to crawl |
| `sitemap.xml` | Lists all pages for search engine indexing |

---

## Where to Replace YOURDOMAIN.com

The placeholder `YOURDOMAIN.com` appears in these locations. Do a **find and replace** across all files:

1. **All HTML files** — `<link rel="canonical">` tags in the `<head>`
2. **All HTML files** — Open Graph `og:url` and `og:image` meta tags
3. **All HTML files** — `mailto:` links (contact, footer, privacy, terms)
4. **robots.txt** — Sitemap URL
5. **sitemap.xml** — All `<loc>` URLs

**How to replace:** Open your code editor, use "Find in Files" (or `Find and Replace`), search for `YOURDOMAIN.com`, and replace with your actual domain (e.g., `rimonstar.com`).

---

## Where to Replace Game Information

### Game titles, descriptions, genres, platforms, and status

- **`index.html`** — Featured Game section and Our Games section
- **`games.html`** — Full game detail sections

Look for these data points in the HTML:
- Game titles (e.g., "Block Puzzle: Green Valley")
- Game descriptions (paragraph text)
- Genre values (e.g., "Puzzle", "3D Platformer")
- Platform values (e.g., "Mobile")
- Status badges (e.g., "In Development", "Project")

### News articles

- **`index.html`** — Latest News section (3 article previews)
- **`news.html`** — Full news articles with expanded text

Look for:
- Article dates
- Article categories
- Article titles
- Article descriptions

---

## Where to Replace Images

All images are SVG files in the `assets/` folder. To replace with real artwork:

1. **Game artwork** — Replace `assets/game-green-valley.svg`, `assets/game-capsule-jump.svg`, `assets/game-new-project.svg` with PNG/JPG images of the same name (or update the `<img src>` in the HTML)
2. **Hero background** — Replace `assets/hero-bg.svg` with a cinematic image
3. **News images** — Replace `assets/news-1.svg`, `assets/news-2.svg`, `assets/news-3.svg`
4. **Logos** — Replace `assets/logo.svg`, `assets/logo-small.svg`, `assets/footer-logo.svg` with your final logo designs

**Important:** If you switch from SVG to PNG/JPG, update the file extension in the `<img src="...">` attributes in each HTML file and the `<link rel="icon">` in the `<head>`.

---

## How to Run Locally

This is a static website — no build tools needed.

**Option A — Just open it:**
Open `index.html` directly in your web browser.

**Option B — Local server (recommended for testing):**
```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```
Then visit `http://localhost:8000` in your browser.

---

## How to Publish on GitHub Pages

1. **Create a GitHub repository**
   - Go to [github.com](https://github.com) and create a new repository (e.g., `rimonstar-website`)

2. **Upload your files**
   - Push all project files to the repository's main branch
   - Make sure `index.html` is at the root of the repository

3. **Enable GitHub Pages**
   - Go to your repository **Settings**
   - Click **Pages** in the left sidebar
   - Under **Source**, select **Deploy from a branch**
   - Select **main** branch and **/ (root)** folder
   - Click **Save**

4. **Wait for deployment**
   - GitHub will build and deploy your site
   - Your site will be available at: `https://YOURUSERNAME.github.io/rimonstar-website/`

---

## How to Connect Your Custom Domain

### Step 1: Add your domain in GitHub Pages

1. Go to your repository **Settings > Pages**
2. Under **Custom domain**, enter your domain (e.g., `YOURDOMAIN.com`)
3. Click **Save**
4. Check **Enforce HTTPS** (recommended — wait for the certificate to provision, this can take up to 30 minutes)

### Step 2: Configure DNS records

If your domain is managed by **Cloudflare** (recommended):

#### For the apex domain (`YOURDOMAIN.com`):

| Type | Name | Value | Proxy Status |
|------|------|-------|--------------|
| A | `@` | `185.199.108.153` | DNS only |
| A | `@` | `185.199.109.153` | DNS only |
| A | `@` | `185.199.110.153` | DNS only |
| A | `@` | `185.199.111.153` | DNS only |

#### For the `www` subdomain (`www.YOURDOMAIN.com`):

| Type | Name | Value | Proxy Status |
|------|------|-------|--------------|
| CNAME | `www` | `YOURUSERNAME.github.io` | DNS only |

**Important:** Set proxy status to **DNS only** (grey cloud) for GitHub Pages. GitHub Pages does not work through Cloudflare's proxy (orange cloud).

### Step 3: Verify

- DNS propagation can take up to 48 hours (usually faster)
- Once propagated, your site will be available at `https://YOURDOMAIN.com`

---

## Setting Up Professional Email (Cloudflare)

To use email addresses like `contact@YOURDOMAIN.com`, `developer@YOURDOMAIN.com`, or `support@YOURDOMAIN.com`:

1. Sign up for an email hosting service (e.g., Google Workspace, ProtonMail, Zoho Mail, or Cloudflare Email Routing)
2. In Cloudflare, add the MX records provided by your email service
3. Create the email addresses in your email service dashboard
4. The `mailto:` links on this website will automatically work once the addresses are active

**Note:** The website code only contains `mailto:` links and visible email placeholders. No email hosting is configured in the code itself.

---

## Technical Notes

- **No frameworks:** Pure HTML5, CSS3, and vanilla JavaScript
- **No build tools:** No npm, webpack, or compilation needed
- **Responsive:** Optimized for 1920px down to 320px viewports
- **Accessible:** Semantic HTML, keyboard navigation, ARIA labels, visible focus states, reduced-motion support
- **SEO ready:** Meta descriptions, Open Graph tags, canonical URLs, robots.txt, sitemap.xml
- **Performance:** All images are lightweight SVGs, CSS is in one file, JS is minimal and deferred

---

## License

All content in this repository is the property of RIMONSTAR Game Studio. The website template structure may be modified freely for the studio's use.

© 2026 RIMONSTAR Game Studio. All rights reserved.
