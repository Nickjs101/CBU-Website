import React from 'react';
import factorywarehouse from '../assets/Owners.jpg'
import mission from '../assets/Mission.jpg'

import owner from '../assets/owner.jpg'
import founder from '../assets/founder.jpg'

import Message from '../components/Message';

const About = () => {
  return (
    <section className="pb-16">

      {/* Quotes */}
      <div className='w-full h-auto py-16 text-center bg-neutral-100'>
        <h1 className='font-extrabold text-4xl font-serif text-gray-900'>"<span className='underline'>Your Trusted Partner in Fluid Storage</span>"</h1>
      </div>

      <div  id="about" className="w-full mx-auto -mb-80 md:mb-0">

            {/* About */}
            <div
              className='w-full h-screen text-neutral-800 flex gap-4 bg-center bg-contain md:bg-cover bg-no-repeat mb-20'
              style={{ backgroundImage: `url(${factorywarehouse})` }}>
              <div className='w-full h-full md:bg-gradient-to-r from-black/90 to-black/0 py-4 flex flex-col'>
                <div className='w-full md:w-2/5 px-4 md:px-8 md:my-auto text-black md:text-white'>
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">About CBU Water Tank Manufacturing</h2>
                  <ul className='w-[400px] mb-4 contents text-md md:text-2xl'>
                    <li>
                      Family-owned company registered in the Philippines since 1995. 
                    </li>
                    <li>
                      Established in 1988 in Angeles City as BLU Untalan Company. 
                    </li>
                    <li>
                      Full-blown factory established in 1995. 
                    </li>
                    <li>
                      Expanded to different regions in the Philippines in 1996.
                    </li>
                  </ul>
                </div>
                
              </div>
              
            </div>
      </div>


      {/* Owners Message */}
      <Message name="Benigno Lazaro Untalan" message='“Success is not just about building a business; it`s about honoring the legacy of those who inspired you. Let every milestone be a testament to the love, support, and values your family instilled in you.”' title='Founder/General Manager' image={founder}/>
            <Message name="Candelaria Dantes Untalan" message='“Let us not grow tired of doing good, we shall reap and harvest if we do not give up.”' title='Owner' image={owner}/>

            {/* Vision and Mission */}
            <div className='w-full md:px-8 text-black h-auto min-h-[80vh] bg-cover bg-center bg-fixed'style={{ backgroundImage: `url(${mission})` }}>

              <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 xl:p-24 text-white">
                <div className='h-full w-full '>
                  <div className='bg-slate-950 lg:max-w-[500px] max-w-full h-full p-8 md:p-16 mx-auto'>
                    <h1 className='font-mono text-3xl md:text-5xl mb-4'>Vision</h1>
                    <p className="font-sans text-sm md:text-lg text-neutral-200">Our vision at CBU WATER TANK MANUFACTURING is to revolutionize the way industries handle fluid storage and distribution challenges. By leveraging cutting-edge technology and unmatched expertise, we strive to be at the forefront of the overhead and pressure tank industry. Our aim is to empower businesses with advanced solutions that promote resource conservation, minimize environmental impact, and drive operational excellence. We envision a world where our tanks are the benchmark of reliability, setting new standards for efficiency, safety, and sustainability in fluid management across various sectors.</p>
                  </div>
                </div>
                <div className='h-full w-full '>
                  <div className='bg-slate-950 lg:max-w-[500px] max-w-full h-full p-8 md:p-16 mx-auto'>
                    <h1 className='font-mono text-3xl md:text-5xl mb-4'>Mission</h1>
                    <p className="font-sans text-sm md:text-lg text-neutral-200">At CBU WATER TANK MANUFACTURING our mission is to be the leading provider of high-quality overhead and pressure tanks. We are committed to engineering innovative solutions that exceed our customers' expectations while ensuring reliability, safety, and efficiency in every product we deliver. Through a dedication to sustainability and continuous improvement, we aim to enhance industries worldwide by optimizing fluid storage and distribution systems for a better, more connected future.</p>
                  </div>
                </div>
                
                
              </div>
            </div>
      
    </section>
  );
};

export default About;
