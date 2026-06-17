import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hexagon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const isActive = (path) => location.pathname === path ? 'active' : '';

  const navLinks = [
    { name: 'Product', path: '/product' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Insights', path: '/insights' },
  ];

  return (
    <nav className="glass nav-pill">
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.25rem' }}>
        <Hexagon fill="var(--primary)" color="var(--primary)" size={28} />
        <span style={{ color: 'var(--text-dark)'}}>Esta<span style={{ color: 'var(--primary)' }}>ta</span></span>
      </Link>

      <ul className="nav-links" id="desktop-nav">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link to={link.path} className={`nav-link ${isActive(link.path)}`}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Link to="/waitlist" className="btn btn-primary" id="get-started-btn" style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}>
          Request access
        </Link>
        <button className="mobile-only" onClick={toggleMenu} style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'none' }}>
          {isOpen ? <X size={28} color="var(--text-dark)" /> : <Menu size={28} color="var(--text-dark)" />}
        </button>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          #desktop-nav, #get-started-btn {
            display: none !important;
          }
          .mobile-only {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
