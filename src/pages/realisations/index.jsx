import '../../styles/realisations.css'
import Realisation from '../../components/realisations'
import dataPhoto from '../../components/dataRealisations'

function Realisations() {
  return (
    <div className="realisations">
      <div className="textRealisations">
        <h1 className="titleRealisations">
          {' '}
          REALISATION TAILLE DE BARBE ET COUPE DE CHEVEUX{' '}
        </h1>
        <p className="paragraphe1">
          Voici les coupes de cheveux et taille de barbe que nous réalisons chez
          OTY's Barber ; <br />
          Nous sommes spécialisés en coiffure Classic et Odl School , dégradés à
          blanc progressif type Pompadour, Exécutive Contour, Flat Top,
          SlickBack,Razor Fade et Psycho mais aussi en New School pour les
          coupes avec de la texture type Crop.
        </p>
      </div>
      <section className="picturesRealisation">
        {dataPhoto.map((photo, index) => {
          return <Realisation key={index} id={photo.id} image={photo.image} />
        })}
      </section>
    </div>
  )
}

export default Realisations
