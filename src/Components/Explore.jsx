import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import img1 from "../Assets/explore1.jpg";
import img2 from "../Assets/explore2.jpg";
import img3 from "../Assets/explore3.jpg"; // will now be used for container D
import img4 from "../Assets/explore4.jpg"; // unused, can keep if needed

function Explore() {
  const exploreRef = useRef(null);
  const titleRef = useRef(null);
  const cont1Ref = useRef(null);
  const cont2Ref = useRef(null);
  const cont3Ref = useRef(null);
  const cont4Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // title
      gsap.fromTo(
        titleRef.current,
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          scrollTrigger: {
            trigger: exploreRef.current,
            start: "top 70%",
          },
        }
      );

      // container-1
      gsap.fromTo(
        cont1Ref.current,
        { y: -60, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: exploreRef.current,
            start: "top 25%",
          },
        }
      );

      // container-2
      gsap.fromTo(
        cont2Ref.current,
        { x: 60, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: exploreRef.current,
            start: "top 25%",
          },
        }
      );

      // container-3
      gsap.fromTo(
        cont3Ref.current,
        { x: -60, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: exploreRef.current,
            start: "top 1%",
          },
        }
      );

      // container-4
      gsap.fromTo(
        cont4Ref.current,
        { y: 60, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: exploreRef.current,
            start: "top 1%",
          },
        }
      );
    }, exploreRef);
  }, []);

  return (
    <div
      ref={exploreRef}
      className=" overflow-x-hidden py-20 px-4 sm:px-8 lg:px-32 font-lato"
    >
      <div className=" mx-auto max-w-[1800px]">
        {/* heading */}
        <div className="text-center flex flex-col gap-7">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl text-center text-gray-900 tracking-wide p-4 font-playfair"
          >
            Exclusivity in Every Detail,
            <br /> Timeless Style in Every Wear
          </h2>
        </div>

        {/* grid-container */}
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 h-[1200px] md:h-[500px] md:grid-rows-2 mt-6">
          {/* Container-A */}
          <div
            ref={cont1Ref}
            className="relative md:col-span-1 md:row-span-1 overflow-hidden order-2 md:order-1"
          >
            <div
              className="w-full h-full bg-center bg-cover bg-no-repeat transition-transform duration-[1000ms] ease-in-out transform hover:scale-110"
              style={{ backgroundImage: `url(${img1})` }}
            ></div>
          </div>

          {/* Container-B */}
          <div
            ref={cont2Ref}
            className="relative md:col-span-2 md:row-span-1 overflow-hidden order-1 md:order-2"
          >
            <div
              className="w-full h-full bg-center bg-cover bg-no-repeat duration-[1000ms] ease-in-out transition-transform transform hover:scale-110"
              style={{ backgroundImage: `url(${img2})` }}
            ></div>
            <div className="absolute m-auto top-5 left-10 font-poppins flex flex-col gap-2 uppercase">
              <h3 className="text-white text-sm md:text-lg font-light max-w-lg">
                Experience pieces designed to celebrate passion, inspire
                confidence, and redefine casual luxury.
              </h3>
              <a href="#" className="text-white hover:underline font-light">
                See details <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>

          {/* Container-C */}
          <div
            ref={cont3Ref}
            className="relative md:col-span-2 md:row-span-1 overflow-hidden order-3"
          >
            <div
              className="w-full h-full bg-center bg-cover bg-no-repeat transition-transform duration-[1000ms] ease-in-out transform hover:scale-110"
              style={{ backgroundImage: `url(${img4})` }}
            ></div>
            <div className="absolute m-auto top-5 left-10 font-poppins flex flex-col gap-2 uppercase">
              <h3 className="text-white text-sm md:text-lg font-light max-w-lg">
                Discover products crafted to elevate your style, ignite your
                senses, and celebrate everyday luxury.
              </h3>
              <a href="#" className="text-white hover:underline font-light">
                claim yours <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>

          {/* Container-D (uses img3) */}
          <div
            ref={cont4Ref}
            className="relative md:col-span-1 md:row-span-1 overflow-hidden order-4"
          >
            <div
              className="relative bg-cover bg-center overflow-hidden h-full w-full transition-transform duration-[1000ms] ease-in-out transform hover:scale-110"
              style={{ backgroundImage: `url(${img3})` }}
            >
              <div className="absolute inset-0 bg-black/60 z-10"></div>

              <div className="relative z-50 flex justify-center items-center h-full uppercase">
                <button className="relative z-50 overflow-hidden px-6 py-3 md:text-lg font-medium text-black bg-[#f4f4f4] transition-all duration-500 group">
                  <span className="relative z-10 flex items-center gap-2 transition-all group-hover:text-white">
                    Learn more <i className="ri-arrow-right-line text-xl"></i>
                  </span>
                  <div className="absolute inset-0 bg-black scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 rounded-full"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
