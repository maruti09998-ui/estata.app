import React from 'react';
import WaitlistForm from './WaitlistForm';

const BottomCTA: React.FC = () => {
  return (
    <div style={{ padding: '6rem 2rem', background: 'var(--primary)', color: 'white', borderRadius: 'var(--radius-xl)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: 'var(--shadow-lg)', marginTop: '4rem', marginBottom: '2rem' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Ready to replace instinct with evidence?</h2>
      <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '3rem', maxWidth: '600px', fontSize: '1.1rem' }}>
        Join the waitlist to get early access to our data-driven valuation models and investment intelligence platform.
      </p>
      <div style={{ width: '100%', maxWidth: '500px' }}>
        <WaitlistForm />
      </div>
    </div>
  );
};

export default BottomCTA;
