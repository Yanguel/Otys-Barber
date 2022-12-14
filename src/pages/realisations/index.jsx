import '../../styles/realisations.css'
import Realisation from '../../components/realisations'
import dataPhoto from '../../components/dataRealisations'
import instagram from '../../assets/instagram.png'
function Realisations() {
  return (
    <div className="realisations">
      <div className="textRealisations">
        <h1 className="titleRealisations vignets1">
          {' '}
          REALISATION TAILLE DE BARBE ET COUPE DE CHEVEUX{' '}
        </h1>
        <p className="paragraphe1 vignets2">
          Voici les coupes de cheveux et taille de barbe que nous réalisons chez
          OTY's Barber ; <br />
          Nous sommes spécialisés en coiffure Classic et Odl School , dégradés à
          blanc progressif type Pompadour, Exécutive Contour, Flat Top,
          SlickBack,Razor Fade et Psycho mais aussi en New School pour les
          coupes avec de la texture type Crop.
        </p>
      </div>
      <section className="picturesRealisation vignets3">
        {dataPhoto.map((photo, index) => {
          return <Realisation key={index} id={photo.id} image={photo.image} />
        })}
      </section>
      <div className="paragrapheRealisations vignets4">
        <p className="paragraphe2">
          Toutes les photos présentées ici sont des coupes de cheveux et des
          tailles de barbe qui ont été réalisé par notre équipe. <br />
          Lors de votre visite, nous vous conseillerons sur ce qu’il est
          possible de faire en fonction de vos envies, de ce que vous avez et de
          ce qu’il est possible de réaliser.{' '}
        </p>
        <p className="paragrapheInsta">
          Pour en voir plus suivez-nous sur Instagram
        </p>
        <a href="https://www.instagram.com/otysbarber/?hl=fr">
          <p>
            {' '}
            <img
              src={instagram}
              alt="logo instagram"
              className="instagramReal"
            ></img>
          </p>
        </a>
      </div>
    </div>
  )
}

export default Realisations
