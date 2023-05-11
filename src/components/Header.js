import React, {useState, useEffect} from 'react';

//import logo
import Logo from '../assets/img/logo.svg';

//import icons
import { CgMenuRight, CgClose } from 'react-icons/cg';

//import data
import { navigation } from '../data';

//import components
import NavMobile from './NavMobile';

const Header = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNave] = useState(false);
  return (
    <header className={`${ bg ? 'bg-primary py-4 lg:py-6' : bg-none} fixed left-0 w-full py-8 z-10 transition-all duration-200`}>
      <div className='container mx-auto'>
        <div>
          {/*logo*/}
        </div>
      </div>
    </header>
  );
};

export default Header;
