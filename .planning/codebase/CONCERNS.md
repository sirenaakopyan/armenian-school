# Codebase Concerns

> Mapped: 2026-05-13

## Technical Debt

### Build Artifacts in Source Control
- `main` branch contains React build output (`static/`, `index.html`, `service-worker.js`, `precache-manifest.*.js`) alongside source code
- Every source change requires manually copying `build/` to root and committing both source + artifacts
- Risk: stale build artifacts if developer forgets to rebuild before pushing

### Legacy Build Toolchain
- `react-scripts@3.0.1` requires `NODE_OPTIONS=--openssl-legacy-provider` on Node 22
- Webpack 4 under the hood — not compatible with modern Node without the legacy flag
- Upgrading to react-scripts 5+ or Vite would eliminate this workaround

### Unused Exports
- `NavLinks` (react-scroll Link) in `src/components/Navbar/NavbarElements.js` — no longer imported anywhere
- `SidebarLink` in `src/components/Sidebar/SidebarElements.js` — About link was migrated to `SidebarRouterLink`
- `HeroP`, `ArrowForward`, `ArrowRight` in `src/components/HeroSection/HeroElements.js` — never used
- `SideBtnWrap`, `SidebarRoute` in `src/components/Sidebar/SidebarElements.js` — never used

## Security

### No Content Security Policy
- No CSP headers or meta tags; relies on GitHub Pages defaults
- External scripts loaded: `embed.styledcalendar.com`, `fonts.googleapis.com`

### External Link Patterns
- Some `target='_blank'` links use `rel='noreferrer'` while others use `rel='noopener noreferrer'` — inconsistent but both safe

## Performance

### Large Video Asset
- `src/videos/intro_vid.mp4` bundled via webpack — increases initial bundle significantly
- No lazy loading or intersection observer for the video

### Full-Resolution Images
- `expansion-rendering.png` (2.8MB) and other update images (2-3MB each) served at full size
- No responsive `srcset` or image optimization pipeline

## Fragile Areas

### SPA Routing on GitHub Pages
- Relies on `404.html` redirect hack for React Router — any GitHub Pages config change could break deep links
- `/#about` hash navigation depends on browser scrolling to `id='about'` after page load — no programmatic scroll fallback

### Manual Deploy Process
- No CI/CD — deployment requires running `npm run build` locally, copying files, committing, and pushing
- Build warnings (unused vars) are not treated as errors

## Missing Features

### No Error Boundaries
- No React error boundaries — a component crash takes down the entire app

### No Analytics
- No tracking to measure page visits or user engagement

### No Favicon
- `favicon.ico` exists but is the default CRA favicon, not school-branded
