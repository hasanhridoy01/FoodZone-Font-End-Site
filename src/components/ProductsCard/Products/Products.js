import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('items.json')
    .then(res => res.json())
    .then(data => setProducts(data));
  },[])
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10 mt-5'>
      {
        products.map(product => <Product key={product.id} product={product}></Product>)
      }
    </div>
  );
};

export default Products;