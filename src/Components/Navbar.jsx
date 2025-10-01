import React, { useEffect, useRef, useState } from "react";
import logoBlack from "../Assets/logoBlack.png";

function Navbar() {
  // sidebar state
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen((v) => !v);

  // hide-on-scroll state
  const [hidden, setHidden] = useState(false);

  // scroll refs (mutable, avoid rerenders)
  const lastScrollY = useRef(
    typeof window !== "undefined" ? window.scrollY : 0
  );
  const accum = useRef(0);
  const rafRef = useRef(null);

  // thresholds (tweak to taste)
  const HIDE_THRESHOLD = 60; // px down to hide
  const SHOW_THRESHOLD = 30; // px up to show
  const ALWAYS_VISIBLE_AT_TOP = 40; // keep visible near top

  // Prevent body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close sidebar on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // Hide/show on scroll (accumulation + rAF throttle)
  useEffect(() => {
    function onScroll() {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY.current;

        // Always visible near the top
        if (currentY <= ALWAYS_VISIBLE_AT_TOP) {
          accum.current = 0;
          if (hidden) setHidden(false);
          lastScrollY.current = currentY;
          rafRef.current = null;
          return;
        }

        // If sidebar is open, keep navbar visible
        if (isOpen) {
          accum.current = 0;
          if (hidden) setHidden(false);
          lastScrollY.current = currentY;
          rafRef.current = null;
          return;
        }

        // Accumulate in current direction; reset on direction change
        if (delta > 0) {
          // scrolling down
          if (accum.current < 0) accum.current = 0;
          accum.current += delta;
          if (accum.current >= HIDE_THRESHOLD) {
            setHidden(true);
            accum.current = 0;
          }
        } else if (delta < 0) {
          // scrolling up
          if (accum.current > 0) accum.current = 0;
          accum.current += delta; // negative value
          if (Math.abs(accum.current) >= SHOW_THRESHOLD) {
            setHidden(false);
            accum.current = 0;
          }
        }

        lastScrollY.current = currentY;
        rafRef.current = null;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [isOpen, hidden]);

  return (
    <div
      className={`bg-white overflow-x-hidden fixed top-0 left-0 right-0 w-full font-playfair z-50 transition-transform duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* navbar container */}
      <nav className="py-3 pr-2 max-w-[1800px] w-[90%] mx-auto flex justify-between items-center rounded-sm text-black bg-transparent">
        {/* logo */}
        <div className="flex items-center">
          <img src={logoBlack} className="w-10 h-12" alt="Beauforte logo" />
          <span className="text-xl lg:text-2xl tracking-wider ml-3">
            Beauforte
          </span>
        </div>

        {/* desktop links: visible md and up */}
        <div className="hidden md:block">
          <ul className="flex gap-8 text-lg font-lato">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#Products">Products</a>
            </li>
            <li>
              <a href="#FAQ">FAQ</a>
            </li>
            <li>
              <a href="#Contact-Us">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* hamburger: visible on small screens */}
        <div className="md:hidden block">
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={toggleSidebar}
            className="text-2xl"
          >
            <i className="ri-menu-3-line text-3xl" />
          </button>
        </div>
      </nav>

      {/* MOBILE SIDEBAR (md:hidden so it's only on small screens) */}
      <div
        className={`fixed bg-white top-0 right-0 w-full h-[60vh] flex justify-center pt-14 text-center
          md:hidden transform transition-transform duration-300 z-50
          ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
        role="dialog"
        aria-modal="true"
      >
        {/* close button */}
        <button
          aria-label="Close menu"
          onClick={() => setIsOpen(false)}
          className="absolute right-6 top-6 text-2xl"
        >
          <i className="ri-close-line" />
        </button>

        <ul className="space-y-6 text-xl">
          <li>
            <a href="#Home" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#Products" onClick={() => setIsOpen(false)}>
              Products
            </a>
          </li>
          <li>
            <a href="#FAQ" onClick={() => setIsOpen(false)}>
              FAQ
            </a>
          </li>
          <li>
            <a href="#Contact-Us" onClick={() => setIsOpen(false)}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
