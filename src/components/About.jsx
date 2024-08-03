import React from 'react';
import factorywarehouse from '../assets/herobg.jpeg'
import vision from '../assets/vission.jpg'
import mission from '../assets/mission.png'

const About = () => {
  return (
    <section id="about" className="pb-16 bg-gray-200">

      <div className='w-full h-auto py-16 text-center bg-neutral-100'>
        <h1 className='font-extrabold text-4xl font-serif text-gray-900'>"<span className='underline'>Your Trusted Partner in Fluid Storage</span>"</h1>
      </div>

      <div className="w-full mx-auto">
            <div
              className='w-full h-screen text-neutral-800 flex gap-4 bg-cover bg-center mb-20'
              style={{ backgroundImage: `url(${factorywarehouse})` }}>
              <div className='w-full h-full bg-gradient-to-r from-black/90 to-black/0 py-4 flex flex-col'>
                <div className='w-2/5 px-8 my-auto'>
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

            <div className='w-full px-8 text-black'>
              <div class="card">
                <div className='w-2/3 p-8'>
                  <span className='font-[bold] text-left block text-5xl mb-4'>Vision</span>
                  <p className="italic font-serif block text-left text-lg ">Our vision at CBU WATER TANK MANUFACTURING is to revolutionize the way industries handle fluid storage and distribution challenges. By leveraging cutting-edge technology and unmatched expertise, we strive to be at the forefront of the overhead and pressure tank industry. Our aim is to empower businesses with advanced solutions that promote resource conservation, minimize environmental impact, and drive operational excellence. We envision a world where our tanks are the benchmark of reliability, setting new standards for efficiency, safety, and sustainability in fluid management across various sectors.</p>
                </div>
                <img src={vision} alt='Vision' className="w-1/3 h-auto bg-white rounded-tr-[20px]"/>
              </div>

              <div class="card">
                <img src={mission} alt='Vision' className="w-1/3 h-auto bg-white rounded-bl-[20px]"/>
                <div className='w-2/3 p-8'>
                  <span className='font-[bold] text-right block text-5xl mb-4'>Mission</span>
                  <p className="italic font-serif block text-right text-lg ">At CBU WATER TANK MANUFACTURING our mission is to be the leading provider of high-quality overhead and pressure tanks. We are committed to engineering innovative solutions that exceed our customers' expectations while ensuring reliability, safety, and efficiency in every product we deliver. Through a dedication to sustainability and continuous improvement, we aim to enhance industries worldwide by optimizing fluid storage and distribution systems for a better, more connected future.</p>
                </div>
              </div>
            </div>
            
        
      </div>
      
    </section>
  );
};

export default About;
