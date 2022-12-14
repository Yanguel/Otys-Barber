import { useEffect, useState } from 'react'
import CarouselFunction from '../../components/carousel'
import Loader from '../../components/loader'
import '../../styles/home.css'
function Home() {
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    })
  }, [loader])
  return (
    <div className="home">
      <Loader />
      <CarouselFunction />
      <div className="postCarousel">
        <div className="topLigne"></div>
        <div className="fistText">
          <span className="ligne"></span>
          <div className="paragrapheHome1 vignets2">
            <h1>Oty's Barber - Barbier Cholet</h1>
            <p className="textP1">
              Un Barber Shop Oldschool à l’ambiance authentique, spécialisé dans
              les coupes homme Classique Rétro, taille de barbe et Rasage.
            </p>
          </div>
          <span className="ligne"></span>
          <div className="secondText vignets3">
            <p className="titleAdresse">
              11 Rue Nantaise, 49300 Cholet, France.
            </p>
            <a href="https://www.google.nl/maps/place/Oty's+BARBER/@47.0604952,-0.8841879,17z/data=!3m1!4b1!4m5!3m4!1s0x480647a225895d8d:0xdfad97c43a48c5ff!8m2!3d47.0605198!4d-0.8820123">
              <button className="itineraire">Itinéraire</button>
            </a>
            <ul className="opening">
              <li>Lundi : 14h00 - 19h00</li>
              <li>Mardi : 10h00 - 19h00</li>
              <li>Mercredi : 10h00 - 19h00</li>
              <li>Jeudi : 10h00 - 19h00</li>
              <li>Vendredi : 10h00 - 19h00</li>
              <li>Samedi : 10h00 - 14h30</li>
              <li>Dimanche : Fermé </li>
            </ul>
            <p className="phone">
              Tel: <a href="tel:+33617433456">06 17 43 34 56</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
