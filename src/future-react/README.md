# Future React Migration Plan

This directory is an architectural placeholder only. It is not a React application: the current site is the root `index.html` with styles under `/styles` and vanilla JavaScript under `/scripts`. Nothing in this directory is imported or executed by the current Vite configuration.

When you are ready to learn React:

- Translate the approved semantic HTML header, footer, and page sections into components in `components/layout/` and `sections/`.
- Extract repeated cards or controls into reusable components in `components/common/`.
- Move repeated content into `data/` and pass it to components as props.
- Share the existing root `assets/` files and CSS design tokens rather than copying them.
- Port section styles from root `styles/` into this app's styles only if needed; keep one authoritative copy of shared tokens.
- Replace direct DOM queries and event listeners in vanilla modules with React state and event handlers where appropriate.
- Add React dependencies and configure a React entry only as a deliberate migration step. Keep the root vanilla entry and scripts separate; do not load React from the current HTML page.

The component list and exact props/state should follow the actual finished design and its interactions. No page sections or React behavior are assumed by these placeholders.
