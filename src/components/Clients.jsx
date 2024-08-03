import React from 'react';

const Clients = () => {
  return (
    <section id="clients" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Our Clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Hardware & Construction Supply</h3>
            {/* Add client details */}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Villas & Resorts</h3>
            {/* Add client details */}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Government Facilities</h3>
            {/* Add client details */}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Medical & Schools</h3>
            {/* Add client details */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
