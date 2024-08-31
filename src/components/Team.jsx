import React from 'react';
import team from '../assets/OurTeam.jpg'
const About = () => {
  return (
    <section className="bg-white">
      <div id="Team" className="w-full mx-auto">
            <div
              className='w-full h-auto lg:h-screen md:mb-0 text-neutral-800 flex gap-4 bg-contain md:bg-cover bg-no-repeat bg-center'
              style={{ backgroundImage: `url(${team})` }}>

              <div className='w-full bg-neutral-50 lg:bg-transparent lg:bg-gradient-to-b from-black/90 via-black/0 to-black/0 py-4 flex flex-col'>

                <div className='text-black lg:text-white w-full text-center  mx-auto pt-4 md:pt-16'>
                  <h2 className="article-h  font-bold mb-4">The Experts Behind Our Success</h2>
                  <p className='w-[400px] mb-4 contents article-p'>
                    Meet the talented individuals powering our innovation. Our team is a dynamic blend of seasoned professionals and creative problem-solvers, united by a passion for excellence. Together, we deliver top-quality water storage solutions, upholding the highest standards in every product we create.
                  </p>
                </div>
                <img className='w-full h-auto mt-4 block lg:hidden px-4' src={team} alt="" />
                
              </div>
              
            </div>
      </div>
      
    </section>
  );
};

export default About;
