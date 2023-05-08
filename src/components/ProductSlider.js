import React from 'react';

//import swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../slider.css';

// import required swiper modules
import {Navigation, Pagination} from 'swiper';

//import data
import { products } from '../data';

//import icons
import {HiPlus} from 'react-icons/hi';

const ProductSlider = () => {
  // destructure products
  const { pages } = products;
  return (
    <Swiper>
      {pages.map((page, idex) => {
        return (
          <SwiperSlide key={idex}>
            <div>
              {page.productList.map((product,  index) => {
                //destructuring product
                const { image, name, price, oldPrice, } = product;
                return (
                  <div>
                    <div>
                      <img src={image.type} alt='' />
                      <div>
                        <HiPlus className='text-xl text-primary' />
                      </div>
                    </div>
                    <div>{name}</div>
                    <div>
                      <div> Ksh {price}</div>
                    </div>
                  </div>
                )})}
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default ProductSlider;
