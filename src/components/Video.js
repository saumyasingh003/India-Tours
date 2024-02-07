import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Video.css";
import videoBg from "../assets/videoBg.mp4";

const Video = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-x-hidden main">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <span
          data-aos="zoom-out-left"
          style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
          className="self-center text-5xl relative top-8 
           font-extrabold whitespace-nowrap
           "
        >
          {/* Technology */}
        </span>
        {/* <p
          data-aos="zoom-in-right"
          className="text-center text-3xl relative top-16 bottom-16 font-extrabold text-[#c2bbbebd] font-sans"
        >
          Behind the Scenes of Innovation: A Closer Look at the World of
          Advancement
        </p> */}
      </div>
    </div>
  );
};

export default Video;
