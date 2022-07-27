import React from 'react';
import bg1 from '../../img/bg.jpg';
import bg2 from '../../img/bg2.jpg';
import './Carousel.css'

const Carousel = () => {
  return (
    <div className='ml-5 mt-5 mr-5 p-5'>
      <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <img src={bg1} class="w-full imgHeight" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">❮</a>
            <a href="#slide2" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img src={bg2} class="h-50 w-full imgHeight" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">❮</a>
            <a href="#slide3" class="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;