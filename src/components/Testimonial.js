import React from 'react';

// import components
import TestmonialSlider from './TestmonialSlider';

//import data
import {testmonial} from '../data';


const Testimonial = () => {
  //destructure testmonial
  const {title, image} = testmonial;
  return (
    <section>
      <div className='container max-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-x-10 gap-y-2'>
          <div>
            {/* title */}
            <h2 className='title'>{title}</h2>
            {/* slider */}
            <TestmonialSlider />
          </div>
            {/* image */}
            <div className='order-1'>
              <img src={image.type} alt='' />
            </div>  
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
