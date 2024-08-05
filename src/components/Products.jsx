import React from 'react';
import tank from '../assets/PressuredTank.png'
import guage from '../assets/Guage.png'
import storage from '../assets/Storage.png'

const Products = ({gotoContact}) => {
  return (
    <section id="products" className="py-16 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-5xl text-center text-red-600 font-bold mb-4">What we offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-8 mt-11">
          {/* Example product card */}
            <div class="relative mx-auto flex w-80 flex-col rounded-xl border-black border-2 bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-neutral-900 flex items-center justify-center">
                  <img src={tank} alt="Tank" className="w-auto h-full object-cover" />
                </div>

                <div class="p-6">
                    <h5 class=" mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
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
                <div class="absolute bottom-0 right-0 p-6 pt-0">
                  <button  onClick={(e) => gotoContact(e, 'contact')} data-ripple-light="true" type="button" class="select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Inquire now
                  </button>
                </div>
            </div>

            <div class="relative mx-auto flex w-80 flex-col rounded-xl border-black border-2 bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-neutral-900 flex items-center justify-center">
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
                <div class="absolute bottom-0 right-0 p-6 pt-0">
                  <button  onClick={(e) => gotoContact(e, 'contact')} data-ripple-light="true" type="button" class="select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Inquire now
                  </button>
                </div>
            </div>

            <div class="relative mx-auto flex w-80 flex-col rounded-xl border-black border-2 bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-neutral-900 flex items-center justify-center">
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
                <div class="absolute bottom-0 right-0 p-6 pt-0">
                  <button  onClick={(e) => gotoContact(e, 'contact')} data-ripple-light="true" type="button" class="select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Inquire now
                  </button>
                </div>
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default Products;
