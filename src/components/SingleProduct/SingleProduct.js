import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Banner from '../Shared Pages/Banner/Banner';
import Header from '../Shared Pages/Header/Header';

const SingleProduct = () => {
  // const {itemsId} = useParams();
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <div className='mr-10 ml-10 mt-10 mb-10'>
        <div class="card lg:card-side bg-base-100 shadow-xl">
          <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
          <div class="card-body">
            <h2 class="card-title">New album is released!</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda soluta voluptatem, nobis autem suscipit esse voluptatum magni quia eius maiores illo exercitationem aut quibusdam velit natus molestias. Distinctio esse odio, quidem eius placeat magnam rem, doloribus laboriosam excepturi beatae quod eveniet incidunt praesentium vitae numquam ad dolores, reiciendis et ab. Autem vero molestias eveniet fugiat voluptatum error reprehenderit esse harum architecto eaque, hic nemo! Laboriosam hic id ex quod rem aliquid labore laborum, magni recusandae soluta? Molestias odit illum corporis molestiae natus dolores! Amet, error. Ad sit eius quidem nemo quis. Deleniti molestias exercitationem ducimus dicta, vero amet reiciendis est?</p>
            <label htmlFor="">Product Quantity</label>
            <input type="text" placeholder="Type here" class="input input-bordered input-info w-full max-w-xs" />
            <div class="card-actions justify-end">
              <button class="btn btn-primary">PurChase</button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default SingleProduct;