import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "./Carousel";
import "../css/home.css";
import Typewriter from "typewriter-effect";
import ScrollToTop from "react-scroll-to-top";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div>
        <div className="relative shadow-xl lg:h-auto h-fit">
          <Carousel />
        </div>
      </div>
      <div className="relative text-center z-20 bottom-[25rem]">
        <h1
          data-aos="zoom-out-left"
          style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
          className=" lg:text-6xl md:text-4xl text-2xl first-letter: text-gray-100 mb-3"
          id="typewriter"
        >
          <Typewriter
            options={{
              strings: ["Explore Our India Through Our Eyes!"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <h3
          style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
          className="text-xl text-white"
        >
          Unveiling India: A Personal Journey Through Our Perspective
        </h3>
        <div className=" flex justify-center">
          <a
            href="/Gallery"
            className="flex relative top-16 p-3 space-x-2 hover:tracking-widest "
          >
            <button class="animated-button">
              <svg
                viewBox="0 0 24 24"
                class="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span class="text text-blue-300 font-bold hover:text-white">
                Explore Now
              </span>
              <span class="circle"></span>
              <svg
                viewBox="0 0 24 24"
                class="arr-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
      <div class="container">
        <div class="field">
          <div class="scroll"></div>
        </div>
      </div>
      <p
        className="flex mx-2 text-center text-lg relative bottom-40 bg-[#1F2937] text-white p-10 py-16 shadow-2xl shadow-black backdrop-blur-2xl backdrop-opacity-70"
        data-aos="fade-up-left"
      >
        India's tourism sector is a kaleidoscope of experiences, offering
        something for every traveler. With its vast and varied landscape, from
        the majestic Himalayas in the north to the serene backwaters of Kerala
        in the south, India is a land of breathtaking natural beauty. Visitors
        can explore ancient architectural wonders like the Taj Mahal in Agra,
        the forts and palaces of Rajasthan, and the temples of Khajuraho and
        Hampi, each telling a story of India's rich history and cultural
        heritage.
        <br />
        Beyond its monuments, India's cultural diversity is a tapestry woven
        with festivals, music, dance, and art forms that vary from region to
        region, reflecting the country's vibrant spirit. The flavors of Indian
        cuisine are equally diverse, tantalizing taste buds with aromatic
        spices, savory curries, and mouthwatering street food delights.
        <br />
        Hospitality is ingrained in India's ethos, with warm welcomes awaiting
        visitors in every corner of the country. Whether exploring bustling
        cities like Delhi and Mumbai or finding tranquility in remote villages,
        travelers are greeted with open arms and genuine warmth.
        <br />
        India's tourism industry is not just about sightseeing; it's about
        immersing oneself in an unforgettable journey of discovery, where every
        moment is a new experience, every encounter a cherished memory. From
        spiritual retreats in Rishikesh to adventurous escapades in the deserts
        of Rajasthan, India offers a myriad of possibilities, ensuring that
        every traveler finds their own unique slice of paradise in this
        captivating land.
      </p>
      <div>
        {/* <h1
          style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
          className="text-center text-4xl mt-10  relative  bottom-20 mb-10 font-extrabold text-[#356179] font-sans"
        >
          Did You Know ?
        </h1> */}
        <div className="flex justify-center relative bottom-28 ">
          <img
          src={require('../assets/did-you-know.png')}
          alt=""
          className="h-52 w-96"
          />
        </div>

        <div class="flex flex-col justify-center relative bottom-16  bg-[#1F2937] mb-10 w-ful !mr-4l lg:h-64 md:flex-row mx-2 shadow-2xl shadow-black"  data-aos="zoom-in">
          <img
            className="h-64 w-96  object-cover  md:!rounded-none "
            src={require("../assets/train.png")}
            alt=""
          />
          <div class="flex flex-col justify-start p-6">
            <h5 class="mb-10 text-xl font-medium text-white dark:text-neutral-50 underline">
              1. Royal trains
            </h5>
            <p class="mb-4 text-base text-white dark:text-neutral-200 text-wrap ">
              India offers luxurious train journeys like the Palace on Wheels
              and the Maharajas' Express, which provide travelers with a taste
              of royal lifestyles while exploring iconic destinations across the
              country.
            </p>
          </div>
        </div>
        <div class="flex flex-col max-[768px]:flex-col-reverse justify-center relative bottom-10  bg-[#1F2937] mb-10 w-ful !mr-4l lg:h-64 md:flex-row mx-2 shadow-2xl shadow-black" data-aos="fade-left">
          <div class="flex flex-col justify-start p-6">
            <h5 class="mb-10 text-xl font-medium text-white dark:text-neutral-50 underline">
              2. Hemis Festival
            </h5>
            <p class="mb-4 text-base text-white dark:text-neutral-200 text-wrap ">
              The Hemis Festival in Ladakh is one of the largest and most
              colorful Buddhist festivals in India, celebrating the birth
              anniversary of Guru Padmasambhava with masked dances, music, and
              cultural performances.
            </p>
          </div>
          <img
            className="h-64 w-96  object-cover  md:!rounded-none "
            src={require("../assets/bridges.png")}
            alt=""
          />
        </div>
        <div class="flex flex-col justify-center relative bottom-10  bg-[#1F2937] mb-10 w-ful !mr-4l lg:h-64 md:flex-row mx-2 shadow-2xl shadow-black" data-aos="zoom-in">
          <img
            className="h-64 w-96  object-cover  md:!rounded-none "
            src={require("../assets/hemis.jpg")}
            alt=""
          />
          <div class="flex flex-col justify-start p-6">
            <h5 class="mb-10 text-xl font-medium text-white dark:text-neutral-50 underline">
              3. Living Root Bridges
            </h5>
            <p class=" text-base text-white dark:text-neutral-200 text-wrap ">
              In the northeastern state of Meghalaya, travelers can marvel at
              unique living root bridges, constructed by weaving the roots of
              trees over rivers and streams, showcasing indigenous engineering
              techniques.
            </p>
          </div>
        </div>
        <div class="flex flex-col max-[768px]:flex-col-reverse  justify-center relative bottom-10  bg-[#1F2937] mb-10 w-ful !mr-4l lg:h-64 md:flex-row mx-2 shadow-2xl shadow-black" data-aos="fade-right">
          <div class="flex flex-col justify-start p-6">
            <h5 class="mb-10 text-xl font-medium text-white dark:text-neutral-50 underline">
              4. Floating Post Office
            </h5>
            <p class=" text-base text-white dark:text-neutral-200 text-wrap ">
              India is home to the world's only floating post office, located on
              Dal Lake in Srinagar, Kashmir. Visitors can experience the novelty
              of sending mail while enjoying the serene beauty of the lake.
            </p>
          </div>
          <img
            className="h-64 w-96  object-cover  md:!rounded-none "
            src={require("../assets/postoffice.png")}
            alt=""
          />
        </div>
        <div class="flex flex-col justify-center relative bottom-10  bg-[#1F2937] mb-10 w-ful !mr-4l lg:h-64 md:flex-row mx-2 shadow-2xl shadow-black" data-aos="zoom-in">
          <img
            className="h-64 w-96  object-cover  md:!rounded-none "
            src={require("../assets/magnetic_hill.png")}
            alt=""
          />
          <div class="flex flex-col justify-start p-6">
            <h5 class="mb-10 text-xl font-medium text-white dark:text-neutral-50 underline">
            5. Magnetic Hill
            </h5>
            <p class=" text-base text-white dark:text-neutral-200 text-wrap ">
            In Ladakh, there is a mysterious Magnetic Hill where vehicles appear to defy gravity and roll uphill on their own. This optical illusion attracts curious tourists who come to witness this natural phenomenon.
            </p>
          </div>
        </div>
      </div>
      <ScrollToTop smooth color="white" height="20" />
    </div>
  );
};

export default Home;
