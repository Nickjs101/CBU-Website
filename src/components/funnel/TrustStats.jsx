import React from 'react';

const TrustStats = () => {
  const stats = [
    {
      number: '35+',
      label: 'Years in Business',
      description: 'Established 1988'
    },
    {
      number: '1000+',
      label: 'Projects Completed',
      description: 'Nationwide installations'
    },
    {
      number: '22+',
      label: 'Client Categories',
      description: 'Government, Resorts, Schools & more'
    },
    {
      number: '11',
      label: 'Step Quality Process',
      description: 'Precision manufacturing'
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Company Statistics">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Thousands Trust Untalan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            For over three decades, we've been the trusted choice for water tanks across the Philippines.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-3 text-gray-600">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold">Quality Assured</div>
              <div className="text-sm">Premium-grade materials</div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-gray-600">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold">Nationwide Service</div>
              <div className="text-sm">Delivery across Philippines</div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-gray-600">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold">Fast Turnaround</div>
              <div className="text-sm">10-45 day production</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
