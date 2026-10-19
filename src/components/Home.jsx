import React from 'react';
import hero from '../assets/Mission.jpg';

export default function Home() {
  return (
    <section id="home" className="hero hero-factory" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> Steel fabrication. Family dedication. Since 1988.</p>
        <h1 id="hero-title">Water tanks.<br />Built to <span>last.</span></h1>
        <p className="hero-description">Serious steel. Dependable water storage. Pressure tanks, storage tanks, and custom fabrication from a family of makers in Pampanga, serving the Philippines since 1988.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">Request a quote <span aria-hidden="true">↗</span></a>
          <a className="text-link" href="#products">Explore our tanks <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-proof">
          <div><strong>Since 1988</strong><span>A family-owned legacy</span></div>
          <div><strong>Made to fit</strong><span>Standard & custom sizes</span></div>
          <div><strong>Nationwide</strong><span>Serving homes & industry</span></div>
        </div>
      </div>
      <figure className="hero-visual">
        <img src={hero} alt="Steel water tanks and fabrication equipment inside Untalan’s Pampanga workshop" width="6400" height="4266" fetchpriority="high" />
        <figcaption className="hero-image-label"><span className="cross-mark" aria-hidden="true">+</span><span>Inside our Pampanga workshop.</span></figcaption>
      </figure>
    </section>
  );
}
