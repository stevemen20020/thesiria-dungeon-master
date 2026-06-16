import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainRouter from './navigation/Router/MainRouter/MainRouter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainRouter/>
  </StrictMode>,
)
