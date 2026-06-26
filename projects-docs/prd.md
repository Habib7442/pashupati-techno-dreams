# Product Requirements Document (PRD)
## Pashupati Techno Dreams — Professional Website

| | |
|---|---|
| **Project** | Corporate website for Pashupati Techno Dreams (P Techno) |
| **Client** | Pashupati Techno Dreams — Engineering & Architecture Consultancy |
| **Location** | Silchar, Cachar, Assam, India |
| **Document type** | Product Requirements Document (build-ready spec) |
| **Version** | 1.0 |
| **Date** | 26 June 2026 |
| **Prepared for** | Web developer / design agency |
| **Reference template** | Pexcon by Colorlib — https://preview.colorlib.com/theme/pexcon/ |

---

## 1. Purpose of This Document

This PRD defines the requirements for designing and building a new, professional marketing website for **Pashupati Techno Dreams**. It replaces the client's current placeholder presence:

- One-page Wix site: `https://pashupatitd.wixsite.com/ptechno`
- New domain (currently a placeholder page only): `https://pashupatitechno.in`
- Instagram: `https://www.instagram.com/dreams_p_techno`

The document specifies the goals, audience, information architecture, section-by-section content, functional/technical requirements, and design direction so a developer can build the site without further discovery.

---

## 2. Business Background

Pashupati Techno Dreams is an engineering and architecture consultancy based in Silchar, Assam. It was **established in 2020** and has operated from its present office since **September 2021**. Google lists it as an **"Architecture firm in Silchar, India"** and it positions itself as a **"one-stop solution for construction needs."**

The firm is led by senior, credentialed engineers and offers end-to-end services from drawings and structural design through surveying, planning, and construction. It is well regarded locally, holding a **4.9★ rating across 36 Google reviews** (and 4.9 across 26 Justdial votes).

**Brand taglines in current use:**
- "We build your dreams."
- "A House of Skilled Engineers."

---

## 3. Goals & Success Metrics

### 3.1 Primary Goals
1. Present Pashupati Techno Dreams as a **credible, professional, established** engineering consultancy.
2. Clearly communicate the **full range of services**.
3. Make it **effortless to contact** the firm (call, WhatsApp, email, enquiry form, map/directions).
4. Build trust through **credentials, team experience, and verified Google reviews**.
5. Replace the thin Wix/placeholder presence with a polished site on `pashupatitechno.in`.

### 3.2 Success Metrics
- Increase in qualified enquiries (calls / WhatsApp / form submissions).
- Lower bounce rate vs. the current one-pager; reasonable time-on-page.
- Mobile usability score and Core Web Vitals in the "Good" range.
- Improved local search visibility for "civil engineer / architecture firm / structural design Silchar."

---

## 4. Target Audience

| Persona | Needs | What convinces them |
|---|---|---|
| **Individual home builders** (primary) | House plans, structural design, Vastu, 3D visualization, supervised construction | Trust, credentials, local reputation, clear pricing path, sample work |
| **Property developers / contractors** | Structural design, estimation, surveying, drawings | Technical depth, registrations, experience, turnaround |
| **Government / institutional (PWD-style work)** | Bridge & highway engineering, surveying, certified engineers | Chartered Engineer status, PWD registrations, 33-yr lead experience |
| **Commercial clients** | Building planning, prefab structures, interiors | One-stop capability, portfolio, reviews |

**Context note:** Audience is largely regional (Barak Valley / Assam / Northeast India). The site should read clearly to non-technical local clients while still signaling technical authority. Mobile-first — most users will arrive on phones.

---

## 5. Design Direction

> **Client's explicit instruction:** the design must be **very professional** with **restrained, non-"fancy" colors**. Use the Pexcon template only as a **structural/layout reference** — not its bright orange palette.

### 5.1 Visual Tone
Clean, corporate, trustworthy, and "engineered" — generous whitespace, strong grid, crisp typography, real photography. Avoid loud gradients, neon, or decorative clutter.

