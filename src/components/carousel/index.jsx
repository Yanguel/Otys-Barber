import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import '../../styles/carousel.css'

function CarouselFunction() {
  const datas = [
    {
      id: 1,
      image: '../../assets/photo2.jpg',
      title: 'photo1',
      text: 'texte photo1',
    },
    {
      id: 2,
      image: '../../assets/photo2.jpg',
      title: 'photo2',
      text: 'texte photo2',
    },
    {
      id: 3,
      image: '../../assets/photo3.jpg',
      title: 'photo3',
      text: 'texte photo3',
    },
    {
      id: 4,
      image: '../../assets/photo4.jpg',
      title: 'photo4',
      text: 'texte photo4',
    },
    {
      id: 5,
      image: '../../assets/photo5.jpg',
      title: 'photo5',
      text: 'texte photo5',
    },
  ]
  return (
    <Carousel autoPlay infiniteLoop thumbWidth={120}>
      {datas.map((slide) => (
        <div key={slide.id}>
          <img src={slide.image} alt="" />
          <div className="overlay">
            <h2 className="overlayTitle"> {slide.title}</h2>
            <p className="overlayTexte"> {slide.text}</p>
          </div>
        </div>
      ))}
    </Carousel>
  )
}
export default CarouselFunction
