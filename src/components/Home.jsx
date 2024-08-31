import React from 'react';
import product1 from '../assets/welder.png'// Adjust the path as needed
import logo from '../assets/Logo.png';

const Home = ({gotoContact}) => {
  return (
    <section id="home" className="bg-cover bg-center h-screen text-neutral-100" style={{ backgroundImage: `url(${product1})` }}>
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
        <img src={logo} alt='Logo' className='absolute left-0 w-[500px] opacity-30' />
        <h1 className="text-xl md:text-2xl lg:text-4xl md:w-10/12 font-bold mb-4 z-10 text-center">High-Quality Water Tanks for Every Need</h1>
        <h1 className="text-4xl lg:text-7xl md:w-10/12 font-bold mb-4 z-10 text-center">Durable, Reliable, and Built to Last</h1>
        <p className=" lg:text-2xl mb-8 z-10 text-center">Discover a comprehensive selection of premium water tanks, engineered for residential, commercial, and industrial applications. Our tanks ensure reliable storage, exceptional durability, and superior performance.</p>
        <a href="#products" onClick={(e) => gotoContact(e, 'contact')} className="border-2 font-bold hover:bg-neutral-100 hover:text-black px-6 py-3 z-10">GET A QUOTE</a>
      </div>
    </section>
  );
};

export default Home;
