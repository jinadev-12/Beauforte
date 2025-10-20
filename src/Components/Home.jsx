import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import heroBG from "../Assets/homeBg2.jpg"; // same luxury background

function LuxuryHomeSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { autoAlpha: 0, y: 60 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="LuxuryHome"
      className="relative w-full h-[100vh] overflow-hidden font-playfair text-gray-100"
    >
      {/* Background Image */}
      <img
        src={heroBG}
        alt="Luxury Home Background"
        className="absolute inset-0 -z-10 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative h-full z-10 flex flex-col items-center justify-center px-6 text-center pt-44"
      >
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight uppercase tracking-wider">
          {/* Gold gradient for DESIGN */}
          <div className="bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#8b7500] bg-clip-text text-transparent">
            {/* White gradient for TIMELESS */}
            <span className="bg-gradient-to-r from-white via-[#e0e0e0] to-[#bfbfbf] bg-clip-text text-transparent">
              TIMELESS
            </span>{" "}
            DESIGN,
          </div>

          {/* White gradient for MODERN FREEDOM */}
          <div className="bg-gradient-to-r from-white via-[#e0e0e0] to-[#bfbfbf] bg-clip-text text-transparent">
            MODERN FREEDOM.
          </div>
        </h2>

        {/* Paragraph */}
        <p className="mt-6 text-base md:text-lg max-w-3xl text-neutral-400 font-lato leading-relaxed">
          Indulge in an experience where artistry meets innovation. Our spaces
          redefine luxury — blending timeless craftsmanship with the freedom of
          modern living.
        </p>

        {/* Luxury Button */}
        <button
          className="mt-8 px-6 py-3 md:px-8 md:py-4 font-lato tracking-[0.2em] text-sm uppercase rounded 
  bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#8b7500] 
  text-black font-medium 
  shadow-[0_0_25px_rgba(212,175,55,0.3)] 
  hover:scale-105 transition-all duration-300 ease-out"
        >
          Explore Luxury
        </button>
      </div>
    </section>
  );
}

export default LuxuryHomeSection;
