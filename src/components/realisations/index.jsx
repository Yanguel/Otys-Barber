function Realisation(props) {
  const { image } = props
  return (
    <article className="photoRealisations">
      <img src={image} alt="Une Réalisation" className="uneRealisation"></img>
      {/* Récupération du nom du logement grace aux props*/}
    </article>
  )
}
export default Realisation
