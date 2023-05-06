import React from 'react';

//import data
import { newInStore } from '../data';
//import components
import NewItemsSlider from './NewItemsSlider';

const NewItems = () => {
  //destructuring newInStore
  const { title, subtitle, link, icon } = newInStore;
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div>
          {/* text */}
          <div>
            <h2 className='title'>{title}</h2>
            <p className='subtitle'>{subtitle}</p>
            <div>
              <a href='#'>{link}</a>
            </div>
          </div>
          {/* slider */}
          <NewItemsSlider />
        </div>
      </div>
    </section>
  );
};

export default NewItems;
