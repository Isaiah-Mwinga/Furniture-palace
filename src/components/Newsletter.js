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
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <div>
            <input type='text' />
            <button>{buttonText}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
