import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-4">
      <div className="container mx-auto text-center">
        <p className="mb-4">© 2024 CBU Water Tank Manufacturing. All rights reserved.</p>
        <p>7052 Legaspi ext. Duquit-Maisac Mabalacat City Pampanga</p>
        <p>0917-623-7040 | cbuwtm@gmail.com</p>
        <div className="mt-4">
          <span className="mr-4 hover:underline">Facebook</span>
          <span className="hover:underline">LinkedIn</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
