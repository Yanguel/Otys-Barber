import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home'
import Realisations from './pages/realisations'
import Prestations from './pages/prestation'
import Equipe from './pages/equipe'
import Header from './components/header'
import Footer from './components/footer'
import './styles/normalize.css'
import './styles/racine.css'
// Importe React-Router
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/réalisations" element={<Realisations />} />
      <Route path="/l'équipe" element={<Equipe />} />
      <Route path="/préstations-et-tarifs" element={<Prestations />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
