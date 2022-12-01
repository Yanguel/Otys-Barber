import React from 'react'
import '../../styles/header.css'
import Logo from '../../assets/logo-otys.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="headerTotality">
      <div className="total">
        <div className="headerTop">
          <div className="ligneTop"></div>
        </div>
        <div className="logoDiv">
          <Link to="/">
            <img src={Logo} alt="Logo Oty's Barber" className="logo" />
          </Link>
        </div>
        <nav className="listePuce">
          <ul className="headerNav">
            <Link to="/" className="accueil">
              <li>ACCUEIL</li>
            </Link>
            <Link to="/réalisations" className="realisation">
              <li>RÉALISATIONS</li>
            </Link>
            <Link to="/préstations-et-tarifs" className="prestations">
              <li>PRÉSTATIONS</li>
            </Link>
            <Link to="/l'équipe" className="equipe">
              <li>L'ÉQUIPE</li>
            </Link>
          </ul>
          <div className="ligneBack"></div>
        </nav>
      </div>
    </header>
  )
}

export default Header
