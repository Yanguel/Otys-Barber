import React from 'react'
import '../../styles/header.css'
import Logo from '../../assets/logo-otys.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="headerTotality">
      <header className="headerTop">
        <div className="ligneTop"></div>
      </header>
      <div className="logoDiv">
        <img src={Logo} alt="Logo Oty's Barber" className="logo" />
      </div>
      <nav className="listePuce">
        <ul className="headerNav">
          <Link to="/" className="actualite">
            <li>ACTUALITÉ</li>
          </Link>
          <Link to="/réalisations" className="realisation">
            <li>RÉALISATIONS</li>
          </Link>
          <Link to="/" className="prestations">
            <li>PRÉSTATIONS</li>
          </Link>
          <Link to="/" className="equipe">
            <li>L'ÉQUIPE</li>
          </Link>
          <Link to="/" className="conseils">
            <li>NOS CONSEILS</li>
          </Link>
        </ul>
        <div className="ligneBack"></div>
      </nav>
    </header>
  )
}

export default Header
