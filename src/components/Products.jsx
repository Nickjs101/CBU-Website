import React from 'react';
import tank from '../assets/PressuredTank.png';
import gauge from '../assets/Guage.png';
import storage from '../assets/Storage.png';

const products = [
  { name: 'Pressurized tank', category: 'For your water system', image: tank, alt: 'Untalan pressure tanks in a range of sizes', description: 'A dependable partner for residential, commercial, and industrial water systems.', specs: ['½ of 82 gal', '12 gal with base', '21 gal plain', '21 gal with base', '42 gal', '82 gal', '120 gal', '315 gal', '525 gal'] },
  { name: 'Storage tank', category: 'Room for more', image: storage, alt: 'Cylindrical steel storage tank', description: 'Water storage that fits your space, with standard capacities and custom options.', specs: ['100 gal', '150 gal', '200 gal', '325 gal', '515 gal'], note: 'Custom orders: 10–45 working days.' },
  { name: 'Steel gauge / thickness', category: 'The right material', image: gauge, alt: 'Steel sheet gauge thickness options', description: 'Choose the steel thickness to suit your tank’s requirements. Ask our team for guidance.', specs: ['#18 · 1.0 mm', '#16 · 1.3 mm', '#15 · 1.5 mm', '#14 · 2 mm', '#12 · 3 mm (made to order)', '#10'] },
];

export default function Products({ onRequestQuote }) {
  return (
    <section id="products" className="section products-section" aria-labelledby="products-title">
      <div className="section-heading">
        <div><p className="eyebrow">01 / Our products</p><h2 id="products-title">The right tank.<br />For the way you work.</h2></div>
        <p>From everyday water storage to your next big project, find a solution built around your needs.</p>
      </div>
      <div className="product-grid">
        {products.map((product, index) => (
          <article className="product-card" key={product.name}>
            <div className="product-image"><span className="product-index">0{index + 1}</span><img src={product.image} alt={product.alt} width="640" height="480" loading="lazy" /></div>
            <div className="product-body">
              <p className="eyebrow">{product.category}</p><h3>{product.name}</h3><p className="product-description">{product.description}</p>
              <p className="spec-label">{index === 2 ? 'Available gauges' : 'Available capacities'}</p>
              <ul className="spec-list">{product.specs.map(spec => <li key={spec}>{spec}</li>)}</ul>
              {product.note && <p className="product-note">{product.note}</p>}
              <a className="card-link" href="#contact" onClick={() => onRequestQuote(product.name)}>Ask about this product <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        ))}
      </div>
      <div className="custom-strip"><div><strong>Have something specific in mind?</strong><p>Let’s talk capacity, dimensions, and a tank made for your project.</p></div><a href="#contact" className="text-link" onClick={() => onRequestQuote('Custom tank')}>Discuss a custom tank <span aria-hidden="true">↗</span></a></div>
    </section>
  );
}
