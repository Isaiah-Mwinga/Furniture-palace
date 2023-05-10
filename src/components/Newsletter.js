import React from 'react';

//import data
import { newsletter } from '../data';

const Newsletter = () => {
  //destructure newsletter
  const { title, subtitle, placeholder, buttonText } = newsletter;
  return (
    <section className='section'>
      <div className='container max-auto'></div>
    </section>
  );
};

export default Newsletter;
