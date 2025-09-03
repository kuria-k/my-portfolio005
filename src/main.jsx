import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Projects from './Projects.jsx'
import Theme from './Theme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
    <App />
    {/* <Home/> */}
    {/* <About/> */}
    {/* <Contact/> */}
    {/* <Projects/> */}
    {/* <Theme/> */}
    </div>
  </StrictMode>,
)
