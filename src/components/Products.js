import React from 'react';

//import data
import { products } from '../data';

//import components
import ProductSlider from  '../components/ProductSlider';

const Products = () => {
  // destructure products
  const { title, subtitle} = products;
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div>
          <h2 className='title'>{title}</h2>
          <p className='subtitle'>{subtitle}</p>
        </div>
        <ProductSlider />
      </div>
    </section>
  );
};

export default Products;
