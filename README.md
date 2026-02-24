# Ecommerce Themes — React Conversion

This project converts three static HTML themes into a single React application with modular, reusable components. The three theme modules are:

- Ekomart (implemented first)
- Marketpro (scaffolded)
- Electro (scaffolded)

Quick start

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

Project structure (important files)

- `src/components/` — shared reusable components (`Header`, `Footer`, `Banner`, `ProductGrid`)
- `src/pages/Ekomart` — Ekomart theme implementation (landing + product grid)
- `src/pages/Marketpro` — Marketpro module scaffold (WIP)
- `src/pages/Electro` — Electro module scaffold (WIP)
- `src/App.jsx` — top-level router and navigation between themes

Notes

- The project uses Tailwind CSS; ensure Tailwind is configured in your environment. The project contains `@tailwind` directives in `src/index.css`.
- Follow-up: I will implement Marketpro and Electro modules to closely match the provided previews, splitting them into smaller components per theme (Navbar, CategorySidebar, ProductCard variants, etc.).
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
