
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "react-scroll-to-top";

const Gallery = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <h1
        data-aos="zoom-out-left"
        className="text-center md:text-5xl relative top-7 font-extrabold text-[#4337b1] font-sans"
      >
        Exploring Tourism of India
      </h1>
      <div className="container flex flex-col justify-center p-4 mb-32 mx-auto relative top-20">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
          <a data-aos="zoom-in-up" href="/Beeches">
            <img
              style={{ boxShadow: "2px 2px 15px black" }}
              className="object-cover w-full cursor-pointer hover:animate-pulse hover:h-[43vh] lg:hover:w-[40vw] transition-all duration-75 ease-in-out  h-[40vh] rounded-xl"
              src={require("../assets/beach.jpg")}
              alt=""
            />
            <h1 className=" font-bold relative bottom-7 rounded-b-xl bg-[#1d1c1c94] hover:bg-[#131314da] text-white text-xl text-center datatitle">
              Beach Tourism
            </h1>
          </a>

          <a data-aos="zoom-in-up" href="/Culture">
            <img
              style={{ boxShadow: "2px 2px 15px black" }}
              className="object-cover w-full cursor-pointer hover:animate-pulse hover:h-[43vh] lg:hover:w-[40vw] transition-all duration-75 ease-in-out  h-[40vh] rounded-xl"
              src={require("../assets/culture.jpg")}
              alt=""
            />
            <h1 className=" font-bold relative bottom-7 rounded-b-xl bg-[#1d1c1c94] hover:bg-[#131314da] text-white text-xl text-center datatitle">
              Cultural Tourism
            </h1>
          </a>

          <a data-aos="zoom-in-up" href="/Adventure">
            <img
              style={{ boxShadow: "2px 2px 15px black" }}
              className="object-cover w-full cursor-pointer hover:animate-pulse hover:h-[43vh] lg:hover:w-[40vw] transition-all duration-75 ease-in-out  h-[40vh] rounded-xl"
              src={require("../assets/adventure.jpg")}
              alt=""
            />
            <h1
              className=" font-bold relative bottom-7 rounded-b-xl bg-[#1d1c1c94] hover:bg-[#131314da]
             text-white text-xl text-center datatitle"
            >
              Adventure Tourism
            </h1>
          </a>

          <a data-aos="zoom-in-up" href="/Eco">
            <img
              style={{ boxShadow: "2px 2px 15px black" }}
              className="object-cover w-full cursor-pointer hover:animate-pulse hover:h-[43vh] lg:hover:w-[40vw] transition-all duration-75 ease-in-out  h-[40vh] rounded-xl"
              src={require("../assets/eco.jpg")}
              alt=""
            />
            <h1 className=" font-bold relative bottom-7 rounded-b-xl bg-[#1d1c1c94] hover:bg-[#131314da] text-white text-xl text-center datatitle">
              Eco Tourism
            </h1>
          </a>

          <a data-aos="zoom-in-up" href="/Medical">
            <img
              style={{ boxShadow: "2px 2px 15px black" }}
              className="object-cover w-full cursor-pointer hover:animate-pulse hover:h-[43vh] lg:hover:w-[40vw] transition-all duration-75 ease-in-out  h-[40vh] rounded-xl"
              src={require("../assets/medical.jpg")}
              alt=""
            />
            <h1 className=" font-bold relative bottom-7 rounded-b-xl bg-[#1d1c1c94] hover:bg-[#131314da] text-white text-xl text-center datatitle">
              Medical Tourism
            </h1>
          </a>

          <a data-aos="zoom-in-up" href="/Wildlife">
            <img
              style={{ boxShadow: "2px 2px 15px black" }}
              className="object-cover w-full cursor-pointer hover:animate-pulse hover:h-[43vh] lg:hover:w-[40vw] transition-all duration-75 ease-in-out  h-[40vh] rounded-xl"
              src={require("../assets/wildlife.jpg")}
              alt=""
            />
            <h1 className=" font-bold relative bottom-7 rounded-b-xl bg-[#1d1c1c94] hover:bg-[#131314da] text-white text-xl text-center datatitle">
              Wildlife Tourism
            </h1>
          </a>
        </div>
      </div>
      <ScrollToTop smooth color="white" height="20" />
    </div>
  );
};

export default Gallery;
