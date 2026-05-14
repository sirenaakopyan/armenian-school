# Coding Conventions

**Analysis Date:** 2026-05-13

## Naming Patterns

**Files:**
- Components use PascalCase directory names: `HeroSection/`, `Navbar/`, `AboutSection/`
- Component entry points are always `index.js` inside their directory
- Styled-component files use PascalCase with `Elements` suffix: `NavbarElements.js`, `HeroElements.js`, `SidebarElements.js`
- Pages use lowercase `index.js` inside lowercase directories: `src/pages/expansion/index.js`
- Data files use lowercase: `src/pages/expansion/posts.js`
- Standalone component files use PascalCase: `src/components/ButtonElement.js`

**Components (React):**
- PascalCase for all component names: `HeroSection`, `Navbar`, `ExpansionPage`, `CalendarPage`
- Arrow function components for pages and sections: `const Home = () => {}`
- Function declaration used only for `App`: `function App() {}`
- Use arrow functions for all new components

**Styled Components:**
- PascalCase names describing the element: `PageWrapper`, `HeroTitle`, `SectionText`, `PostCard`
- Semantic HTML element names mapped descriptively: `styled.section`, `styled.article`, `styled.footer`
- Prefix with parent context when needed: `HeroBtn`, `HeroBtnOutline`, `NavRouterLink`

**Variables and Functions:**
- camelCase for all variables and functions: `isOpen`, `toggleHandler`, `formatBody`
- Boolean state variables prefixed with `is`: `isOpen`
- Handler functions suffixed with `Handler` or use inline arrow: `toggleHandler`

**Props:**
- camelCase: `isOpen`, `toggleState`, `post`

## Code Style

**Formatting:**
- No dedicated Prettier or formatting tool configured
- Indentation: 2 spaces
- Single quotes for JSX string attributes: `to='/expansion'`
- Single quotes for JS string imports: `import React from 'react'`
- Semicolons at end of statements
- Trailing commas in multi-line imports

**Linting:**
- ESLint configured inline in `package.json` (no `.eslintrc` file)
- Extends `react-app` and `react-app/jest` presets
- No custom rules defined

## Import Organization

**Order:**
1. React and React hooks: `import React, { useState } from 'react'`
2. Third-party libraries: `import styled from 'styled-components'`, `import { Link } from 'react-router-dom'`
3. Local components: `import Navbar from '../../components/Navbar'`
4. Local styled elements: `import { Nav, NavbarContainer, ... } from './NavbarElements'`
5. Local data/assets: `import { posts } from './posts'`, `import Video from '../../videos/intro_vid.mp4'`

**Path Style:**
- Relative paths throughout: `../../components/Navbar`, `./NavbarElements`
- No path aliases configured (no jsconfig.json or tsconfig.json with paths)

## Styled Components Conventions

**Inline vs. Separate File:**
- Shared/reusable layout components (Navbar, Sidebar, Hero) split styled components into a separate `*Elements.js` file
- Page-specific styled components defined inline at the top of the page file (see `src/pages/expansion/index.js`, `src/pages/expansion/updates.js`, `src/components/AboutSection/index.js`, `src/components/ContactSection/index.js`)
- **Rule of thumb:** If a component directory has its own folder, consider a separate `*Elements.js` file. For pages and self-contained sections, define styled components inline.

**Prop-based Styling:**
- Used sparingly via template literals: `opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')}` in `src/components/Sidebar/SidebarElements.js`
- `ButtonElement.js` uses multiple boolean props (`primary`, `big`, `dark`, `fontBig`) but this component is legacy/unused

**Color Constants:**
- Brand blue: `#0038ff` (used throughout as primary accent)
- Dark text: `#303030`
- Body text: `#555`
- White: `#fff`
- Light gray border: `#eee`
- Muted text: `#888`
- Dark background: `#1a1a1a`
- No centralized theme/constants file exists; colors are hardcoded in each styled component

**Responsive Breakpoints:**
- 960px: Navbar transition (in `NavbarElements.js`)
- 1050px: Navbar menu hide, show mobile icon (`NavbarElements.js`)
- 768px: Font size reductions, layout shifts to column
- 640px: Footer grid collapses to single column
- 480px: Smallest breakpoint for mobile sizing
- No shared breakpoint constants; values are hardcoded per component

**Transition Pattern:**
- Standard: `transition: all 0.2s ease-in-out` or `transition: 0.2s ease-in-out`

## Component Structure Pattern

**Page Components** follow this structure (see `src/pages/expansion/updates.js`):
```jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

// Styled components defined here...

const PageName = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleHandler = () => setIsOpen(!isOpen);

  return (
    <PageWrapper>
      <Sidebar isOpen={isOpen} toggleState={toggleHandler} />
      <Navbar toggleState={toggleHandler} />
      {/* Page content */}
    </PageWrapper>
  );
};

export default PageName;
```

**Every page** includes the Sidebar + Navbar boilerplate with the `isOpen`/`toggleHandler` state pattern. This is repeated in:
- `src/pages/index.js`
- `src/pages/calendar/index.js`
- `src/pages/expansion/index.js`
- `src/pages/expansion/updates.js`

**Section Components** are simpler (no sidebar/navbar):
```jsx
import React from 'react';
import styled from 'styled-components';

// Styled components...

const SectionName = () => {
  return (
    <Container id='section-id'>
      {/* Content */}
    </Container>
  );
};

export default SectionName;
```

## Error Handling

**Patterns:**
- No explicit error handling, try/catch blocks, or error boundaries exist in the codebase
- No loading states or fallback UIs
- The app is entirely static with no API calls, so error handling has not been needed yet

## Logging

**Framework:** None
- No logging statements exist in the codebase
- No console.log, console.error, or third-party logging

## Comments

**When to Comment:**
- Comments are almost entirely absent from the source code
- No JSDoc or inline documentation
- Code is kept self-documenting through descriptive styled component names

## Module Design

**Exports:**
- One default export per file for components: `export default ComponentName`
- Named exports for styled components in `*Elements.js` files: `export const Nav = styled.nav...`
- Named exports for data: `export const posts = [...]` in `src/pages/expansion/posts.js`
- No barrel files or re-exports

**File-per-component:** Each component or page is a single file. No file contains multiple exported components except `*Elements.js` files (which export multiple styled components) and `updates.js` (which contains `PostEntry` as an internal helper component).

## Data Patterns

**Static Content:**
- Blog/update posts stored as a JS array of objects in `src/pages/expansion/posts.js`
- Post shape: `{ id: number, date: string, title: string, excerpt: string, body: string }`
- Body text uses a custom markup format: `**bold**` and `[IMAGE:src|alt]` parsed by `formatBody()` in `src/pages/expansion/updates.js`
- When adding new posts, prepend or append to the `posts` array in `src/pages/expansion/posts.js`

## Routing

**Library:** react-router-dom v6
- Routes defined centrally in `src/App.js`
- Use `<Route path='/path' element={<Component />} />` syntax
- Internal links use `<Link to='/path'>` from react-router-dom
- Scroll links use `react-scroll` for same-page navigation (home page sections)

---

*Convention analysis: 2026-05-13*
