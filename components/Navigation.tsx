'use client';

import { useState } from 'react';
import AnimatedLink from './AnimatedLink';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-content">
          <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
            <li>
              <AnimatedLink href="/" onClick={() => setIsMenuOpen(false)}>home</AnimatedLink>
            </li>
            <li>
              <AnimatedLink href="/blog" onClick={() => setIsMenuOpen(false)}>blog</AnimatedLink>
            </li>
            <li>
              <AnimatedLink href="/about" onClick={() => setIsMenuOpen(false)}>About</AnimatedLink>
            </li>
          </ul>
          <div className="nav-actions">
            <ThemeToggle />
            <button 
              className="nav-toggle"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <span className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
