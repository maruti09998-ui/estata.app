import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BarChart3 } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="navbar-container glass">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo">
          <BarChart3 className="logo-icon" />
          <span className="logo-text">Estata</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar-links desktop-only">
          <Link to="/product" className={`nav-link ${isActive('/product') ? 'active' : ''}`}>Product</Link>
          <Link to="/solutions" className={`nav-link ${isActive('/solutions') ? 'active' : ''}`}>Solutions</Link>
          <Link to="/pricing" className={`nav-link ${isActive('/pricing') ? 'active' : ''}`}>Pricing</Link>
          <Link to="/insights" className={`nav-link ${isActive('/insights') ? 'active' : ''}`}>Insights</Link>
        </nav>

        <div className="navbar-actions desktop-only">
          <Link to="/waitlist" className="btn btn-primary">Request access</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav-links">
            <Link to="/product" onClick={toggleMenu} className="mobile-nav-link">Product</Link>
            <Link to="/solutions" onClick={toggleMenu} className="mobile-nav-link">Solutions</Link>
            <Link to="/pricing" onClick={toggleMenu} className="mobile-nav-link">Pricing</Link>
            <Link to="/insights" onClick={toggleMenu} className="mobile-nav-link">Insights</Link>
            <Link to="/waitlist" onClick={toggleMenu} className="btn btn-primary mobile-nav-btn">Request access</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
