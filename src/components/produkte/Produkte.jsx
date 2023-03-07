import React from 'react';
import './produkte.css';

import haus1 from '../../assets/hausinnen.jpg';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/css/navigation";
import { Navigation } from "swiper";


const Produkte = () => {
  return (
    <div className="flex-container">
        <div className="box3">
            <h1>
            Unsere Produkte
            </h1>
        </div>    
        
        <div className="box4">
        <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div>
            <img src={haus1} />

          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={haus1} />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={haus1} />
            </div>
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
        </>
          
        </div>
    </div>    
  )
}

export default Produkte