import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
  //Data Destructing
  const {_id, name, img, shortDescription, price} = product;
  const navigate = useNavigate();

  //handle single product
  const handleSingleFood = id => {
    navigate(`/singleproduct/${id}`);
  }
  return (
    <div className='mt-5'>
      <div class="card lg:w-90 bg-base-100 shadow-xl cardEffect">
        <figure><img className='cardImg' src={img} alt="Shoes" /></figure>
        <div class="card-body items-center">
          <h2 class="card-title">{name}</h2>
          <p>singleItemsPrice $ :{price}</p>
          <p>shortDescription: {shortDescription.slice(0, 100)}</p>
          <div class="card-actions justify-end">
            <a class="btn btn-secondary" href='' onClick={() => handleSingleFood(_id)}>Order Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;