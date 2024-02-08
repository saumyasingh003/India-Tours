// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, EffectFlip, EffectCards, EffectCube, EffectCreative, EffectCoverflow } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/effect-flip'
import 'swiper/css/effect-cube';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-creative';

export default function  Carousel() {
  return (
    
    <Swiper
     modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay, EffectFlip, EffectCards, EffectCube, EffectCreative,EffectCoverflow]}
      spaceBetween={0}
      slidesPerView={1}
      effect={'creative'}
      autoplay ={{delay:3000}}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: ['-120%', 0, -500],
        },
        next: {
          shadow: true,
          translate: ['120%', 0, -500],
        },
      }}
    //  flipEffect={{delay:3000}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    
      <SwiperSlide><img className='lg:h-[90vh] h-[70vh] w-screen ' src={require("../assets/ram mandir.jpg")} alt="logo"/></SwiperSlide>
      {/* <SwiperSlide><img className='sm:h-[90vh] w-screen ' src={require("../assets/beach1.jpg")} alt="logo"/></SwiperSlide> */}
      <SwiperSlide><img className='lg:h-[90vh] w-screen h-[70vh]' src={require("../assets/taj.jpg")} alt="logo"/></SwiperSlide>
      <SwiperSlide><img className='lg:h-[90vh] w-screen h-[70vh]' src={require("../assets/national-park.jpg")} alt="logo"/></SwiperSlide>
      <SwiperSlide><img className='lg:h-[90vh] w-screen h-[70vh]' src={require("../assets/lakshdweep.avif")} alt="logo"/></SwiperSlide>
      <SwiperSlide><img className='lg:h-[90vh] w-screen h-[70vh]' src={require("../assets/kashmir")} alt="logo"/></SwiperSlide>
      <SwiperSlide><img className='lg:h-[90vh] w-screen h-[70vh]' src={require("../assets/eco-tour.jpg")} alt="logo"/></SwiperSlide>
       <SwiperSlide><img className='lg:h-[90vh] w-screen h-[70vh]' src={require("../assets/skydive.jpg")} alt="logo"/></SwiperSlide>
      
    </Swiper>
  );
};