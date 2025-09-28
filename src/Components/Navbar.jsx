import React from "react";
import logoBlack from "../Assets/logoBlack.png";

function Navbar() {
  return (
    // main div
    <div className="top-0 mt-4 fixed w-full font-playfair">
      {/* container */}
      <nav className="py-3 pl-4 pr-7  max-w-[1800px] w-[90%] mx-auto flex justify-between items-center  rounded-sm  text-gray-400">
        {/* navbar logo */}
        <div className="flex items-center ">
          <img src={logoBlack} className="w-10 h-12" />
          <span className="text-xl lg:text-2xl tracking-wider">Beauforte</span>
        </div>
        {/* navbar links */}
        <div className="hidden md:block">
          {/* link nte text md / sm theermanichittlla */}
          <ul className="flex gap-8 text-lg font-lato">
            <li>Home</li>
            <li>Products</li>
            <li>FAQ</li>
            {/* contact us buttom aakanam */}
            <li>Cotact Us</li>
          </ul>
        </div>
        {/* navbar hamburger */}
        <div className="md:hidden">
          <i class="ri-apps-2-fill"></i>{" "}
        </div>
      </nav>
      {/* ------------side baaaaaaaar------- */}
      <div className="hidden absolute top-0 bg-[#111] text-white w-full">
        {/* navbar links */}
        <div className="">
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>FAQ</li>
            {/* contact us buttom aakanam */}
            <li>Cotact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
