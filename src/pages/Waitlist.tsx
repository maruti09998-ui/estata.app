import React from 'react';
import WaitlistForm from '../components/WaitlistForm';
import { ShieldCheck, BarChart3, TrendingUp } from 'lucide-react';

const Waitlist: React.FC = () => {
  return (
    <div className="waitlist-page section">
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 className="text-display" style={{ marginBottom: '1.5rem' }}>Join the exclusive beta.</h1>
        <p className="text-lead" style={{ marginBottom: '4rem' }}>
          Be among the first to bring real-time data, automated valuations, and algorithmic investment scoring to your property decisions.
        </p>

        <div className="glass" style={{ padding: '4rem', borderRadius: 'var(--radius-xl)', marginBottom: '5rem', backgroundColor: 'white', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-md)' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--text-main)' }}>Reserve your spot on the waitlist</h2>
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <WaitlistForm />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1rem', backgroundColor: 'rgba(28, 43, 59, 0.05)', color: 'var(--primary)', borderRadius: '50%' }}>
              <BarChart3 size={24} />
            </div>
            <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>Automated Valuations</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1rem', backgroundColor: 'rgba(28, 43, 59, 0.05)', color: 'var(--primary)', borderRadius: '50%' }}>
              <TrendingUp size={24} />
            </div>
            <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>Investment Scoring</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1rem', backgroundColor: 'rgba(28, 43, 59, 0.05)', color: 'var(--primary)', borderRadius: '50%' }}>
              <ShieldCheck size={24} />
            </div>
            <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>Portfolio Tracking</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
