import React from "react";

function Footer() {
  return (
    <div className="py-24 px-8 md:px-20 lg:px-32 font-lato bg-white">
      {/* container */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 max-w-[1800px] mx-auto leading-relaxed">
        {/* logo */}
        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-playfair 
                     tracking-[0.25em] lg:tracking-[0.35em]
                     bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#8b7500]
                     bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)] 
                     text-center md:text-left mb-12 md:mb-0"
        >
          BEAUFORTE
        </h2>

        {/* info */}
        <div className="info flex flex-col gap-10 text-sm md:text-base lg:text-lg font-light tracking-wide">
          {/* address */}
          <div className="space-y-2">
            <p className="uppercase text-xs md:text-sm lg:text-base">Address</p>
            <p>123 Avenue des Champs-Élysées</p>
            <p>Paris, Île-de-France 75008</p>
            <p>France</p>
          </div>

          {/* social */}
          <div className="space-y-2">
            {/* <p className="uppercase">Social</p> */}
            <p>Instagram</p>
            <p>LinkedIn</p>
            <p>Whatsapp</p>
          </div>

          {/* license and other */}
          <div>
            <p>License and more</p>
          </div>
        </div>

        {/* lets talk */}
        <div className="lettalk md:col-span-2 mt-16">
          <p className="font-light tracking-wide mb-6 text-sm md:text-base lg:text-lg">
            Got an Idea in Mind?
          </p>
          <div className="flex items-center justify-between border-t border-gray-300 pt-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-[0.15em] lg:tracking-[0.25em] font-playfair">
              LET'S TALK
            </h2>
            <i className="ri-arrow-right-up-line text-5xl md:text-6xl lg:text-7xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
