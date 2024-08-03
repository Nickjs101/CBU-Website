import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Projects from './components/Projects';
import Process from './components/Process';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-neutral-100">
      <Header />
      <Home />
      <About />
      <Products />
      <Projects />
      <Process />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
