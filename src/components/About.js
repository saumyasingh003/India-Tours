import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-x-hidden">
      <section class="  pb-12 mx-10 lg:pb-[90px] dark:bg-dark">
        <div class=" mx-auto">
          <div class="flex flex-wrap items-center justify-between -mx-4">
            <div class="w-full px-4 lg:w-6/12">
              <div class="flex items-center -mx-3 sm:-mx-4">
                <div class="w-full px-3 sm:px-4  ">
                  <div class="py-3 sm:py-4">
                    <img
                      src={require("../assets/about3.jpg")}
                      alt=""
                      class="w-full h-[24em] rounded-2xl"
                    />
                  </div>
                  <div class="py-3 sm:py-4">
                    <img
                      src={require("../assets/about2.jpg")}
                      alt=""
                      class="w-full h-[24rem] rounded-2xl"
                    />
                  </div>
                </div>
                <div class="w-full px-3 sm:px-4">
                  <div class="relative z-10 my-4">
                    <img
                      src={require("../assets/about1.jpg")}
                      alt=""
                      class="w-full h-[28rem] rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full px-4 lg:w-1/2 relative lg:bottom-20 ">
              <div class="mt-10 lg:mt-0">
               
                <h2 class="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                  Interactive India: Unlocking the Wonders of a Vibrant Nation
                </h2>
                <p class="mb-5 text-base text-body-color dark:text-dark-6">
                  Indulge in the allure of India's timeless elegance with
                  IndiaTour . Our platform is your gateway to an extraordinary
                  expedition through the heart of this captivating nation.
                  Embark on a voyage where every moment is a celebration of
                  opulence, heritage, and unparalleled beauty.
                </p>
                <p class="mb-8 text-base text-body-color dark:text-dark-6">
                  From the regal palaces of Rajasthan to the tranquil shores of
                  Goa, we invite you to immerse yourself in a world of refined
                  luxury and bespoke experiences. Unravel the mystique of India
                  with us and embark on a journey that transcends ordinary
                  travel.
                </p>
                <a
                  href="/About"
                  class="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90 bg-[#80A3D6] hover:bg-[#497eb6] hover:tracking-wide shadow-md hover:shadow-xl"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    <div className="relative bottom-10">

      <h1
        style={{
          fontSize: "3rem",
        }}
      >
        About The Developer
      </h1>

      <div class="  gap-6 flex mb-10 mt-5 items-center justify-center">
        <div class="bg-gray-100 h-[40vh] w-[50vw] items-center relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform">
          <div class="flex items-center gap-4">
            <img
              src= {require("../assets/sam.jpg")}
              class="w-32 group-hover:w-36 group-hover:h-32 h-28 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
              alt=""
            />
            <div class="w-fit transition-all transform duration-500">
              <h1 class="text-gray-600  font-bold">Saumya Singh</h1>
              <p class="text-gray-400">Web Developer</p>
              <a class="text-xs text-gray-500 dark:text-gray-200 group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500">
                saumyasingh98982@gmail.com
              </a>
              <p>
                Hello, I'm Saumya Singh, pursuing B.Tech (CSE) at Amity
                University Patna. I'm passionate about leveraging technology to
                solve complex problems and aspire to utilize my technical skills
                for positive global change. I believe in technology's potential
                for good and am enthusiastic about connecting with like-minded
                individuals to explore innovative possibilities.
              </p>
            </div>
          </div>
          <div class="absolute group-hover:bottom-1 delay-300 -bottom-16 transition-all duration-500 bg-gray-600 dark:bg-gray-100 right-1 rounded-lg">
            <div class="flex justify-evenly items-center gap-2 p-1 text-2xl text-white dark:text-gray-600">
              <a href="https://www.linkedin.com/in/saumyasingh003/" target="_blank">
                <svg
                  viewBox="0 0 960 1000"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
