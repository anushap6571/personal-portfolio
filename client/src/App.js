import React from "react";
import GlowingTrail from "./components/GlowingTrail";
import MainGrid from "./components/MainGrid";
import backgroundImage from "./assets/images/background1.jpg";

function App() {
  return (
    <div className="bg-[#23272F] min-h-screen">
      {/* <GlowingTrail /> */}
      <img src={backgroundImage} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
      <MainGrid />
    </div>
  );
}

export default App;
