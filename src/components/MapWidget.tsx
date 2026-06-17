import React, { useState } from 'react';
import { MapPin, Home as HomeIcon, TrendingUp, AlertTriangle } from 'lucide-react';

const MapWidget = () => {
  const [activePin, setActivePin] = useState<number | null>(1);

  const properties = [
    { id: 1, lat: 45, lng: 30, price: '$1.2M', score: 94, trend: '+5.2%', address: '1423 Westlake Ave' },
    { id: 2, lat: 20, lng: 60, price: '$850K', score: 88, trend: '+3.1%', address: '890 Pine St' },
    { id: 3, lat: 70, lng: 45, price: '$2.4M', score: 98, trend: '+8.4%', address: '22 Ocean Blvd' },
  ];

  return (
    <div className="card" style={{ padding: '0', overflow: 'hidden', position: 'relative', height: '400px', background: '#E0E7FF' }}>
      {/* Fake Map Background */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.5, backgroundImage: 'radial-gradient(#94A3B8 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      {/* Map Pins */}
      {properties.map((prop) => (
        <div 
          key={prop.id}
          onClick={() => setActivePin(prop.id)}
          style={{
            position: 'absolute',
            top: `${prop.lat}%`,
            left: `${prop.lng}%`,
            transform: 'translate(-50%, -100%)',
            cursor: 'pointer',
            zIndex: activePin === prop.id ? 10 : 1
          }}
        >
          <div style={{ position: 'relative' }}>
            <div style={{
              background: activePin === prop.id ? 'var(--primary)' : 'white',
              color: activePin === prop.id ? 'white' : 'var(--text-dark)',
              padding: '0.4rem 0.8rem',
              borderRadius: '8px',
              fontWeight: 600,
              boxShadow: 'var(--shadow-md)',
              border: activePin === prop.id ? 'none' : '1px solid var(--border-light)'
            }}>
              {prop.price}
            </div>
            <div style={{
              position: 'absolute',
              bottom: '-6px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderTop: `6px solid ${activePin === prop.id ? 'var(--primary)' : 'white'}`
            }}></div>
          </div>
        </div>
      ))}

      {/* Valuation Dashboard Popup */}
      {activePin && (
        <div className="animate-fade-in glass" style={{ 
          position: 'absolute', 
          bottom: '1rem', 
          right: '1rem', 
          width: '280px', 
          padding: '1.25rem', 
          borderRadius: '16px',
          boxShadow: 'var(--shadow-lg)'
        }}>
          {properties.filter(p => p.id === activePin).map(p => (
            <div key={p.id}>
              <div className="flex justify-between items-start" style={{ marginBottom: '1rem' }}>
                <div>
                  <h4 style={{ fontWeight: 600, color: 'var(--text-dark)', fontSize: '1rem' }}>{p.address}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Estimated Valuation</p>
                </div>
                <div style={{ background: '#10B981', color: 'white', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700 }}>
                  {p.score}/100
                </div>
              </div>
              
              <div className="flex justify-between items-end" style={{ marginBottom: '1rem' }}>
                <div className="h3" style={{ margin: 0 }}>{p.price}</div>
                <div className="flex items-center gap-1" style={{ color: '#10B981', fontSize: '0.85rem', fontWeight: 500 }}>
                  <TrendingUp size={14} /> {p.trend} 1y
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '0.75rem' }}>
                <div className="flex items-center gap-2" style={{ fontSize: '0.8rem', color: 'var(--text-body)' }}>
                  <AlertTriangle size={14} color="#F59E0B" /> Zoning changes pending
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MapWidget;
