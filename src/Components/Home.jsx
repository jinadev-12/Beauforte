import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import heroBG from "../Assets/heroBG.png";


function Hero() {

  const sectionRef = useRef(null);
  const mainRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // bgimage
      gsap.fromTo(
        mainRef.current,
        {scale: 1.06, autoAlpha: 0 }, // start
        {
          
          scale: 1.0,
          autoAlpha: 1, // end
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // title

gsap.fromTo(
  titleRef.current,
  { scale: 1.06, autoAlpha: 0 }, // start
  {
    scale: 1.0,
    autoAlpha: 1, // end
    duration: 1,
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 80%",
    },
  }
);

    }, sectionRef);
  }, []);
  return (
    <div
      id="Home"
      className=" overflow-x-hidden relative h-screen w-full font-playfair "
    >
      {/* Background */}
      <img
        ref={mainRef}
        src={heroBG}
        alt="Beauforte Luxury Background"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      {/* Overlay (dark gradient for readability) */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      {/* container */}
      <div className="flex h-[100vh] w-[90%] mx-auto items-center lg:items-end justify-start">
        {/* content */}
        <div className="text-center lg:text-left max-w-2xl lg:max-w-full mx-auto w-full lg:mb-24 lg:pl-32">
          {/* title div*/}
          <div>
            <div className="text-5xl md:text-7xl lg:text-9xl font-extralight text-gray-100">
              <span className="lg:relative lg:right-32">
                Timeless <br className="md:hidden" />
                <span className="text-gray-500">Design,</span>
              </span>
              <br className="hidden md:block" />
              Modern <br className="md:hidden" />
              Freedom.
            </div>
          </div>
          {/* para div*/}
          <div className="flex flex-col items-center lg:flex-row justify-between w-full">
            <p className="mt-6 lg:mt-0 text-lg md:text-xl text-gray-400 font-lato">
              Where creativity meets elegance.{" "}
              <br className="hidden md:block" /> Discover luxury crafted for
              timeless style.
            </p>
            <p className="mt-6 text-base lg:text-xl md:text-lg text-white font-lato border-b-[1px] border-gold pb-[0.5px] cursor-pointer">
              Step In
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
