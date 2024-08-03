import React from 'react';
import tank from '../assets/PressuredTank.png'
import guage from '../assets/Guage.png'
import storage from '../assets/Storage.png'

const Products = () => {
  return (
    <section id="products" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-11">
          {/* Example product card */}
            <div class="relative flex w-80 flex-col rounded-xl bg-[#f5f5dc] bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
                  <img src={tank} alt="Tank" className="w-auto h-full object-cover" />
                </div>

                <div class="p-6">
                    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    PRESSURIZED TANK
                    </h5>
                    <ul class="list-disc pl-5 font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        <li>½ of 82gal</li>
                        <li>12gal with base</li>
                        <li>21gal plain</li>
                        <li>21gal with base</li>
                        <li>42gal</li>
                        <li>82gal</li>
                        <li>120gal</li>
                        <li>315gal</li>
                        <li>525gal</li>
                    </ul>
                </div>
            </div>

            <div class="relative flex w-80 flex-col rounded-xl bg-[#f5f5dc] bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
                    <img src={guage} alt="Tank" className="w-auto h-full object-cover" />
                </div>
                <div class="p-6">
                    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    GUAGE
                    </h5>
                    <ul class="list-disc pl-5 font-sans text-base font-light leading-relaxed text-inherit antialiased">
                      <li>#18 – 1.0mm</li>
                      <li>#16 – 1.3mm</li>
                      <li>#15 - 1.5mm</li>
                      <li>#14 – 2mm</li>
                      <li>#12 - 3mm (Made to order)</li>
                      <li>#10</li>
                    </ul>
                </div>
            </div>

            <div class="relative flex w-80 flex-col rounded-xl bg-[#f5f5dc] bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
                    <img src={storage} alt="Tank" className="w-auto h-full object-cover" />
                </div>
                <div class="p-6">
                    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    STORAGE TANK
                    </h5>
                    <ul class="list-disc pl-5 font-sans text-base font-light leading-relaxed text-inherit antialiased">
                      <li>100 gal</li>
                      <li>150 gal</li>
                      <li>200 gal</li>
                      <li>325 gal</li>
                      <li>515 gal</li>
                      <li>Customize – 10-45 working days</li>
                    </ul>
                </div>
            </div>
          {/* Repeat for other products 

            <div class="relative flex flex-col gap-3 p-4 w-56 bg-gray-200 rounded-xl">
              <div class="relative z-5 w-full h-32 overflow-hidden bg-purple-900 rounded-md cursor-pointer">
                <img src={tank} alt="Tank" className="w-auto h-full object-cover" />
              </div>
              <div class="overflow-hidden w-full text-gray-900">
                <span class="text-xl font-semibold capitalize truncate">PRESSURIZED TANK</span>
              </div>
              <div class="text-sm text-gray-700">
                <span>Size</span>
                <ul class="flex items-center gap-1 mt-1 flex-wrap">
                  <li class="list-none"><button class="p-2 bg-gray-900 text-gray-300 text-xs rounded-md border-2 border-gray-900 transition-all duration-300 ease-in-out hover:border-gray-300 focus:bg-purple-700 focus:border-purple-800 focus:shadow-inner">½ of 82gal</button></li>
                  <li class="list-none"><button class="p-2 bg-gray-900 text-gray-300 text-xs rounded-md border-2 border-gray-900 transition-all duration-300 ease-in-out hover:border-gray-300 focus:bg-purple-700 focus:border-purple-800 focus:shadow-inner">12gal w/ base</button></li>
                  <li class="list-none"><button class="p-2 bg-gray-900 text-gray-300 text-xs rounded-md border-2 border-gray-900 transition-all duration-300 ease-in-out hover:border-gray-300 focus:bg-purple-700 focus:border-purple-800 focus:shadow-inner">21gal</button></li>
                  <li class="list-none"><button class="p-2 bg-gray-900 text-gray-300 text-xs rounded-md border-2 border-gray-900 transition-all duration-300 ease-in-out hover:border-gray-300 focus:bg-purple-700 focus:border-purple-800 focus:shadow-inner">21gal with base</button></li>
                  <li class="list-none"><button class="p-2 bg-gray-900 text-gray-300 text-xs rounded-md border-2 border-gray-900 transition-all duration-300 ease-in-out hover:border-gray-300 focus:bg-purple-700 focus:border-purple-800 focus:shadow-inner">42gal</button></li>
                  <li class="list-none"><button class="p-2 bg-gray-900 text-gray-300 text-xs rounded-md border-2 border-gray-900 transition-all duration-300 ease-in-out hover:border-gray-300 focus:bg-purple-700 focus:border-purple-800 focus:shadow-inner">82gal</button></li>
                  <li class="list-none"><button class="p-2 bg-gray-900 text-gray-300 text-xs rounded-md border-2 border-gray-900 transition-all duration-300 ease-in-out hover:border-gray-300 focus:bg-purple-700 focus:border-purple-800 focus:shadow-inner">120gal</button></li>
                  <li class="list-none"><button class="p-2 bg-gray-900 text-gray-300 text-xs rounded-md border-2 border-gray-900 transition-all duration-300 ease-in-out hover:border-gray-300 focus:bg-purple-700 focus:border-purple-800 focus:shadow-inner">315gal</button></li>
                  <li class="list-none"><button class="p-2 bg-gray-900 text-gray-300 text-xs rounded-md border-2 border-gray-900 transition-all duration-300 ease-in-out hover:border-gray-300 focus:bg-purple-700 focus:border-purple-800 focus:shadow-inner">525gal</button></li>
                </ul>
              </div>
              <div class="flex items-center gap-4">
                <button class="flex justify-center items-center gap-1 p-2 w-full bg-gradient-to-r from-purple-700 to-gray-300 text-gray-300 text-xs font-medium border-2 border-purple-700/50 rounded-md shadow-inner">
                  <svg class="w-4" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" stroke-linejoin="round" stroke-linecap="round"></path>
                  </svg>
                  <span>Add to cart</span>
                </button>
              </div>
            </div>*/}

        </div>
      </div>
    </section>
  );
};

export default Products;
