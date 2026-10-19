import React from 'react';
import team from '../assets/OurTeam.jpg';

export default function Team() {
  return (
    <section id="team" className="section team-section" aria-labelledby="team-title">
      <div className="team-grid"><div><p className="eyebrow">The people behind the product</p><h2 id="team-title">Good tanks start<br />with good people.</h2><p>From the first measurement to the final finish, our team brings experience and care to every part of the process. It’s hands-on work, and we take pride in it.</p><a href="#contact" className="text-link">Work with our team <span aria-hidden="true">↗</span></a></div><img src={team} alt="The Untalan water tank manufacturing team" width="1200" height="800" loading="lazy" /></div>
    </section>
  );
}
