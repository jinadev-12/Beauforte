import React from "react";
import "./index.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Home";
import Explore from "./Components/Explore";
import Sticky from "./Components/Sticky";
import Products from "./Components/Products";
import FAQ from "./Components/FAQ";

function App() {
  return (
    // main div of BEAUFORTE
    <div className="">
      <Navbar />
      <Hero />
      <Explore/>
      <Sticky />
      <Products />
      <FAQ />
    </div>
  );
}

export default App;
