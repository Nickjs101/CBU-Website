import React from 'react';
import tank from '../assets/PressuredTank.png';
import gauge from '../assets/Guage.png';
import storage from '../assets/Storage.png';

const Products = ({ gotoContact }) => {
  return (
    <section id="products" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center text-red-600 font-bold mb-4">
          Explore Our Premium Water Tank Solutions
        </h2>
        <p className="text-sm md:text-lg text-center mb-24">
        At Untalan Water Tank & Steel Manufacturing, we specialize in high-quality pressurized tanks, durable gauges, and customizable storage tanks. Our products are engineered to meet a wide range of fluid storage needs, ensuring{' '}
          <span className="text-red-600 text-md md:text-xl font-extrabold">Safety</span>,{' '}
          <span className="text-red-600 text-md md:text-xl font-extrabold">Reliability</span>, and{' '}
          <span className="text-red-600 text-md md:text-xl font-extrabold">Efficiency</span>. Whether you need a 12-gallon pressurized tank with a base or a fully customized 525-gallon storage tank, we have the perfect solution for you. Our gauges are available in various sizes, tailored to fit your specific requirements.{' '}
          <span className="text-md md:text-xl text-red-600 font-bold italic">
            Trust UNTALAN for robust and reliable fluid management solutions.
          </span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-8 mt-11">
          {/* Product 1: Pressurized Tank */}
          <div className="relative mx-auto flex flex-col w-80 h-full rounded-xl border-black border-2 bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-neutral-900 flex items-center justify-center">
              <img src={tank} alt="Tank" className="w-auto h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h5 className="mb-2 font-sans text-xl font-semibold text-blue-gray-900">
                PRESSURIZED TANK
              </h5>
              <ul className="list-disc pl-5 font-sans text-base font-light text-inherit">
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
              <div className="flex justify-end items-end mt-auto">
                <button
                  onClick={(e) => gotoContact(e, 'contact')}
                  className="select-none rounded-sm bg-red-500 py-3 px-6 text-center text-xs font-bold uppercase text-white transition-all hover:shadow-xl hover:bg-red-600 focus:opacity-[0.85]"
                >
                  Inquire now
                </button>
              </div>
            </div>
          </div>

          {/* Product 2: Gauge */}
          <div className="relative mx-auto flex flex-col w-80 h-full rounded-xl border-black border-2 bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-neutral-900 flex items-center justify-center">
              <img src={gauge} alt="Gauge" className="w-auto h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h5 className="mb-2 font-sans text-xl font-semibold text-blue-gray-900">
                GAUGE
              </h5>
              <ul className="list-disc pl-5 font-sans text-base font-light text-inherit">
                <li>#18 – 1.0mm</li>
                <li>#16 – 1.3mm</li>
                <li>#15 - 1.5mm</li>
                <li>#14 – 2mm</li>
                <li>#12 - 3mm (Made to order)</li>
                <li>#10</li>
              </ul>
              <div className="flex justify-end items-end mt-auto">
                <button
                  onClick={(e) => gotoContact(e, 'contact')}
                  className="select-none rounded-sm bg-red-500 py-3 px-6 text-center text-xs font-bold uppercase text-white transition-all hover:shadow-xl hover:bg-red-600 focus:opacity-[0.85]"
                >
                  Inquire now
                </button>
              </div>
            </div>
          </div>

          {/* Product 3: Storage Tank */}
          <div className="relative mx-auto flex flex-col w-80 h-full rounded-xl border-black border-2 bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-neutral-900 flex items-center justify-center">
              <img src={storage} alt="Storage Tank" className="w-auto h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h5 className="mb-2 font-sans text-xl font-semibold text-blue-gray-900">
                STORAGE TANK
              </h5>
              <ul className="list-disc pl-5 font-sans text-base font-light text-inherit">
                <li>100 gal</li>
                <li>150 gal</li>
                <li>200 gal</li>
                <li>325 gal</li>
                <li>515 gal</li>
                <li>Customize – 10-45 working days</li>
              </ul>
              <div className="flex justify-end items-end mt-auto">
                <button
                  onClick={(e) => gotoContact(e, 'contact')}
                  className="select-none rounded-sm bg-red-500 py-3 px-6 text-center text-xs font-bold uppercase text-white transition-all hover:shadow-xl hover:bg-red-600 focus:opacity-[0.85]"
                >
                  Inquire now
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Products;
