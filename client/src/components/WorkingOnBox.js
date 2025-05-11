import React from "react";
import Glow from "./Glow";

const WorkingOnBox = () => (
  <div className="relative rounded-3xl bg-[#23272F]/90 backdrop-blur-lg border border-white/30 shadow-xl p-6 w-full overflow-visible">
    <Glow color="bg-yellow-300" size="w-24 h-24" position="top-[-20px] left-[-20px]" />
    <Glow color="bg-orange-300" size="w-20 h-20" position="bottom-[-15px] right-[-15px]" />
    <h3 className="text-lg font-semibold text-white mb-2 z-10">Currently Working On</h3>
    <ul className="text-white/90 list-disc pl-5 z-10">
      <li>backend for elys</li>
      <li>enterprise architect intern @stellantis</li>
      <li>this website</li>
    </ul>
  </div>
);

export default WorkingOnBox; 