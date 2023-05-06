import React from 'react';

//import data
import { features } from '../data';

const Features = () => {
  //destructure features
  const { title, subtitle, image, buttonText, items } = features;
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-1 lg:flex-row lg:gap-x-[100px]'>
          {/* image */}
          <div className='flex-1 order-1 lg:-order-1'>
            <img src={image.type} alt='' />
          </div>
          {/* text */}
          <div className='flex-1 flex'>
            <h2>{title}</h2>
            <p>{subtitle}</p>
            {/* items */}
            <div>
              {items.map((item, index) => {
                const { title, subtitle, icon } = item;
                return (
                  <div>
                    <div>{icon}</div>
                    <div>
                      <h3>{title}</h3>
                      <p>{subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