### 5.2 Color Palette (restrained / professional)
| Role | Color | Hex | Usage |
|---|---|---|---|
| Primary (dark) | Deep navy | `#0F2A43` | Headings, header, footer, primary buttons |
| Primary alt | Navy 2 | `#16395B` | Section dividers, overlays |
| Secondary | Steel blue | `#2E5A86` | Links, secondary accents |
| Accent (sparing) | Muted amber/bronze | `#C7903A` | Eyebrow labels, underlines, stat numbers, review stars |
| Text | Slate | `#4A5A6A` | Body copy |
| Headings | Ink | `#1A2A38` | Sub-headings on light backgrounds |
| Background | White | `#FFFFFF` | Default surface |
| Background soft | Off-white | `#F4F7FA` | Alternating sections |
| Border | Light grey | `#E4E9F0` | Cards, dividers |

The accent amber is a deliberate, **minimal** nod to the engineering/safety world — used only for small highlights, never as a dominant fill.

### 5.3 Typography
- **Headings:** Plus Jakarta Sans (600–800) — modern, professional. (Alt: Manrope / Archivo.)
- **Body:** Inter (400–600) — highly legible.
- Served via Google Fonts. Clear hierarchy: large bold display headings, comfortable 16–18px body, defined section eyebrows in uppercase + letter-spacing.

### 5.4 Imagery
- Authentic civil-engineering / construction photography: engineers reviewing drawings, surveying with total station, bridges, RCC buildings under construction, 3D renders, interiors.
- Prefer **real photos of the firm's own projects and team** where available (request from client). Use professional stock or 3D renders as a fallback/placeholder.
- Consistent treatment: natural daylight, sharp, realistic; optional subtle navy overlay for text legibility on hero/CTA bands.
- *Reference/sample AI-generated imagery for each section has been produced in this thread and can be used as placeholders until the client supplies real photos.*

### 5.5 UI Components
- Sticky header that condenses on scroll.
- Cards with subtle border + soft shadow on hover.
- Buttons: solid navy (primary), outline (secondary); clear hover states.
- Inline SVG icons for services (no icon-font dependency).
- Smooth scroll, light scroll-reveal animations, animated stat counters.
- Rounded corners ~10–14px, consistent spacing scale.

---

## 6. Information Architecture / Sitemap

**Phase 1 — single-page site** with anchor navigation (recommended; mirrors current one-pager but far richer). Sections:

1. Top utility bar
2. Header / navigation
3. Hero
4. Credentials strip (trust bar)
5. About
6. Services
7. Why Choose Us + stats
8. Projects / Capabilities gallery
9. Our Engineers (team)
10. Testimonials (Google reviews)
11. Call-to-action band
12. Contact (details + form + map)
13. Footer

**Navigation labels:** Home · About · Services · Projects · Team · Reviews · Contact · **[Get a Quote]** (button)

**Phase 2 (optional, future):** break Services and Projects into dedicated pages; add a Blog/News section; individual project case-study pages.

---

## 7. Section-by-Section Requirements

### 7.1 Top Utility Bar
- Slim navy bar above the header.
- Left: phone `+91 97066 09966`, email `pranjal.erpn@gmail.com`, hours "Open 10:00 AM".
- Right: "4.9 ★ on Google" + Instagram icon link (`dreams_p_techno`).
- Collapses/hides on mobile to save space.

### 7.2 Header / Navigation
- Sticky; logo on left (monogram "PTD" + wordmark "Pashupati Techno Dreams" with sub-label "Engineering Consultancy").
- Anchor nav links (Section 6) + prominent **"Get a Quote"** button (scrolls to Contact).
- Mobile: hamburger toggle → slide-in/overlay menu.

### 7.3 Hero
- **Layout:** split — text left, image right (image: engineers reviewing blueprints on site).
- **Eyebrow:** "ENGINEERING CONSULTANCY · SILCHAR, ASSAM"
- **Headline:** "Engineering Your Dreams Into Reality" (accent on one word).
- **Sub-copy:** 1–2 sentences, e.g. *"A house of skilled, chartered engineers delivering structural design, surveying, planning and construction across Assam since 2020."*
- **CTAs:** primary "Get a Free Quote", secondary "Explore Our Services".
- **Trust row / floating badge:** "Est. 2020 · Chartered Engineers · 4.9★ Google (36 reviews)".

