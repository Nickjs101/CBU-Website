import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white p-4">
      <div className="container mx-auto text-center">
        <p className="mb-4">© 2024 Untalan Water Tank & Steel Manufacturing. All rights reserved.</p>
        <p>7052 Legaspi ext. Duquit-Maisac Mabalacat City Pampanga</p>
        <p>0917-623-7040 | cbutanks@gmail.com</p>
        <div className="mt-4">
          <a href='https://www.facebook.com/profile.php?id=61563526510118&mibextid=ZbWKwL' className="mr-4 hover:underline">Facebook</a>
          {/* <span className="hover:underline">LinkedIn</span> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
