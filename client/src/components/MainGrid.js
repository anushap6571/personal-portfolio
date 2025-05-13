import React, { useState } from "react";
import AboutMeBox from "./AboutMeBox";
import WorkingOnBox from "./WorkingOnBox";
import ResumeBox from "./ResumeBox";
import SpotifyBox from "./SpotifyBox";
import bgImage from "../assets/images/background1.jpg";

const MainGrid = () => {
  //const [activeBox, setActiveBox] = useState(null);

  return (
    <div className="relative min-h-[80vh] flex flex-col md:flex-row justify-center items-start gap-8 py-16 px-4">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full -z-10">
        {/* <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover object-center blur-sm opacity-60"
        /> */}
      </div>
      {/* Left Column */}
      <div className="flex flex-col w-full md:w-1/2 max-w-md">
        <AboutMeBox />
        <WorkingOnBox />
        <SpotifyBox />
      </div>
      {/* Right Column */}
      <div className="w-full md:w-1/2 max-w-md flex flex-col">
        <ResumeBox />
      </div>
    </div>
  );
};

export default MainGrid; 