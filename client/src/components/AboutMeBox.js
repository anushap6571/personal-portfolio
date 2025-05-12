import React from "react";
import Glow from "./Glow";
import myImage from '../assets/images/profile.jpeg';

const AboutMeBox = () => (
  <div className="relative rounded-3xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl p-8 flex flex-col items-center mb-6 w-full overflow-visible">
    <Glow color="bg-blue-400" size="w-44 h-44" position="top-[-40px] left-[-40px]" />
    <Glow color="bg-pink-300" size="w-32 h-32" position="bottom-[-30px] right-[-30px]" />
    <img
      src={myImage}
      alt="Profile"
      className="w-32 h-32 rounded-full border-4 border-white/40 shadow-lg mb-4 object-cover z-10"
    />
    <h2
      className="font-sans text-3xl md:text-4xl font-bold text-white mb-2 z-10 drop-shadow-[0_2px_16px_rgba(255,255,255,0.7)]"
      style={{
        textShadow: "0 2px 16px #fff, 0 0px 32px #fbbf24, 0 0px 64px #f472b6"
      }}
    >
      Anusha Patel
    </h2>
    <p className="text-white/90 mb-4 text-left z-10 font-sans ">
      Computer science student at UTD passionate about design, code, and creative technology.
    </p>
    <div className="grid grid-cols-3 gap-2 w-full z-10 mt-2 justify-items-center">
      <a
        href="https://www.linkedin.com/in/anushapatel6571/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[120px] text-center bg-ramenDark text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-blue-600 transition font-sans"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/anushap6571"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[120px] text-center bg-ramenDark text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-gray-900 transition font-sans"
      >
        GitHub
      </a>
      <a
        href="https://www.instagram.com/anushaa__patel/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[120px] text-center bg-ramenDark text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-instaPink transition font-sans"
      >
        Instagram
      </a>
      <a
        href="https://beliapp.co/app/anushaa__patel"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[120px] text-center bg-ramenDark text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-beliBlue transition font-sans"
      >
        Beli
      </a>
      <a
        href="https://www.youtube.com/@anushapatel2176"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[120px] text-center bg-ramenDark text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-youtubeRed transition font-sans"
      >
        YouTube
      </a>
      <a
        href="mailto:anushap6571@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[120px] text-center bg-ramenDark text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-white hover:text-black transition font-sans"
      >
        Email
      </a>
    </div>
  </div>
);

export default AboutMeBox; 
