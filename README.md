# Dental Care Landing Page

A single-repository dental clinic landing page project. The current website is built with HTML5, CSS3, and vanilla JavaScript ES modules, using Vite for local development and production builds. A future React migration is documented under `src/future-react`; it is not part of the current application.

## Current technology

- HTML5
- CSS3
- Vanilla JavaScript (ES modules)
- Vite
- npm

React is not used by the current application and is not a project dependency.

## Project structure

```text
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
│   ├── images/
│   ├── icons/
│   └── fonts/
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
```

### Where to work

- Add page markup to the root `index.html`.
- Add shared reset, tokens, and site-wide rules to `styles/base/`.
- Add header and footer rules to `styles/layout/`.
- Add section-specific styles to `styles/sections/`.
- Add viewport and responsive rules to `styles/responsive.css`.
- Keep the JavaScript entry point in `scripts/main.js`; put separate browser behaviors in `scripts/modules/` and shared helpers in `scripts/utils/`.
- Put reusable site images, icons, and font files in `assets/images/`, `assets/icons/`, and `assets/fonts/`. Files in `public/` are served from the site root and are suitable for directly referenced public resources such as the favicon and shared SVG sprite.
- Keep future React planning and placeholders inside `src/future-react/`. Do not import those files from `index.html` or the current Vite configuration.

The CSS, JavaScript modules, and React source placeholders are intentionally empty. No landing-page UI or interactions have been implemented yet.

## Install and run

Install the dependencies:

```sh
npm install
```

Start the local development server:

```sh
npm run dev
```

Create a production build:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

Run the JavaScript linter:

```sh
npm run lint
```

## Future React migration

The vanilla site remains the only active application. When ready to learn React, use the plan in [`src/future-react/README.md`](src/future-react/README.md) to migrate one section at a time. Keep shared imagery and design tokens in their current shared locations; organize React-only components and state within `src/future-react/`. React will require a deliberate, separately reviewed change to dependencies and Vite entry/configuration. Until that migration is chosen, these files are placeholders and are not imported or built.
