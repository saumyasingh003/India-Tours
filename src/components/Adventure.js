import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Adventure = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-x-hidden">
      <h1
        data-aos="zoom-out-left"
        className="text-center text-5xl mt-5 mb-20 font-extrabold text-[#18305b] font-sans"
      >
        Peak Of Thrill
      </h1>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10 mx-8">
        <div class="relative overflow-hidden group">
          <img
            class="w-full h-64 rounded-lg transition-opacity duration-300 group-hover:opacity-80"
            src={require("../assets/skift.jpg")}
            alt=""
          />
          <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 group-hover:rounded-lg">
            <h1 class="text-white text-xl">Skift</h1>
          </div>
        </div>
        <div class="relative overflow-hidden group">
          <img
            class="w-full h-64 rounded-lg transition-opacity duration-300 group-hover:opacity-80"
            src={require("../assets/paragliding.jpg")}
            alt=""
          />
          <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 group-hover:rounded-lg">
            <h1 class="text-white text-xl">Paragliding</h1>
          </div>
        </div>
        <div class="relative overflow-hidden group">
          <img
            class="w-full h-64 rounded-lg transition-opacity duration-300 group-hover:opacity-80"
            src={require("../assets/zip wire.jpg")}
            alt=""
          />
          <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 group-hover:rounded-lg">
            <h1 class="text-white text-xl">Zip Lining</h1>
          </div>
        </div>
        <div class="relative overflow-hidden group">
          <img
            class="w-full h-64 rounded-lg transition-opacity duration-300 group-hover:opacity-80"
            src={require("../assets/climbing.jpg")}
            alt=""
          />
          <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 group-hover:rounded-lg">
            <h1 class="text-white text-xl">Climbing</h1>
          </div>
        </div>
        <div class="relative overflow-hidden group">
          <img
            class="w-full h-64 rounded-lg transition-opacity duration-300 group-hover:opacity-80"
            src={require("../assets/mountain-biking.jpg")}
            alt=""
          />
          <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 group-hover:rounded-lg">
            <h1 class="text-white text-xl">Mountain-biking</h1>
          </div>
        </div>
        <div class="relative overflow-hidden group">
          <img
            class="w-full h-64 rounded-lg transition-opacity duration-300 group-hover:opacity-80"
            src={require("../assets/scuba.jpg")}
            alt=""
          />
          <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 group-hover:rounded-lg">
            <h1 class="text-white text-xl">Scuba Diving</h1>
          </div>
        </div>
      </div>

      <div className="relative top-5  px-16 mb-10">
        <h3 className="text-2xl font-bold sm:text-3xl dark:text-gray-50"></h3>
        <p
          className="flex w-full   text-justify  mt-3 text-lg dark:text-gray-400"
          style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
        >
          Adventure tourism in India is a dynamic and rapidly growing sector,
          attracting adventure enthusiasts with its diverse landscapes and an
          extensive range of thrilling activities. The country's geographical
          variety, from the towering peaks of the Himalayas to the coastal
          wonders, provides a canvas for a plethora of adventure experiences.
          The Himalayan region, comprising states like Himachal Pradesh and
          Uttarakhand, offers trekking, mountaineering, and skiing
          opportunities. The Western Ghats in Maharashtra and Karnataka attract
          adventure seekers with trekking, rock climbing, and water sports. Goa,
          known for its beaches, is a hub for water-based activities. The
          northeastern states, with their lush greenery and diverse culture,
          provide a unique adventure experience with activities like river
          rafting, caving, and trekking. Rajasthan's deserts offer camel
          safaris, desert camping, and hot air ballooning. As adventure tourism
          gains popularity, the Indian government is emphasizing sustainable
          practices and safety measures. With a harmonious blend of
          adrenaline-inducing activities and cultural richness, India stands as
          a compelling destination for those seeking adventure in a diverse and
          vibrant environment.
        </p>
      </div>
      <h1
        data-aos="zoom-out-left"
        className="text-center text-5xl mt-20 mb-10 font-extrabold text-[#18305b] font-sans"
      >
        Is Lakshadweep your next destination?
      </h1>
      <p
        data-aos="zoom-out-left"
        className="text-center text-2xl mt 2 mb-10 text-[#323438] font-sans"
      >
        Let me show how..
      </p>

      <div className="flex justify-center mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106880.727006203!2d70.28887199993514!3d9.980098603092486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b9fcd65cae4973d%3A0x17bd7416842ce9aa!2sLakshadweep!5e1!3m2!1sen!2sin!4v1707063168263!5m2!1sen!2sin"
          width="900"
          height="450"
          className="border-0 mx-10 mb-16  rounded-lg"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <p
        className="flex mx-20   text-justify  mt-3 text-lg dark:text-gray-400"
        style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
      >
        Emerging Adventure Destination: Lakshadweep is emerging as a
        sought-after adventure destination in India, captivating travelers with
        its pristine coral reefs and unspoiled beauty.
       
        Diverse Water Activities: The archipelago offers a plethora of water
        activities, including snorkeling, scuba diving, kayaking, and
        windsurfing, allowing visitors to explore the vibrant marine life and
        crystal-clear lagoons.
        
        Island Exploration: With island-hopping tours, travelers can immerse
        themselves in the unique charm of each island, experiencing local
        culture and traditions against the backdrop of breathtaking natural
        landscapes.
        
        Unique Marine Experiences: Deep-sea fishing, sailing, and yachting
        provide unique marine experiences, offering adventure enthusiasts the
        chance to engage with the vast Arabian Sea and its diverse ecosystems.
        
        Sustainable Adventure: As Lakshadweep emphasizes sustainable tourism,
        the destination not only provides thrilling adventures but also ensures
        the preservation of its natural wonders, making it an eco-conscious
        choice for travelers seeking both excitement and environmental
        responsibility.
      </p>
      
 
<div class="grid gap-4  mt-20 mb-10 mx-4">
  
    <div class="grid grid-cols-5 gap-4">
        <div>
            <img class="h-full max-w-full rounded-lg"  src={require("../assets/laksha1.jpg")} alt=""/>
        </div>
        <div>
            <img class="h-full max-w-full rounded-lg " src={require("../assets/laksha2.jpg")} alt=""/>
        </div>
        <div>
            <img class="h-full max-w-full rounded-lg " src={require("../assets/laksha3.jpg")} alt=""/>
        </div>
        <div>
            <img class="h-full max-w-full rounded-lg " src={require("../assets/laksha5.jpg")} alt=""/>
        </div>
        <div>
            <img class="h-full max-w-full rounded-lg " src={require("../assets/laksha4.jpg")} alt="" />
        </div>
    </div>
</div>

    </div>
  );
};

export default Adventure;
