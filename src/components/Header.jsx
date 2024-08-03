import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-black/40 to-black/0 text-white px-4 py-4  fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center text-gray-700">
            <h1 className='text-3xl font-bold text-white hidden lg:block'>CBU Water Tank Manufacturing</h1>
        </a>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#products" className="hover:underline">Products</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#process" className="hover:underline">Our Process</a></li>
            <li><a href="#clients" className="hover:underline">Clients</a></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
