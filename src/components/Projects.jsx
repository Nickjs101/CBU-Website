import React, { useState } from 'react';
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

const projects = [Project1, Project6, Project7, Project5, Project8, Project9, Project2, Project10, Project11, Project12, Project3, Project13, Project14, Project16, Project4, Project17];

export default function Projects() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-title">
      <div className="section-heading"><div><p className="eyebrow">03 / Our work in the field</p><h2 id="projects-title">Real projects.<br />Lasting partnerships.</h2></div><p>A closer look at the tanks and projects that keep our team doing what we do best.</p></div>
      <div className="project-grid" id="project-gallery">
        {(expanded ? projects : projects.slice(0, 3)).map((image, index) => <figure className="project-photo" key={image}><img src={image} alt={`Untalan tank project ${index + 1}`} width="1000" height="800" loading="lazy" /><figcaption><span>Project gallery</span><span>{String(index + 1).padStart(2, '0')}</span></figcaption></figure>)}
      </div>
      <div className="projects-actions"><button type="button" className="button button-outline" aria-expanded={expanded} aria-controls="project-gallery" onClick={() => setExpanded(!expanded)}>{expanded ? 'Show fewer projects' : 'View all 16 project photos'} <span aria-hidden="true">{expanded ? '−' : '+'}</span></button><a href="#contact" className="text-link">Tell us about your project <span aria-hidden="true">↗</span></a></div>
    </section>
  );
}
