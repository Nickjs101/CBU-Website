import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-black/70 to-black/0 text-white px-4 py-4  fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center text-gray-700">
            <h1 className='text-3xl font-bold text-white hidden lg:block'>CBU Water Tank Manufacturing</h1>
        </a>
        <nav>
          <ul className="flex space-x-4">
            <li className="navbutton"><a href="#home" >Home</a></li>
            <li className="navbutton"><a href="#about" >About Us</a></li>
            <li className="navbutton"><a href="#products" >Products</a></li>
            <li className="navbutton"><a href="#projects" >Projects</a></li>
            <li className="navbutton"><a href="#process" >Our Process</a></li>
            <li className="navbutton"><a href="#clients" >Clients</a></li>
            <li className="navbutton"><a href="#contact" >Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
