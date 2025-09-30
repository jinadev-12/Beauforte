import React from "react";
import "./index.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Home";
import Explore from "./Components/Explore";
import Sticky from "./Components/Sticky";

function App() {
  return (
    // main div of BEAUFORTE
    <div className="">
      <Navbar />
      <Hero />
      <Explore/>
      <Sticky />
    </div>
  );
}

export default App;
