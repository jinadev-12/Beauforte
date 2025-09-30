import React from "react";
import bag from "../Assets/bag-explore.png";
import perfume from "../Assets/perfume-explore.jpg";
import shambo from "../Assets/shambo.jpg";

// things to add 1.hover , 2 button underline

function Explore() {
  return (
    // Explore
    <div className=" bg-[#fff]">
      {/* Container */}
      <div className="w-[90%] m-auto pt-12 max-w-[1800px] pb-20">
        {/* heading and paragrapgh */}
        <div className=" text-center  flex flex-col gap-7">
          <h1 className="font-playfair text-4xl font-medium md:text-5xl lg:text-6xl max-w-[1000px]  m-auto">
            Exclusivity in Every Detail,Timeless Style in Every Wear
          </h1>
          <p className="font-lato  text-gray-900  leading-relaxed tracking-wider lg:text-lg">
            <i class="ri-double-quotes-l"></i>Every piece in our collection is a
            testament to meticulous craftsmanship and thoughtful design. From
            finest materials to the precision in every stitch.
            <i class="ri-double-quotes-r"></i>
          </p>
        </div>

        {/* grid-container */}
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 h-[1200px] md:h-[700px] md:grid-rows-2 mt-16 ">
          {/* Container-A */}
          <div className="relative md:col-span-1 md:row-span-1 overflow-hidden rounded-xl order-2 md:order-1">
            <div
              className="w-full h-full  bg-center bg-cover bg-no-repeat transition-transform duration-[1000ms] ease-in-out transform hover:scale-110 "
              style={{ backgroundImage: `url(${bag})` }}
            ></div>
          </div>

          {/* Container-B */}
          <div className="relative   md:col-span-2 md:row-span-1 overflow-hidden rounded-xl md:rounded-none order-1 md:order-2">
            <div
              className="w-full h-full  bg-center bg-cover bg-no-repeat duration-[1000ms] ease-in-out transition-transform transform hover:scale-110 "
              style={{ backgroundImage: `url(${perfume})` }}
            ></div>
            {/* text on container */}
            <div className="absolute m-auto  top-5 left-10 font-poppins  flex flex-col gap-5">
              {/* heading on product  */}
              <h3 className="text-white text-sm  md:text-lg lg:text-xl font-medium pr-5">
                Experience pieces designed to celebrate passion, inspire
                confidence, and redefine casual luxury.
              </h3>
              {/* button */}
              <a href="" className="text-white hover:underline">
                See Details <i class="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>

          {/* Container-C */}
          <div className="relative md:col-span-2 md:row-span-1 overflow-hidden rounded-xl md:rounded-none order-3">
            <div
              className="w-full h-full  bg-center bg-cover bg-no-repeat transition-transform duration-[1000ms] ease-in-out transform hover:scale-110 "
              style={{ backgroundImage: `url(${shambo})` }}
            ></div>

            {/* text on container */}
            <div className="absolute m-auto  top-5 left-10 font-poppins  flex flex-col gap-5">
              {/* heading on product  */}
              <h3 className="text-white text-sm  md:text-lg lg:text-xl font-medium pr-5">
                Discover products crafted to elevate your style, ignite your
                senses, and celebrate everyday luxury.
              </h3>
              {/* button */}
              <a href="" className="text-white hover:underline">
                Claim Yours <i class="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>

          {/* Container-D */}
          <div className="md:col-span-1 md:row-span-1 overflow-hidden rounded-xl order-4">
            <div className=" relative bg-cover bg-center  overflow-hidden h-full w-full  transition-transform duration-[1000ms] ease-in-out transform hover:scale-110">
              <video
                className=" absolute top-0 left-0 object-cover h-full w-full object-center -z-0"
                src="/video-explore.mp4"
                // if video is in public folder
                autoPlay
                loop
                muted
                playsInline
              />
              {/* overlay */}
              <div className="absolute inset-0 bg-black/60 z-10"></div>

              {/* button */}
              <div className="relative z-50 flex justify-center items-center h-full">
                <button className="  bg-white px-4 py-3 md:text-lg  rounded-lg hover:scale-95">
                  Learn More <i class="ri-arrow-right-line"></i>
                </button>
                {/* <div className='w-full absolute h-1 bg-[#003ee933]'></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
