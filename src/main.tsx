import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import Navbar from './components/Navbar'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="main-div">
      <Navbar/>
    </div>
  </StrictMode>,
)
