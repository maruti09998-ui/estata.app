import React from 'react';
import WaitlistForm from '../components/WaitlistForm';
import { Briefcase, Building } from 'lucide-react';
import BottomCTA from '../components/BottomCTA';

const Solutions: React.FC = () => {
  return (
    <div className="solutions-page section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', marginBottom: '5rem' }}>
          <h1 className="text-display">Built for the modern real estate professional.</h1>
          <p className="text-lead mt-4">
            Whether you're underwriting deals or winning listings, Estata provides the data edge you need to move faster and smarter.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
          {/* For Investors */}
          <div className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ padding: '1rem', backgroundColor: 'rgba(226, 166, 118, 0.15)', color: '#B46C3B', borderRadius: '16px' }}>
                <Briefcase size={32} />
              </div>
              <h2 style={{ fontSize: '2rem', margin: 0 }}>For Investors</h2>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem', flex: 1 }}>
              <div style={{ backgroundColor: 'var(--bg-color)', padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>The Scenario</div>
                <p style={{ margin: 0, fontWeight: 500 }}>You're evaluating 50 properties a week trying to find the one that cash flows.</p>
              </div>

              <div style={{ backgroundColor: 'rgba(28, 43, 59, 0.03)', border: '1px solid var(--border-color)', padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>The Outcome</div>
                <p style={{ margin: 0, color: 'var(--text-main)' }}>Estata automatically scores the list based on your criteria, flags the top 3, and provides the comps to justify your offer.</p>
              </div>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-muted)' }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><span style={{ color: 'var(--accent)' }}>✦</span> Bulk portfolio uploading</li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><span style={{ color: 'var(--accent)' }}>✦</span> Custom investment criteria filters</li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><span style={{ color: 'var(--accent)' }}>✦</span> ROI and Cap Rate projections</li>
            </ul>

            <WaitlistForm />
          </div>

          {/* For Agents & Brokerages */}
          <div style={{ padding: '3rem', borderRadius: 'var(--radius-xl)', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--accent)', borderRadius: '16px' }}>
                <Building size={32} />
              </div>
              <h2 style={{ fontSize: '2rem', margin: 0, color: 'white' }}>For Agents & Brokerages</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem', flex: 1 }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>The Scenario</div>
                <p style={{ margin: 0, color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>You need to win a listing presentation against three other top agents.</p>
              </div>

              <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>The Outcome</div>
                <p style={{ margin: 0, color: 'var(--text-main)' }}>You walk in with a co-branded Estata Market Report Card, proving you have better data and pricing strategies than the competition.</p>
              </div>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><span style={{ color: 'var(--accent)' }}>✦</span> Branded market report generation</li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><span style={{ color: 'var(--accent)' }}>✦</span> Client portfolio monitoring</li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><span style={{ color: 'var(--accent)' }}>✦</span> Team analytics and API access</li>
            </ul>

            <WaitlistForm />
          </div>
        </div>
        
        <BottomCTA />
      </div>
    </div>
  );
};

export default Solutions;
