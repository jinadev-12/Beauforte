import React from "react";
import "./index.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Home";
import Explore from "./Components/Explore";
import Sticky from "./Components/Sticky";
import Products from "./Components/Products";

function App() {
  return (
    // main div of BEAUFORTE
    <div className="">
      <Navbar />
      <Hero />
      <Explore/>
      <Sticky />
      <Products />
    </div>
  );
}

export default App;
