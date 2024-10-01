import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import Navbar from './components/Navbar'
import Rotas from './routes/routes'

createRoot(document.getElementById('root')!).render(
    <div className="main-div roboto-regular">
      <Navbar/>
      <Rotas/>
    </div>
)
