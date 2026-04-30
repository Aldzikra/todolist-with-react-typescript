import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import About from './About.tsx'
import Navbar from './Navbar.tsx'

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