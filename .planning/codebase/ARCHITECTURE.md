<!-- refreshed: 2026-05-13 -->
# Architecture

**Analysis Date:** 2026-05-13

## System Overview

```text
┌─────────────────────────────────────────────────────────────┐
│                     React Router (BrowserRouter)            │
│                     `src/App.js`                            │
├──────────────┬──────────────────┬───────────────────────────┤
│   Home Page  │  Expansion Page  │    Calendar Page          │
│  `src/pages/ │  `src/pages/     │   `src/pages/             │
│   index.js`  │   expansion/`    │    calendar/index.js`     │
└──────┬───────┴────────┬─────────┴──────────┬────────────────┘
       │                │                     │
       ▼                ▼                     ▼
┌─────────────────────────────────────────────────────────────┐
│                  Shared Components                          │
│  Navbar, Sidebar, HeroSection, AboutSection, ContactSection │
│  `src/components/`                                          │
└─────────────────────────────────────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────────────────────────────┐
│  Styled Components (CSS-in-JS)                              │
│  *Elements.js files co-located with components              │
└─────────────────────────────────────────────────────────────┘
```

## Component Responsibilities

| Component | Responsibility | File |
|-----------|----------------|------|
| App | Top-level router, defines all routes | `src/App.js` |
| Home | Landing page, composes Hero/About/Contact sections | `src/pages/index.js` |
| ExpansionPage | Expansion project landing with section links | `src/pages/expansion/index.js` |
| UpdatesPage | Blog-style feed of expansion project updates | `src/pages/expansion/updates.js` |
| CalendarPage | School calendar page | `src/pages/calendar/index.js` |
| Navbar | Top navigation bar with route links and donate CTA | `src/components/Navbar/index.js` |
| Sidebar | Mobile slide-out navigation menu | `src/components/Sidebar/index.js` |
| HeroSection | Full-screen hero with video background | `src/components/HeroSection/index.js` |
| AboutSection | About the school content block | `src/components/AboutSection/index.js` |
| ContactSection | Contact information block | `src/components/ContactSection/index.js` |

## Pattern Overview

**Overall:** Single-page application with client-side routing

**Key Characteristics:**
- React functional components with hooks (no class components)
- Styled-components for all CSS (CSS-in-JS, no CSS modules)
- No state management library -- local `useState` only
- No backend or API -- fully static, content hardcoded in JS files
- Each page manages its own Navbar/Sidebar toggle state independently

## Layers

**Routing Layer:**
- Purpose: Maps URL paths to page components
- Location: `src/App.js`
- Contains: `<BrowserRouter>` with `<Routes>` and `<Route>` definitions
- Routes: `/` (Home), `/expansion` (ExpansionPage), `/expansion/updates` (UpdatesPage), `/calendar` (CalendarPage)

**Page Layer:**
- Purpose: Full page compositions that render shared components and page-specific content
- Location: `src/pages/`
- Contains: Page components that compose layout (Navbar + Sidebar + content sections)
- Depends on: Components layer, data files
- Pattern: Every page independently creates Sidebar/Navbar state via `useState`

**Components Layer:**
- Purpose: Reusable UI building blocks shared across pages
- Location: `src/components/`
- Contains: Navbar, Sidebar, HeroSection, AboutSection, ContactSection
- Pattern: Each component directory has `index.js` (logic) and `*Elements.js` (styled-components)

**Data Layer:**
- Purpose: Static content for blog-style posts
- Location: `src/pages/expansion/posts.js`
- Contains: Array of post objects with `id`, `date`, `title`, `excerpt`, `body` fields
- Pattern: Exports a `posts` array; supports inline markdown-like syntax (`**bold**`, `[IMAGE:path|alt]`)

## Data Flow

### Primary Request Path (Page Load)

1. Browser requests URL, `index.html` loads React bundle (`src/index.js`)
2. `<App>` renders `<BrowserRouter>`, matches URL to route (`src/App.js`)
3. Matched page component renders Navbar + Sidebar + page content (`src/pages/*.js`)

### Expansion Updates Flow

