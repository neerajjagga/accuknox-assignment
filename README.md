# AccuKnox Assignment — Local Setup Guide

## Full Setup (Clone and Run)

1) Clone the repository

```bash
git clone https://github.com/neerajjagga/accuknox-assignment.git
```

2) Move into the project directory

```bash
cd accuknox-assignment
```

3) Install dependencies

```bash
npm install
```

4) Start the development server

```bash
npm run dev
```

By default, Vite serves the app at http://localhost:5173. The terminal will display the exact URL.


## Tech Stack
- React 19
- TypeScript
- Vite 7
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Zustand (state management)
- lucide-react (icons)
- motion (animations)

## Project Structure
Key files and directories:

- `index.html`: App entry HTML
- `vite.config.ts`: Vite configuration (React + Tailwind plugins)
- `eslint.config.js`: ESLint configuration
- `tsconfig*.json`: TypeScript configs
- `src/`: Application source code
  - `main.tsx`: Client entry
  - `App.tsx`: Root component
  - `components/`: Reusable UI components
  - `pages/`: Page-level components
  - `store/`: Zustand store(s)
  - `types/`: Shared TypeScript types
