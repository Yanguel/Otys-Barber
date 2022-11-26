import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import '../../styles/carousel.css'
import datas from '../data'

function CarouselFunction() {
  return (
    <div className="centerCarousel">
      <Carousel
        autoPlay
        interval={4000}
        infiniteLoop
        showArrows={true}
        showStatus={false}
      >
        {datas.map((slide) => (
          <div key={slide.id} className="picturesContainer">
            <img src={slide.image} alt="" className="pictures" />
          </div>
        ))}
      </Carousel>
    </div>
  )
}
export default CarouselFunction
