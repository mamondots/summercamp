import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

import timg from '../../assets/images/Rectangle 15.png'

const Reviews = () => {
    const [reviwes, setReviwes] = useState([])
    useEffect(() => {
        fetch('Reviews.json')
            .then(res => res.json())
            .then(data => setReviwes(data))
    }, [])
    return (
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 px-4 pb-12 ">
            <div className="text-center pb-16">
                 <h2 className="text-3xl font-semibold pt-8">TESTIMONIALS</h2>
            </div>

            <div className="text-center">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper text-center">
               <div className="text-center">
               {
                    reviwes.map((reviwe,index) =>
                        <SwiperSlide key={reviwe.index}>
                            <img className="w-10 rounded-full" src={timg} alt="" />
                            <h2>{reviwe.name}</h2>
                            <div className="text-center">
                                <Rating className="text-center"
                                    style={{ maxWidth: 180 }}
                                    value={reviwe.rating}
                                    readOnly
                                    
                                />
                                <p className="px-16">{reviwe.details}</p>
                                
                            </div>
                        </SwiperSlide>)
                }
               </div>
            </Swiper>
            </div>
        </div>
    );
};

export default Reviews;