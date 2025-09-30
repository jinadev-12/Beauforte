import React from "react";

import stickyComponent from "../Assets/sticky-image.png";
import perfume from "../Assets/sticky-perfume.png";
import bag from "../Assets/sticky-bag.png";
import belt from "../Assets/sticky-belt.png";
import jacket from "../Assets/sticky-md-jacket.png";



function Sticky() {
  return (
    <div className="max-w-[1800px] mx-auto">
      {/* container */}
      <div className="flex flex-col md:flex-row gap-0 md:gap-2 mt-16 ">
        {/* LEFT: sticky image */}
        <div className="w-full object-contain md:w-1/2 md:relative">
          <div className="md:sticky md:top-[5vh] md:h-[90vh] ">
            <img
              src={stickyComponent}
              alt="Luxury Product"
              className="w-full  md:h-[90vh] object-cover max-h-[400px] md:max-h-none"
            />
          </div>
        </div>

        {/* RIGHT: first big image (bag) */}
        <div className="w-full md:w-1/2 pb-16">
          <div className="h-[100vh] md:h-[90vh]">
            <img
              src={bag}
              className="w-full h-[100vh] md:h-[90vh] object-cover"
              alt="Luxury Bag"
            />
          </div>

          {/* content text below */}
          <div className="py-16 px-8 font-lato tracking-wide">
            <p className="text-lg lg:text-xl mb-4">
              EXQUISITE LUXURY COLLECTION
            </p>
            <h2 className="text-4xl lg:text-5xl font-playfair mb-6">
              Curated Elegance <br />
              for the Discerning
            </h2>
            <p className="font-[300] text-base lg:text-lg mb-4">
              Immerse yourself in a world where sophistication meets
              craftsmanship. Our collection of bags, perfumes, and heels
              embodies timeless elegance for every occasion.
            </p>
            <p className="font-[300] text-base lg:text-lg">
              Each piece is meticulously designed to offer not only style but
              also unparalleled quality, creating a luxurious experience for
              those who appreciate the finer things in life.
            </p>
          </div>

          {/* small image */}
          <div className="flex justify-end relative right-16 pt-12">
            <img
              className="w-32 lg:w-40" // grows from 8rem → 10rem at lg
              src={perfume}
              alt="Luxury Perfume"
            />
          </div>

          {/* md middle */}
          <div className="flex justify-end">
            <img
              src={jacket}
              className="w-3/5 pt-24 max-h-[520px] max-w-[400px] object-cover"
            />
          </div>

          {/* more content... */}
          <div className="py-16 px-8 font-lato tracking-wide">
            <p className="text-lg lg:text-xl mb-4">THE ART OF LUXURY</p>
            <h2 className="text-4xl lg:text-5xl font-playfair mb-6">
              Premium Style <br />
              Redefined
            </h2>
            <p className="font-[300] text-base lg:text-lg mb-4">
              From statement heels to exquisite accessories, each item is a
              testament to craftsmanship and attention to detail. Experience
              elegance that lasts beyond trends.
            </p>
            <p className="font-[300] text-base lg:text-lg">
              Elevate your wardrobe with pieces that capture the essence of
              modern luxury, designed for those who value sophistication and
              distinction.
            </p>
          </div>

          {/* small image */}
          <div className="flex justify-end relative right-16 pt-12">
            <img
              className="w-32 lg:w-40" // grows from 8rem → 10rem at lg
              src={belt}
              alt="Luxury Perfume"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sticky;
