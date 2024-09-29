import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import HomePage from './pages/HomePage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="main-div">
      <HomePage/>
    </div>
  </StrictMode>,
)
