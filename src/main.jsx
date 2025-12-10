// src/main.jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import App from './App'
import './index.css'   // global styles (Tailwind + custom CSS)

/*
  Explanation:
  - HashRouter avoids GitHub Pages/Static-server 404s when doing client-side routing.
  - AnimatePresence is here so route transitions inside App can use Framer Motion's exit/enter animations.
  - If you prefer BrowserRouter (and configured server fallback), replace HashRouter with BrowserRouter.
*/

const container = document.getElementById('root')
if (!container) {
  throw new Error('Root element not found — ensure index.html contains <div id="root"></div>')
}

const root = createRoot(container)

root.render(
  <React.StrictMode>
    <HashRouter>
      <AnimatePresence mode="wait" initial={false}>
        <App />
      </AnimatePresence>
    </HashRouter>
  </React.StrictMode>
)