### 7.4 Credentials Strip (Trust Bar)
Horizontal row of 4 concise trust points with small icons:
- Chartered Engineers (Institution of Engineers, India)
- PWD-Registered Class I Contractor
- Registered with Silchar Municipality Board & Development Authority
- Vastu-Compliant Design

### 7.5 About — "A House of Skilled Engineers"
- Offset image (engineer at CAD workstation) + text.
- Copy: founded 2020, office since Sept 2021; mission of delivering high-quality, innovative, transparent engineering solutions; specialization in 2D/3D AutoCAD, structural design, surveying, Vastu, and highway engineering.
- 3–4 feature points: *Certified & Chartered Engineers · Experienced Leadership (33+ yrs) · Vastu-Compliant Planning · End-to-End Solutions.*
- (Rewrite the current Wix copy cleanly — **note:** existing Wix text mistakenly references "Pranjal & Associates"; this must be corrected to Pashupati Techno Dreams.)

### 7.6 Services
Grid of cards (3-up desktop / 1-up mobile), each: SVG icon, title, 1–2 line description, optional "Learn more". Services:

1. **2D & 3D AutoCAD Drawings** — detailed structural drawings & models.
2. **Structural Design** — safe, optimized, code-compliant structures.
3. **Building Planning & Construction** — plan to handover, supervised execution.
4. **Bridge & Highway Engineering** — roads and bridges; risk-reducing design.
5. **Land Surveying (Total Station)** — precise topographic & construction surveys.
6. **Vastu-Compliant Planning** — designs aligned with Vastu Shastra.
7. **Interior 3D Design** — photorealistic interior visualization.
8. **Estimation & Valuation** — accurate cost estimates and project costing.
9. *(Optional)* **Prefabricated Structures** — listed on IndiaMART; confirm with client.

### 7.7 Why Choose Us + Stats
- Short value proposition + supporting image (building under construction).
- **Animated stat counters (honest figures only):**
  - Est. **2020**
  - **33+** Years Lead Engineer Experience
  - **4.9★** Google Rating
  - **36+** Client Reviews
