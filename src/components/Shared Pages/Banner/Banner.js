import React from 'react';
import bannerImg from '../../../img/bg.jpg'

const Banner = () => {
  return (
    <div className='mr-5 ml-5'>
      <div class="hero bg-base-100 lg:p-10 mt-5">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerImg} class="sm:max-w-sm lg:max-w-lg rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-4xl font-bold uppercase mt-3 text-info">your chooces our priority</h1>
            <p class="py-3 pr-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente harum praesentium vero eos autem accusamus nisi tempore, sed odio aspernatur itaque in, voluptate necessitatibus maiores sint corrupti quia fugiat ullam?</p>
            <button class="btn btn-info text-white">Registration</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;