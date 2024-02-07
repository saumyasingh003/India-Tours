import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Medical = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-x-hidden">
      <div
        className="relative overflow-x-hidden h-full shadow-gray-800"
      >
        <h1
          data-aos="zoom-out-left"
          style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
          className="text-center 
      text-4xl relative top-8 mb-10 font-extrabold text-[#356179] font-sans"
        >
          India Healing Journeys: Your Path to Wellness
        </h1>
        <div className="relative top-5  px-16 mb-10">
          <h3 className="text-2xl font-bold sm:text-3xl dark:text-gray-50"></h3>
          <p
            className="flex w-full   text-justify  mt-3 text-lg dark:text-gray-400"
            style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
          >
            Embark on a transformative journey with India Healing Journeys,
            where ancient traditions meet cutting-edge medical expertise. Our
            unique medical tourism experience in India invites you to explore a
            tapestry of wellness, blending traditional healing practices with
            state-of-the-art medical facilities. From rejuvenating Ayurvedic
            retreats to world-class healthcare, immerse yourself in a seamless
            fusion of culture and care. Let the vibrant landscapes of India be
            the backdrop to your path to wellness, where personalized healing
            awaits. Embrace a holistic approach to health and discover the
            perfect harmony between ancient wisdom and modern medicine,
            exclusively with India Healing Journeys."
            <br /> Several factors contribute to India's popularity in the field
            of medical tourism:
          </p>
        </div>

        <section className=" overflow-x-hidden dark:bg-gray-800 dark:text-gray-100">
          <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <img
                  style={{ boxShadow: "2px 2px 15px black" }}
                  class=" object-cover w-full cursor-pointer hover:animate-pulse h-[40vh] rounded-xl"
                  src={require("../assets/medical1.jpg")}
                  alt=""
                />
              </div>
              <div>
                <img
                  style={{ boxShadow: "2px 2px 15px black" }}
                  className=" object-cover w-full cursor-pointer hover:animate-pulse h-[40vh] rounded-xl"
                  src={require("../assets/medical2.jpg")}
                  alt=""
                />
              </div>
              <div>
                <img
                  style={{ boxShadow: "2px 2px 15px black" }}
                  className=" object-cover w-full cursor-pointer hover:animate-pulse h-[40vh] rounded-xl"
                  src={require("../assets/medical3.jpg")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <div
          data-aos="fade-down-right overflow-x-hidden"
          className="dark:bg-gray-800 dark:text-gray-100 mb-10"
        >
          <div className="container max-w-4xl px-10 py-6 bg-white mx-auto rounded-lg shadow-sm dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-gray-400">Feb 8 ,2024</span>
            </div>
            <div className="mt-3  ">
              <a
                rel="noopener noreferrer"
                href=" "
                className="text-2xl font-bold hover:underline"
              >
                Cost-Effective Treatment:
              </a>
              <p className="mt-2">
                One of the primary reasons for choosing India for medical
                treatment is the cost advantage. Medical procedures in India are
                often more affordable compared to many Western countries, making
                it an attractive option for those seeking quality healthcare at
                a lower cost.
              </p>
            </div>
            <div className="flex items-center justify-between   mt-4">
              <a
                rel="noopener noreferrer"
                href="https://mpcthospital.in/about-medical-treatments-in-india/"
                className="hover:underline dark:text-violet-400 bg-yellow-400 text-white p-2 rounded-md"
              >
                Read more
              </a>
              <div>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center"
                >
                  <img
                    src="https://source.unsplash.com/50x50/?portrait"
                    alt="avatar"
                    className="object-cover w-10 h-10 mx-4  rounded-full dark:bg-gray-500"
                  />
                  <span className="hover:underline dark:text-gray-400">
                    Ram Birla
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up-left"
          className="dark:bg-gray-800 dark:text-gray-100 mb-10"
        >
          <div className="container max-w-4xl px-10 py-6 bg-white mx-auto rounded-lg shadow-sm dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-gray-400">Feb 8 ,2024</span>
            </div>
            <div className="mt-3  ">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-2xl font-bold hover:underline"
              >
                High-Quality Healthcare Facilities:
              </a>
              <p className="mt-2">
                India is home to world-class hospitals and healthcare facilities
                that are equipped with state-of-the-art technology and staffed
                by highly qualified medical professionals. Renowned hospitals
                such as Apollo Hospitals, Fortis Healthcare, and Max Healthcare
                have gained international recognition for their standards of
              </p>
            </div>
            <div className="flex items-center justify-between   mt-4">
              <a
                rel="noopener noreferrer"
                href="https://mpcthospital.in/about-medical-treatments-in-india/"
                className="hover:underline dark:text-violet-400 bg-yellow-400 text-white p-2 rounded-md"
              >
                Read more
              </a>
              <div>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center"
                >
                  <img
                    src="https://source.unsplash.com/50x50/?portrait?1"
                    alt="avatar"
                    className="object-cover w-10 h-10 mx-4  rounded-full dark:bg-gray-500"
                  />
                  <span className="hover:underline dark:text-gray-400">
                    Amit Kumar
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-down-right"
          className="dark:bg-gray-800 dark:text-gray-100 mb-10"
        >
          <div className="container max-w-4xl px-10 py-6 bg-white mx-auto rounded-lg shadow-sm dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-gray-400">Feb 8 ,2024</span>
            </div>
            <div className="mt-3  ">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-2xl font-bold hover:underline"
              >
                Advanced Medical Technology:
              </a>
              <p className="mt-2">
                Indian hospitals invest in advanced medical technologies and
                equipment, ensuring that patients have access to cutting-edge
                treatments and procedures. This commitment to technological
                advancement enhances the quality of medical care provided.
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <a
                rel="noopener noreferrer"
                href="https://mpcthospital.in/about-medical-treatments-in-india/"
                className="hover:underline dark:text-violet-400 bg-yellow-400 text-white p-2 rounded-md"
              >
                Read more
              </a>
              <div>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center"
                >
                  <img
                    src="https://source.unsplash.com/50x50/?portrait?2"
                    alt="avatar"
                    className="object-cover w-10 h-10 mx-4  rounded-full dark:bg-gray-500"
                  />
                  <span className="hover:underline dark:text-gray-400">
                    Deepa Gupta
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up-left"
          className="dark:bg-gray-800 dark:text-gray-100 mb-10"
        >
          <div className="container max-w-4xl px-10 py-6 bg-white mx-auto rounded-lg shadow-sm dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-gray-400">Feb 8, 2024</span>
            </div>
            <div className="mt-3  ">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-2xl font-bold hover:underline"
              >
                Wellness and Alternative Therapies:
              </a>
              <p className="mt-2">
                In addition to conventional medical treatments, India is known
                for its wellness and alternative therapies, such as Ayurveda,
                yoga, and naturopathy. Many medical tourists are attracted to
                holistic approaches for well-being
              </p>
            </div>
            <div className="flex items-center justify-between   mt-4">
              <a
                rel="noopener noreferrer"
                href="https://mpcthospital.in/about-medical-treatments-in-india/"
                className="hover:underline dark:text-violet-400
                 bg-yellow-400 text-white p-2 rounded-md"
              >
                Read more
              </a>
              <div>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center"
                >
                  <img
                    src="https://source.unsplash.com/50x50/?portrait?3"
                    alt="avatar"
                    className="object-cover w-10 h-10 mx-4  rounded-full dark:bg-gray-500"
                  />
                  <span className="hover:underline dark:text-gray-400">
                    Priya Patel
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default Medical;
