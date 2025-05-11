import React from "react";

const SectionBox = ({ title, children, glowColor }) => (
  <div
    className={`
      rounded-3xl
      bg-white/20
      backdrop-blur-lg
      border border-white/30
      shadow-2xl
      ${glowColor}
      p-8
      flex-1
      min-w-[280px]
      max-w-[350px]
      m-4
      relative
      transition
      hover:scale-105
      hover:shadow-[0_0_40px_10px_rgba(255,180,80,0.3)]
    `}
    style={{
      boxShadow: "0 4px 32px 0 rgba(255, 180, 80, 0.15), 0 0 80px 0 rgba(255, 180, 80, 0.25)",
    }}
  >
    <h2 className="text-2xl font-bold mb-4 drop-shadow text-white">{title}</h2>
    <div className="text-white/90">{children}</div>
  </div>
);

const SectionsGrid = () => (
  <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-16 px-4 bg-gradient-to-br from-[#23272F] via-[#2C3A3A] to-[#F6D6D6] min-h-[80vh]">
    <SectionBox title="About Me" glowColor="ring-2 ring-orange-200/40">
      <p>
        Hi! I'm Anusha Patel, a computer science student at UTD passionate about design, code, and creative technology.
      </p>
    </SectionBox>
    <SectionBox title="Resume" glowColor="ring-2 ring-pink-200/40">
      <ul className="list-disc pl-4">
        <li>UT Dallas, Computer Science</li>
        <li>Web Developer Intern, 2023</li>
        <li>UI/UX Design Projects</li>
      </ul>
    </SectionBox>
    <SectionBox title="Current Projects" glowColor="ring-2 ring-yellow-200/40">
      <ul className="list-disc pl-4">
        <li>Personal Portfolio Website</li>
        <li>Open Source UI Library</li>
        <li>AI Chatbot for Students</li>
      </ul>
    </SectionBox>
  </div>
);

export default SectionsGrid; 