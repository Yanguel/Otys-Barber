import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home'
import Header from './components/header'
import Footer from './components/footer'
// Importe React-Router
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
