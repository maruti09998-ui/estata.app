import React from 'react';
import WaitlistForm from '../components/WaitlistForm';
import { Hexagon, Lock, Zap, Target } from 'lucide-react';

const Waitlist = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6rem 1rem 4rem 1rem', background: 'var(--bg-main)' }}>
      
      <div className="container">
        <div className="grid grid-cols-2 gap-12 items-center" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          <div className="animate-fade-in">
            <Hexagon fill="var(--primary)" color="var(--primary)" size={48} style={{ marginBottom: '2rem' }} />
            <h1 className="h1" style={{ marginBottom: '1.5rem', fontSize: '3rem', lineHeight: 1.1 }}>
              The future of property intelligence.
            </h1>
            <p className="text-body" style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
              We're currently in closed beta. Join the waitlist to secure your spot for the public launch of Estata 2.0.
            </p>
            
            <ul className="flex-col gap-4" style={{ marginBottom: '3rem' }}>
              <li className="flex items-center gap-3">
                <div style={{ background: 'var(--accent)', padding: '0.5rem', borderRadius: '50%' }}><Zap size={20} color="var(--primary)"/></div>
                <span className="text-body" style={{ fontWeight: 500 }}>Automated underwriting in seconds</span>
              </li>
              <li className="flex items-center gap-3">
                <div style={{ background: 'var(--accent)', padding: '0.5rem', borderRadius: '50%' }}><Target size={20} color="var(--primary)"/></div>
                <span className="text-body" style={{ fontWeight: 500 }}>Hyper-accurate neighborhood trend predictions</span>
              </li>
              <li className="flex items-center gap-3">
                <div style={{ background: 'var(--accent)', padding: '0.5rem', borderRadius: '50%' }}><Lock size={20} color="var(--primary)"/></div>
                <span className="text-body" style={{ fontWeight: 500 }}>Lock in early-adopter pricing for life</span>
              </li>
            </ul>
          </div>
          
          <div className="animate-fade-in delay-200" style={{ background: 'var(--bg-card)', padding: '3rem', borderRadius: '24px', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-light)' }}>
            <h3 className="h3" style={{ marginBottom: '0.5rem' }}>Request Early Access</h3>
            <p className="text-body" style={{ marginBottom: '2rem' }}>Enter your work email to secure your position in line.</p>
            <WaitlistForm />
            
            <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border-light)', textAlign: 'center' }}>
              <p style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>
                By joining the waitlist, you agree to our <a href="/terms" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Terms of Service</a> and <a href="/privacy" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Privacy Policy</a>.
              </p>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  );
};

export default Waitlist;
