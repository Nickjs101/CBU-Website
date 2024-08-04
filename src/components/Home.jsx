import React from 'react';
import product1 from '../assets/welder.png'; // Adjust the path as needed
import logo from '../assets/Logo.png';

const Home = ({gotoContact}) => {
  return (
    <section id="home" className="bg-cover bg-center h-screen text-white" style={{ backgroundImage: `url(${product1})` }}>
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
        <img src={logo} alt='Logo' className='absolute left-0 w-[500px] opacity-40' />
        <h1 className="text-5xl font-bold mb-4 z-10 text-center">Makers of High Quality Pressurized and Storage Tanks</h1>
        <p className="text-2xl mb-8 z-10">since 1988</p>
        <a href="#products" onClick={(e) => gotoContact(e, 'contact')} className="bg-red-600 px-6 py-3 rounded z-10">Get a Quote</a>
      </div>
    </section>
  );
};

export default Home;
