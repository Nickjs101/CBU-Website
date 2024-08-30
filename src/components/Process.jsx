import React from 'react';
// Import your process step images
import measuringImage from '../assets/Process/measuring.jpg';
import cuttingImage from '../assets/Process/cutting.jpg';
import bendingImage from '../assets/Process/bending.jpg';
import punchingImage from '../assets/Process/punching.jpg';
import moldingImage from '../assets/Process/molding.jpg';
import weldingImage from '../assets/Process/welding.jpg';
import testingImage from '../assets/Process/testing.jpg';
import finishingImage from '../assets/Process/finishing.jpg';

// Newly added images
import beatingImage from '../assets/Process/beating.jpg';
import couplingImage from '../assets/Process/coupling.jpg';
import paintingImage from '../assets/Process/painting.jpg';

const Process = () => {
  return (
    <section id="process" className="py-16 bg-neutral-800 ">
      <div className="container mx-auto px-4">
        <h2 className="article-h font-bold mb-8 text-center text-white">Our Process</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <div key={index}>
              <div className="flex flex-col p-4 items-center align-bottom shadow-md h-[300px] bg-no-repeat bg-cover bg-center bg-white"  style={{ backgroundImage: `url(${step.image})` }}>
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
    description: 'Precision is at the heart of our manufacturing process. Our expert technicians use advanced tools to take accurate measurements, ensuring every dimension meets exact specifications for top-quality water tanks.',
  },
  {
    title: 'Cutting',
    image: cuttingImage,
    description: 'With state-of-the-art machinery, we execute precision cutting of raw materials to create perfect components. This meticulous process ensures each piece fits seamlessly into our high-quality water tanks.',
  },
  {
    title: 'Bending',
    image: bendingImage,
    description: 'Our advanced bending equipment transforms flat materials into precise curved structures. This critical process ensures each bend meets exact requirements, contributing to the durability and structural integrity of our water tanks.',
  },
  {
    title: 'Punching',
    image: punchingImage,
    description: 'We utilize high-precision punching machines to create exact holes and shapes, essential for seamless assembly. This process maintains the strength and reliability of our water tanks by ensuring clean, precise cuts.',
  },
  {
    title: 'Molding',
    image: moldingImage,
    description: 'During the molding stage, we shape materials into complex forms using high-quality molds. This process guarantees uniformity, laying a strong foundation for our durable and consistent water tanks.',
  },
  {
    title: 'Beating',
    image: beatingImage,
    description: 'Beating refines the shape and form of materials, enhancing their strength and smoothness. This step ensures each component is perfectly crafted, ready for the assembly of our high-standard water tanks.',
  },
  {
    title: 'Welding',
    image: weldingImage,
    description: 'Welding is crucial for securely joining tank components. Our skilled welders use the latest techniques to create leak-proof joints, ensuring the overall strength and longevity of our water tanks.',
  },
  {
    title: 'Coupling',
    image: couplingImage,
    description: 'In the coupling stage, we meticulously join welded components to form a cohesive unit. This process guarantees structural integrity and functionality, ensuring our tanks are reliable and robust.',
  },
  {
    title: 'Testing',
    image: testingImage,
    description: 'Before our tanks reach you, they undergo rigorous testing, including pressure and leak tests. This ensures every water tank meets our stringent quality standards for safety and performance in real-world conditions.',
  },
  {
    title: 'Painting',
    image: paintingImage,
    description: 'Our painting process not only enhances the appearance of our water tanks but also provides a protective layer. We use high-quality, corrosion-resistant paints to ensure a long-lasting, durable finish.',
  },
  {
    title: 'Finishing',
    image: finishingImage,
    description: 'The final step, finishing, involves applying protective coatings, polishing surfaces, and conducting a thorough inspection. This ensures that each water tank not only performs exceptionally but also meets our high aesthetic standards.',
  },
];

export default Process;
