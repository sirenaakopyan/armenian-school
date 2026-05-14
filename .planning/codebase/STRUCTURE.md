# Codebase Structure

**Analysis Date:** 2026-05-13

## Directory Layout

```
website/
├── public/                  # Static assets served as-is (HTML shell, favicon, CNAME)
│   ├── images/              # Public images (logo, expansion renderings, update photos)
│   ├── 404.html             # SPA fallback redirect for GitHub Pages / static hosts
│   ├── CNAME                # Custom domain config (seattlearmenianschool.org)
│   ├── favicon.ico          # Site favicon
│   ├── index.html           # HTML shell with <div id="root">
│   └── robots.txt           # Search engine config
├── src/                     # React application source
│   ├── components/          # Shared reusable UI components
│   │   ├── AboutSection/    # About the school content block
│   │   ├── CalendarSection/ # Calendar section component
│   │   ├── ContactSection/  # Contact info block
│   │   ├── HeroSection/     # Full-screen hero with video background
│   │   ├── Navbar/          # Top navigation bar
│   │   ├── Sidebar/         # Mobile slide-out navigation
│   │   └── ButtonElement.js # Shared button styled-component
│   ├── pages/               # Route-level page components
│   │   ├── expansion/       # Expansion project section
│   │   │   ├── index.js     # Expansion landing page
│   │   │   ├── posts.js     # Static post data (blog entries)
│   │   │   └── updates.js   # Updates feed page
│   │   ├── calendar/        # Calendar page
│   │   │   └── index.js     # Calendar page component
│   │   └── index.js         # Home page
│   ├── videos/              # Video assets (intro_vid.mp4)
│   ├── App.js               # Root component with router
│   ├── App.css              # Global CSS styles
│   └── index.js             # React DOM entry point
├── build/                   # Production build output (generated, do not edit)
├── images/                  # Root-level images (served at /images/ in deployed build)
├── static/                  # Build output static assets (generated)
│   ├── css/                 # Compiled CSS bundles
│   ├── js/                  # Compiled JS bundles
│   └── media/               # Compiled media assets
├── package.json             # Dependencies and scripts
├── package-lock.json        # Dependency lockfile
├── .gitignore               # Git ignore rules
├── CNAME                    # Root CNAME (for gh-pages deployment)
├── 404.html                 # Root 404 redirect (for gh-pages)
├── service-worker.js        # PWA service worker (generated)
└── precache-manifest.*.js   # Service worker precache manifests (generated)
```

## Directory Purposes

**`src/components/`:**
- Purpose: Shared UI components used across multiple pages
- Contains: React functional components with co-located styled-components
- Key pattern: Each component has its own directory with `index.js` (logic + JSX) and `*Elements.js` (styled-components exports)
- Key files: `Navbar/index.js`, `Navbar/NavbarElements.js`, `HeroSection/index.js`, `HeroSection/HeroElements.js`

**`src/pages/`:**
- Purpose: Top-level page components, one per route
- Contains: Page compositions that import and arrange shared components
- Key pattern: `index.js` per directory; subdirectories for multi-page sections (e.g., `expansion/`)
- Key files: `index.js` (Home), `expansion/index.js` (Expansion landing), `expansion/updates.js` (Updates feed)

**`src/pages/expansion/`:**
- Purpose: All files related to the Expansion Construction section
- Contains: Landing page, updates feed, and static post data
- Key files: `posts.js` (content data), `updates.js` (feed UI with custom markup parser)

**`public/`:**
- Purpose: Static files copied directly to build output without processing
- Contains: HTML shell, images, favicon, CNAME, robots.txt, 404.html
- Key files: `index.html` (app shell), `images/` (all site images)

**`public/images/`:**
- Purpose: All site images referenced in components
- Contains: Logo, expansion renderings, update post images
- Referenced via: Absolute paths like `/images/logo.png`, `/images/expansion-rendering.png`

