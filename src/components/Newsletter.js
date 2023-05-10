import React from 'react';

//import data
import { newsletter } from '../data';

const Newsletter = () => {
  //destructure newsletter
  const { title, subtitle, placeholder, buttonText } = newsletter;
  return (
    <section className='section bg-newsletter'>
      <div className='container max-auto'>
        <div>
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
