import React from "react";
import Glow from "./Glow";
import resumeImage from "../assets/images/resume.jpg";
const ResumeBox = () => (
  <div className="relative rounded-3xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl p-8 w-full flex flex-col items-center overflow-visible mb-6">
    <Glow color="bg-pink-400" size="w-32 h-32" position="top-[-30px] right-[-30px]" />
    <Glow color="bg-orange-200" size="w-24 h-24" position="bottom-[-20px] left-[-20px]" />
    <h3 className="text-2xl font-bold text-white mb-4 z-10">Resume</h3>
    <ul className="text-white/90 list-disc pl-5 w-full z-10">
      {/* <li>UT Dallas, Computer Science</li>
      <li>Web Developer Intern, 2023</li>
      <li>UI/UX Design Projects</li> */}
    </ul>
    <img
      src={resumeImage}
      desc="Resume"
      style={{ border: "none", borderRadius: "1rem" }}
    />
  </div>
);

export default ResumeBox; 