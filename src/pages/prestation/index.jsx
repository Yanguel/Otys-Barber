import React from 'react'
import '../../styles/prestations.css'
function Prestations() {
  return (
    <section className="containerPrestations">
      <h1 className="titlePrestation souligner">
        {' '}
        VOICI LES PRESTATIONS PROPOSÉES{' '}
      </h1>
      <div className="divPrestations">
        <ul className="ulClassique">
          {' '}
          <h2 className="souligner">RASAGE CLASSIQUE</h2>
          <li>
            {' '}
            <strong>COUPE SIMPLE</strong> (Tracage - Ciseaux - Tondeuse) : 20€
          </li>
          <li>
            <strong>COUPE ET BARBE</strong> (Tracage - Ciseaux - Tondeuse) : 25€
          </li>
          <li>
            {' '}
            <strong>COUPE JUNIOR (6-10ans)</strong> (Tracage - Ciseaux -
            Tondeuse) : 15€
          </li>
        </ul>
        <ul className="ulTraditionnel">
          <h2 className="souligner"> RASAGE TRADITIONNEL</h2>
          <li>
            <strong>BARBE / TRACAGE RASOIR :</strong>: 15€
          </li>
          <li>
            {' '}
            <strong>BARBE / SERVIETTE CHAUDE :</strong>: 25€
          </li>
        </ul>
        <p className="teinture"> TEINTURE / DÉCOLORATION SUR DEVIS </p>
      </div>
      <div className="borderHoraire">
        <p>
          <strong>- Oty's Barber -</strong> <br /> 11 Rue Nantaise, 49300 Cholet{' '}
          <br />
          Lundi de 14h à 19h <br /> Du Mardi au Vendredi de 10h à 19h <br />
          Samedi de 10h à 14h30 <br /> Téléphone : 06 17 43 34 56
        </p>
      </div>
    </section>
  )
}

export default Prestations
