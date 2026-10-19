import React from 'react';
import workshop from '../assets/Owners.jpg';
import founder from '../assets/founder.jpg';
import owner from '../assets/owner.jpg';

export default function About() {
  return (
    <section id="about" className="section story-section" aria-labelledby="story-title">
      <div className="story-grid">
        <div className="story-photo">
          <img src={workshop} alt="Benigno and Candelaria Untalan at their water tank manufacturing workshop" width="6400" height="4266" loading="lazy" />
          <div className="heritage-stamp"><strong>1988</strong><span>Our story began</span></div>
        </div>
        <div className="story-copy">
          <p className="eyebrow">02 / A legacy in the making</p>
          <h2 id="story-title">Built on steel.<br />Rooted in family.</h2>
          <p>What began as BLU Untalan Company in Angeles City in 1988 has grown into a family-owned water tank and steel manufacturing business serving the Philippines.</p>
          <p>We became Untalan Water Tank & Steel Manufacturing in 1995 and expanded nationwide in 1996. Through every chapter, our purpose has stayed the same: to make dependable water storage for the people and businesses who need it.</p>
          <div className="story-values"><span>Decades of experience</span><span>Custom tank solutions</span><span>Made in Pampanga</span><span>Residential to industrial</span></div>
          <a href="#contact" className="text-link">Build your next project with us <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="founders-section" aria-labelledby="founders-title">
        <div className="founders-heading">
          <p className="eyebrow">The people behind our legacy</p>
          <h3 id="founders-title">The family behind Untalan.</h3>
        </div>
        <div className="founder-grid">
          <figure className="founder-card">
            <img src={founder} alt="Benigno Lazaro Untalan" width="3201" height="4266" loading="lazy" />
            <figcaption className="founder-message">
              <strong>Benigno Lazaro Untalan</strong><span>Founder / General Manager</span>
              <blockquote>“Success is not just about building a business; it’s about honoring the legacy of those who inspired you. Let every milestone be a testament to the love, support, and values your family instilled in you.”</blockquote>
            </figcaption>
          </figure>
          <figure className="founder-card">
            <img src={owner} alt="Candelaria Dantes Untalan" width="4844" height="6400" loading="lazy" />
            <figcaption className="founder-message">
              <strong>Candelaria Dantes Untalan</strong><span>Owner</span>
              <blockquote>“Let us not grow tired of doing good, we shall reap and harvest if we do not give up.”</blockquote>
            </figcaption>
          </figure>
        </div>
      </div>
      <details className="legacy-details">
        <summary>Our vision & mission <span aria-hidden="true">+</span></summary>
        <div className="purpose-grid"><div><h3>Our vision</h3><p>To advance fluid storage and distribution through reliable, efficient tank solutions, with resource conservation and sustainability at their heart.</p></div><div><h3>Our mission</h3><p>To provide high-quality overhead and pressure tanks through thoughtful engineering, skilled workmanship, and continuous improvement.</p></div></div>
      </details>
    </section>
  );
}