- **Do NOT invent** client/project counts (the Pexcon demo's "60 clients / 80 projects" are placeholders — omit unless the client provides real numbers).

### 7.8 Projects / Capabilities Gallery
- Section title e.g. **"Our Work & Capabilities"**.
- Optional category filter: All · Buildings · Bridges · Surveying · 3D Design.
- Image grid with category captions (bridge, RCC building, 3D house render, interior render, survey, structural drawing).
- **Honesty:** until the client provides photos of completed projects, caption items by **service category** (illustrative), not as named completed jobs. Built to be easily swapped with the client's real project photos.

### 7.9 Our Engineers (Team)
Feature the firm's leadership — a key differentiator. Use monogram avatars or **real photos if provided** (do **not** fabricate photos of real, named individuals).

- **Er. Pinak Pani Nath** — Retd. Executive Engineer, PWD Assam · Highway Engineer, 33 years in Roads & Bridges · Chartered Engineer (India) · Member, IEI · Past Hon. Secretary, IEI Silchar Local Centre.
- **Er. Pranjal Nath** — Chartered Engineer (India) · Associate Member, IEI · Registered Technical Personnel, Silchar Municipality Board · Registered Technical Personnel, Silchar Development Authority · Regd. Class I(C) Contractor, PWD Building Wing, Assam · Regd. Class I(C) Contractor, Assam Water Resource Dept · Regd. Class II Contractor, Assam PWD Road Dept.

### 7.10 Testimonials (Google Reviews)
- Display the **4.9★ / 36 reviews** badge prominently.
- Use **real review quotes** (lightly cleaned), labeled "Google Review":
  1. *"People, please go ahead — experienced professionals. Splendid work and quality."* ★★★★★
  2. *"Great experience. Worth every penny and time. Best service."* ★★★★★
  3. *"Good and experienced professionals. Quality work and worth the money."* ★★★★★
- Link to the live Google reviews page.

### 7.11 Call-to-Action Band
- Full-width navy band: heading e.g. *"Planning to build? Let's bring your dream to life."*
- Buttons: "Call Now" (`tel:`) and "WhatsApp Us" (`wa.me`).

### 7.12 Contact
- **Left — details:**
  - Address: Room No. 26 (First Floor), Town Club Complex, PWD Road, Silchar-1, Assam **788001**, India
  - Phone: **+91 97066 09966**
  - WhatsApp / alt: **+91 81360 76717** (`wa.me/918136076717`)
  - Email: **pranjal.erpn@gmail.com**
  - Hours: Open 10:00 AM *(full days/closing time TBC — see open questions)*
  - Instagram: `dreams_p_techno`
- **Right — enquiry form:** Name, Phone, Email, Service (dropdown), Message, Submit.
  - Since hosting may be static, the form should **compose a WhatsApp message (`wa.me`) and/or `mailto:`** on submit, OR integrate a form service (Formspree/Web3Forms) / backend endpoint. Include validation.
- **Map:** embedded Google Map of the office location with a "Get Directions" link.

### 7.13 Footer
- Dark navy. Columns: short About + tagline "We build your dreams"; Quick Links; Services; Contact info; social icons (Instagram, Google, WhatsApp).
- Bottom bar: "© 2026 Pashupati Techno Dreams. All rights reserved." + optional credit.

---

## 8. Content Inventory (Reference Data)

**Business name:** Pashupati Techno Dreams (a.k.a. P Techno / Dreams P Techno)
**Established:** 2020 (office since September 2021)
**Category:** Architecture / Civil Engineering Consultancy
**Taglines:** "We build your dreams" · "A House of Skilled Engineers" · "One-stop solution for your construction needs"

**Contact**
- Address: Room No. 26 (First Floor), Town Club Complex, PWD Road, Silchar-1, Assam 788001, India
- Phone (primary): +91 97066 09966
- Phone/WhatsApp (alt): +91 81360 76717 (8136-076-717)
- Email: pranjal.erpn@gmail.com
- Instagram: https://www.instagram.com/dreams_p_techno
- Existing Wix (to retire): https://pashupatitd.wixsite.com/ptechno
- Target domain: https://pashupatitechno.in

**Ratings:** 4.9★ — 36 Google reviews; 4.9 — 26 Justdial votes.
**GST:** registered (number partially shown publicly as 18…1ZW — obtain full number from client).

---

## 9. Functional Requirements

| # | Requirement |
|---|---|
| FR-1 | Fully responsive (mobile, tablet, desktop); mobile-first. |
| FR-2 | Sticky header with mobile hamburger menu; smooth-scroll anchor navigation. |
| FR-3 | Click-to-call (`tel:`) and WhatsApp (`wa.me`) links throughout. |
| FR-4 | Contact/enquiry form with client-side validation + submission path (WhatsApp/mailto/form service). |
| FR-5 | Embedded Google Map + "Get Directions" link. |
| FR-6 | Animated stat counters; light scroll-reveal animations. |
| FR-7 | Optional category filtering in the projects gallery. |
| FR-8 | Lazy-loaded, optimized images. |
| FR-9 | Easy content/image swap (so client can replace placeholders with real project photos & team images). |
| FR-10 | Cross-browser: latest Chrome, Safari, Firefox, Edge; iOS & Android. |

---

## 10. Technical Requirements & Recommended Stack

- **Recommended build:** Static site — HTML5 + CSS3 + vanilla JS (or a light framework / Astro / Next.js static export). Keeps it fast, cheap to host, and easy to maintain. *(A WordPress build is acceptable if the client wants self-service editing — note higher maintenance.)*
- **Hosting:** point existing domain `pashupatitechno.in` to the new site (Netlify / Vercel / cPanel static hosting / Hostinger).
- **Forms:** Web3Forms / Formspree / Netlify Forms, or `wa.me` + `mailto:` fallback for static hosting.
- **No heavy dependencies;** prefer system/Google fonts + inline SVG icons.
- **Analytics:** Google Analytics 4 (or privacy-friendly Plausible).
- **SSL:** HTTPS required.

---

## 11. SEO Requirements

- Unique, descriptive `<title>` and meta description targeting **"civil engineer / architecture firm / structural design / Vastu / land surveying in Silchar, Assam."**
- Semantic HTML (one `<h1>`, logical heading order), descriptive `alt` text on all images.
- **LocalBusiness / ProfessionalService JSON-LD** schema: name, address, geo, phone, hours, ratings, services.
- Open Graph + Twitter card tags for social sharing.
- `sitemap.xml` + `robots.txt`.
- **Google Business Profile alignment** — keep NAP (Name, Address, Phone) identical to the Google listing.
- Fast load (Core Web Vitals "Good"); mobile-friendly.

---

## 12. Accessibility & Performance

- Target **WCAG 2.1 AA**: sufficient color contrast (navy/amber on white passes; verify amber on light), keyboard-navigable menu/form, visible focus states, ARIA labels on icon-only buttons.
- Performance budget: optimized/compressed images (WebP), minified CSS/JS, lazy loading; aim Lighthouse ≥ 90 on mobile.

---

## 13. Assets Required (from Client)

| Asset | Status / Action |
|---|---|
| Official logo (vector/PNG) | **Request from client.** If none, design a simple "PTD" wordmark + monogram. |
| Real project photos | **Strongly requested** to replace placeholder gallery images. |
| Team photos (Pinak Pani Nath, Pranjal Nath) | Requested; otherwise use monogram avatars. |
| Office / team photos | Optional, adds authenticity. |
| Brand color preference | Confirm navy/steel direction (or supply existing brand colors). |
| Full GST number, business hours/days | Needed for footer/contact + schema. |
| Any certificates/registration docs | Optional — can be shown as credibility badges. |

---

## 14. Out of Scope (Phase 1)

- E-commerce / online payments.
- Client login / project-tracking portal.
- Blog/news (recommended Phase 2).
- Multi-language (consider Bengali/Assamese in Phase 2 for local reach).
- Online booking/scheduling system.

---

## 15. Assumptions & Open Questions

**Assumptions**
- Single-page anchored site is acceptable for Phase 1.
- The firm wants to retire the Wix page and launch on `pashupatitechno.in`.
- Restrained navy/steel palette aligns with the client's "professional, not fancy" instruction.

**Open Questions (confirm with client)**
1. Full business hours and working days (Google shows only "Opens 10 AM").
2. Does the firm have a logo and real project/team photos to supply?
3. Confirm/expand the services list — include **Prefabricated Structures**? Any service to drop?
4. Preferred contact-form destination: WhatsApp, email, or a form service/backend?
5. Confirm the primary public phone/email (two numbers are in circulation).
6. Single-page now, or plan for multi-page (services/projects/blog) from the start?
7. Hosting preference and who will maintain content after launch.
8. Full GST number for display.

---

## 16. Suggested Build Phases

1. **Discovery & assets** — collect logo, photos, confirm content & open questions.
2. **Design** — wireframe → hi-fi mockup of the single page (desktop + mobile) for sign-off.
3. **Development** — build responsive page per this spec; wire form, map, analytics, SEO/schema.
4. **Content & QA** — load final copy/images; cross-device/browser testing; accessibility & performance pass.
5. **Launch** — connect `pashupatitechno.in`, SSL, submit sitemap, verify Google Business Profile alignment.
6. **Phase 2 (optional)** — dedicated service/project pages, blog, multi-language.

---

*Prepared from primary research of the client's Wix site, Google Business listing (4.9★ / 36 reviews), Instagram, the `pashupatitechno.in` placeholder, and the client-supplied Pexcon reference template.*
