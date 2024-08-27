import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Testimonial = ({name, message, title, image}) => {
  return (
    <div className="w-full py-8">
      <div className="bg-white max-w-[1200px] h-auto md:h-[90vh] mx-auto shadow-xl flex flex-col md:flex-row pt-8 md:pt-0">
        <div className=" p-0 md:w-2/3 flex flex-col justify-center items-center md:items-start">
            <div className="bg-contain bg-center relative w-[150px] h-[150px] md:w-1/3 rounded-full flex md:hidden"style={{backgroundImage: `url(${image})`,}}>
            </div>
            <div className="text-center md:text-left px-4 md:px-24 my-8 md:mb-8 lg:mb-20">
                <p className="text-2xl md:text-3xl text-gray-600 font-serif">
                    {message}
                </p>
            </div>
            <div className='px-24 text-center md:text-left '>
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{name}</p>
                <p className="text-sm md:text-md lg:text-lg uppercase tracking-widest text-gray-400">{title}</p>
            </div>
        </div>
        <div
          className="bg-cover bg-center relative md:w-1/3 hidden md:flex"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
            <div className="absolute -left-14 bottom-40 bg-[#c82424] text-white text-[100px] rounded-full w-24 h-24 p-4 flex items-center justify-center">
                <FontAwesomeIcon icon="fa-solid fa-quote-left" size='2xs' style={{color: "#ffffff",}} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
