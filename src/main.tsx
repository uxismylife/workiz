import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ViewportCanvas } from './ViewportCanvas.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ViewportCanvas>
      <App />
    </ViewportCanvas>
  </StrictMode>,
)
