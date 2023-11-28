import React from 'react';

//import logo
import Logo from '../assets/img/logo.svg';

//import data
import { footer } from '../data';

const Footer = () => {
  //destructure footer
  //const { title, links } = footer;
  return (
    <footer className='bg-primary text-white'>
      <div className='container max-auto'>
        <div className='flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-7 lg:pb-14 mb-1'>
          <a className='mb-6 lg:mb-0' href='#'>
            <img src={Logo} alt='' />
          </a>
          {/*social icons*/}
          <div className='flex gap-x-4'>
            {footer.social.map((item, index) => {
              return (
                <div className='w-12 h-12 text-2xl bg-gray-700 hover:bg-accent rounded-full flex justify-center items-center transition' key={index}>
                  <a href='#'>{item.icon}</a>
                </div>
              );
            })}
          </div>
        </div>
        {/*copyright*/}
        <p className='text-center'>& FurniturePalace 2023 - All rights reserved yes.</p>
      </div>
    </footer>
  );
};

export default Footer;
