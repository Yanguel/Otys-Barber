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
          <li className="liClassique">
            {' '}
            <strong>COUPE SIMPLE</strong> (Traçage - Ciseaux - Tondeuse) :
            <strong>20€</strong>
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
        <ul className="ulTraditionnel">
          <h2 className="souligner"> RASAGE TRADITIONNEL</h2>
          <li className="liTraditionnel">
            <strong>BARBE / TRAÇAGE RASOIR :</strong>: <strong>15€</strong>
          </li>
          <li className="liTraditionnel">
            {' '}
            <strong>BARBE / SERVIETTE CHAUDE :</strong>: <strong>25€</strong>
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
