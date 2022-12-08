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
          <Link to="/Otys-Barber/">
            <img src={Logo} alt="Logo Oty's Barber" className="logo" />
          </Link>
          <div>
            <ul className="socialMediaHeader">
              <a href="https://www.instagram.com/otysbarber/?hl=fr">
                <li className="instagramHeader">
                  {' '}
                  <i className="fa-brands fa-instagram fa-bounce fa-2xl fa-black"></i>{' '}
                  <p>Suivez nous sur instagram !</p>
                </li>
              </a>
              <a href="https://www.facebook.com/otysbarber/">
                <li className="facebookHeader">
                  {' '}
                  <i className="fa-brands fa-facebook fa-bounce fa-2xl fa-black"></i>{' '}
                  <p className="textFcb">Voici notre Facebook !</p>
                </li>
              </a>
            </ul>
          </div>
        </div>
        <nav className="listePuce">
          <ul className="headerNav">
            <Link to="/Otys-Barber/" className="accueil">
              <li>
                <span className="iconeHeader">a</span>ACCUEIL
              </li>
            </Link>
            <Link to="/réalisations" className="realisation">
              <li>
                <span className="iconeHeader">$</span>RÉALISATIONS
              </li>
            </Link>
            <Link to="/préstations-et-tarifs" className="prestations">
              <li>
                <span className="iconeHeader">7</span>PRESTATIONS
              </li>
            </Link>
            <Link to="/l'équipe" className="equipe">
              <li>
                <span className="iconeHeader">x</span>L'ÉQUIPE
              </li>
            </Link>
          </ul>
          <div className="ligneBack"></div>
        </nav>
      </div>
    </header>
  )
}

export default Header
