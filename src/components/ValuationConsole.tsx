import React from 'react';
import { Home as HomeIcon } from 'lucide-react';
import InteractiveMap from './InteractiveMap';

const ValuationConsole: React.FC = () => {
  return (
    <div style={{
      backgroundColor: 'var(--primary)',
      borderRadius: 'var(--radius-xl)',
      padding: '1.5rem',
      boxShadow: 'var(--shadow-lg)',
      marginTop: '4rem',
      color: 'white',
      fontFamily: 'var(--font-sans)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem', padding: '0 0.5rem', gap: '2rem' }}>
        <h3 style={{ fontSize: '1.1rem', margin: 0, fontWeight: 600, color: 'white' }}>Estata Valuation Console</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>
          <span style={{ width: '6px', height: '6px', backgroundColor: '#27c93f', borderRadius: '50%' }}></span>
          Live market scan
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {/* Left Side: Map/Grid Area */}
        <div style={{ backgroundColor: 'var(--primary-light)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
          <h4 style={{ marginBottom: '1.5rem', fontSize: '1rem', fontWeight: 600, color: 'white' }}>Austin / East Riverside</h4>
          <div style={{ marginBottom: '1.5rem', borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '200px' }}>
            <InteractiveMap />
          </div>
          <div style={{ backgroundColor: 'white', display: 'inline-flex', padding: '0.75rem', borderRadius: 'var(--radius-pill)', color: 'var(--primary)' }}>
            <HomeIcon size={20} />
          </div>
          <div style={{ marginTop: '3rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>
            <span style={{ color: '#E2A676', fontWeight: 600 }}>+12% demand score</span> · 42 comparable sales
          </div>
        </div>

        {/* Right Side: Valuation Result */}
        <div style={{ backgroundColor: 'white', borderRadius: 'var(--radius-lg)', padding: '2rem', color: 'var(--text-main)' }}>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.5rem' }}>Automated valuation</div>
          <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.02em', lineHeight: 1 }}>$684,200</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem', marginBottom: '3rem' }}>Confidence range: $640k - $720k</div>

          {/* Chart Bars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
            <div style={{ height: '8px', backgroundColor: '#F0D5C0', width: '50%', borderRadius: '4px' }}></div>
            <div style={{ height: '8px', backgroundColor: '#E2A676', width: '80%', borderRadius: '4px' }}></div>
            <div style={{ height: '8px', backgroundColor: '#B46C3B', width: '100%', borderRadius: '4px' }}></div>
            <div style={{ height: '8px', backgroundColor: '#E2E8F0', width: '60%', borderRadius: '4px' }}></div>
          </div>

          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <div>Comparable A · 0.5 mi · $672k</div>
            <div>Comparable B · 0.8 mi · $701k</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuationConsole;
