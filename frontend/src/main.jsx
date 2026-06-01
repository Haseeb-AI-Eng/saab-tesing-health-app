// main.jsx
// Vite/React entry point used by the dev server. Keep this file minimal.
// Add global providers (Redux, Context, ErrorBoundary) here when needed.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
