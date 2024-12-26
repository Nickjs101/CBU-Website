import React from 'react';
import product1 from '../assets/welder.png'// Adjust the path as needed
import logo from '../assets/logowhite.png';

const Home = ({gotoContact}) => {
  return (
    // <section id="home" className="bg-cover bg-center h-screen text-neutral-100" style={{ backgroundImage: `url(${product1})` }}>
    //   <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
    //     <img src={logo} alt='Logo' className='absolute left-0 w-[500px] opacity-30' />
    //     <h1 className="text-xl md:text-2xl lg:text-4xl md:w-10/12 font-bold mb-4 z-10 text-center">High-Quality Water Tanks for Every Need</h1>
    //     <h1 className="text-4xl lg:text-7xl md:w-10/12 font-bold mb-4 z-10 text-center">Durable, Reliable, and Built to Last</h1>
    //     <p className=" lg:text-xl mb-8 z-10 text-center">Discover a comprehensive selection of premium water tanks, engineered for residential, commercial, and industrial applications. Our tanks ensure reliable storage, exceptional durability, and superior performance.</p>
    //     <a href="#products" onClick={(e) => gotoContact(e, 'contact')} className="bg-red-700 font-bold  px-10 py-3 z-10">GET A QUOTE</a>
    //   </div>
    // </section>

    <section id="home" className="bg-cover bg-center h-screen text-neutral-100" style={{ backgroundImage: `url(${product1})` }}>
      <div className="bg-black bg-opacity-50 h-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center">
        <div className='flex flex-col justify-evenly h-full p-8 md:p-20 lg:pr-0 lg:pl-20 xl:p-20 z-10'>
          <div className=''>
            <h1 className="text-neutral-100 text-xl lg:text-2xl font-bold mb-4">Makers of High Quality Pressurized and Storage Tanks</h1>
            <h1 className="text-neutral-100 text-6xl lg:text-7xl  font-bold mb-4 z-10 ">Durable, Reliable, and Built to Last</h1>
          </div>
          <div className=''>
            <p className="text-neutral-300 lg:text-xl mb-8 z-10 ">Discover a comprehensive selection of premium water tanks, engineered for residential, commercial, and industrial applications. Our tanks ensure reliable storage, exceptional durability, and superior performance.</p>
            <a href="#products" onClick={(e) => gotoContact(e, 'contact')} className="bg-red-700 font-bold px-10 py-3 z-10">GET A QUOTE</a>
          </div>
        </div>
        <div className='absolute lg:relative h-full w-full flex justify-center items-center'>
          <img src={logo} alt='Logo' className='w-[500px] lg:w-[600px] opacity-20 lg:opacity-40' />
        </div>
        
        
        
        
      </div>
    </section>
  );
};

export default Home;
