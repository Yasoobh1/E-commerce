// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/autoplay";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

import baby from "../assets/images/baby.png";
import laptops from "../assets/images/laptops.png";
import grocery from "../assets/images/grocery.png";
import appliances from "../assets/images/appliances.png";
import fragnance from "../assets/images/fragnance.png";

// import { Autoplay, Pagination, Navigation } from "swiper";

export default function Categories() {
  return (
    <div className="categories">
      <div className="category-header">
        <span>Our Mojor Categories</span>
      </div>
      <div className="category-area">
        <img src={laptops} />
        <img src={grocery} />
        <img src={baby} />
        <img src={fragnance} />
        <img src={appliances} />
      </div>
    </div>
  );
}
