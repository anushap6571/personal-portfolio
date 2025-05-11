import React from "react";

const Navbar = () => (
  <nav className="w-full flex justify-between items-center px-8 py-4 bg-[#49543B] text-[#F6EBDD] fixed top-0 z-50">
    <div className="font-bold text-xl tracking-wider">Anusha Patel</div>
    <div className="space-x-8 hidden md:flex">
      <a href="#about" className="hover:text-[#F6A800] transition">About me</a>
      <a href="#resume" className="hover:text-[#F6A800] transition">Resume</a>
      <a href="#work" className="hover:text-[#F6A800] transition">Work</a>
    </div>
    <a href="#contact" className="bg-[#F6A800] text-[#181818] px-4 py-2 rounded-full font-semibold hover:bg-[#F47C20] transition">Get in touch!</a>
  </nav>
);

export default Navbar;
