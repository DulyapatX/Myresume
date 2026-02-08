import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './resume.css'
import Resume from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Resume />
  </StrictMode>,
)
