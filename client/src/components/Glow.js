import React from "react";

const Glow = ({ color = "bg-orange-300", size = "w-40 h-40", position = "top-[-30px] left-[-30px]" }) => (
  <div
    className={`absolute ${position} ${size} bg-orange-300 opacity-40 blur-2xl rounded-full pointer-events-none z-0`}
    aria-hidden="true"
  />
);

export default Glow; 