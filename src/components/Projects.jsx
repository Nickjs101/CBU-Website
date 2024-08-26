import React from 'react';
import Project1 from '../assets/Projects/Project1.png';
import Project2 from '../assets/Projects/Project2.png';
import Project3 from '../assets/Projects/Project3.png';
import Project4 from '../assets/Projects/Project4.png';
import Project5 from '../assets/Projects/Project5.png';
import Project6 from '../assets/Projects/Project6.jpg';
import Project7 from '../assets/Projects/Project7.jpg';
import Project8 from '../assets/Projects/Project8.jpg';
import Project9 from '../assets/Projects/Project9.jpg';
import Project10 from '../assets/Projects/Project10.jpg';
import Project11 from '../assets/Projects/Project11.jpg';
import Project12 from '../assets/Projects/Project12.jpg';
import Project13 from '../assets/Projects/Project13.jpg';
import Project14 from '../assets/Projects/Project14.jpg';
import Project16 from '../assets/Projects/Project16.jpg';
import Project17 from '../assets/Projects/Project17.jpg';

const Projects = ({gotoContact}) => {
    const projects = [
        { image: Project1, title: 'Project 1' },
        { image: Project6, title: 'Project 5' },
        { image: Project7, title: 'Project 5' },
        { image: Project5, title: 'Project 5' },
        { image: Project8, title: 'Project 5' },
        { image: Project9, title: 'Project 5' },
        { image: Project2, title: 'Project 2' },
        { image: Project10, title: 'Project 5' },
        { image: Project11, title: 'Project 5' },
        { image: Project12, title: 'Project 5' },
        { image: Project3, title: 'Project 3' },
        { image: Project13, title: 'Project 5' },
        { image: Project14, title: 'Project 5' },
        { image: Project16, title: 'Project 5' },
        { image: Project4, title: 'Project 4' },
        { image: Project17, title: 'Project 5' },
    ];

    return (
        <section id="projects" className="py-16 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">
                    Find a Water Tank Solution with <span className="text-red-500">CBU Manufacturing</span>
                </h2>
                <h2 className="text-4xl font-bold mb-4">
                    Here's Our Projects
                </h2>
                

                <div className="relative overflow-hidden">
                <div className="flex animate-scroll">
                    {projects.concat(projects).map((project, index) => (
                        <div 
                            key={index} 
                            className="relative bg-white rounded-xl shadow-lg min-w-[300px] bg-contain bg-center bg-no-repeat h-64 flex-shrink-0 m-2"
                            style={{ backgroundImage: `url(${project.image})` }}
                        >
                            {/* <div className="w-full p-4 rounded-xl bg-gradient-to-t from-black/50 via-black/10 to-black/0 h-full flex flex-col align-bottom">
                                <h3 className="text-lg font-bold text-black">{project.title}</h3>
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>

                <div className="mt-8">
                    <p className="mb-4 text-gray-700">
                        At CBU Manufacturing, we take pride in offering high-quality, durable water tanks tailored to meet your specific needs. Our expert team is dedicated to providing innovative solutions for all your water storage requirements. Browse our projects to see our commitment to excellence in action.
                    </p>
                    <button  onClick={(e) => gotoContact(e, 'contact')} className="px-4 py-2 bg-red-500 text-white rounded">Contact Us</button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
