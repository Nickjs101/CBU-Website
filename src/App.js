import React from 'react';
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


import { library } from '@fortawesome/fontawesome-svg-core'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faQuoteLeft);

function App() {
  const gotoContact = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    // const navbarHeight = document.querySelector('#header').offsetHeight; // get the navbar height
    window.scrollTo({
      top: section.offsetTop, // adjust the scroll position
      behavior: 'smooth',
    });
}

  return (
    <div className="App">
      <Header />
      <Home gotoContact={gotoContact} />
      <About />
      <Products gotoContact={gotoContact} />
      <Projects gotoContact={gotoContact} />
      <Process />
      <Team />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
