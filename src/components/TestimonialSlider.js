import React from 'react';

//import swiper
import {Swiper, SwiperSlide} from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

//import required modules
import { Autoplay, Navigation } from 'swiper';

//import data
import {testimonial} from '../data';

const TestimonialSlider = () => {
  return (
    <Swiper className='testimonialSlider'
      modules={[Navigation, Autoplay]} 
      navigation={true} 
      autoplay={true}>
      {testimonial.persons.map((person, index) => {
        //destructure person
        const {avatar, name, occupation, message} = person;
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col min-h-[250px]'>
              <div>
                {/* avatar */}
                <img src={avatar.type} alt='' />
                <div>
                  <div>{name}</div>
                  <div>{occupation}</div>
                </div>
                {/* message */}
                <div>{message}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
