import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--border-color)', padding: '4rem 0', backgroundColor: 'var(--bg-surface)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
        <div>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '1rem' }}>
            <BarChart3 className="logo-icon" color="var(--accent)" />
            <span>Estata</span>
          </Link>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            Property decisions, powered by data. Automated valuations and investment intelligence.
          </p>
        </div>

        <div>
          <h4 style={{ marginBottom: '1rem' }}>Product</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><Link to="/product" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Valuations</Link></li>
            <li><Link to="/product" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Investment Scoring</Link></li>
            <li><Link to="/product" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Portfolio Tracking</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: '1rem' }}>Company</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><Link to="/insights" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Insights & Data</Link></li>
            <li><Link to="/pricing" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Pricing</Link></li>
          </ul>
        </div>
      </div>
      <div className="container" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.8 }}>
            Disclaimer: Estata provides data and modeling for informational purposes only. This is not investment advice. Real estate markets carry inherent risk.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            <span>&copy; {new Date().getFullYear()} Estata, Inc.</span>
            <a href="#" style={{ color: 'var(--text-muted)' }}>Privacy</a>
            <a href="#" style={{ color: 'var(--text-muted)' }}>Terms</a>
            <a href="#" style={{ color: 'var(--text-muted)' }}>Data Sources</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
