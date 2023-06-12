

import banner from '../../../assets/images/sumar01.jpg'
import banner2 from '../../../assets/images/sumar02.jpg'
import banner3 from '../../../assets/images/sumar03.jpg'

const Banner = () => {

  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 px-4 pt-28 pb-12 ">
      <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default Banner;