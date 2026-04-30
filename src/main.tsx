import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './pages/App.tsx'
import About from './pages/About.tsx'
import Navbar from './components/organisms/Navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)