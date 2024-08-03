import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <div className="mb-4">
          <h3 className="text-xl font-bold">Office Address</h3>
          <p>7052 Legaspi ext. Duquit-Maisac Mabalacat City Pampanga</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">Factory Address</h3>
          <p>Purok 7 Duquit Mabalacat City Pampanga</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">Phone</h3>
          <p>0917-623-7040</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">Email</h3>
          <p>cbuwtm@gmail.com</p>
        </div>
        <form className="bg-gray-100 p-4 rounded">
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Phone</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Message</label>
            <textarea className="w-full p-2 border border-gray-300 rounded"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send Message</button>
        </form>
        {/* Add map embed here */}
      </div>
    </section>
  );
};

export default Contact;
