import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/Logo.png';

const links = [['products', 'Our products'], ['about', 'Our story'], ['projects', 'Projects'], ['process', 'Our process']];

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className="site-header" id="header">
      <a href="#home" className="brand" aria-label="Untalan Water Tank and Steel Manufacturing home" onClick={() => setOpen(false)}>
        <img src={logo} alt="" width="50" height="50" />
        <span><strong>UNTALAN<span className="brand-period">.</span></strong><small>Water Tank & Steel Manufacturing</small></span>
      </a>
      <button className="menu-toggle" type="button" ref={toggle} aria-expanded={open} aria-controls="site-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>
        <span aria-hidden="true">{open ? '×' : '☰'}</span>
      </button>
      <nav id="site-navigation" className={`site-navigation${open ? ' is-open' : ''}`} aria-label="Main navigation">
        {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="button button-small button-primary" href="#contact" onClick={() => setOpen(false)}>Let’s talk <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  );
}
