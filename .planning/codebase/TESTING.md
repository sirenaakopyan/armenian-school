# Testing Patterns

**Analysis Date:** 2026-05-13

## Test Framework

**Runner:**
- Jest (via react-scripts v3.0.1, bundled with Create React App)
- Config: Inline in `package.json` under `eslintConfig` extending `react-app/jest`
- No standalone `jest.config.js` or `jest.config.ts`

**Assertion Library:**
- `@testing-library/jest-dom` ^5.16.5 (installed, not used)
- `@testing-library/react` ^13.4.0 (installed, not used)
- `@testing-library/user-event` ^13.5.0 (installed, not used)

**Run Commands:**
```bash
npm test                # Run tests in watch mode (react-scripts test)
npm test -- --coverage  # Run with coverage report
npm test -- --watchAll=false  # Run once without watch (CI mode)
```

## Test File Organization

**Location:**
- No test files exist anywhere in the codebase
- No `*.test.js`, `*.test.jsx`, `*.spec.js`, or `*.spec.jsx` files
- No `__tests__/` directories

**Expected Convention (from Create React App defaults):**
- Co-locate test files alongside source files
- Name pattern: `ComponentName.test.js`
- Example: `src/components/Navbar/Navbar.test.js`

**Structure (recommended based on project layout):**
```
src/
  components/
    Navbar/
      index.js
      NavbarElements.js
      Navbar.test.js          # Component behavior tests
    HeroSection/
      index.js
      HeroElements.js
      HeroSection.test.js
  pages/
    expansion/
      index.js
      updates.js
      posts.js
      ExpansionPage.test.js
      UpdatesPage.test.js
      posts.test.js           # Data integrity tests
```

## Test Structure

**No existing tests to reference.** When adding tests, follow this pattern consistent with the project's React Testing Library dependency:

**Suite Organization:**
```javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ComponentName from './index';

describe('ComponentName', () => {
  const renderWithRouter = (ui) => render(<BrowserRouter>{ui}</BrowserRouter>);

  it('renders without crashing', () => {
    renderWithRouter(<ComponentName />);
  });

  it('displays expected content', () => {
    renderWithRouter(<ComponentName />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

**Key consideration:** Most components use `react-router-dom` (`Link`, `NavLink`) and `react-scroll`, so tests must wrap components in `<BrowserRouter>`. Components that accept props (`isOpen`, `toggleState`) require those props to be provided.

## Mocking

**Framework:** Jest (built-in mocks via react-scripts)

**Patterns (recommended for this codebase):**

Mock video imports (HeroSection imports an mp4 file):
```javascript
// In jest setup or test file
jest.mock('../../videos/intro_vid.mp4', () => 'test-video.mp4');
```

Mock react-scroll (used in ButtonElement and NavbarElements):
```javascript
jest.mock('react-scroll', () => ({
  Link: ({ children, ...props }) => <a {...props}>{children}</a>,
}));
```

Mock styled-calendar script injection (CalendarSection uses dynamic script loading):
```javascript
// CalendarSection appends a script tag in useEffect — no special mocking needed
// for render tests since jsdom won't execute the script
```

**What to Mock:**
- Video file imports
- External script loading (styled-calendar)
- Browser APIs not available in jsdom

**What NOT to Mock:**
- React Router (wrap in BrowserRouter instead)
- Styled components (they render as normal elements in tests)
- Static data (`posts.js` — import directly)

## Fixtures and Factories

**Test Data:**
- The `posts` array in `src/pages/expansion/posts.js` serves as real content data
- For testing, import it directly or create minimal test fixtures:

```javascript
const mockPost = {
  id: 999,
  date: 'January 2026',
  title: 'Test Post Title',
  excerpt: 'Test excerpt text.',
  body: 'Test body with **bold** and [IMAGE:/test.jpg|alt text]',
};
```

**Location:**
- No fixture directory exists
- Place test fixtures alongside test files or in a `src/__fixtures__/` directory if shared

## Coverage

**Requirements:** None enforced — no coverage thresholds configured

**View Coverage:**
```bash
npm test -- --coverage --watchAll=false
```

Coverage report outputs to `/coverage/` (gitignored).

## Test Types

**Unit Tests:**
- Not implemented. Priority targets for unit testing:
  - `formatBody()` function in `src/pages/expansion/updates.js` (parses custom markup — pure function, easy to test)
  - `posts` data shape validation in `src/pages/expansion/posts.js`
  - Sidebar toggle behavior (isOpen prop drives CSS visibility)

**Integration Tests:**
- Not implemented. Priority targets:
  - Page renders with Navbar + Sidebar + content
  - Route navigation between Home, Expansion, Updates, Calendar pages
  - PostEntry expand/collapse toggle interaction

**E2E Tests:**
- Not used. No Cypress, Playwright, or similar framework installed.

## Common Patterns

**Router-Dependent Component Testing:**
```javascript
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (component) =>
  render(<BrowserRouter>{component}</BrowserRouter>);

it('renders navigation links', () => {
  renderWithRouter(<Navbar toggleState={jest.fn()} />);
  expect(screen.getByText('About')).toBeInTheDocument();
  expect(screen.getByText('Expansion')).toBeInTheDocument();
});
```

**Interactive Component Testing:**
```javascript
import userEvent from '@testing-library/user-event';

it('toggles post expansion on click', async () => {
  const user = userEvent.setup();
  renderWithRouter(<PostEntry post={mockPost} />);

  await user.click(screen.getByText('Read full update'));
  expect(screen.getByText(/Test body/)).toBeInTheDocument();

  await user.click(screen.getByText('Show less'));
  expect(screen.queryByText(/Test body/)).not.toBeInTheDocument();
});
```

**Pure Function Testing (formatBody):**
```javascript
// formatBody is not exported — would need to be extracted and exported for testing
// Currently defined inline in src/pages/expansion/updates.js (line 130)
import { formatBody } from './updates'; // requires exporting it

it('parses bold text', () => {
  const result = formatBody('Hello **world**');
  // Validate React elements returned
});
```

## Testing Gaps Summary

| Area | Status | Priority |
|------|--------|----------|
| Any tests at all | Missing | High |
| `formatBody()` pure function | Untested | High |
| Post data integrity | Untested | Medium |
| Page rendering (smoke tests) | Untested | Medium |
| Navigation / routing | Untested | Medium |
| Sidebar toggle interaction | Untested | Low |
| Responsive breakpoints | Untested | Low |

## Notes

- Testing libraries (`@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`) are installed as production dependencies in `package.json` rather than devDependencies. They function correctly but should be moved to `devDependencies`.
- `web-vitals` ^2.1.4 is listed as a dependency but no `reportWebVitals.js` file exists in the source, suggesting the CRA boilerplate file was deleted.

---

*Testing analysis: 2026-05-13*
