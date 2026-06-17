import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [counter, setCounter] = useState(1287); // Initial counter value

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setCounter(prev => prev + 1);
    }, 1000);
  };

  if (status === 'success') {
    return (
      <div className="waitlist-wrapper">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'green' }}>
          <CheckCircle2 size={24} />
          <span style={{ fontWeight: 600 }}>You're on the list!</span>
        </div>
        <p style={{ color: 'var(--text-muted)' }}>Keep an eye on your inbox for early access details.</p>
        <div className="waitlist-header">
          <span className="dot"></span> Analysts on waitlist: {counter.toLocaleString()}
        </div>
      </div>
    );
  }

  return (
    <div className="waitlist-wrapper">
      <div className="waitlist-header">
        <span className="dot"></span> Analysts on waitlist: {counter.toLocaleString()}
      </div>
      <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 500 }}>Request early access</p>
      <form className="form-group" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="work@email.com"
          className="input-field"
          required
        />
        <button type="submit" className="btn btn-primary" disabled={status === 'loading'} style={{ padding: '0.75rem 1.5rem', width: '100%' }}>
          {status === 'loading' ? 'Joining...' : 'Request access'}
        </button>
      </form>
    </div>
  );
};

export default WaitlistForm;
