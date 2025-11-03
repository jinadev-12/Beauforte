import React, { useState } from "react";
import logoWhite from "../Assets/logoBlack.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <header className="absolute top-0 z-50 right-0 w-full">
      <nav className="max-w-[1600px] mx-auto w-[90%] flex justify-between items-center text-white font-lato h-16 md:h-20 relative">
        {/* Logo */}
        <a href="#Home" className="flex items-center gap-3">
          {/* <img src={logoWhite} alt="Beauforte Logo" className="w-10 h-12" /> */}
          <span className="text-lg lg:text-xl tracking-widest font-playfair uppercase">
            Beauforte
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 text-base md:text-lg tracking-[0.15em]">
          {["Home", "Products", "FAQ", "Contact Us"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.replace(/\s+/g, "-")}`}
                className="hover:text-[#d4af37] transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button / Close Button */}
        <button
          aria-label="Toggle menu"
          className="block md:hidden font-light text-2xl absolute top-5 right-0 z-[60] text-white"
          onClick={toggleSidebar}
        >
          <i
            className={`${
              isOpen ? "ri-close-large-line text-black" : "ri-menu-5-line"
            } transition-all duration-300`}
          ></i>
        </button>

        {/* Sidebar */}
        <div
          className={`fixed bg-white top-0 right-0 w-full h-[100vh] text-black flex justify-start text-left pt-14 transition-transform duration-300 z-50 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } lg:hidden`}
        >
          <ul className="flex flex-col gap-14 text-2xl font-medium font-saira mt-10 ml-5">
            {["Home", "Products", "FAQ", "Contact Us"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.replace(/\s+/g, "-")}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
