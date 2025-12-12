import React from 'react';
import pressurizedTank from '../../assets/PressuredTank.png';
import storageTank from '../../assets/Storage.png';
import gauge from '../../assets/Guage.png';

const ProductsShowcase = ({ scrollToQuote }) => {
  const products = [
    {
      name: 'Pressurized Tanks',
      image: pressurizedTank,
      description: 'High-pressure water storage solutions perfect for residential and commercial buildings. Ensures consistent water pressure throughout your system.',
      sizes: ['12 gal', '21 gal', '42 gal', '82 gal', '120 gal', '315 gal', '525 gal'],
      features: ['Consistent Pressure', 'Durable Construction', 'Leak-Proof Seals'],
      popular: true
    },
    {
      name: 'Storage Tanks',
      image: storageTank,
      description: 'Large capacity storage tanks for industrial and commercial applications. Custom sizes available to meet your specific requirements.',
      sizes: ['100 gal', '150 gal', '200 gal', '325 gal', '515 gal', 'Custom'],
      features: ['High Capacity', 'Corrosion Resistant', 'Custom Options'],
      popular: false
    },
    {
      name: 'Steel Gauges',
      image: gauge,
      description: 'Premium steel gauges for various industrial applications. Multiple specifications available including custom orders.',
      sizes: ['#18 (1.0mm)', '#16 (1.3mm)', '#15 (1.5mm)', '#14 (2mm)', '#12 (3mm)', '#10'],
      features: ['Precision Cut', 'Multiple Gauges', 'Made to Order'],
      popular: false
    }
  ];

  return (
    <section id="products" className="py-16 lg:py-24 bg-gray-50" aria-label="Our Products">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Premium Water Tank Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From residential to industrial, we manufacture tanks that stand the test of time.
            All products are built with premium-grade materials and backed by decades of expertise.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <article
              key={index}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                product.popular ? 'ring-2 ring-red-500' : ''
              }`}
            >
              {product.popular && (
                <div className="bg-red-600 text-white text-center py-2 text-sm font-semibold">
                  Most Popular Choice
                </div>
              )}

              {/* Product Image */}
              <div className="p-6 bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={product.image}
                  alt={`${product.name} - Untalan Water Tank`}
                  className="w-full h-48 object-contain"
                  loading="lazy"
                />
              </div>

              {/* Product Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                {/* Available Sizes */}
                <div className="mb-4">
                  <span className="text-xs font-semibold text-gray-500 uppercase">Available Sizes:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {product.sizes.slice(0, 4).map((size, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {size}
                      </span>
                    ))}
                    {product.sizes.length > 4 && (
                      <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs">
                        +{product.sizes.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={scrollToQuote}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
                  aria-label={`Get quote for ${product.name}`}
                >
                  Get Quote for {product.name}
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Custom Solution Banner */}
        <div className="mt-12 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Need a Custom Solution?</h3>
          <p className="text-red-100 mb-6 max-w-2xl mx-auto">
            We specialize in custom water tank solutions tailored to your specific requirements.
            From unique sizes to special specifications, we can build exactly what you need.
          </p>
          <button
            onClick={scrollToQuote}
            className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            aria-label="Request custom quote"
          >
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
