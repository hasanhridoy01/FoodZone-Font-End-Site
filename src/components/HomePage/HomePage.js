import React from 'react';
import Carousel from '../Carousel/Carousel';
import Footer from '../Footer/Footer';
import Products from '../ProductsCard/Products/Products';
import Reviews from '../Reviews/Reviews';
import Banner from '../Shared Pages/Banner/Banner';
import Header from '../Shared Pages/Header/Header';

const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Products></Products>
      <Carousel></Carousel>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;