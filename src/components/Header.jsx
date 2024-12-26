import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import logo from '../assets/Logo.png'


const Header = () => {

  const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const gotoSection = (event, id) => {
        event.preventDefault();
        const section = document.getElementById(id);
        // const navbarHeight = document.querySelector('#header').offsetHeight; // get the navbar height
        window.scrollTo({
          top: section.offsetTop, // adjust the scroll position
          behavior: 'smooth',
        });
    }

  return (
    <header id='header' className="bg-gradient-to-b from-black/70 to-black/0 text-white px-4 py-2  fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-start flex-col -space-y-2 text-gray-700">
          {/* <img src={Untalan} className='h-[50px] mr-2' alt="" /> */}
          <h1 className='hidden md:block font-bold text-white name-clamp'><span className='text-red-500 text-4xl'>UNTALAN</span></h1> 
          <h1 className='hidden md:block text-sm font-bold text-white name-clamp'>Water Tank & Steel Manufacturing</h1> 
      
        </a>
        <nav className='w-auto'>
          <ul className="hidden lg:flex gap-4 font-bold font-sans">
            <li className="navbutton"><a href="#home" onClick={(e) => gotoSection(e, 'home')} >Home</a></li>
            <li className="navbutton"><a href="#about" onClick={(e) => gotoSection(e, 'about')} >About Us</a></li>
            <li className="navbutton"><a href="#products" onClick={(e) => gotoSection(e, 'products')} >Products</a></li>
            <li className="navbutton"><a href="#projects" onClick={(e) => gotoSection(e, 'projects')} >Projects</a></li>
            <li className="navbutton"><a href="#process" onClick={(e) => gotoSection(e, 'process')} >Our Process</a></li>
            <li className="navbutton"><a href="#clients" onClick={(e) => gotoSection(e, 'clients')} >Clients</a></li>
            <li className="navbutton"><a href="#contact" onClick={(e) => gotoSection(e, 'contact')} >Contact Us</a></li>
          </ul>
          <div onClick={handleNav} className='block lg:hidden mr-6'>
                    {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
          </div>

          <div
            className={
              nav
                ? 'fixed left-0 top-0 h-full w-[60%] bg-neutral-800 border border-white/20 z-10 ease-in-out duration-500'
                : 'fixed left-[-100%]'
            }
          >
                    <h1 className=' block md:hidden text-2xl font-bold primary-color ml-6 mt-6 text-red-500'><img src={logo} className='h-[60px] inline mr-2' alt="" />UNTALAN</h1>
                    <h1 className=' hidden md:block text-2xl font-bold primary-color ml-6 mt-6'><img src={logo} className='h-[60px] inline mr-2' alt="" />UNTALAN Water Tanks</h1>
                    
                    <ul className='p-8 text-2xl font-sans'>
                      <li className="navbutton p-2"><a href="#home" onClick={(e) => {gotoSection(e, 'home'); handleNav();}} >Home</a></li>
                      <hr />
                      <li className="navbutton p-2"><a href="#about" onClick={(e) => {gotoSection(e, 'about'); handleNav();}} >About Us</a></li>
                      <hr />
                      <li className="navbutton p-2"><a href="#products" onClick={(e) => {gotoSection(e, 'products'); handleNav();}} >Products</a></li>
                      <hr />
                      <li className="navbutton p-2"><a href="#projects" onClick={(e) => {gotoSection(e, 'projects'); handleNav();}} >Projects</a></li>
                      <hr />
                      <li className="navbutton p-2"><a href="#process" onClick={(e) => {gotoSection(e, 'process'); handleNav();}} >Our Process</a></li>
                      <hr />
                      <li className="navbutton p-2"><a href="#clients" onClick={(e) => {gotoSection(e, 'clients'); handleNav();}} >Clients</a></li>
                      <hr />
                      <li className="navbutton p-2"><a href="#contact" onClick={(e) => {gotoSection(e, 'contact'); handleNav();}} >Contact Us</a></li>
                    </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
