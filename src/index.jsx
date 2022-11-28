import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home'
import Realisations from './pages/realisations'
import Header from './components/header'
import Footer from './components/footer'
import './styles/normalize.css'

// Importe React-Router
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/réalisations" element={<Realisations />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
