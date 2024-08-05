import React from 'react';
// Import your process step images
import measuringImage from '../assets/Process/measuring.png';
import cuttingImage from '../assets/Process/cutting.png';
import bendingImage from '../assets/Process/bending.png';
import punchingImage from '../assets/Process/punching.png';
import moldingImage from '../assets/Process/molding.png';
import weldingImage from '../assets/Process/welding.png';
import testingImage from '../assets/Process/testing.png';
import finishingImage from '../assets/Process/finishing.png';

const Process = () => {
  return (
    <section id="process" className="py-16 bg-neutral-800 ">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 text-center text-white">Our Process</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <div>
              <div key={index} className="flex flex-col p-4 items-center align-bottom shadow-md h-[300px] bg-no-repeat bg-contain bg-center bg-white"  style={{ backgroundImage: `url(${step.image})` }}>
              {/* <img src={step.image} alt={step.title} className="rounded-lg mb-4" /> */}
              </div>

              <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
              <p className="text-left text-gray-400">{step.description}</p>
            </div>
            
          ))}
        </div>
      </div>
    </section>
  );
};

// Define process steps with image paths and descriptions
const processSteps = [
  {
    title: 'Measuring',
    image: measuringImage,
    description: 'Accurate measurements are the foundation of our manufacturing process. Our expert technicians use advanced tools and techniques to ensure every dimension meets exact specifications, guaranteeing the highest standards of precision and quality.',
  },
  {
    title: 'Cutting',
    image: cuttingImage,
    description: 'Precision cutting is essential to create the perfect components for our tanks. Using state-of-the-art machinery, we cut raw materials with meticulous accuracy to ensure every piece fits perfectly into our final product.',
  },
  {
    title: 'Bending',
    image: bendingImage,
    description: 'Our bending process transforms flat materials into curved structures with precision. Advanced bending equipment and skilled operators ensure that each bend meets the exact requirements, providing structural integrity and durability.',
  },
  {
    title: 'Punching',
    image: punchingImage,
    description: 'Punching allows us to create precise holes and shapes in the material, essential for assembling components seamlessly. Our high-precision punching machines ensure every cut is clean and exact, maintaining the strength and reliability of the tanks.',
  },
  {
    title: 'Molding',
    image: moldingImage,
    description: 'In the molding stage, we shape materials into complex forms using high-quality molds and advanced techniques. This process ensures uniformity and consistency, providing a strong foundation for the next stages of production.',
  },
  {
    title: 'Welding',
    image: weldingImage,
    description: 'Welding is a critical step in our manufacturing process, ensuring the components are securely joined. Our experienced welders use the latest welding technologies to create strong, leak-proof joints that enhance the tank\'s overall strength and durability.',
  },
  {
    title: 'Testing',
    image: testingImage,
    description: 'Before any tank leaves our facility, it undergoes rigorous testing to ensure it meets our stringent quality standards. We conduct various tests, including pressure and leak tests, to guarantee the tank\'s performance and safety in real-world applications.',
  },
  {
    title: 'Finishing',
    image: finishingImage,
    description: 'The finishing process adds the final touches to our tanks, ensuring they not only perform exceptionally but also look great. We apply protective coatings, polish surfaces, and conduct a final inspection to ensure every tank meets our high standards of quality and aesthetics.',
  },
];

export default Process;
