import React,{useState} from "react";
import logoBlack from "../Assets/logoBlack.png";

function Navbar() {

  // function and state for sidebar
  const [isOpen, setIsOpen] = useState(false);
  const sidebaropen = () => {
    setIsOpen(!isOpen);
    console.log("sidebar button is working")
  };

  return (
    // main div
    <div className="top-0 mt-4 fixed w-full font-playfair z-50">
      {/* container */}
      <nav className=" py-3 pl-4 pr-7  max-w-[1800px] w-[90%] mx-auto flex justify-between items-center  rounded-sm  text-gray-400">
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
        <div className="md:hidden block cursor-pointer">
          <i class="ri-menu-3-line text-3xl " onClick={sidebaropen}></i>
        </div>
      </nav>
  
      {/* sidebar */}
      <div
        className={`fixed  bg-white top-0 right-0 w-full h-[50%] flex justify-center pt-14 text-center ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }  lg:hidden duration-300 z-50`}
      >
        <i
          class="ri-menu-3-line text-3xl absolute right-10 top-10"
          onClick={sidebaropen}
        ></i>

        <ul className="space-y-6 text-xl">
          <li>
            <a href="#" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setIsOpen(false)}>
              Products
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setIsOpen(false)}>
              FAQ
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setIsOpen(false)}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
