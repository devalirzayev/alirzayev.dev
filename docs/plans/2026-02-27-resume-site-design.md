# Resume Website Design

## Tech Stack

- **Astro** (Vite-based, static HTML output)
- **Tailwind CSS v4**
- **TypeScript**

## Goals

- Professional, scannable resume for recruiters/hiring managers
- Prints cleanly to PDF
- SEO-friendly (all content in static HTML, no runtime rendering)
- Minimal black & white design

## Data

All CV content lives in `src/data/resume.json`. Astro components import it and render at build time. Zero runtime fetching.

### JSON Structure

```json
{
  "basics": { "name", "title", "email", "phone", "location", "website", "linkedin", "github", "summary" },
  "experience": [{ "company", "position", "location", "startDate", "endDate (null=Present)", "highlights[]" }],
  "projects": [{ "name", "url", "description", "highlights[]" }],
  "education": [{ "institution", "degree", "startDate", "endDate" }],
  "skills": [{ "category", "items[]" }],
  "certifications": [{ "name", "issuer", "date" }],
  "languages": [{ "language", "fluency" }]
}
```

## Project Structure

```
src/
  data/
    resume.json
  layouts/
    Layout.astro            # HTML shell, meta tags, print styles
  components/
    Header.astro            # Name, title, contact (two-column)
    Summary.astro
    Experience.astro
    Projects.astro
    Education.astro
    Skills.astro
    Certifications.astro
    Languages.astro
    ThemeToggle.astro        # Dark/light toggle + print button (client:load)
  pages/
    index.astro              # Imports JSON, passes to components
  styles/
    global.css               # Tailwind + print @media rules
```

## Layout

- Single column with a two-column header
- Header: name + title left, contact details right
- Sections stacked vertically, separated by uppercase headings with thin bottom borders

## Visual Design

- Centered container, max-width ~800px (A4 proportions)
- System font stack, name 2rem bold, body 0.9-1rem
- Section headings: uppercase, small, letter-spaced, thin border-b
- Skills as comma-separated text (not badges)
- Dark mode: #111 background, #e5e5e5 text
- Print: forces white background, hides toggle buttons, prevents entry splitting

## Interactivity

- Dark/light theme toggle
- Print / Download PDF button
- Both rendered as Astro islands (client:load), only JS on the page
