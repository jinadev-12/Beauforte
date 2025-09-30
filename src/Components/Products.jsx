import React from "react";
import perfume from "../Assets/product-perfume.png";
import shoe from "../Assets/product-shoe.png";
import bag from "../Assets/product-bag.png";
import purse from "../Assets/product-purse.png";


function Products() {
  return (
    <div id="Products" className="pt-28 pb-16 font-lato">
      {/* container */}
      <div className="flex flex-col gap-12 px-8 max-w-[1800px] mx-auto">
        {/* head */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair">
              OUR PRODUCTS
            </h3>
            <p className="texl-sm md:text-base font-light">All collection</p>
          </div>
          <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors">
            SHOP NOW
          </button>
        </div>

        {/* product wrapper */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {/* Product 1 */}
          <div className="bg-white flex flex-col items-center">
            <div className="w-full aspect-[3/4] overflow-hidden  mb-2">
              <img
                src={perfume}
                alt="Luxury Perfume"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col text-center">
              <h4 className="text-sm font-normal mb-1">Luxury Perfume</h4>
              <p className="text-gray-700 text-sm mb-1">₹14,900</p>
            </div>
            <div className="flex gap-2 items-center text-xs invisible">
              <span>XS</span>
              <span>S</span>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
              <span>XXL</span>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white flex flex-col items-center">
            <div className="w-full aspect-[3/4] overflow-hidden  mb-3">
              <img
                src={bag}
                alt="Stylish Handbag"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col text-center">
              <h4 className="text-sm font-normal mb-1">Stylish Handbag</h4>
              <p className="text-gray-700 text-sm mb-1">₹18,500</p>
            </div>
            <div className="flex gap-2 items-center text-xs invisible">
              <span>XS</span>
              <span className="text-gray-400/70">S</span>
              <span>M</span>
              <span className="text-gray-400/70">L</span>
              <span>XL</span>
              <span>XXL</span>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white flex flex-col items-center">
            <div className="w-full aspect-[3/4] overflow-hidden  mb-3">
              <img
                src={purse}
                alt="Exclusive Cologne"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col text-center">
              <h4 className="text-sm font-normal mb-1">Exclusive Cologne</h4>
              <p className="text-gray-700 text-sm mb-1">₹16,200</p>
            </div>
            <div className="flex gap-2 items-center text-xs invisible">
              <span>XS</span>
              <span>S</span>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
              <span>XXL</span>
            </div>
          </div>
          {/* Product 4 */}
          <div className="bg-white flex flex-col items-center">
            <div className="w-full aspect-[3/4] overflow-hidden  mb-3">
              <img
                src={shoe}
                alt="Elegant Shoes"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col text-center">
              <h4 className="text-sm font-normal mb-1">Elegant Shoes</h4>
              <p className="text-gray-700 text-sm mb-1">₹12,900</p>
            </div>
            <div className="flex gap-2 items-center text-xs">
              <span>XS</span>
              <span className="text-gray-400">S</span>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
              <span className="text-gray-400">XXL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
