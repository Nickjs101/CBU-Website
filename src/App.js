import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Projects from './components/Projects';
import Process from './components/Process';
import Team from './components/Team';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [product, setProduct] = useState('');
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" tabIndex="-1">
        <Home />
        <div className="capability-band" aria-label="Tank and fabrication capabilities">
          <p>Strength in every detail.</p>
          <ul><li>Pressure tanks</li><li>Storage tanks</li><li>Custom fabrication</li><li>Nationwide service</li></ul>
        </div>
        <Products onRequestQuote={setProduct} />
        <About />
        <Projects />
        <Process />
        <Team />
        <Clients />
        <Contact product={product} onProductChange={setProduct} />
      </main>
      <Footer />
    </>
  );
}
