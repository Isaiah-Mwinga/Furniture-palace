import React from 'react';

//import data
import { features } from '../data';

const Features = () => {
  //destructure features
  const {title, subtitle, image, buttonText, items} = features;
  return (
    <section className='features'></section>
  );
};

export default Features;
