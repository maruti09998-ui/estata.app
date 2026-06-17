import React from 'react';
import { Link } from 'react-router-dom';
import { Hexagon, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--bg-main)', paddingTop: '4rem', paddingBottom: '2rem', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', gridColumn: 'span 1' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.5rem' }}>
              <Hexagon fill="var(--primary)" color="var(--primary)" size={32} />
              <span style={{ color: 'var(--text-dark)'}}>Esta<span style={{ color: 'var(--primary)' }}>ta</span></span>
            </Link>
            <p style={{ color: 'var(--text-body)', maxWidth: '300px' }}>
              Property decisions, powered by data. Automated valuation and real estate investment intelligence.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-around', gridColumn: 'span 2', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h4 style={{ color: 'var(--text-dark)', fontWeight: 600, fontSize: '1.1rem' }}>Product</h4>
              <Link to="/product" style={{ color: 'var(--text-body)' }}>Automated Valuation</Link>
              <Link to="/product" style={{ color: 'var(--text-body)' }}>Investment Scoring</Link>
              <Link to="/product" style={{ color: 'var(--text-body)' }}>Neighborhood Signals</Link>
              <Link to="/pricing" style={{ color: 'var(--text-body)' }}>Pricing</Link>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h4 style={{ color: 'var(--text-dark)', fontWeight: 600, fontSize: '1.1rem' }}>Solutions</h4>
              <Link to="/solutions" style={{ color: 'var(--text-body)' }}>For Investors</Link>
              <Link to="/solutions" style={{ color: 'var(--text-body)' }}>For Agents & Brokerages</Link>
              <Link to="/insights" style={{ color: 'var(--text-body)' }}>Market Insights</Link>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h4 style={{ color: 'var(--text-dark)', fontWeight: 600, fontSize: '1.1rem' }}>Legal</h4>
              <Link to="/privacy" style={{ color: 'var(--text-body)' }}>Privacy Policy</Link>
              <Link to="/terms" style={{ color: 'var(--text-body)' }}>Terms of Service</Link>
              <Link to="/data-sources" style={{ color: 'var(--text-body)' }}>Data Sources</Link>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', maxWidth: '600px' }}>
            &copy; {new Date().getFullYear()} Estata Inc. All rights reserved. <br/>
            <strong>Disclaimer:</strong> The information provided by Estata does not constitute financial, investment, or legal advice. All valuations are algorithmic estimates and should be verified independently.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/waitlist" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
              Request Access
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
