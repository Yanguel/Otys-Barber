import React from 'react'
import '../../styles/prestations.css'
function Prestations() {
  return (
    <section className="containerPrestations">
      <h1 className="titlePrestation souligner vignets1">
        {' '}
        VOICI LES PRESTATIONS PROPOSÉES{' '}
      </h1>
      <div className="divPrestations">
        <ul className="ulClassique vignets2">
          {' '}
          <h2 className="souligner">RASAGE CLASSIQUE</h2>
          <li className="liClassique">
            {' '}
            <strong>COUPE SIMPLE</strong> (Traçage - Ciseaux - Tondeuse) :
            <strong> 20€</strong>
          </li>
          <li className="liClassique">
            <strong>COUPE ET BARBE</strong> (Traçage - Ciseaux - Tondeuse) :{' '}
            <strong>25€</strong>
          </li>
          <li className="liClassique">
            {' '}
            <strong>COUPE JUNIOR (6-10ans)</strong> (Traçage - Ciseaux -
            Tondeuse) : <strong>15€</strong>
          </li>
        </ul>
        <ul className="ulTraditionnel vignets3">
          <h2 className="souligner"> RASAGE TRADITIONNEL</h2>
          <li className="liTraditionnel">
            <strong>BARBE </strong> (Tracage - Rasoir) : <strong>15€</strong>
          </li>
          <li className="liTraditionnel">
            {' '}
            <strong>BARBE </strong> (Tracage - Rasoir - Serviette chaude) :{' '}
            <strong>25€</strong>
          </li>
          <li className="teinture vignets">
            {' '}
            TEINTURE / DÉCOLORATION SUR DEVIS{' '}
          </li>
        </ul>
      </div>
      <div className="borderHoraire vignets4">
        <p>
          <strong className="otysBarber">- Oty's Barber -</strong> <br /> 11 Rue
          Nantaise, 49300 Cholet <br />
          Lundi de 14h à 19h <br /> Du Mardi au Vendredi de 10h à 19h <br />
          Samedi de 10h à 14h30 <br /> Téléphone : 06 17 43 34 56
        </p>
      </div>
    </section>
  )
}

export default Prestations
