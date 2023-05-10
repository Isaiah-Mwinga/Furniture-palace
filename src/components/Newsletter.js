import React from 'react';

//import data
import { newsletter } from '../data';

const Newsletter = () => {
  //destructure newsletter
  const { title, subtitle, placeholder, buttonText } = newsletter;
  return (
    <section className='section bg-newsletter min-h-[490px]'>
      <div className='container max-auto flex justify-center lg:justify-end'>
        <div className='w-full max-w-[558px] text-center text-white lg:text-left'>
          <h2 className='text-4xl font-semibold max-w-[350px] mx-auto lg:mx-0 mb-5 leading-normal'>{title}</h2>
          <p className='text-xl font-light mb-10'>{subtitle}</p>
          <div className='flex flex-col lg:flex-row gap-[22px]'>
            <input className='h-[60px] px-6 outline-none placeholder:text-gray text-gray-600 rounded-lg lg:flex-1' type='text' />
            <button>{buttonText}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
