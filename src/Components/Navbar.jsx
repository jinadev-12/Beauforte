import React, { useState, useEffect, useRef } from "react";
import logoWhite from "../Assets/logoBlack.png";

function Navbar() {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const rafRef = useRef(null);

  // Hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY.current;

        if (currentY < 40) {
          setHidden(false);
        } else if (delta > 0) {
          setHidden(true);
        } else if (delta < 0) {
          setHidden(false);
        }

        lastScrollY.current = currentY;
        rafRef.current = null;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } bg-[#111111c0] backdrop-blur-sm`}
    >
      <nav className="max-w-[1600px] mx-auto w-[90%] flex justify-between items-center py-3 md:py-4 text-white font-lato">
        {/* Logo */}
        <a href="#Home" className="flex items-center gap-3">
          {/* <img src={logoWhite} alt="Beauforte Logo" className="w-10 h-12" /> */}
          <span className="text-lg lg:text-xl tracking-widest font-playfair uppercase">
            Beauforte
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 text-sm tracking-[0.15em]">
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

        {/* Mobile Menu Button (left for your custom sidebar) */}
        <button
          aria-label="Open menu"
          className="block md:hidden font-light text-xl sm:text-2xl"
        >
          <i class="ri-menu-5-line"></i>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
