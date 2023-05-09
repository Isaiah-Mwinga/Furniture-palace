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
    <Swiper>
      {testimonial.persons.map((person, index) => {
        //destructure person
        const {avatar, name, occupation, message} = person;
        return (
          <SwiperSlide key={index}>
            <div>
              <div>
                {/* avatar */}
                <img src={avatar.type} alt='' />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
