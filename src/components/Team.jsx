import React from 'react';
import factorywarehouse from '../assets/OurTeam.jpg'
const About = () => {
  return (
    <section className="bg-white">
      <div  id="about" className="w-full mx-auto">
            <div
              className='w-full h-screen -mb-48 md:mb-0 text-neutral-800 flex gap-4 bg-contain md:bg-cover bg-no-repeat bg-center'
              style={{ backgroundImage: `url(${factorywarehouse})` }}>

              <div className='w-full h-full md:bg-gradient-to-b from-black/90 via-black/0 to-black/0 py-4 flex flex-col'>

                <div className='text-black md:text-white w-full text-center  mx-auto pt-4 md:pt-16'>
                  <h2 className="article-h  font-bold mb-4">The Experts Behind Our Success</h2>
                  <p className='w-[400px] mb-4 contents article-p'>
                    Discover the talented individuals driving our innovation. Our team is a dynamic mix of seasoned professionals and creative problem-solvers with a passion for excellence that deliver top-quality water storage solutions, ensuring the highest standards in every product we create.
                  </p>
                </div>
                
              </div>
              
            </div>
      </div>
      
    </section>
  );
};

export default About;
