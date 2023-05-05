import React from 'react';

//import data
import { hero } from '../data';

const Hero = () => {
  const {title, subtitle, buttonText} = hero;
  return (
    <section className='h-[850px] w-full bg-hero bg-right bg-cover bg-no-repeat text-white pt-[225px] pb-[254px] relative mb-12 lg:bg-center lg:mb-28'>
      <div className=' container mx-auto text-center'>
        {/* title*/}
        <h1 className='text-2xl mx-auto font-semibold mb-[30px] lg:text-[64px] lg:leading-tight lg:max-w-[888px]'>
          {title}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
