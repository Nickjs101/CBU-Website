import React from 'react';

const ProcessSection = ({ scrollToQuote }) => {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Share your requirements and we\'ll help you find the perfect solution.'
    },
    {
      number: '02',
      title: 'Custom Quote',
      description: 'Receive a detailed quote tailored to your specific needs.'
    },
    {
      number: '03',
      title: 'Manufacturing',
      description: 'Your tank is crafted through our 11-step quality process.'
    },
    {
      number: '04',
      title: 'Delivery',
      description: 'We deliver your tank safely to your location nationwide.'
    }
  ];

  const manufacturingHighlights = [
    'Precision measuring & cutting',
    'Expert welding & sealing',
    'Rigorous pressure testing',
    'Corrosion-resistant coating'
  ];

  return (
    <section id="process" className="py-16 lg:py-24 bg-gray-50" aria-label="Our Process">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Simple Process, Quality Results
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Getting your custom water tank is easy. Here's how we work together to deliver exactly what you need.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Connector Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-red-300 z-10"></div>
              )}

              {/* Step Number */}
              <div className="text-5xl font-bold text-red-100 mb-4">{step.number}</div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Manufacturing Quality Banner */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                11-Step Quality Manufacturing Process
              </h3>
              <p className="text-gray-300 mb-6">
                Every tank we produce goes through our rigorous 11-step manufacturing process,
                ensuring the highest quality and durability.
              </p>
              <ul className="grid grid-cols-2 gap-3">
                {manufacturingHighlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center lg:text-right">
              <div className="inline-block bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="text-red-400 text-sm font-semibold mb-2">Production Time</div>
                <div className="text-4xl font-bold text-white mb-2">10-45</div>
                <div className="text-gray-400">Working Days</div>
                <div className="text-xs text-gray-500 mt-2">*Depending on specifications</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <button
              onClick={scrollToQuote}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              aria-label="Start your project"
            >
              Start Your Project Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
