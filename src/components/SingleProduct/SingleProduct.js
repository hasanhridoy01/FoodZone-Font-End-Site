import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Footer from '../Footer/Footer';
import Banner from '../Shared Pages/Banner/Banner';
import Header from '../Shared Pages/Header/Header';

const SingleProduct = () => {
  const [user] = useAuthState(auth);
  const { foodId } = useParams();
  const [food, setFood] = useState({});

  useEffect(() => {
    //set url
    const url = `http://localhost:5000/food/${foodId}`;
    fetch(url, {
      method: "GET",
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(res => res.json())
      .then(data => setFood(data));
  }, []);

  //get minimum and available Quantity
  const minimumQuantity = food.minimumQuantity;
  const availableQuantity = food.availableQuantity;
  const img = food.img;

  //Handle Food Order Submit From
  const handleFromSubmit = e => {
    e.preventDefault();

    //get input value
    const name = e.target.name.value;
    const email = e.target.email.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    //check minimum and available quantity
    if (minimumQuantity > quantity) {
      toast(`you cannot able to reduce the ${minimumQuantity} quantity below the minimum order quantity`);
    } else if (availableQuantity < quantity) {
      toast(`the order quantity can not be higher ${availableQuantity} than the available quantity`);
    } else {
      toast('success');
    }
  }
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <div className='mr-10 ml-10 mt-10 mb-10'>
        <div class="card lg:card-side bg-base-100 shadow-xl">
          <figure><img src={food.img} alt="Album" /></figure>
          <div class="card-body">
            <h2 class="card-title">{food.name}</h2>
            <p>Price: {food.price}</p>
            <p>availableQuantity: {food.availableQuantity}</p>
            <p>minimumQuantity: {food.minimumQuantity}</p>
            <p>{food.shortDescription}</p>
            <form action="" onSubmit={handleFromSubmit}>
              <input type="text" readOnly name='email' value={user.email} placeholder="Type here" class="input input-bordered input-info w-full max-w-xs mb-1" />
              <input type="text" name='name' value={food.name} readOnly placeholder="Type here" class="input input-bordered input-info w-full max-w-xs mb-1" />
              <input type="text" name='price' value={food.price} readOnly placeholder="Type here" class="input input-bordered input-info w-full max-w-xs" />
              <input type="text" name='quantity' placeholder="Type here Quantity" class="input input-bordered input-info w-full max-w-xs mt-1" />
              <div class="card-actions">
                <button class="btn btn-primary mt-2">Buy Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default SingleProduct;