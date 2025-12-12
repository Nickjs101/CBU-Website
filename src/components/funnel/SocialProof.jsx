import React from 'react';
import founder from '../../assets/founder.jpg';
import owner from '../../assets/owner.jpg';

// Client logos
import depofagri from '../../assets/Clients/Gov/depofagri.jpg';
import dswd from '../../assets/Clients/Gov/dswd.png';
import wildorchid from '../../assets/Clients/Resort/wildorchid.jpg';
import poracayresort from '../../assets/Clients/Resort/poracayresort.jpg';
import stcatherine from '../../assets/Clients/School/stcatherine.jpg';
import obmontessori from '../../assets/Clients/School/obmontessoricenter.jpg';
import dauagri from '../../assets/Clients/Hardware/dauagri.jpg';
import twsteel from '../../assets/Clients/Hardware/twsteel.jpg';

const SocialProof = ({ scrollToQuote }) => {
  const testimonials = [
    {
      quote: "Success is not just about building a business; it's about honoring the legacy of those who inspired you. Let every milestone be a testament to the love, support, and values your family instilled in you.",
      name: "Benigno Lazaro Untalan",
      title: "Founder & General Manager",
      image: founder
    },
    {
      quote: "Let us not grow tired of doing good, we shall reap and harvest if we do not give up.",
      name: "Candelaria Dantes Untalan",
      title: "Owner",
      image: owner
    }
  ];

  const clientLogos = [
    { name: "Department of Agriculture", image: depofagri },
    { name: "DSWD", image: dswd },
    { name: "Wild Orchid Resort", image: wildorchid },
    { name: "Poracay Resort", image: poracayresort },
    { name: "St. Catherine Medical Center", image: stcatherine },
    { name: "O.B. Montessori Center", image: obmontessori },
    { name: "Dau Agri Industrial", image: dauagri },
    { name: "TW Steel", image: twsteel }
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gray-900" aria-label="Testimonials and Clients">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Trusted by Many</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            Our Clients Trust Us
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From government agencies to private resorts, businesses across the Philippines
            rely on Untalan for their water storage needs.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-8 relative"
            >
              {/* Quote Icon */}
              <svg className="absolute top-6 right-6 w-12 h-12 text-red-500/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <div className="flex items-start gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-red-500"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-red-400 text-sm">{testimonial.title}</p>
                </div>
              </div>

              <blockquote className="text-gray-300 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Client Categories */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-white mb-2">Trusted by Industry Leaders</h3>
          <p className="text-gray-400 text-sm">Government Agencies | Resorts & Hotels | Schools | Medical Centers | Hardware Suppliers</p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 items-center">
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-3 flex items-center justify-center h-20 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={client.image}
                alt={client.name}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Join our growing list of satisfied clients</p>
          <button
            onClick={scrollToQuote}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            aria-label="Get a quote"
          >
            Get Your Quote Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
