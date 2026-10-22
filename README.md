# Dental Care Landing Page

A responsive dental clinic landing page designed for desktop, tablet, and mobile devices. The project is built with HTML5, CSS3, and vanilla JavaScript ES modules, using Vite for development and production builds.

The implementation follows dedicated design references and uses a modular project structure to keep markup, styles, and JavaScript behaviors organized and maintainable.

## Preview

### Desktop

![Dental Care Desktop Preview](./assets/Design/Homepage%20DESKTOP.png)

### Tablet

![Dental Care Tablet Preview](./assets/Design/Homepage%20TABLET.png)

### Mobile

![Dental Care Mobile Preview](./assets/Design/Homepage%20MOBILE.png)

> Place the three reference screenshots in the `screenshots/` directory using the filenames shown above.

## Technology Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES modules)
- Vite
- npm
- ESLint
- Git and GitHub

**React is not part of the current application or its dependencies.** Future React migration planning is kept separately in `src/future-react/`.

## Project Structure

## Project Structure

````text
.
├── index.html
├── package.json
├── README.md
├── .gitignore
├── vite.config.js
├── eslint.config.js
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── assets/
│   ├── Design/
│   │   ├── Homepage DESKTOP.png
│   │   ├── Homepage MOBILE.png
│   │   └── Homepage TABLET.png
│   ├── fonts/
│   ├── icons/
│   └── images/
├── styles/
│   ├── base/
│   │   ├── reset.css
│   │   ├── variables.css
│   │   └── global.css
│   ├── layout/
│   │   ├── header.css
│   │   └── footer.css
│   ├── sections/
│   │   ├── hero.css
│   │   ├── services.css
│   │   ├── about.css
│   │   ├── testimonials.css
│   │   └── contact.css
│   └── responsive.css
├── scripts/
│   ├── main.js
│   ├── modules/
│   │   ├── navigation.js
│   │   ├── slider.js
│   │   └── form-validation.js
│   └── utils/
└── src/
    └── future-react/
        ├── README.md
        ├── App.jsx
        ├── App.css
        ├── index.css
        ├── main.jsx
        ├── components/
        │   ├── layout/
        │   └── common/
        ├── sections/
        ├── hooks/
        ├── data/
        └── styles/

## Project Organization

- **`index.html`** — Main page markup.
- **`styles/base/`** — CSS reset, design tokens, and global styles.
- **`styles/layout/`** — Shared layout styles, including the header and footer.
- **`styles/sections/`** — Styles for individual landing page sections.
- **`styles/responsive.css`** — Responsive rules for different viewport sizes.
- **`scripts/main.js`** — JavaScript entry point.
- **`scripts/modules/`** — Independent browser behaviors and interactions.
- **`scripts/utils/`** — Shared JavaScript helper functions.
- **`assets/images/`** — Reusable images.
- **`assets/icons/`** — Icon assets.
- **`assets/fonts/`** — Local font files.
- **`public/`** — Public resources served from the site root.
- **`src/future-react/`** — Documentation and placeholders for a possible future React migration.

The current application uses the root `index.html` and the vanilla JavaScript entry point. Files under `src/future-react/` are not imported into the active application or included in its current build.

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/00mohammad/Dental-care-landing-page.git
````

Navigate to the project directory:

```bash
cd Dental-care-landing-page
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite development server    |
| `npm run build`   | Create a production build            |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## Responsive Design

The page is planned around three design references:

- **Desktop:** Spacious layouts, full navigation, and multi-column sections.
- **Tablet:** Adapted grids, component sizes, and spacing.
- **Mobile:** Compact layouts, vertically stacked content, and mobile-friendly navigation.

Responsive styles are maintained separately to keep layout adjustments organized and easier to maintain.

## Development Workflow

The project uses Git branches to organize feature development and isolate changes.

Example feature branches:

- `feature/navigation`
- `feature/hero`
- `feature/services`
- `feature/about-testimonials`
- `feature/contact-footer`
- `feature/responsive`
- `feature/javascript`

Create a branch when starting a feature, test changes locally, and use clear commit messages to describe completed work.

## Future React Migration

A future React migration is documented in [`src/future-react/README.md`](src/future-react/README.md).

When the migration begins, the page can be moved to React incrementally while keeping shared images and design tokens in their existing locations. React dependencies and Vite configuration should only be changed as part of a deliberate migration.

Until then, the vanilla JavaScript application remains the only active implementation.

## Project Status

**In Development**

The landing page is being developed section by section using the desktop, tablet, and mobile screenshots as visual references.

## Author

**Mohammad Honarmande**

- GitHub: [@00mohammad](https://github.com/00mohammad)
- LinkedIn: [Mohammad Honarmande](https://www.linkedin.com/in/mohammad-honarmande-62ab39343/)
