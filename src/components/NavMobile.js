import React from 'react';

//import data
import { navigation } from '../data';

const NavMobile = () => {
  return (
    <div className='bg-white w-full rounded-lg shadow-xl'>
      <ul className='text-center flex flex-col items-center justify-start gap-y-6'>
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <a className='text-xl font-medium capitalize' href={item.href}>{item.name}</a>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default NavMobile;
