// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay } from "swiper/modules";

export default function News() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={3}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },

        639: {
          slidesPerView: 2,
        },
        865: {
          slidesPerView: 3,
        },
        1000: {
          slidesPerView: 4,
        },
      }}
      navigation
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
    >
      <SwiperSlide className="mx-10 relative items-center">
        <div className="max-w-xs rounded-md shadow-2xl shadow-gray-500 mb-8   bg-white dark:bg-gray-900 dark:text-gray-100">
          <img
            src={require("../assets/Ranthambore.jpg")}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold  text-center">
               Ranthambore N. Park
              </h2>
              <p className="dark:text-gray-100 text-center">
              Rajasthan 
              </p>
            </div>
            <a
              href="https://en.wikipedia.org/wiki/Ranthambore_National_Park"
              target="_blank"
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-blue-400 hover:bg-blue-600 text-white text-xl  dark:text-gray-900"
            >
              Read more
            </a>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="max-w-xs rounded-md shadow-2xl shadow-gray-500  bg-white dark:bg-gray-900 dark:text-gray-100">
          <img
            src={require("../assets/kazi.jpg")}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-center">
              Kaziranga N. Park
              </h2>
              <p className="dark:text-gray-100 text-center">
              Assam
              </p>
            </div>
            <a
              href="https://en.wikipedia.org/wiki/Kaziranga_National_Park"
              target="_blank"
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-blue-400 hover:bg-blue-600 text-white text-xl  dark:text-gray-900"
            >
              Read more
            </a>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="max-w-xs rounded-md shadow-2xl shadow-gray-500  bg-white dark:bg-gray-900 dark:text-gray-100">
          <img
            src={require("../assets/kanha.jpg")}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-center">
              Bandhavgarh N. Park
              </h2>
              <p className="dark:text-gray-100 text-center">Madhya Pradesh</p>
            </div>
            <a
              href="https://en.wikipedia.org/wiki/Bandhavgarh_National_Park"
              target="_blank"
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-blue-400 hover:bg-blue-600 text-white text-xl  dark:text-gray-900"
            >
              Read more
            </a>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="max-w-xs rounded-md shadow-2xl shadow-gray-500  bg-white dark:bg-gray-900 dark:text-gray-100">
          <img
            src={require("../assets/sundar.jpg")}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-center">
              Sundarbans N. Park
              </h2>
              <p className="dark:text-gray-100 text-center">West Bengal</p>
            </div>
            <a
              href="https://en.wikipedia.org/wiki/Sundarbans_National_Park"
              target="_blank"
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-blue-400 hover:bg-blue-600 text-white text-xl  dark:text-gray-900"
            >
              Read more
            </a>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="max-w-xs rounded-md shadow-2xl shadow-gray-500  bg-white dark:bg-gray-900 dark:text-gray-100">
          <img
            src={require("../assets/Periyar.jpg")}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <p className=" text-2xl font-semibold text-center">
              Periyar W. Sanctuary
              </p>
              <p className="dark:text-gray-100 text-center">
              Kerala
              </p>
            </div>
            <a
              href="https://en.wikipedia.org/wiki/Periyar_National_Park"
              target="_blank"
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-blue-400 hover:bg-blue-600 text-white text-xl  dark:text-gray-900"
            >
              Read more
            </a>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
