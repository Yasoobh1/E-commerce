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

export default function SellingProducts() {
  return (
    <div className="products">
      <div className="products-header">
        <span>Best Selling Products</span>
      </div>
      <div className="products-area">
        <div>
          <img src={laptops} />
          <span className="spanHead">1 VISA E-commerce</span>
          <span>Food Stuff Trading</span>
          <span className="oldPrice">AED 10000</span>
          <span>AED 6000</span>
          <span className="savePrice">AED 4000</span>
          <button>Buy Now</button>
        </div>
        <div>
          <img src={laptops} />
          <span className="spanHead">1 VISA E-commerce</span>
          <span>Food Stuff Trading</span>
          <span className="oldPrice">AED 10000</span>
          <span>AED 6000</span>
          <span className="savePrice">AED 4000</span>
          <button>Buy Now</button>
        </div>
        <div>
          <img src={laptops} />
          <span className="spanHead">1 VISA E-commerce</span>
          <span>Food Stuff Trading</span>
          <span className="oldPrice">AED 10000</span>
          <span>AED 6000</span>
          <span className="savePrice">AED 4000</span>
          <button>Buy Now</button>
        </div>
        <div>
          <img src={laptops} />
          <span className="spanHead">1 VISA E-commerce</span>
          <span>Food Stuff Trading</span>
          <span className="oldPrice">AED 10000</span>
          <span>AED 6000</span>
          <span className="savePrice">AED 4000</span>
          <button>Buy Now</button>
        </div>
        <div>
          <img src={laptops} />
          <span className="spanHead">1 VISA E-commerce</span>
          <span>Food Stuff Trading</span>
          <span className="oldPrice">AED 10000</span>
          <span>AED 6000</span>
          <span className="savePrice">AED 4000</span>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
}
