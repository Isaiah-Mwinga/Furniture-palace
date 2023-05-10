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
        <div>
          <a href='#'>
            <img src={Logo} alt='' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
