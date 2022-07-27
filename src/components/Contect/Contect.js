import React from 'react';
import Footer from '../Footer/Footer';
import Banner from '../Shared Pages/Banner/Banner';
import Header from '../Shared Pages/Header/Header';

const Contect = () => {
  return (
    <div className="">
      <Header></Header>
      <Banner></Banner>
      <div className='mr-10 ml-10 mt-10 p-5'>
        <div className="title">
          <h2 className="titleText"><span>C</span>ontect Us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, perferendis!</p>
        </div>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5 lg:p-5 mt-10">
          <img className='mt-5' src={'https://i.ibb.co/N2cjTDQ/img1.jpg'} alt="" />
          <div className="card  p-5 bg-base-100">
          <input type="text" placeholder="Type Your Name" className="input input-bordered w-full mt-2 mb-3" />
          <input type="text" placeholder="Type Your Email" className="input input-bordered w-full mt-2 mb-3" />
          <textarea className="textarea textarea-accent" placeholder="Your Address"></textarea>
          <button className="btn btn-info mt-5">Submit</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contect;