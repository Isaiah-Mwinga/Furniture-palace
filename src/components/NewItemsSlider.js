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
    <Swiper>
      {newInStore.products.map((product, index) => {
        return (
          <SwiperSlide key={index}>slide</SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default NewItemsSlider;
