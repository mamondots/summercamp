import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import banner from '../../../assets/images/pexels-rdne-stock-project-8034585.jpg'

const Banner = () => {

  return (
    <div className="p-32 w-full sm-w-full">
      <Swiper   navigation={true} modules={[Navigation]} className="mySwiper w-full">
        <SwiperSlide>
          <img className="w-full" src={banner} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={banner} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={banner} alt="" />
        </SwiperSlide>
      </Swiper>
      
    </div>
  );
};

export default Banner;