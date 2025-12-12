import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faCheck, faStar, faShieldHalved, faAward, faClock, faUsers, faIndustry, faTruck, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

// Import images
import LogoWhite from './assets/logowhite.png';
import HeroBg from './assets/herobg.jpeg';
import FounderImg from './assets/founder.jpg';
import OwnerImg from './assets/owner.jpg';
import OwnersImg from './assets/Owners.jpg';
import TeamImg from './assets/OurTeam.jpg';
import PressurizedTank from './assets/PressuredTank.png';
import StorageTank from './assets/Storage.png';
import GaugeImg from './assets/Guage.png';

// Project images
import Project1 from './assets/Projects/Project1.png';
import Project2 from './assets/Projects/Project2.png';
import Project3 from './assets/Projects/Project3.png';
import Project4 from './assets/Projects/Project4.png';
import Project5 from './assets/Projects/Project5.png';
import Project6 from './assets/Projects/Project6.jpg';
import Project7 from './assets/Projects/Project7.jpg';
import Project8 from './assets/Projects/Project8.jpg';

// Client logos
import DepOfAgri from './assets/Clients/Gov/depofagri.jpg';
import DSWD from './assets/Clients/Gov/dswd.png';
import VillaMartin from './assets/Clients/Resort/villamartresort.jpg';
import WildOrchid from './assets/Clients/Resort/wildorchid.jpg';
import DrAmando from './assets/Clients/School/dramandogarciamedcenter.jpg';
import StCatherine from './assets/Clients/School/stcatherine.jpg';
import FloWrite from './assets/Clients/Hardware/flowriteenterprise.png';
import MotionHardware from './assets/Clients/Hardware/motionhardware.png';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const projects = [Project1, Project2, Project3, Project4, Project5, Project6, Project7, Project8];

  const clients = [
    { img: DepOfAgri, name: 'Department of Agriculture' },
    { img: DSWD, name: 'DSWD' },
    { img: VillaMartin, name: 'Villa Martin Resort' },
    { img: WildOrchid, name: 'Wild Orchid Resort' },
    { img: DrAmando, name: 'Dr. Amando Garcia Medical Center' },
    { img: StCatherine, name: 'St. Catherine' },
    { img: FloWrite, name: 'Flowrite Enterprise' },
    { img: MotionHardware, name: 'Motion Hardware' },
  ];

  const faqs = [
    {
      question: "How long does it take to manufacture a water tank?",
      answer: "Standard tanks are typically ready within 5-10 working days. Custom tanks may take 10-45 working days depending on specifications and size."
    },
    {
      question: "Do you offer nationwide delivery?",
      answer: "Yes! We deliver nationwide across the Philippines. Delivery time and costs vary by location. Contact us for a delivery quote."
    },
    {
      question: "What warranty do you provide?",
      answer: "All our tanks come with a quality guarantee. We use premium-grade materials and rigorous testing to ensure durability and longevity."
    },
    {
      question: "Can you customize tank sizes?",
      answer: "Absolutely! We specialize in custom fabrication. Tell us your requirements and we'll manufacture a tank that fits your exact needs."
    }
  ];

  return (
    <div className="App">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-red-700 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="flex items-center">
              <img src={LogoWhite} alt="CBU Water Tanks Logo" className="h-10 lg:h-14" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#products" onClick={(e) => scrollToSection(e, 'products')} className="text-white hover:text-red-200 transition navbutton">Products</a>
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-white hover:text-red-200 transition navbutton">About Us</a>
              <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="text-white hover:text-red-200 transition navbutton">Projects</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="bg-white text-red-700 px-6 py-2 rounded-full font-bold hover:bg-red-100 transition">
                Get Free Quote
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white text-2xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden pb-4 space-y-3">
              <a href="#products" onClick={(e) => scrollToSection(e, 'products')} className="block text-white py-2">Products</a>
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="block text-white py-2">About Us</a>
              <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="block text-white py-2">Projects</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="block bg-white text-red-700 px-6 py-3 rounded-full font-bold text-center">
                Get Free Quote
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-16 lg:pt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${HeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <p className="text-red-400 font-semibold mb-4 text-lg">Since 1988 | Trusted by 1000+ Clients</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Premium Water Tanks<br />
              <span className="text-red-400">Built to Last</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Philippines' leading manufacturer of pressurized tanks, storage tanks, and custom steel fabrication.
              Durable, reliable, and backed by 35+ years of expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition text-center shadow-lg"
              >
                Request Free Quote
              </a>
              <a
                href="tel:09176237040"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-red-700 transition text-center"
              >
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                Call Now
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-600">
              <div className="text-center">
                <p className="text-3xl font-bold text-red-400">35+</p>
                <p className="text-gray-300 text-sm">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-red-400">1000+</p>
                <p className="text-gray-300 text-sm">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-red-400">100%</p>
                <p className="text-gray-300 text-sm">Quality Tested</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-red-400">PH Wide</p>
                <p className="text-gray-300 text-sm">Delivery</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <FontAwesomeIcon icon={faChevronDown} className="text-white text-2xl" />
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-red-600 font-semibold mb-2">OUR PRODUCTS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Water Tank Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From residential to industrial applications, we manufacture tanks that meet the highest standards of quality and durability.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pressurized Tanks */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group">
              <div className="h-64 overflow-hidden">
                <img src={PressurizedTank} alt="Pressurized Water Tank" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pressurized Tanks</h3>
                <p className="text-gray-600 mb-4">High-quality pressure tanks for residential and commercial water systems. Available in 12gal to 525gal capacities.</p>
                <ul className="text-sm text-gray-500 mb-4 space-y-1">
                  <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />Pressure tested</li>
                  <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />Multiple sizes available</li>
                  <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />Durable steel construction</li>
                </ul>
                <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-red-600 font-semibold hover:text-red-700">
                  Get Quote →
                </a>
              </div>
            </div>

            {/* Storage Tanks */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group">
              <div className="h-64 overflow-hidden">
                <img src={StorageTank} alt="Storage Water Tank" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Storage Tanks</h3>
                <p className="text-gray-600 mb-4">Overhead and ground-level storage tanks for all your water storage needs. Custom sizes available.</p>
                <ul className="text-sm text-gray-500 mb-4 space-y-1">
                  <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />100gal to 515gal standard</li>
                  <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />Custom sizes available</li>
                  <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />Corrosion resistant</li>
                </ul>
                <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-red-600 font-semibold hover:text-red-700">
                  Get Quote →
                </a>
              </div>
            </div>

            {/* Gauges */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group">
              <div className="h-64 overflow-hidden">
                <img src={GaugeImg} alt="Steel Gauges" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Steel Gauges</h3>
                <p className="text-gray-600 mb-4">Precision steel gauges in various thicknesses for industrial and manufacturing applications.</p>
                <ul className="text-sm text-gray-500 mb-4 space-y-1">
                  <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />#18 (1.0mm) to #10 gauges</li>
                  <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />Made to order available</li>
                  <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />Premium quality steel</li>
                </ul>
                <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-red-600 font-semibold hover:text-red-700">
                  Get Quote →
                </a>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-16 bg-red-600 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-red-100 mb-6 max-w-xl mx-auto">We specialize in custom fabrication. Tell us your requirements and we'll build it for you.</p>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="inline-block bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-red-50 transition">
              Request Custom Quote
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-red-400 font-semibold mb-2">WHY CHOOSE US</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The CBU Advantage</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Trusted by government agencies, resorts, hospitals, and businesses across the Philippines.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faShieldHalved} className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-gray-400">Premium-grade, long-lasting materials tested for durability and safety.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faIndustry} className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
              <p className="text-gray-400">Tailored solutions for every need - residential, commercial, or industrial.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faUsers} className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">1000+ Satisfied Clients</h3>
              <p className="text-gray-400">Trusted by thousands of satisfied clients across the Philippines.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faAward} className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">35+ Years Expertise</h3>
              <p className="text-gray-400">Backed by decades of expertise and innovation since 1988.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About / Owners Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <p className="text-red-600 font-semibold mb-2">OUR STORY</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Family-Owned Excellence Since 1988</h2>
              <p className="text-gray-600 mb-6">
                What started as BLU Untalan Company in Angeles City in 1988 has grown into Untalan Water Tank & Steel Manufacturing -
                one of the Philippines' most trusted names in water tank manufacturing.
              </p>
              <p className="text-gray-600 mb-6">
                In 1995, we rebranded and expanded our operations. By 1996, we began serving clients nationwide.
                Today, from our facility in Mabalacat City, Pampanga, we continue to deliver premium quality tanks
                to residential, commercial, and industrial clients across the country.
              </p>
              <div className="flex items-center gap-4">
                <FontAwesomeIcon icon={faClock} className="text-red-600 text-2xl" />
                <div>
                  <p className="font-bold text-gray-900">35+ Years of Excellence</p>
                  <p className="text-gray-500 text-sm">Serving the Philippines since 1988</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={OwnersImg} alt="CBU Water Tanks Facility" className="w-full h-auto" />
            </div>
          </div>

          {/* Founders */}
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold mb-2">MEET THE FOUNDERS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The People Behind CBU</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Founder */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6 border-4 border-red-600">
                <img src={FounderImg} alt="Benigno Lazaro Untalan - Founder" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Benigno Lazaro Untalan</h3>
              <p className="text-red-600 font-semibold mb-4">Founder & General Manager</p>
              <p className="text-gray-600 text-sm italic">
                "Our commitment to quality has never wavered. Every tank that leaves our facility represents
                our promise of durability and reliability to our customers."
              </p>
            </div>

            {/* Owner */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6 border-4 border-red-600">
                <img src={OwnerImg} alt="Candelaria Dantes Untalan - Owner" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Candelaria Dantes Untalan</h3>
              <p className="text-red-600 font-semibold mb-4">Owner</p>
              <p className="text-gray-600 text-sm italic">
                "Customer satisfaction is at the heart of everything we do. We treat every client like family
                and ensure they get the best solution for their needs."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        className="py-20 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${TeamImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <p className="text-red-400 font-semibold mb-2">OUR TEAM</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Expert Craftsmen at Work</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Our skilled team of welders, fabricators, and engineers bring decades of combined experience
            to every project. From design to delivery, we ensure excellence at every step.
          </p>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="inline-block bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition">
            Work With Our Team
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold mb-2">OUR PROJECTS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Completed Installations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">See examples of our work across residential, commercial, and industrial projects throughout the Philippines.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {projects.map((project, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <img src={project} alt={`CBU Water Tank Project ${index + 1}`} className="w-full h-48 object-cover hover:scale-105 transition duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="inline-block bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition">
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold mb-2">TRUSTED BY</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Valued Clients</h2>
            <p className="text-gray-600">Serving government agencies, resorts, hospitals, schools, and businesses nationwide.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-4xl mx-auto">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition">
                <img src={client.img} alt={client.name} className="max-h-20 object-contain" />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-yellow-500">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p className="text-gray-600 mt-2">Trusted by 1000+ satisfied clients since 1988</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold mb-2">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`text-red-600 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Quote Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <p className="text-red-400 font-semibold mb-2">GET IN TOUCH</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Request Your Free Quote</h2>
              <p className="text-gray-400 mb-8">
                Ready to get started? Fill out the form and our team will get back to you within 24 hours
                with a customized quote for your water tank needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Call Us</p>
                    <a href="tel:09176237040" className="text-gray-400 hover:text-white transition">0917-623-7040</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email Us</p>
                    <a href="mailto:cbutanks@gmail.com" className="text-gray-400 hover:text-white transition">cbutanks@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Visit Us</p>
                    <p className="text-gray-400">7052 Legaspi ext. Duquit-Maisac<br />Mabalacat City, Pampanga, Philippines</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faTruck} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Delivery</p>
                    <p className="text-gray-400">Nationwide delivery available</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="font-semibold mb-4">Follow Us</p>
                <a
                  href="https://facebook.com/profile.php?id=61563526510118"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                  Follow on Facebook
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white text-gray-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form action="https://submit-form.com/DsGqm2AzY" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                    placeholder="Juan Dela Cruz"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                    placeholder="0917-XXX-XXXX"
                  />
                </div>

                <div>
                  <label htmlFor="product" className="block text-sm font-semibold mb-2">Product Interest</label>
                  <select
                    id="product"
                    name="product"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                  >
                    <option value="">Select a product</option>
                    <option value="Pressurized Tank">Pressurized Tank</option>
                    <option value="Storage Tank">Storage Tank</option>
                    <option value="Steel Gauge">Steel Gauge</option>
                    <option value="Custom Order">Custom Order</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition"
                >
                  Send Message & Get Quote
                </button>

                <p className="text-sm text-gray-500 text-center">
                  We'll respond within 24 hours
                </p>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.065432728898!2d120.5736!3d15.2181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDEzJzA1LjIiTiAxMjDCsDM0JzI1LjAiRQ!5e0!3m2!1sen!2sph!4v1234567890"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CBU Water Tanks Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-red-100 mb-8 max-w-xl mx-auto">
            Join 1000+ satisfied customers who trust CBU Water Tanks for their water storage needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-red-50 transition">
              Request Free Quote
            </a>
            <a href="tel:09176237040" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-red-600 transition">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              Call 0917-623-7040
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src={LogoWhite} alt="CBU Water Tanks" className="h-12 mb-4" />
              <p className="text-gray-400 text-sm">
                Untalan Water Tank & Steel Manufacturing - Philippines' trusted water tank manufacturer since 1988.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#products" onClick={(e) => scrollToSection(e, 'products')} className="hover:text-white transition">Pressurized Tanks</a></li>
                <li><a href="#products" onClick={(e) => scrollToSection(e, 'products')} className="hover:text-white transition">Storage Tanks</a></li>
                <li><a href="#products" onClick={(e) => scrollToSection(e, 'products')} className="hover:text-white transition">Steel Gauges</a></li>
                <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-white transition">Custom Orders</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-white transition">About Us</a></li>
                <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-white transition">Projects</a></li>
                <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-white transition">Contact</a></li>
                <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-white transition">Get Quote</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><FontAwesomeIcon icon={faPhone} className="mr-2 text-red-500" />0917-623-7040</li>
                <li><FontAwesomeIcon icon={faEnvelope} className="mr-2 text-red-500" />cbutanks@gmail.com</li>
                <li><FontAwesomeIcon icon={faLocationDot} className="mr-2 text-red-500" />Mabalacat City, Pampanga</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Untalan Water Tank & Steel Manufacturing. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a
                href="https://facebook.com/profile.php?id=61563526510118"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA Button (Mobile) */}
      <div className="fixed bottom-6 right-6 lg:hidden z-40">
        <a
          href="#contact"
          onClick={(e) => scrollToSection(e, 'contact')}
          className="bg-red-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-red-700 transition"
        >
          <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
        </a>
      </div>
    </div>
  );
}

export default App;
