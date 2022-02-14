// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import herosliderImg from "../assets/images/heroimage.jpg";
import sliderimg from "../assets/images/sliderimg.jpeg";
import sliderimg2 from "../assets/images/sliderimg2.jpeg";

import { Autoplay, Pagination, Navigation } from "swiper";

export default function Heroslider() {
  return (
    <div className="heroslider">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <img src={herosliderImg} alt="heroimage" />
          <div className="text">
            <span>UAE's 1st E-comemrce Platform for Business Set-Up</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderimg} alt="heroimage" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderimg2} alt="heroimage" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
