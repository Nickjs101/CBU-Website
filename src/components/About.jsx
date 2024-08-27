import React from 'react';
import factorywarehouse from '../assets/Owners.jpg'
import vision from '../assets/Vision.jpg'
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

      <div  id="about" className="w-full mx-auto">

            {/* About */}
            <div
              className='w-full h-screen text-neutral-800 flex gap-4 bg-center bg-cover mb-20'
              style={{ backgroundImage: `url(${factorywarehouse})` }}>
              <div className='w-full h-full bg-gradient-to-r from-black/90 to-black/0 py-4 flex flex-col'>
                <div className='w-full md:w-2/5 px-8 my-auto'>
                  <h2 className="text-5xl text-white font-bold mb-4">About CBU Water Tank Manufacturing</h2>
                  <ul className='w-[400px] mb-4 contents text-white text-2xl'>
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


            {/* Owners Message */}

            <Message name="Candelaria Dantes Untalan" message='“Let us not grow tired of doing good, we shall reap and harvest if we do not give up.”' title='Owner' image={owner}/>
            <Message name="Benigno Lazaro Untalan" message='“Success is not just about building a business; it`s about honoring the legacy of those who inspired you. Let every milestone be a testament to the love, support, and values your family instilled in you.”' title='Founder/General Manager' image={founder}/>

            {/* Vision and Mission */}
            <div className='w-full px-8 text-black'>
              <div class="card">
                <div className='w-full md:w-2/3 p-8'>
                  <span className='font-[bold] text-left block text-2xl md:text-5xl mb-4'>Vision</span>
                  <p className="italic font-serif block text-left text-sm md:text-lg">Our vision at CBU WATER TANK MANUFACTURING is to revolutionize the way industries handle fluid storage and distribution challenges. By leveraging cutting-edge technology and unmatched expertise, we strive to be at the forefront of the overhead and pressure tank industry. Our aim is to empower businesses with advanced solutions that promote resource conservation, minimize environmental impact, and drive operational excellence. We envision a world where our tanks are the benchmark of reliability, setting new standards for efficiency, safety, and sustainability in fluid management across various sectors.</p>
                </div>
                <img src={vision} alt='Vision' className="hidden md:block w-1/3 h-auto bg-white rounded-tr-[20px]"/>
              </div>

              <div class="card">
                <img src={mission} alt='Vision' className="hidden md:block w-1/3 h-auto bg-white rounded-bl-[20px]"/>
                <div className='w-full md:w-2/3 p-8'>
                  <span className='font-[bold] text-left md:text-right block text-2xl md:text-5xl mb-4'>Mission</span>
                  <p className="italic font-serif block text-left md:text-right text-sm md:text-lg">At CBU WATER TANK MANUFACTURING our mission is to be the leading provider of high-quality overhead and pressure tanks. We are committed to engineering innovative solutions that exceed our customers' expectations while ensuring reliability, safety, and efficiency in every product we deliver. Through a dedication to sustainability and continuous improvement, we aim to enhance industries worldwide by optimizing fluid storage and distribution systems for a better, more connected future.</p>
                </div>
              </div>
            </div>
            
        
      </div>
      
    </section>
  );
};

export default About;
