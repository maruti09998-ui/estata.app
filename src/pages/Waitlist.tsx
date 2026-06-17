import React from 'react';
import WaitlistForm from '../components/WaitlistForm';
import { Hexagon, Lock, Zap, Target } from 'lucide-react';

const Waitlist = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6rem 1rem 4rem 1rem', background: 'var(--bg-main)' }}>
      
      <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <div className="animate-fade-in">
          <Hexagon fill="var(--primary)" color="var(--primary)" size={48} style={{ margin: '0 auto 2rem auto' }} />
          <h1 className="h1" style={{ marginBottom: '1.5rem', fontSize: '3rem', lineHeight: 1.1 }}>
            The future of property intelligence.
          </h1>
          <p className="text-body" style={{ fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            We're currently in closed beta. Join the waitlist to secure your spot for the public launch of Estata 2.0.
          </p>
        </div>
        
        <div className="animate-fade-in delay-200" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <WaitlistForm />
          
          <div style={{ marginTop: '2rem', paddingTop: '2rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>
              By joining the waitlist, you agree to our <a href="/terms" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Terms of Service</a> and <a href="/privacy" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Waitlist;
