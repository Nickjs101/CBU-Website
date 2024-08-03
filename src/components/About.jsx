import React from 'react';
import factorywarehouse from '../assets/herobg.jpeg'

const About = () => {
  return (
    <section id="about" className="my-16 py-16 bg-gray-100">
      <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">About CBU Water Tank Manufacturing</h2>
            <p className="mb-4">Family-owned company registered in the Philippines since 1995. Established in 1988 in Angeles City as BLU Untalan Company. Full-blown factory established in 1995. Expanded to different regions in the Philippines in 1996.</p>
            
            <h3 className="text-2xl font-bold mb-2">Vision</h3>
            <p className="mb-4">Our vision at CBU WATER TANK MANUFACTURING is to revolutionize the way industries handle fluid storage and distribution challenges. By leveraging cutting-edge technology and unmatched expertise, we strive to be at the forefront of the overhead and pressure tank industry. Our aim is to empower businesses with advanced solutions that promote resource conservation, minimize environmental impact, and drive operational excellence. We envision a world where our tanks are the benchmark of reliability, setting new standards for efficiency, safety, and sustainability in fluid management across various sectors.</p>
            
            <h3 className="text-2xl font-bold mb-2">Mission</h3>
            <p className="mb-4">At CBU WATER TANK MANUFACTURING our mission is to be the leading provider of high-quality overhead and pressure tanks. We are committed to engineering innovative solutions that exceed our customers' expectations while ensuring reliability, safety, and efficiency in every product we deliver. Through a dedication to sustainability and continuous improvement, we aim to enhance industries worldwide by optimizing fluid storage and distribution systems for a better, more connected future.</p>
        
        {/* <img src={factorywarehouse} alt="Logo" className=" w-1/2 h-auto " /> */}
      </div>
      
    </section>
  );
};

export default About;
