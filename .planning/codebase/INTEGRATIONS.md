# External Integrations

**Analysis Date:** 2026-05-13

## APIs & External Services

**Calendar Embed:**
- Styled Calendar - Embedded school calendar via iframe
  - SDK/Client: `<iframe>` embed + parent-window script loaded dynamically
  - Script URL: `https://embed.styledcalendar.com/assets/parent-window.js`
  - Embed URL: `https://embed.styledcalendar.com/#ogJNNliZJQS1WwHPztD4`
  - Implementation: `src/components/CalendarSection/index.js`
  - Auth: None (public embed, identified by hash ID in URL)

**No other external API calls detected.** No `fetch()`, `axios`, or REST/GraphQL client usage found in the source code.

## Data Storage

**Databases:**
- None - Fully static site with no database

**File Storage:**
- Local filesystem only
- Static images served from `public/images/`
- Video served from `src/videos/intro_vid.mp4` (bundled by webpack)

**Caching:**
- Service Worker (`service-worker.js`, `precache-manifest.*.js`) - CRA-generated precaching for offline support

## Authentication & Identity

**Auth Provider:**
- None - No authentication system implemented
- No login/signup flows detected

## Monitoring & Observability

**Error Tracking:**
- None

**Logs:**
- None (no logging framework)

**Performance:**
- web-vitals 2.1.x - Built-in CRA performance reporting (`src/index.js`)

## CI/CD & Deployment

**Hosting:**
- GitHub Pages (current) - Static files served from `gh-pages` branch
- Custom domain: `seattlearmenianschool.org` (via `public/CNAME`)
- Vercel deployment planned but not yet configured

**CI Pipeline:**
- None detected (no `.github/workflows/`, no CI config files)

**Deploy Command:**
```bash
npm run deploy    # runs "react-scripts build" then "gh-pages -d build"
```

## Environment Configuration

**Required env vars:**
- `NODE_OPTIONS=--openssl-legacy-provider` (build-time only, for Node 17+)

**No runtime env vars required.** The app has no API keys, secrets, or service connections that require configuration.

**Secrets location:**
- No secrets management - the app is entirely static with no server-side components

## Webhooks & Callbacks

**Incoming:**
- None

**Outgoing:**
- None

## Integration Summary

This is a purely static React application with minimal external dependencies. The only third-party integration is the Styled Calendar iframe embed in `src/components/CalendarSection/index.js`. All content is hardcoded in component files and static assets. There is no backend, no database, no authentication, and no API consumption.

Future phases (per CLAUDE.md) may require integrations for:
- Email/WhatsApp subscription forms
- Member question submission (would need a backend or form service)
- Financial data display

---

*Integration audit: 2026-05-13*
