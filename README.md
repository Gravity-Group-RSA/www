# Gravity Group RSA Website (Static Version)

This repository contains a static, multi‑page marketing website for **Gravity Group RSA**, a South African company offering roadside assistance services.  The content and layout here are purpose built for deployment on **GitHub Pages** with custom domains configured via a `CNAME` file.  Each page is written in plain HTML, styled with a simple CSS framework, and sprinkled with a small amount of JavaScript to provide interactivity where necessary.

## Included Pages

| Path | Purpose |
|---|---|
| `/index.html` | Landing page featuring a hero banner, overview of services and call‑to‑action links. |
| `/about.html` | Company history, mission and values. |
| `/services/index.html` | A list of all services offered by Gravity Group RSA. |
| `/services/*` | Individual service pages for each of our roadside assistance offerings (towing, locksmith support, jumpstarts, tyre changes, **fuel delivery**, **courier solutions** and **battery jumpstarts**). |
| `/contact.html` | Contact details and a simple contact form. |
| `/404.html` | Custom error page shown when a route is not found. |
| `/robots.txt` | Allows search engine crawlers to index the site. |
| `/sitemap.xml` | Enumerates all public pages for SEO. |
| `CNAME` | Specifies the primary domain (``ggrsa.co.za``) for GitHub Pages. |

## Quick Start

Open the files in a modern web browser to preview.  To serve locally for development, run a simple HTTP server from the root of the repository:

```bash
python3 -m http.server --directory ggrsa_site 8000
```

Then visit `http://localhost:8000` in your browser.

## Deployment Notes

GitHub Pages reads everything from the repository root by default.  The `CNAME` file contains the primary domain; additional domains (e.g. ``ggrsa.com``, ``gravitygrouprsa.co.za``) should be configured at the DNS level to redirect to `ggrsa.co.za`.  After pushing to the `main` branch, enable GitHub Pages in the repository settings and select the **main** branch as the source.
