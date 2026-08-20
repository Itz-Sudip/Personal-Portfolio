# Sudip Kumar Pal — Personal Portfolio

[![Live Demo](https://img.shields.io/badge/live-demo-1abc9c?style=flat-square)](https://personal-portfolio-orcin-psi.vercel.app/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.3-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/license-MIT-green?style=flat-square)](./LICENSE)

A fast, responsive personal portfolio built with React, Vite, and Tailwind CSS — showcasing my background as an Electrical Engineering undergrad at NIT Durgapur working across full-stack web development and competitive programming.

**🔗 Live site:** [personal-portfolio-orcin-psi.vercel.app](https://personal-portfolio-orcin-psi.vercel.app/)

<!-- Optional: add a screenshot at docs/screenshot.png and drop it in here, e.g.
![Portfolio preview](docs/screenshot.png)
-->

## Design concept

The visual identity leans into an "electrical engineering meets code" theme — a navy/graphite base like a PCB, with a copper/amber accent standing in for a lit component and a teal accent standing in for a signal trace. Section labels use a monospace typeface (IBM Plex Mono), like component tags on a schematic.

The signature UI element is the **circuit rail**: a vertical scroll-spy navigation bar on desktop where each dot represents a section and lights up like a live node as you scroll past it.

## Features

- **Circuit rail scroll-spy navigation** — animated vertical nav that tracks scroll position
- **Dark / light mode** with a persistent theme toggle
- **Sections:** Hero, About, Education, Experience, Skills, Projects, Certifications, Co-curricular, and Contact
- **Skills showcase** with categorized cards and animated proficiency bars
- **Competitive programming badges** (LeetCode, Codeforces, CodeChef, AtCoder) surfaced in the Hero section
- **Working contact form** powered by EmailJS — no backend required
- **Scroll animations** via AOS (Animate On Scroll) and Framer Motion
- **Fully responsive** across mobile, tablet, and desktop
- **Resume download** served directly from the site

## Tech stack

| Category | Technology |
|---|---|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion, AOS |
| Icons | React Icons |
| Contact form | EmailJS |
| Deployment | Vercel |

## Getting started

```bash
git clone https://github.com/Itz-Sudip/Personal-Portfolio.git
cd Personal-Portfolio
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/     Section components — Navbar, Hero, About, Skills, Projects, Contact, etc.
  data/           portfolioData.js — all editable content (profile, education, skills, projects...)
  hooks/          useActiveSection.js — scroll-spy logic powering the circuit rail
  config/         emailjs.js — EmailJS service/template/public keys
  App.jsx         Assembles all sections and handles theme state
  index.css       Design tokens, base styles, circuit-rail styles
tailwind.config.js  Color palette & font families
public/           Static assets — resume PDF, profile photo, favicon
```

## Contact form setup (EmailJS)

The contact form sends real emails via [EmailJS](https://www.emailjs.com/) with no backend:

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. **Email Services** → Add New Service → connect an email account → copy the **Service ID**
3. **Email Templates** → create a template using the variables `{{from_name}}`, `{{from_email}}`, and `{{message}}` → copy the **Template ID**
4. **Account** → General → copy your **Public Key**
5. Add all three to `src/config/emailjs.js`

The free EmailJS tier (200 emails/month) is plenty for a portfolio site. These keys are meant to be public/client-side by design, but you can restrict allowed domains from the EmailJS dashboard for extra safety.

## Deployment

This is a static Vite app, currently deployed on [Vercel](https://vercel.com/). It also deploys cleanly to Netlify or GitHub Pages — build command `npm run build`, output directory `dist`.

## Using this as your own template

Everything editable lives in **`src/data/portfolioData.js`** — profile info, about, education, experience, skills, projects, certifications, and co-curricular activities. Swap in your own photo (`public/`) and resume PDF (`public/resume.pdf`, or update `resumeUrl` to match), then follow the EmailJS setup above to wire up your own contact form.

## Connect

- **GitHub:** [@Itz-Sudip](https://github.com/Itz-Sudip)
- **LinkedIn:** [Sudip Kumar Pal](https://www.linkedin.com/in/sudip-kumar-pal-a7154832a/)
- **Email:** palsudipkumar3@gmail.com

## License

Licensed under the [MIT License](./LICENSE).
