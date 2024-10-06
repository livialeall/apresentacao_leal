import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
    <div className="main-div roboto-regular">
      <StrictMode>
        <App />
      </StrictMode>
    </div>
)