1. `UpdatesPage` imports `posts` array from `src/pages/expansion/posts.js`
2. Maps over posts, rendering each as a `PostEntry` component
3. `PostEntry` uses `useState` for expand/collapse toggle
4. `formatBody()` function parses custom markup (`**bold**`, `[IMAGE:...]`) into React elements (`src/pages/expansion/updates.js:130-142`)

**State Management:**
- No global state. Each page creates its own `useState(false)` for sidebar open/close toggle.
- Post expand/collapse is local state within each `PostEntry` component.

## Key Abstractions

**Post Object:**
- Purpose: Represents a single expansion update/blog entry
- Examples: `src/pages/expansion/posts.js`
- Pattern: Plain JS object `{ id, date, title, excerpt, body }` with custom body markup

**Styled Element Files:**
- Purpose: Separate styled-components definitions from component logic
- Examples: `src/components/Navbar/NavbarElements.js`, `src/components/HeroSection/HeroElements.js`
- Pattern: File exports multiple named styled-components, imported by sibling `index.js`

**Sidebar/Navbar Toggle Pattern:**
- Purpose: Mobile-responsive navigation
- Pattern: Each page creates `const [isOpen, setIsOpen] = useState(false)` and passes `isOpen`/`toggleState` as props to both `<Sidebar>` and `<Navbar>`

## Entry Points

**Application Entry:**
- Location: `src/index.js`
- Triggers: Browser page load
- Responsibilities: Creates React root, renders `<App>` inside `<React.StrictMode>`

**Router Entry:**
- Location: `src/App.js`
- Triggers: Every navigation
- Responsibilities: Route matching and page component selection

**Build Entry:**
- Location: `public/index.html`
- Triggers: Initial HTTP request
- Responsibilities: HTML shell with `<div id="root">`

## Architectural Constraints

- **No backend:** All content is hardcoded in JS files. Adding dynamic content requires either a CMS integration or manual edits to `posts.js`.
- **No global state:** Each page independently manages navigation state, leading to duplicated toggle logic across every page component.
- **Build tooling:** Uses `react-scripts@3.0.1` (Create React App). Requires `NODE_OPTIONS=--openssl-legacy-provider` for builds on Node 17+.
- **Routing:** Uses `react-router-dom@6` with `BrowserRouter`. Deployment must handle client-side routing fallback (404.html redirect present at `public/404.html`).

## Anti-Patterns

### Duplicated Sidebar/Navbar State

**What happens:** Every page component (`src/pages/index.js`, `src/pages/expansion/index.js`, `src/pages/expansion/updates.js`) independently creates `useState` for sidebar toggle and renders its own `<Sidebar>` and `<Navbar>`.
**Why it's wrong:** Adding a new page requires duplicating 5+ lines of boilerplate. Changes to navigation logic must be replicated across all pages.
**Do this instead:** Create a shared layout component (e.g., `src/components/Layout/index.js`) that wraps page content with Navbar and Sidebar.

### Inline Styled Components in Page Files

**What happens:** `src/pages/expansion/index.js` and `src/pages/expansion/updates.js` define 10+ styled-components inline rather than in separate `*Elements.js` files.
**Why it's wrong:** Inconsistent with the pattern established by `src/components/Navbar/NavbarElements.js` and `src/components/HeroSection/HeroElements.js`.
**Do this instead:** Extract styled-components to `src/pages/expansion/ExpansionElements.js` and `src/pages/expansion/UpdatesElements.js`.

## Error Handling

**Strategy:** No explicit error handling. No error boundaries, no 404 route fallback in React Router, no try/catch blocks.

**Patterns:**
- `404.html` in `public/` handles server-side 404s by redirecting to the SPA
- No client-side error boundary or fallback UI

## Cross-Cutting Concerns

**Logging:** None (no logging framework, no console.log statements in production code)
**Validation:** None (no forms with validation currently exist)
**Authentication:** None (fully public, no auth system)
**Responsive Design:** Media queries in styled-components, mobile breakpoint at 768px (content) and 1050px (navbar)

---

*Architecture analysis: 2026-05-13*
