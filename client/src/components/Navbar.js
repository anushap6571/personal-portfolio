import React from "react";

const Navbar = () => (
  <nav className="w-full flex flex-col items-center pt-4 pb-2 bg-transparent fixed top-0 z-50">
    {/* Top Row: Logo and Name */}
    <div className="flex w-full items-center justify-between px-8">
      {/* Logo placeholder */}
      <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-lg border border-white/40 flex items-center justify-center shadow-md mr-4">
        {/* You can put your logo SVG or image here */}
        <span className="text-2xl font-bold text-white">🦋</span>
      </div>
    </div>
    {/* Navigation Buttons */}
    <div className="flex gap-4 mt-4">
      <a href="#about" className="px-6 py-2 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 text-white font-semibold shadow hover:bg-white/40 transition-all">About Me</a>
      <a href="#resume" className="px-6 py-2 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 text-white font-semibold shadow hover:bg-white/40 transition-all">Resume</a>
      <a href="#work" className="px-6 py-2 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 text-white font-semibold shadow hover:bg-white/40 transition-all">Work</a>
      <a href="#contact" className="px-6 py-2 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 text-white font-semibold shadow hover:bg-white/40 transition-all">Contact</a>
    </div>
  </nav>
);

export default Navbar;
