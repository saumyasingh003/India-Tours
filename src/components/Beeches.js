import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MusicCards from "./MusicCards";

const Beeches = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-x-hidden">
      <div className="relative top-28 mb-10">
        <h1
          data-aos="zoom-out-left"
          className="text-center text-4xl relative bottom-16 font-extrabold text-[#18305B] font-sans"
          style={{ fontFamily: "'Russo One', sans-sarif" }}
        >
          Seaside Serenity: Unveiling the Allure of India's Coastal Paradises
        </h1>
      </div>

      <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-3 
         gap-2 text-center mx-auto">
          <div className="col-span-1 relative ">
            <div className="relative">
              <img
                className="rounded-lg mx-auto my-4 max-[768px]:h-36 w-[310px] h-[220px]"
                src={require("../assets/beach2.jpg")}
                alt=""
                
              />
              <div className="absolute z-20 lg:p-10   text-black bottom-0  w-52 font-sans font-semibold items-center lg:left-20 right-2 bg-white lg:py-3 py-1 max-[768px]:w-24 max-[768px]:text-sm">
                <h2>Varkala, Kerala</h2>
              </div>
            </div>
            <div className="relative">
              <img
                className="rounded-lg mt-2 mx-auto my-2 max-[768px]:h-36 w-[310px] h-[220px]"
                src={require("../assets/beach3.jpg")}
                alt=""
               
              />
              <div className="absolute z-20 lg:p-10   text-black bottom-0  w-52 font-sans font-semibold items-center lg:left-20 right-2 bg-white lg:py-3 py-1 max-[768px]:w-24 max-[768px]:text-sm">
                <h2>Tarkarli,Maha</h2>
              </div>
            </div>
          </div>
          <div className="col-span-1 my-2 relative">
            <div className="relative">

            <img
              className="rounded-lg mx-auto mt-10 max-[768px]:h-52 w-[370px] h-[410px]"
              src={require("../assets/beach4.jpg")}
              alt=""
           
            />
            <div className="absolute z-20 lg:p-10   text-black bottom-0  w-52 font-sans font-semibold items-center lg:left-20 right-2 bg-white lg:py-3 py-1 max-[768px]:w-24 max-[768px]:text-sm">
              <h2>Goa</h2>
            </div>
            </div>
          </div>
          <div className="col-span-1 relative">
            <div className="relative">
              <img
                className="rounded-lg mx-auto my-4 max-[768px]:h-36 w-[310px] h-[220px]"
                src={require("../assets/beach6.jpg")}
                alt=""
                
              />
              <div className="absolute z-20 lg:p-10   text-black bottom-0  w-52 font-sans font-semibold items-center lg:left-20 right-2 bg-white lg:py-3 max-[768px]:w-24 max-[768px]:text-sm">
                <h2>Kovalam, Kerala</h2>
              </div>
            </div>
            <div className="relative">
              <img
                className="rounded-lg mt-2 mx-auto my-4 max-[768px]:h-36 w-[310px] h-[220px]"
                src={require("../assets/beach5.jpg")}
                alt=""
               
              />
              <div className="absolute z-20 lg:p-10   text-black bottom-0  w-52 font-sans font-semibold items-center lg:left-20 right-2 bg-white lg:py-3 max-[768px]:w-24 max-[768px]:text-sm">
                <h2>Radhanagar, A&N </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p
        className="flex  text-center lg:mx-16 mx-4 relative max-[768px]:bottom-20  mt-3 lg:text-lg text-sm dark:text-gray-400 "
        style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
      >
        Beach tourism in India is a captivating blend of sun, sand, and cultural
        richness, drawing travelers to its diverse coastal destinations. From
        the lively shores of Goa with its vibrant nightlife and iconic beaches
        like Baga and Calangute, to the serene crescent-shaped stretches of
        Kovalam in Kerala offering Ayurvedic experiences, India's coastline is a
        mosaic of experiences. Radhanagar Beach in the Andaman and Nicobar
        Islands stands out with its pristine white sands and turquoise waters,
        consistently earning global acclaim. Varkala in Kerala boasts a unique
        cliffside ambiance, blending natural beauty with spiritual significance,
        while Tarkarli in Maharashtra lures visitors with its clear waters and
        opportunities for water sports. With a rich tapestry of landscapes and
        cultural influences, India's beach tourism provides a diverse range of
        options for relaxation, and cultural exploration.
      </p>
      <p
        className="flex  text-center lg:mx-16 mx-4 mt-3 lg:text-lg text-sm dark:text-gray-400 relative max-[768px]:bottom-20"
        style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
      >
        Beach tourism in India is a captivating blend of sun, sand, and cultural
        richness, drawing India's beach tourism not only showcases breathtaking
        natural beauty but also serves as a gateway to rich cultural
        experiences. Each coastal region narrates a unique tale, with local
        festivals, cuisine, and traditions adding depth to the travel
        experience. Whether it's the bustling markets and shacks of Goa, the
        tranquil backwaters of Kerala meeting the Arabian Sea, or the secluded
        charm of Andaman and Nicobar Islands, visitors can immerse themselves in
        the local way of life. Beachside activities, such as water sports and
        traditional dance performances, further enhance the vibrant tapestry of
        India's coastal tourism. With a perfect blend of relaxation and cultural
        immersion, India's beaches continue to allure travelers seeking a
        holistic and rejuvenating escape.
      </p>


      <div className="relative top-28 mb-20">
        <h1
          data-aos="zoom-out-left"
          className="text-center text-4xl relative bottom-16 font-extrabold text-[#18305B] font-sans"
          style={{ fontFamily: "'Russo One', sans-sarif" }}
        >
          Intresting Things you can find on Beaches..
        </h1>
        </div>
      <div>
        <MusicCards />
      </div>
    </div>
  );
};

export default Beeches;
