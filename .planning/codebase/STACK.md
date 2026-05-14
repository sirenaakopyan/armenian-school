# Technology Stack

**Analysis Date:** 2026-05-13

## Languages

**Primary:**
- JavaScript (ES6+) - All application code (`src/**/*.js`)

**Secondary:**
- CSS - Inline via styled-components, plus `src/App.css`
- HTML - `public/index.html` shell

## Runtime

**Environment:**
- Node.js v22.22.0 (local dev)

**Package Manager:**
- npm 11.11.0
- Lockfile: present (`package-lock.json`)

## Frameworks

**Core:**
- React 18.2.x - UI framework (`src/index.js` uses `createRoot` API)
- React Router DOM 6.6.x - Client-side routing (`src/App.js`)
- styled-components 5.3.x - CSS-in-JS styling (used across all components)

**Testing:**
- Jest (via react-scripts) - Test runner
- @testing-library/react 13.4.x - Component testing
- @testing-library/jest-dom 5.16.x - DOM assertions
- @testing-library/user-event 13.5.x - User interaction simulation

**Build/Dev:**
- react-scripts 3.0.x (Create React App) - Build toolchain, dev server, bundling
- gh-pages 4.0.x (devDependency) - Deployment to GitHub Pages

## Key Dependencies

**Critical:**
- react 18.2.x - Core UI library
- react-dom 18.2.x - DOM rendering
- react-router-dom 6.6.x - All page routing (`src/App.js` defines Routes)
- styled-components 5.3.x - All component styling (every component uses it)

**UI Libraries:**
- react-icons 4.7.x - Icon components (FaBars, FaTimes, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaHeart, MdKeyboardArrowRight, MdArrowForward)
- react-scroll 1.8.x - Smooth scrolling navigation (used in Navbar and Sidebar)

**Infrastructure:**
- web-vitals 2.1.x - Performance metrics reporting

## Configuration

**Environment:**
- No `.env` file present
- Build requires `NODE_OPTIONS=--openssl-legacy-provider` for react-scripts 3.x on Node 17+ (noted in CLAUDE.md)
- No runtime environment variables detected in source code

**Build:**
- `package.json` - All build configuration (scripts, eslintConfig, browserslist)
- No separate webpack, babel, or PostCSS config files (managed by react-scripts)

**ESLint:**
- Configured inline in `package.json` extending `react-app` and `react-app/jest`

**Browserslist:**
- Production: `>0.2%`, `not dead`, `not op_mini all`
- Development: last 1 version of Chrome, Firefox, Safari

## Build Commands

```bash
npm start          # Dev server (react-scripts start)
npm run build      # Production build (react-scripts build)
npm test           # Run tests (react-scripts test)
npm run deploy     # Build + deploy to gh-pages
```

## Platform Requirements

**Development:**
- Node.js 22.x (or 16.x without legacy provider flag)
- npm 11.x
- Set `NODE_OPTIONS=--openssl-legacy-provider` for builds on Node 17+

**Production:**
- Static hosting (GitHub Pages via `gh-pages` branch, or Vercel)
- Custom domain: `seattlearmenianschool.org` (configured in `public/CNAME`)
- Homepage set to `https://seattlearmenianschool.org` in `package.json`

## Known Compatibility Note

react-scripts 3.0.x is significantly outdated (current is 5.x). It uses an older webpack and Babel configuration. The `--openssl-legacy-provider` workaround is required because react-scripts 3.x uses an OpenSSL hash algorithm removed in Node 17+. Upgrading react-scripts would eliminate this requirement.

---

*Stack analysis: 2026-05-13*
