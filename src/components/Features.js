import React from 'react';

//import data
import { features } from '../data';

const Features = () => {
  //destructure features
  const {title, subtitle, image, buttonText, items} = features;
  return (
    <section className='section'>
      <div>
        {/* image */}
        <div>
          <img src={image.type} alt='' />
        </div>
        {/* text */}
        <div>
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
    </section>
  );
};

export default Features;
