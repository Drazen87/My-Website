
import React from 'react';
import './produkte.css';

import haus1 from '../../assets/hausinnen.jpg';
import haus2 from '../../assets/bild2.jpg';
import haus3 from '../../assets/bild3.jpg';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

 

const Produkte = () => {

  const [count, setCount] = React.useState(0);  

  function handleClick() {
  
    setCount(count + 1);
  }


  return (     
        <> 
        <div className="boxProdukte">
          <div className="boxInnen1">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide className="boxInnen12" onClick={handleClick}>
              <div>
                <img src={haus1} />
                <div className="test">{count}</div>
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
        </div>
        </>
          
    
  )
}

export default Produkte