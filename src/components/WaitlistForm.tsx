import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const WaitlistForm = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMsg, setErrorMsg] = useState('');
  const [counter, setCounter] = useState(14023); // starting number for the waitlist

  // Live incrementing counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly increment by 1 or 2 every few seconds to simulate activity
      if (Math.random() > 0.6) {
        setCounter(prev => prev + Math.floor(Math.random() * 3) + 1);
      }
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setErrorMsg('Please enter an email address.');
      setStatus('error');
      return;
    }
    if (!validateEmail(email)) {
      setErrorMsg('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setCounter(prev => prev + 1); // Add the user to the counter!
    }, 1200);
  };

  if (status === 'success') {
    return (
      <div className={`waitlist-success animate-fade-in ${className}`} style={{ background: 'var(--accent)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <CheckCircle2 color="var(--primary)" size={24} />
          <h4 style={{ color: 'var(--text-dark)', fontWeight: 600, fontSize: '1.1rem', margin: 0 }}>You're on the list!</h4>
        </div>
        <p style={{ color: 'var(--text-body)', margin: 0 }}>Keep an eye on your inbox. We'll be in touch soon.</p>
      </div>
    );
  }

  return (
    <div className={`waitlist-container ${className}`}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', position: 'relative' }}>
          <input 
            type="email" 
            value={email}
            onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
            placeholder="name@company.com" 
            style={{ 
              flex: 1, 
              padding: '1rem 1.25rem', 
              borderRadius: '999px', 
              border: `1px solid ${status === 'error' ? '#FF4444' : 'var(--border-light)'}`,
              outline: 'none',
              fontSize: '1rem',
              boxShadow: 'var(--shadow-sm)'
            }}
          />
          <button 
            type="submit" 
            className="btn btn-primary" 
            disabled={status === 'loading'}
            style={{ padding: '1rem 1.5rem', minWidth: '140px' }}
          >
            {status === 'loading' ? 'Joining...' : 'Request Access'}
          </button>
        </div>
        
        {status === 'error' && (
          <p style={{ color: '#FF4444', fontSize: '0.85rem', paddingLeft: '1rem', margin: 0 }}>
            {errorMsg}
          </p>
        )}
        
        <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', paddingLeft: '1rem', margin: '0.5rem 0 0 0', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 8px #10B981' }}></span>
          <strong>{counter.toLocaleString()}</strong> property professionals on the waitlist.
        </p>
      </form>
    </div>
  );
};

export default WaitlistForm;
