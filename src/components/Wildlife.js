import React, { useEffect } from "react";
import AOS from "aos";
import News from "./News";
import "aos/dist/aos.css";

const Wildlife = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="relative overflow-x-hidden overflow-y-hidden  h-full shadow-gray-800 ">
        <div
          style={{ position: "relative", textAlign: "center" }}
          className="relative mb-20"
        >
          <div style={{ position: "relative" }}>
            <img
              className="sm:h-[80vh] w-screen rounded-xl"
              src={require("../assets/lion.jpg")}
              alt="logo"
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                content: "''",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust alpha (last value) for transparency
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
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                
              }}
              className="lg:text-5xl text-xl "
            >
              <span>Wild Wonders Expedition: Embark on a Journey </span>
              <span className="relativel lg:top-10"> into Nature's Kingdom</span>
            </h1>
          </div>
        </div>
        <p
          style={{ fontSize: "1.2rem", marginTop: "15px" }}
          className="text-center  mx-10"
        >
          As the sun sets on the horizon, you'll gather around a crackling
          campfire to share stories with fellow adventurers and bask in the
          enchanting sounds of the nocturnal symphony. Underneath the canvas of
          twinkling stars, you'll be transported to a world where the boundaries
          between humans and the wild dissolve. The "Wild Wonders Expedition" is
          not just a journey; it's an odyssey of self-discovery, where you'll
          reconnect with the rhythm of nature and awaken your sense of wonder.
          Each day brings new opportunities for exploration, whether you're
          navigating meandering rivers in a traditional canoe, tracking the
          footprints of elusive wildlife, or simply taking a moment to absorb
          the vibrant hues of a tropical sunset. Immerse yourself in the
          kaleidoscope of cultures that thrive in these remote corners of the
          Earth, as our knowledgeable guides facilitate interactions with local
          communities. Learn about their age-old traditions, sustainable
          practices, and the crucial role they play in preserving the delicate
          balance between humans and the natural world. Our commitment to
          responsible tourism ensures that your adventure leaves behind only
          footprints and takes away memories that will last a lifetime. By
          joining the "Wild Wonders Expedition," you become a part of a global
          community dedicated to the conservation and protection of our planet's
          most precious ecosystems. Embark on this extraordinary journey with
          us, where every sunrise brings the promise of a new discovery, and
          every sunset paints the sky with hues of gratitude for the wild
          wonders that surround us.
        </p>
      </div>
      <h1
        style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
        className="text-center 
      text-4xl relative top-8 mb-16 font-extrabold text-[#356179] font-sans"
      >
        Attraction
      </h1>
      <section className="dark:bg-gray-800 dark:text-gray-100 relative top-60">
        <div className="container max-w-6xl p-6 mx-auto space-y-6  sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="https://en.wikipedia.org/wiki/Jim_Corbett_National_Park"
            target="_blank"
            className="block max-w-sm gap-3 mx-auto
		 sm:max-w-full group hover:no-underline shadow-2xl rounded-md focus:no-underline 
		 lg:grid lg:grid-cols-12 dark:bg-gray-900"
          >
            <img
              data-aos="fade-down-right"
              src={require("../assets/safari.jpg")}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div
              data-aos="fade-down-right"
              className="p-6 space-y-2 lg:col-span-5"
            >
              <h3
                className="text-2xl text-center font-semibold sm:text-4xl 
				group-hover:underline group-focus:underline"
              >
                Jim Corbett National Park, Uttarakhand{" "}
              </h3>
              <p className="text-xs text-center dark:text-gray-400">
                February 6, 2024
              </p>
              <p>
                Jim Corbett National Park, situated in the picturesque state of
                Uttarakhand, India, stands as a testament to the country's
                commitment to wildlife conservation. Established in 1936, it
                holds the distinction of being the oldest national park in
                India. Named after the legendary British
                hunter-turned-conservationist Jim Corbett, the park spans across
                the foothills of the majestic Himalayas, covering an expansive
                area of diverse landscapes, from dense forests to grasslands and
                riverine habitats.
              </p>
            </div>
          </a>
        </div>
      </section>
      <News />
      <div className="flex justify-center mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2680.492201846479!2d78.77208537426061!3d29.53001844278162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a24ffffffffff%3A0x3017b72d3d253fd7!2sJim%20Corbett%20National%20Park!5e1!3m2!1sen!2sin!4v1707050080165!5m2!1sen!2sin"
          width="900"
          height="450"
          className="border-0 mx-10 mb-16  rounded-lg"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Wildlife;
