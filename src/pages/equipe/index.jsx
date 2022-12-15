import React from 'react'
import teddy from '../../assets/teddy.jpg'
import thibault from '../../assets/thibault.jpg'
import ouss from '../../assets/ouss2.png'
import '../../styles/equipe.css'
function Equipe() {
  return (
    <section className="containerEquipe">
      <div className="paragrapheEquipe">
        <h1 className="titreEquipe vignets1">
          Voici notre équipe de Coiffeur Barbier !
        </h1>
        <p className="paragraphe1Equipe vignets2">
          Nous avons réuni pour vous dans notre équipe des barbiers avec une
          forte expérience. Tout cela ajouté au savoir-faire Français, fait que
          nous pouvons aujourd’hui vous proposer un service de qualité !
        </p>
      </div>
      <div className="divTotalPhotos vignets3">
        <div className="divPhoto">
          <img
            src={teddy}
            alt="barber Teddy "
            className=" teddy photoEquipe "
          ></img>
          <div>
            <p className="paragrapheBottomPicture teddytext">
              {' '}
              <span className="nameBarbier">- Teddy - </span>
              <br /> Gérant <br /> Coiffeur Barbier.
            </p>
          </div>
        </div>
        <div className="divPhoto">
          <img
            src={ouss}
            alt="barber Oussama"
            className="oussama photoEquipe"
          ></img>
          <p className="paragrapheBottomPicture oussamaText">
            {' '}
            <span className="nameBarbier">- Oussama -</span> <br /> Gérant{' '}
            <br /> Coiffeur Barbier.
          </p>
        </div>
        <div className="divPhoto">
          <img
            src={thibault}
            alt="barber thibault"
            className="thibault photoEquipe"
          ></img>
          <p className="paragrapheBottomPicture thibaultText">
            {' '}
            <span className="nameBarbier"> - Thibault - </span>
            <br /> Employé <br /> Coiffeur Barbier.
          </p>
        </div>
      </div>
      <div className="horaireEquipe">
        <div className="borderHoraire vignets4">
          <p>
            <strong className="otysBarber">- Oty's Barber -</strong> <br /> 11
            Rue Nantaise, 49300 Cholet <br />
            Lundi de 14h à 19h <br /> Du Mardi au Vendredi de 10h à 19h <br />
            Samedi de 10h à 14h30 <br /> Téléphone : 06 17 43 34 56
          </p>
        </div>
      </div>
    </section>
  )
}

export default Equipe
