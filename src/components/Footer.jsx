import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top"><div><a href="#home" className="footer-wordmark">UNTALAN<span>.</span></a><p>Water Tank & Steel Manufacturing<br />Made with care. Built for the long run.</p></div><div className="footer-links"><a href="#products">Our products</a><a href="#about">Our story</a><a href="#contact">Get in touch</a><a href="https://www.facebook.com/profile.php?id=61563526510118" target="_blank" rel="noreferrer">Facebook <span aria-hidden="true">↗</span></a></div></div>
      <div className="footer-bottom"><p>© {new Date().getFullYear()} Untalan Water Tank & Steel Manufacturing.</p><p>Pampanga, Philippines <span aria-hidden="true">↗</span></p><a href="#home">Back to top ↑</a></div>
    </footer>
  );
}
