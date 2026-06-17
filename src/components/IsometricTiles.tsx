import React from 'react';
import { Settings, PieChart, Sparkles, User, BoxSelect } from 'lucide-react';

const Cube = ({ cx, cy, icon: Icon, delay }) => {
  const w = 80;
  const h = 45;
  const d = 70;

  return (
    <g transform={`translate(${cx}, ${cy})`} className={`animate-fade-in ${delay}`}>
      <style>{`
        @keyframes float-cube {
          0%, 100% { transform: translate(${cx}px, ${cy}px); }
          50% { transform: translate(${cx}px, ${cy - 10}px); }
        }
        .cube-group-${cx}-${cy} {
          animation: float-cube 6s ease-in-out infinite;
          animation-delay: ${Math.random() * 2}s;
        }
      `}</style>
      <g className={`cube-group-${cx}-${cy}`}>
        {/* Left Face */}
        <polygon 
          points={`-${w},0 0,${h} 0,${h+d} -${w},${d}`} 
          fill="#E6E4F0" 
          stroke="#E6E4F0" strokeWidth="20" strokeLinejoin="round" 
        />
        {/* Right Face */}
        <polygon 
          points={`${w},0 0,${h} 0,${h+d} ${w},${d}`} 
          fill="#D9D7E4" 
          stroke="#D9D7E4" strokeWidth="20" strokeLinejoin="round" 
        />
        {/* Top Face */}
        <polygon 
          points={`0,-${h} ${w},0 0,${h} -${w},0`} 
          fill="#FFFFFF" 
          stroke="#FFFFFF" strokeWidth="20" strokeLinejoin="round" 
        />
        
        {/* Isometric Icon Wrapper */}
        <g transform="scale(2) scale(1, 0.5625) rotate(-45) translate(-12, -12)">
          {Icon && <Icon size={24} color="#8571BE" strokeWidth={2.5} />}
        </g>
      </g>
    </g>
  );
};

const IsometricTiles = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '450px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2rem 0' }}>
      
      {/* Absolute positioned floating button */}
      <div 
        className="animate-fade-in"
        style={{
          position: 'absolute',
          top: '20px',
          zIndex: 10,
          background: 'linear-gradient(135deg, #44248E, #6944BC)',
          color: 'white',
          padding: '16px 36px',
          borderRadius: '999px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          boxShadow: '0 0 0 6px rgba(255,255,255,0.8), 0 16px 40px rgba(68, 36, 142, 0.3)',
          border: '1px solid rgba(255,255,255,0.9)',
          fontWeight: 600,
          fontSize: '1.2rem',
          cursor: 'pointer',
          transform: 'translateY(0)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 0 0 6px rgba(255,255,255,0.9), 0 20px 50px rgba(68, 36, 142, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 0 0 6px rgba(255,255,255,0.8), 0 16px 40px rgba(68, 36, 142, 0.3)';
        }}
      >
        <User size={24} />
        Book A Free Call Now
      </div>

      {/* The SVG Tiles */}
      <svg width="100%" height="100%" viewBox="0 0 500 450" style={{ filter: 'drop-shadow(0 30px 40px rgba(74, 46, 142, 0.15))', overflow: 'visible' }}>
        {/* Top Cube */}
        <Cube cx={250} cy={120} icon={BoxSelect} delay="" />
        
        {/* Left Cube */}
        <Cube cx={150} cy={175} icon={Settings} delay="delay-100" />

        {/* Right Cube */}
        <Cube cx={350} cy={175} icon={PieChart} delay="delay-200" />

        {/* Bottom Cube */}
        <Cube cx={250} cy={230} icon={Sparkles} delay="delay-300" />
      </svg>
    </div>
  );
};

export default IsometricTiles;
