# Gravity Group RSA — Website Repository

Gravity Group RSA provides roadside assistance services including towing, locksmith support, battery jumpstarts, tyre changes, fuel delivery, courier solutions, and more.
This repository contains the full source code for the company’s multi-page marketing website built with **Next.js 15**, **Tailwind CSS**, and **TypeScript**.

---

## 🚀 Tech Stack

* **Framework:** Next.js 15 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Deployment:** Firebase Hosting / Vercel
* **SEO:** Dynamic metadata, OpenGraph, robots.txt, sitemap.xml
* **CI/CD:** GitHub Actions

---

## 📂 Repository Structure

```
gravity-group-rsa/
├── .github/workflows/deploy.yml
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   └── images/
│       ├── hero/
│       └── services/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   └── services/
│   │       ├── page.tsx
│   │       └── [service]/page.tsx
│   │
│   ├── components/
│   ├── lib/
│   ├── styles/
│   └── data/services.json
│
├── docs/
│   ├── BRAND_GUIDE.md
│   ├── DESIGN_NOTES.md
│   └── WIREFRAMES/
│
├── tests/
│
├── .env.example
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

---

## 🛠️ Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm start
```

---

## 🌐 Deployment

### Firebase Hosting

```bash
firebase deploy
```

### Vercel

```bash
vercel --prod
```

Both deployment targets are supported.
Environment variables must be configured according to `.env.example`.

---

## 🧩 Services Architecture

Each service (e.g., towing, locksmith, jumpstart) is rendered dynamically using:

* `/src/data/services.json`
* `/src/app/services/[service]/page.tsx`

This makes content easy to scale without editing routes.

---

## 📑 SEO Setup

* `robots.txt` allows all public pages, blocks internal routes
* `sitemap.xml` lists all services and core pages
* `og-image.png` provides high-quality link previews
* Metadata handled via `lib/seo.ts`

---

## 🤝 Contributing

1. Create a feature branch
2. Commit changes with clear messages
3. Open a Pull Request
4. CI/CD will run build + lint checks automatically

---

## 📜 License

This project is proprietary and owned by **Gravity Group RSA**.
No redistribution or repurposing without written permission.
