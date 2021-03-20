import React from 'react'
import './Carousel.css';

function Carousel() {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://d1y6bibefcioc9.cloudfront.net/carousel/Flipkart-fs-web-carousel.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://d1y6bibefcioc9.cloudfront.net/carousel/Flipkart-BSD-web-carousel.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://rukminim1.flixcart.com/flap/844/140/image/0809af44d0c7a534.jpg?q=50" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}

export default Carousel
