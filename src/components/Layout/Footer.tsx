import React from 'react';
import { Link } from 'react-router-dom';
import { Hexagon, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--bg-main)', paddingTop: '6rem', borderTop: '1px solid var(--border-light)' }}>
      <div className="container grid grid-cols-3 gap-8" style={{ paddingBottom: '4rem' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', gridColumn: 'span 1' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.5rem' }}>
            <Hexagon fill="var(--primary)" color="var(--primary)" size={32} />
            <span style={{ color: 'var(--text-dark)'}}>Esta<span style={{ color: 'var(--primary)' }}>ta</span></span>
          </Link>
          <p style={{ color: 'var(--text-body)', maxWidth: '300px' }}>
            Lead your business with AI-Automation. We provide seamless integration and cost-effective solutions for your enterprise.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-around', gridColumn: 'span 2', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={styles.linkGroup}>
            <h4 style={styles.linkTitle}>Company</h4>
            <ul style={styles.list}>
              <li><Link to="/" style={styles.link}>About Us</Link></li>
              <li><Link to="/" style={styles.link}>Careers</Link></li>
              <li><Link to="/" style={styles.link}>News</Link></li>
              <li><Link to="/" style={styles.link}>Contact</Link></li>
            </ul>
          </div>
          
          <div style={styles.linkGroup}>
            <h4 style={styles.linkTitle}>Services</h4>
            <ul style={styles.list}>
              <li><Link to="/" style={styles.link}>AI Automation</Link></li>
              <li><Link to="/" style={styles.link}>Data Analytics</Link></li>
              <li><Link to="/" style={styles.link}>Cloud Integration</Link></li>
              <li><Link to="/" style={styles.link}>Consulting</Link></li>
            </ul>
          </div>

          <div style={styles.linkGroup}>
            <h4 style={styles.linkTitle}>Newsletter</h4>
            <p style={{ color: 'var(--text-body)', fontSize: '0.9rem', marginBottom: '1rem', maxWidth: '200px' }}>
              Subscribe to get latest updates and news.
            </p>
            <div style={{ display: 'flex', background: 'var(--bg-card)', borderRadius: '999px', padding: '0.25rem', border: '1px solid var(--border-light)' }}>
              <input type="email" placeholder="Your email address" style={{ border: 'none', background: 'transparent', padding: '0.5rem 1rem', outline: 'none', width: '100%' }} />
              <button style={{ background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>
      
      <div style={{ borderTop: '1px solid var(--border-light)', padding: '2rem 0', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Estata Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  socialIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'var(--bg-card)',
    border: '1px solid var(--border-light)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--primary)',
    transition: 'all 0.3s ease',
  },
  linkGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  linkTitle: {
    color: 'var(--text-dark)',
    fontWeight: 700,
    fontSize: '1.1rem',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  link: {
    color: 'var(--text-body)',
    fontSize: '0.95rem',
  }
};

export default Footer;
