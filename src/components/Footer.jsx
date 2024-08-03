import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-4">
      <div className="container mx-auto text-center">
        <p className="mb-4">© 2024 CBU Water Tank Manufacturing. All rights reserved.</p>
        <p>7052 Legaspi ext. Duquit-Maisac Mabalacat City Pampanga</p>
        <p>0917-623-7040 | cbuwtm@gmail.com</p>
        <div className="mt-4">
          <a href="#" className="mr-4 hover:underline">Facebook</a>
          <a href="#" className="hover:underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
