import React from 'react';

//import swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

//import data
import { newInStore } from '../data';

const NewItemsSlider = () => {
  return (
    <Swiper grabCursor={true}>
      {newInStore.products.map((product, index) => {
        return (
          <SwiperSlide className='max-w-[265px]' key={index}>
            <div>
              <img src={product.image.type} alt='' />
              <div>{product.name}</div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default NewItemsSlider;
