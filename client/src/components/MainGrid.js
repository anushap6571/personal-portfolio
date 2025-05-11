import React from "react";
import AboutMeBox from "./AboutMeBox";
import WorkingOnBox from "./WorkingOnBox";
import ResumeBox from "./ResumeBox";
import bgImage from "../assets/images/background1.jpg";


const MainGrid = () => (
  <div className="relative min-h-[80vh] flex flex-col md:flex-row justify-center items-start gap-8 py-16 px-4">
    {/* Background Image */}
    <div className="absolute inset-0 w-full h-full -z-10">
      <img
        src={bgImage}
        alt="Background"
        className="w-full h-full object-center blur-sm opacity-70"
      />
    </div>
    {/* Left Column */}
    <div className="flex flex-col w-full md:w-1/2 max-w-md">
      <AboutMeBox />
      <WorkingOnBox />
    </div>
    {/* Right Column */}
    <div className="w-full md:w-1/2 max-w-md flex flex-col">
      <ResumeBox />
    </div>
  </div>
);

export default MainGrid; 