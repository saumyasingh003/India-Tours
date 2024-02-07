import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Eco = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="relative overflow-x-hidden h-full shadow-gray-800">
        <h1
          data-aos="zoom-out-left"
          style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
          className="text-center 
      text-4xl relative top-8 mb-10  font-extrabold text-[#1e1c46] font-sans"
        >
          Nature's Symphony: Embarking on an Eco-Adventure
        </h1>
        <div className="relative top-5 px-4  mb-10">
          <h3 className="text-2xl font-bold  sm:text-3xl dark:text-gray-50"></h3>
          <p
            className="flex  text-center mx-10  mt-3 text-lg dark:text-gray-400"
            style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
          >
            Embark on a journey into the heart of sustainability with
            ecotourism, where nature's wonders take center stage. 'Nature's
            Symphony: Embarking on an Eco-Adventure' invites travelers to
            immerse themselves in the untouched beauty of our planet while
            embracing responsible and ethical travel practices. This unique form
            of tourism not only offers a thrilling escape into pristine
            landscapes but also fosters a deep connection with the environment.
            From exploring biodiverse ecosystems and engaging in conservation
            efforts to supporting local communities, ecotourism harmonizes the
            thrill of adventure with a commitment to preserving the delicate
            balance of our planet. It's a symphony of discovery, promoting not
            just tourism, but a profound appreciation for the Earth's wonders
            and the importance of preserving them for generations to come.
          </p>
        </div>

        <div>
          <div className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
              <a
                rel="noopener noreferrer"
                href="https://www.holidify.com/places/shimoga/agumbe-sightseeing-8109.html"
                target="_blank"
                className="block max-w-sm gap-3 mx-auto
		 sm:max-w-full group hover:no-underline shadow-2xl rounded-md focus:no-underline 
		 dark:bg-gray-900"
              >
                <img
                  src={require("../assets/agumbe.jpg")}
                  alt=""
                  className=" w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
                />
              </a>
            </div>
          </div>
          <div>
            <h1
              data-aos="zoom-in-up"
              style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
              className="text-center text-5xl relative  mb-10 font-extrabold text-[#356179] font-sans"
            >
              Agumbe Rainforest, Karnataka
            </h1>
          </div>
          <div className=" relative top-1 align-right mb-10 px-10">
            <h4
              className="text-xl font-bold tracki sm:text-3xl 
             dark:text-gray-50"
            ></h4>
            <p
              className="flex w-full text-center  mt-3 text-lg 
              dark:text-gray-400"
              style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
            >
              Agumbe Rainforest, nestled in the Western Ghats of Karnataka,
              India, is a verdant paradise known for its breathtaking
              biodiversity and lush landscapes. This ecologically rich region is
              renowned for receiving some of the heaviest rainfall in the
              country, earning it the title of the "Cherrapunji of the South."
              The rainforest is a haven for diverse flora and fauna, housing a
              myriad of plant species, insects, amphibians, reptiles, and
              mammals. Agumbe is also famed for being home to the elusive King
              Cobra, making it a significant destination for herpetologists and
              wildlife enthusiasts. The undulating terrain, punctuated by
              meandering streams and cascading waterfalls, enhances the region's
              scenic beauty. Beyond its ecological significance, Agumbe
              Rainforest has become a popular destination for eco-tourism,
              offering visitors a unique opportunity to connect with nature
              while exploring its enchanting trails and experiencing the vibrant
              biodiversity that thrives within this captivating ecosystem.
            </p>
          </div>
        </div>

        <div>
          <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
              <a
                rel="noopener noreferrer"
                href="https://www.tourmyindia.com/states/sikkim/khangchendzonga-national-park.html"
                target="_blank"
                className="block max-w-sm gap-3 mx-auto
		 sm:max-w-full group hover:no-underline shadow-2xl rounded-md focus:no-underline 
		 dark:bg-gray-900"
              >
                <img
                  data-aos="fade-right"
                  src={require("../assets/khanga.jpg")}
                  alt=""
                  className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
                />
              </a>
            </div>
          </section>
          <div>
            <h1
              data-aos="zoom-in-up"
              style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
              className="text-center text-5xl relative  mb-10 font-extrabold text-[#356179] font-sans"
            >
              Khangchendzonga National Park, Sikkim
            </h1>
          </div>
          <div className=" relative top-1 align-right mb-10 px-10">
            <h4 className="text-xl font-bold tracki sm:text-3xl  dark:text-gray-50"></h4>
            <p
              className="flex w-full text-center  mt-3 text-lg dark:text-gray-400"
              style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
            >
              Nestled in the eastern Himalayas of the Indian state of Sikkim,
              Khangchendzonga National Park stands as a testament to the
              awe-inspiring natural beauty and rich biodiversity of the region.
              Encompassing a vast expanse of pristine wilderness surrounding the
              third-highest peak in the world, Mount Khangchendzonga, this
              national park is a UNESCO World Heritage Site. The landscape is
              characterized by towering snow-capped peaks, alpine meadows,
              glaciers, and deep valleys, creating a haven for a diverse array
              of flora and fauna. The park is home to several endangered
              species, including the elusive snow leopard, red panda, and
              Himalayan tahr. Visitors can explore the park's diverse
              ecosystems, from subtropical forests to cold deserts, and marvel
              at its cultural significance with sacred monasteries and
              traditional villages dotting the landscape. Khangchendzonga
              National Park not only captivates with its breathtaking scenery
              but also serves as a crucial conservation area, preserving the
              unique biodiversity of the Eastern Himalayas.
            </p>
          </div>
        </div>

        <div>
          <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
              <a
                rel="noopener noreferrer"
                href="https://www.india.com/travel/hemis/places-to-visit/wildlife-hemis-national-park/"
                target="_blank"
                className="block max-w-sm gap-3 mx-auto
		 sm:max-w-full group hover:no-underline shadow-2xl rounded-md focus:no-underline 
		 dark:bg-gray-900"
              >
                <img
                  data-aos="fade-right"
                  src={require("../assets/hemis.jpg")}
                  alt=""
                  className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
                />
              </a>
            </div>
          </section>
          <div>
            <h1
              data-aos="zoom-in-up"
              style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
              className="text-center text-5xl relative  mb-10 font-extrabold text-[#356179] font-sans"
            >
              Hemis National Park, Ladakh
            </h1>
          </div>
          <div className=" relative top-1 align-right mb-10 px-10">
            <h4 className="text-xl font-bold tracki sm:text-3xl  dark:text-gray-50"></h4>
            <p
              className="flex w-full text-center  mt-3 text-lg dark:text-gray-400"
              style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
            >
              Hemis National Park, situated in the high-altitude desert
              landscapes of Ladakh in northern India, is a protected sanctuary
              renowned for its stark beauty and unique biodiversity. Covering a
              vast expanse, it is the largest national park in South Asia and
              encompasses the trans-Himalayan region. The park is named after
              the Hemis Monastery, a spiritual and cultural focal point within
              its boundaries. Hemis National Park is particularly notable for
              being a habitat for the elusive and endangered snow leopard,
              making it a significant conservation area for this iconic species.
              The rugged terrain, marked by deep gorges, alpine meadows, and
              barren slopes, also harbors other wildlife such as blue sheep,
              ibex, Tibetan wolf, and various bird species. The park not only
              serves as a haven for wildlife enthusiasts and photographers but
              also plays a crucial role in preserving the fragile ecosystems of
              the high-altitude Himalayan region.
            </p>
          </div>
        </div>

        <div>
          <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
              <a
                rel="noopener noreferrer"
                href="https://www.keralatourism.org/destination/silent-valley-national-park-palakkad/157"
                target="_blank"
                className="block max-w-sm gap-3 mx-auto
		 sm:max-w-full group hover:no-underline shadow-2xl rounded-md focus:no-underline 
		 dark:bg-gray-900"
              >
                <img
                  data-aos="fade-right"
                  src={require("../assets/silent.jpg")}
                  alt=""
                  className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
                />
              </a>
            </div>
          </section>
          <div>
            <h1
              data-aos="zoom-in-up"
              style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
              className="text-center text-5xl relative  mb-10 font-extrabold text-[#356179] font-sans"
            >
              Silent Valley National Park, Kerala
            </h1>
          </div>
          <div className=" relative top-1 align-right mb-10 px-10">
            <h4 className="text-xl font-bold tracki sm:text-3xl  dark:text-gray-50"></h4>
            <p
              className="flex w-full text-center  mt-3 text-lg dark:text-gray-400"
              style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
            >
              Silent Valley National Park, nestled in the Western Ghats of
              Kerala, India, stands as a testament to the sublime beauty of
              untouched wilderness. Covering an expanse of tropical evergreen
              rainforest, it is renowned for its biodiversity and ecological
              significance. The park's name reflects the hushed serenity that
              envelops its lush landscapes, where glistening streams weave
              through dense foliage, and towering trees create a cathedral-like
              canopy. Silent Valley is a haven for a diverse array of flora and
              fauna, housing numerous endemic and endangered species. Its
              pristine environment has been preserved over the years, offering a
              glimpse into an ancient ecosystem largely untouched by human
              interference. This sanctuary not only mesmerizes with its scenic
              allure but also serves as a critical conservation area,
              emphasizing the need to protect and appreciate the irreplaceable
              wonders of untouched nature.
            </p>
          </div>
        </div>

        <div>
          <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
              <a
                rel="noopener noreferrer"
                href="https://www.tripadvisor.in/Attraction_Review-g503694-d2345665-Reviews-Tirthan_Valley-Kullu_Kullu_District_Himachal_Pradesh.html"
                target="_blank"
                className="block max-w-sm gap-3 mx-auto
		                 sm:max-w-full group hover:no-underline shadow-2xl rounded-md focus:no-underline 
		              dark:bg-gray-900"
              >
                <img
                  data-aos="fade-right"
                  src={require("../assets/tirthan.jpg")}
                  alt=""
                  className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
                />
              </a>
            </div>
          </section>
          <div>
            <h1
              data-aos="zoom-in-up"
              style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
              className="text-center text-5xl relative  mb-10 font-extrabold text-[#356179] font-sans"
            >
              Tirthan Valley, Himachal Pradesh
            </h1>
          </div>
          <div className=" relative top-1 align-right mb-10 px-10">
            <h4 className="text-xl font-bold tracki sm:text-3xl  dark:text-gray-50"></h4>
            <p
              className="flex w-full text-center  mt-3 text-lg dark:text-gray-400"
              style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
            >
              Nestled in the lap of the Himalayas, Tirthan Valley in Himachal
              Pradesh is a hidden gem, offering a serene and unspoiled retreat
              for nature lovers. The valley, named after the Tirthan River that
              meanders through it, presents a picturesque landscape of lush
              greenery, charming hamlets, and snow-capped peaks. Renowned for
              its crystal-clear rivers and diverse flora and fauna, Tirthan
              Valley is a haven for those seeking tranquility and adventure
              alike. The Great Himalayan National Park, a UNESCO World Heritage
              Site, encompasses a part of this valley, providing a habitat for a
              variety of wildlife species. From trekking along pristine trails
              to angling in the glistening waters, Tirthan Valley beckons with
              its natural beauty and offers a rejuvenating escape for those
              looking to immerse themselves in the serenity of the Himalayan
              foothills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eco;
