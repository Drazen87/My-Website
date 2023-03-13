
import React from 'react';
import './produkte.css';
import { useState } from 'react';

import haus1 from '../../assets/hausinnen.jpg';
import haus2 from '../../assets/bild2.jpg';
import haus3 from '../../assets/bild3.jpg';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/css/navigation";
import { Navigation } from "swiper";



const Produkte = () => {

  const listeText =  [
    "Erster Text",
    "zweiter Text",
    "dritter Text"
]

  const [zahlerstand, setZahlerstand] = useState(0);

   
  function vor() {
    setZahlerstand(zahlerstand + 1)
    console.log(zahlerstand)
  }

  function back() {
    setZahlerstand(zahlerstand - 1)
    console.log(zahlerstand)
  }

  function richtigerText() {
    if (zahlerstand === 0) {
      return listeText[0];
    } else if (zahlerstand === 1){
      return listeText[1];
    } else {
      return listeText[2];
    }

  };



    return (     
        <> 
        <div className="boxProdukte">
          <div className="boxInnen1">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper" onSlidePrevTransitionStart={() => setZahlerstand(zahlerstand - 1)} onSlideNextTransitionStart={() => setZahlerstand(zahlerstand + 1)}   >
            <SwiperSlide>
              <div>
                <img src={haus1} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={haus2} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={haus3} />
              </div>
            </SwiperSlide>
            </Swiper>
          </div>
          <div className="boxInnen2">
            <div className="testPro">{richtigerText()}</div>
          </div>
        </div>
        </>   
  )
}

export default Produkte
