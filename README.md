# Sudip Kumar Pal — Portfolio

A responsive personal portfolio built with React (Vite), Tailwind CSS, Framer Motion,
AOS, and React Icons. Includes dark/light mode, scroll-spy navigation with a signature
circuit-trace rail, and all the sections from the original spec.

## Design concept

The visual identity leans into the electrical-engineering-meets-code theme: a
navy/graphite base (like a PCB) with a copper/amber accent (`signal`) standing in for
a lit component, and a teal accent (`trace`) standing in for a signal trace. Section
labels use a monospace face (IBM Plex Mono) like component tags on a schematic. The
signature element is the vertical **circuit rail** on the left of desktop screens —
each dot is a section, and it lights up like a lit node as you scroll past it.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Adding your real content

Everything you need to personalize lives in **one file**:
`src/data/portfolioData.js`

Every placeholder is marked with a 🔧 emoji so they're easy to find. Replace:

- `profile` — name, role, tagline, email, phone, social links, stats
- `about` — your summary and highlight bullets
- `education` — your degrees/institutions
- `experience` — internships/jobs
- `skills` — your Frontend / Backend / DSA / Tools lists
- `projects` — your project cards (GitHub + live demo links)
- `certifications` — your credentials
- `cocurricular` — clubs, hackathons, achievements

## Adding your photo

1. Drop your photo into the `public/` folder, e.g. `public/profile.jpg`
2. In `src/data/portfolioData.js`, set `photoUrl: '/profile.jpg'`

Until you do this, the Hero section shows a clean initials avatar as a fallback —
no broken image icons.

## Adding your resume

1. Drop your resume PDF into `public/` and name it `resume.pdf`
   (or update `resumeUrl` in `portfolioData.js` to match a different filename)
2. The "Download Resume" button in the Hero section links to it automatically.

## Setting up the contact form (EmailJS)

The contact form sends real emails via [EmailJS](https://www.emailjs.com/) — no backend needed.

1. Create a free account at emailjs.com
2. **Email Services** → Add New Service → connect your Gmail/Outlook/etc. → copy the **Service ID**
3. **Email Templates** → Create New Template. Use these variable names in the template body so they match the code:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`

   → copy the **Template ID**
4. **Account** → General → copy your **Public Key**
5. Paste all three into `src/config/emailjs.js`, replacing the 🔧 placeholders

That's it — the form in `src/components/Contact.jsx` already calls `emailjs.send(...)` with those values and shows a sending/success/error state to the visitor.

The free EmailJS tier (200 emails/month) is plenty for a portfolio site. These keys are meant to be public/client-side — that's how EmailJS is designed to work — but you can restrict which domains are allowed to use them from your EmailJS dashboard for extra safety.

## Project structure

```
src/
  components/     All section components (Navbar, Hero, About, etc.)
  data/           portfolioData.js — all your editable content
  hooks/          useActiveSection.js — scroll-spy logic
  App.jsx         Assembles all sections, handles theme state
  index.css       Design tokens, base styles, circuit-rail styles
tailwind.config.js  Color palette & font families
```

## Deploying

This is a static Vite app — it deploys cleanly to Vercel, Netlify, or GitHub Pages.
For Vercel/Netlify: just connect the repo, build command `npm run build`, output
directory `dist`.
