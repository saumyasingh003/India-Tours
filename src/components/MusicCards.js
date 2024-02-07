// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay } from "swiper/modules";

export default function MusicCards() {
  return (
    <div className="overflow-x-hidden mt-7 mb-10 p-3">
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={8}
      slidesPerView={4}
      breakpoints={{
    0: {
      slidesPerView: 1,
    },
   
    639: {
      slidesPerView: 2,
    },
    865:{
      slidesPerView:3
    },
    1000:{
      slidesPerView:4
    }
  
  }}
      navigation
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="  h-auto  shadow-xl shadow-gray-500 mb-8 top-2
         bg-black ">
          <img
            src={require("../assets/sand.jpg")}
            alt=""
            className="object-cover object-center w-full rounded-lg h-60 dark:bg-gray-500"
          />
         
        </div>
        
      </SwiperSlide>
      <SwiperSlide>
        <div className=" rounded-lg h-auto  shadow-xl shadow-gray-500 mb-8 top-2
         bg-black ">
          <img
            src={require("../assets/beach animal.jpg")}
            alt=""
            className="object-cover object-center w-full rounded-lg h-60 dark:bg-gray-500"
          />
         
        </div>
        
      </SwiperSlide>
      <SwiperSlide>
        <div className=" rounded-lg h-auto  shadow-xl shadow-gray-500 mb-8 top-2
         bg-black ">
          <img
            src={require("../assets/shankh.jpg")}
            alt=""
            className="object-cover object-center w-full rounded-lg h-60 dark:bg-gray-500"
          />
         
        </div>
        
      </SwiperSlide>
      <SwiperSlide>
        <div className=" rounded-lg h-auto  shadow-xl shadow-gray-500 mb-8 top-2
         bg-black ">
          <img
            src={require("../assets/sea shell.jpg")}
            alt=""
            className="object-cover object-center w-full rounded-lg h-60 dark:bg-gray-500"
          />
         
        </div>
        
      </SwiperSlide>
      <SwiperSlide>
        <div className=" rounded-lg h-auto  shadow-xl shadow-gray-500 mb-8 top-2
         bg-black ">
          <img
            src={require("../assets/artform.jpg")}
            alt=""
            className="object-cover object-center w-full rounded-lg h-60 dark:bg-gray-500"
          />
         
        </div>
        
      </SwiperSlide>
   

    
    </Swiper>
    </div>
  );
}