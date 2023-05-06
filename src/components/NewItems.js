import React from 'react';

//import data
import { newInStore} from '../data';

const NewItems = () => {
  //destructuring newInStore
  const { title, subtitle, link, icon} = newInStore;
  return (
    <section className='section'>
      <div className='container mx-auto'>
        {/* text */}
      </div>
    </section>
  );
};

export default NewItems;
