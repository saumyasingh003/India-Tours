import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function Culture() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className="relative overflow-x-hidden h-full shadow-gray-800 mx-6">
        <div
          style={{ position: "relative", textAlign: "center" }}
          className="relative mb-20"
        >
          <div style={{ position: "relative" }}>
            <img
              className="sm:h-[80vh] w-screen rounded-xl"
              src={require("../assets/ganga.jpg")}
              alt=""
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                content: "''",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 1,
              }}
            ></div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
              color: "white",
              width: "70%",
            }}
          >
            <h1
              data-aos="zoom-out-left"
              data-aos-duration="3000"
              style={{
                
                fontSize: "3rem",
              }}
            >
              Immersive Journeys: Exploring the Rich Tapestry of Indian Cultural
            </h1>
          </div>
        </div>
      </div>

      <p
        className="flex mx-20 text-justify mt-3 text-lg dark:text-gray-400"
        
      >
        India's UNESCO World Heritage Sites present a mesmerizing blend of
        cultural, historical, and natural wonders. The iconic Taj Mahal in Agra
        stands as a testament to eternal love, while Jaipur's Pink City
        showcases the grandeur of Rajputana architecture. The rock-cut caves of
        Ajanta and Ellora in Maharashtra unveil ancient artistry, and Delhi's
        Qutub Minar complex echoes the splendor of the Delhi Sultanate.
        Kaziranga National Park in Assam is a biodiversity hotspot, home to the
        Indian one-horned rhinoceros, while the Khajuraho Group of Monuments in
        Madhya Pradesh captivates with its intricate erotic sculptures. Hampi's
        ruins in Karnataka tell the tale of the Vijayanagara Empire, and the
        Western Ghats are a haven of diverse flora and fauna. Rani-ki-Vav in
        Gujarat showcases stunning stepwell architecture, and the Sundarbans in
        West Bengal, the largest mangrove forest globally, harbors the elusive
        Bengal tiger. These UNESCO sites collectively weave a narrative of
        India's rich heritage, spanning from architectural marvels to natural
        sanctuaries.
      </p>

      <h1
        data-aos="zoom-out-left"
        className="text-center text-4xl mt-20 mb-10 font-extrabold text-[#18305b] font-sans"
      >
        Which cultural destination are you planning to visit next ?
      </h1>

      <div className="flex justify-center  mb-10 mt-10 space-x-10">
        <div className="relative flex flex-col text-gray-700 bg-gray-100 shadow-md bg-clip-border rounded-xl w-80">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-64">
            <img
              src={require("../assets/udaipur.jpg")}
              alt="card-image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="font-sans text-2xl antialiased font-bold leading-relaxed text-blue-gray-900">
                Udaipur, Rajasthan
              </p>
            </div>
            <a
              href="https://www.viator.com/en-IN/Udaipur-tours/Cultural-and-Theme-Tours/d5106-g4"
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:bg-gray-400 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              type="button"
            >
              Details
            </a>
          </div>
        </div>
        <div className="relative flex flex-col text-gray-700 bg-gray-100 shadow-md bg-clip-border rounded-xl w-80">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-64">
            <img
              src={require("../assets/fort-kochi.jpg")}
              alt="card-image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="font-sans text-2xl antialiased font-bold leading-relaxed text-blue-gray-900">
                Fort Kochi, Kerala
              </p>
            </div>
            <a
              href="https://www.keralatourism.org/destination/fort-kochi/422"
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:bg-gray-400 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              type="button"
            >
              Details
            </a>
          </div>
        </div>
        <div className="relative flex flex-col text-gray-700 bg-gray-100 shadow-md bg-clip-border rounded-xl w-80">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-64">
            <img
              src={require("../assets/mysore.jpg")}
              alt="card-image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="font-sans text-2xl antialiased font-bold leading-relaxed text-blue-gray-900">
                Mysore, Karnataka
              </p>
            </div>
            <a
              href=" https://www.kstdc.co/tour-categories/tour-packages-from-mysuru/"
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:bg-gray-400 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              type="button"
            >
              Details
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center  mb-10 mt-10 space-x-10">
        <div className="relative flex flex-col text-gray-700 bg-gray-100 shadow-md bg-clip-border rounded-xl w-80">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-64">
            <img
              src={require("../assets/varanasi.jpg")}
              alt="card-image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="font-sans text-2xl antialiased font-bold leading-relaxed text-blue-gray-900">
                Varanasi, Uttar Pradesh
              </p>
            </div>
            <a
              href="https://www.tourmyindia.com/states/uttarpradesh/varanasi-tour-packages.html"
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:bg-gray-400 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              type="button"
            >
              Details
            </a>
          </div>
        </div>
        <div className="relative flex flex-col text-gray-700 bg-gray-100 shadow-md bg-clip-border rounded-xl w-80">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-64">
            <img
              src={require("../assets/Bhubaneswar.jpg")}
              alt="card-image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="font-sans text-2xl antialiased font-bold leading-relaxed text-blue-gray-900">
                Bhubaneswar, Orissa
              </p>
            </div>
            <a
              href="https://odishatourism.gov.in/content/tourism/en/discover/major-cities/bhubaneswar.html"
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:bg-gray-400 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              type="button"
            >
              Details
            </a>
          </div>
        </div>
        <div className="relative flex flex-col text-gray-700 bg-gray-100 shadow-md bg-clip-border rounded-xl w-80">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-64">
            <img
              src={require("../assets/hampi.jpg")}
              alt="card-image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="font-sans text-2xl antialiased font-bold leading-relaxed text-blue-gray-900">
                Hampi, Karnataka
              </p>
            </div>
            <a
              href="https://www.kstdc.co/tour-packages/north-karnataka-tour-hampi-badami/"
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:bg-gray-400 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              type="button"
            >
              Details
            </a>
          </div>
        </div>
      </div>
      <p
        className="flex mx-20  mb-10 text-justify mt-3 text-lg dark:text-gray-400"
        
      >
        Embarking on a cultural journey through India unveils a fascinating
        tapestry of traditions, customs, and history that goes beyond its
        renowned beaches and hill stations. India serves as a cradle to some of
        the world's major religions, offering a profound exploration of diverse
        cultural destinations. The country's cultural richness is evident in its
        myriad customs and traditions, deeply rooted in history and heritage.
        From the intricately carved temples of Khajuraho to the vibrant markets
        of Rajasthan, every corner holds a piece of India's unique ethos. The
        cultural destinations beckon travelers to immerse themselves in the
        enchanting narratives of ancient civilizations, as seen in the
        archaeological wonders of Hampi or the spiritual sanctity of Varanasi.
      </p>

      <div className="flex justify-center mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.161022027094!2d85.0610155!3d25.632780800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57d247bc732d%3A0xe5f68e73302e7406!2sRam%20mandir!5e0!3m2!1sen!2sin!4v1707138333421!5m2!1sen!2sin"
          width="900"
          height="450"
          className="border-0 mx-10 mb-16 rounded-lg"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <h1
        className="text-center text-4xl mb-10 font-extrabold text-pink-700 font-sans"
      >
        Ram Mamdir ,Ayodhya ,Uttar Pradesh
      </h1>
    </div>
  );
}

export default Culture;
