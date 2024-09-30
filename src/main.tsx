import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import Navbar from './components/Navbar'
import Item from './components/Projects/Item'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="main-div roboto-regular">
      <Navbar/>
    </div>
  </StrictMode>,
)