**`build/`:**
- Purpose: Production build output from `npm run build`
- Generated: Yes
- Committed: Yes (used for gh-pages deployment)

## Key File Locations

**Entry Points:**
- `src/index.js`: React DOM render entry point
- `src/App.js`: Router and route definitions
- `public/index.html`: HTML shell

**Configuration:**
- `package.json`: Dependencies, scripts, eslint config, browserslist
- `public/CNAME`: Custom domain for deployment
- `public/robots.txt`: Search engine directives

**Core Logic:**
- `src/pages/index.js`: Home page composition
- `src/pages/expansion/index.js`: Expansion landing page with section stubs
- `src/pages/expansion/updates.js`: Blog-style update feed with expand/collapse and custom body parser
- `src/pages/expansion/posts.js`: Static content data for expansion updates

**Navigation:**
- `src/components/Navbar/index.js`: Desktop navigation bar
- `src/components/Navbar/NavbarElements.js`: Navbar styled-components
- `src/components/Sidebar/index.js`: Mobile navigation overlay
- `src/components/Sidebar/SidebarElements.js`: Sidebar styled-components

**Styling:**
- `src/App.css`: Global CSS (body resets, fonts)
- Component-level: `*Elements.js` files within each component directory

## Naming Conventions

**Files:**
- Component entry: `index.js` (one per component/page directory)
- Styled-components: `{ComponentName}Elements.js` (e.g., `NavbarElements.js`, `HeroElements.js`)
- Data files: Descriptive lowercase name (e.g., `posts.js`)
- Page-specific components: Can be defined inline or use descriptive name (e.g., `updates.js`)

**Directories:**
- Components: PascalCase (`Navbar/`, `HeroSection/`, `AboutSection/`)
- Pages: lowercase (`pages/`, `expansion/`, `calendar/`)

**Components:**
- PascalCase for component names (`ExpansionPage`, `UpdatesPage`, `PostEntry`)
- PascalCase for styled-components (`PageWrapper`, `HeroTitle`, `PostCard`)

**Props:**
- camelCase (`isOpen`, `toggleState`, `post`)

## Where to Add New Code

**New Page (e.g., FAQ page):**
1. Create page component: `src/pages/expansion/faq.js` (or `src/pages/faq/index.js` for standalone)
2. Add route in `src/App.js` inside `<Routes>`
3. Add nav link in `src/components/Navbar/index.js` and `src/components/Sidebar/index.js`
4. Include Navbar/Sidebar boilerplate (or use a layout component if one is created)

**New Expansion Sub-page:**
- Component: `src/pages/expansion/{name}.js`
- Data file (if needed): `src/pages/expansion/{name}-data.js`
- Route: Add to `src/App.js`
- Link: Add from `src/pages/expansion/index.js` section

**New Shared Component:**
- Create directory: `src/components/{ComponentName}/`
- Component logic: `src/components/{ComponentName}/index.js`
- Styled-components: `src/components/{ComponentName}/{ComponentName}Elements.js`

**New Blog Post / Update:**
- Add entry to the `posts` array in `src/pages/expansion/posts.js`
- Add images to `public/images/` (referenced as `/images/{filename}`)
- Use `[IMAGE:/images/{filename}|alt text]` syntax in post body for inline images
- Use `**text**` for bold text in post body

**New Static Images:**
- Place in `public/images/`
- Reference with absolute path: `/images/{filename}`

**New Global Styles:**
- Add to `src/App.css`

## Special Directories

**`build/`:**
- Purpose: Production build output
- Generated: Yes (by `npm run build`)
- Committed: Yes (deployed via gh-pages)
- Do not edit manually

**`static/`:**
- Purpose: Build output static assets (JS/CSS bundles)
- Generated: Yes
- Committed: Yes (part of gh-pages deployment artifacts)
- Do not edit manually

**`node_modules/`:**
- Purpose: Installed npm dependencies
- Generated: Yes (by `npm install`)
- Committed: No (in `.gitignore`)

---

*Structure analysis: 2026-05-13*
