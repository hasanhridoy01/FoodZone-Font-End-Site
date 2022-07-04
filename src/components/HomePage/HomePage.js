import React from 'react';
import Products from '../ProductsCard/Products/Products';
import Banner from '../Shared Pages/Banner/Banner';
import Header from '../Shared Pages/Header/Header';

const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Products></Products>
    </div>
  );
};

export default HomePage;