import React from 'react';
import factorywarehouse from '../assets/Owners.jpg'
import mission from '../assets/Mission.jpg'

import owner from '../assets/owner.jpg'
import founder from '../assets/founder.jpg'

import Message from '../components/Message';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const About = ({gotoContact}) => {
  const points = [
    "Premium-grade, long-lasting materials",
    "Tailored solutions for every need",
    "Trusted by thousands of satisfied clients",
    "Backed by decades of expertise and innovation"
  ];
  return (
    <section >
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
            {points.map((point, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <FontAwesomeIcon 
                  icon={faCheckCircle} 
                  className="text-green-500 text-4xl mb-4"
                />
                <p className="text-lg font-semibold">{point}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="#products" onClick={(e) => gotoContact(e, 'projects')} className="bg-red-700 text-white font-bold px-10 py-4 my-8 z-10">Explore Our Products</a>
          </div>
        </div>
      </div>

      <div  id="about" className="w-full h-auto mx-auto md:mb-0">

            {/* About */}
            <div
              className='w-full h-auto xl:h-screen text-neutral-800 flex gap-4 bg-center bg-contain md:bg-cover bg-no-repeat mb-20'
              style={{ backgroundImage: `url(${factorywarehouse})` }}>
              <div className='w-full h-full bg-neutral-900 lg:bg-transparent lg:bg-gradient-to-r from-black/90 to-black/0 py-8 flex flex-col'>
                <div className='h-auto w-full lg:w-3/5 xl:w-2/5 pl-4 lg:pl-16 md:my-auto text-neutral-200'>
                  <h2 className="article-h font-bold mb-4">About Untalan Water Tank & Steel Manufacturing</h2>
                  <ul className='w-[400px] mb-4 contents space-y-3'>
                    <li>
                    Untalan Water Tank & Steel Manufacturing is a family-owned business with a proud legacy of delivering top-quality water storage solutions across the Philippines. Founded in 1988 as BLU Untalan Company in Angeles City, we have established ourselves as a trusted name in the industry for over three decades.
                    </li>
                    <li>
                    In 1995, we expanded our horizons by rebranding as Untalan Water Tank & Steel Manufacturing and launching a state-of-the-art factory dedicated to crafting durable and reliable water tanks. This pivotal moment marked our evolution into one of the Philippines' leading water tank manufacturers.
                    </li>
                    <li>
                    By 1996, our unwavering commitment to quality and customer satisfaction allowed us to extend our reach nationwide, serving a diverse range of residential, commercial, and industrial clients. Today, we continue to innovate and expand, offering a comprehensive selection of water storage solutions tailored to meet the unique needs of our customers.
                    </li>
                    <li>
                    With a rich history of excellence and a forward-looking approach, Untalan Water Tank & Steel Manufacturing remains your go-to partner for all your water storage needs, ensuring reliable solutions that stand the test of time.
                    </li>
                  </ul>
                  
                </div>
                <img className='w-full h-auto mt-4 block lg:hidden px-4' src={factorywarehouse} alt="" />
                
              </div>
              
            </div>
      </div>


      {/* Owners Message */}
      <Message name="Benigno Lazaro Untalan" message='“Success is not just about building a business; it`s about honoring the legacy of those who inspired you. Let every milestone be a testament to the love, support, and values your family instilled in you.”' title='Founder/General Manager' image={founder}/>
            <Message name="Candelaria Dantes Untalan" message='“Let us not grow tired of doing good, we shall reap and harvest if we do not give up.”' title='Owner' image={owner}/>

            {/* Vision and Mission */}
            <div className='mt-16 w-full md:px-8 text-black h-auto min-h-[80vh] bg-cover bg-center bg-fixed'style={{ backgroundImage: `url(${mission})` }}>

              <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 xl:p-24 text-white">
                <div className='h-full w-full '>
                  <div className='bg-slate-950 lg:max-w-[500px] max-w-full h-full p-8 md:p-16 mx-auto'>
                    <h1 className='font-mono text-3xl md:text-5xl mb-4'>Vision <FontAwesomeIcon icon="fa-solid fa-hand-holding-droplet" style={{color: "#fcfcfc",}}/></h1>
               
                    <p className="text-sm md:text-lg text-neutral-200">Our vision at Untalan Water Tank & Steel Manufacturing is to revolutionize the way industries handle fluid storage and distribution challenges. By leveraging cutting-edge technology and unmatched expertise, we strive to be at the forefront of the overhead and pressure tank industry. Our aim is to empower businesses with advanced solutions that promote resource conservation, minimize environmental impact, and drive operational excellence. We envision a world where our tanks are the benchmark of reliability, setting new standards for efficiency, safety, and sustainability in fluid management across various sectors.</p>
                  </div>
                </div>
                <div className='h-full w-full '>
                  <div className='bg-slate-950 lg:max-w-[500px] max-w-full h-full p-8 md:p-16 mx-auto'>
                    <h1 className='font-mono text-3xl md:text-5xl mb-4'>Mission <FontAwesomeIcon icon="fa-solid fa-truck-droplet" style={{color: "#fcfcfc",}}/></h1>
                    <p className=" text-sm md:text-lg text-neutral-200">At Untalan Water Tank & Steel Manufacturing our mission is to be the leading provider of high-quality overhead and pressure tanks. We are committed to engineering innovative solutions that exceed our customers' expectations while ensuring reliability, safety, and efficiency in every product we deliver. Through a dedication to sustainability and continuous improvement, we aim to enhance industries worldwide by optimizing fluid storage and distribution systems for a better, more connected future.</p>
                  </div>
                </div>
                
                
              </div>
            </div>
      
    </section>
  );
};

export default About;
