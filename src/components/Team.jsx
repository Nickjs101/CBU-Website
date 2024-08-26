import React from 'react';
import factorywarehouse from '../assets/OurTeam.jpg'
const About = () => {
  return (
    <section className="bg-white">
      <div  id="about" className="w-full mx-auto">
            <div
              className='w-full h-screen text-neutral-800 flex gap-4 bg-cover bg-center'
              style={{ backgroundImage: `url(${factorywarehouse})` }}>

              <div className='w-full h-full bg-gradient-to-b from-black/90 via-black/0 to-black/0 py-4 flex flex-col'>

                <div className='w-full text-center  mx-auto pt-4'>
                  <h2 className="text-5xl text-white font-bold mb-4">The Experts Behind Our Success</h2>
                  <p className='w-[400px] mb-4 contents text-white text-2xl'>
                    Discover the talented individuals driving our innovation. Our team is a dynamic mix of seasoned professionals and creative problem-solvers, all dedicated to delivering exceptional quality and service. With a shared passion for excellence, we work together to bring you the best in the industry.
                  </p>
                </div>
                
              </div>
              
            </div>
      </div>
      
    </section>
  );
};

export default About;
