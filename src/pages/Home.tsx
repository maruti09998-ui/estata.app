import React from 'react';
import WaitlistForm from '../components/WaitlistForm';
import ValuationConsole from '../components/ValuationConsole';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, ShieldCheck } from 'lucide-react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero section">
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="pill-badge">
              <TrendingUp size={16} /> Transparent valuation intelligence
            </div>
          </motion.div>

          <motion.h1 
            className="text-display"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Property decisions, <br/>
            powered by data.
          </motion.h1>
          
          <motion.p 
            className="text-lead mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ marginBottom: '3rem' }}
          >
            Estata generates automated valuations, scores investment opportunities against comparable sales and neighborhood trends, and tracks portfolio performance — so investors and agents stop buying on a hunch.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <WaitlistForm />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <ValuationConsole />
          </motion.div>

        </div>
      </section>

      {/* Logo Strip */}
      <section style={{ padding: '2rem 0 4rem', textAlign: 'center', color: 'var(--text-muted)' }}>
        <p style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Built for teams replacing instinct with evidence</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', opacity: 0.6 }}>
          {/* Placeholder icons for logos */}
          <ShieldCheck size={24} />
          <BarChart3 size={24} />
          <TrendingUp size={24} />
          <ShieldCheck size={24} />
        </div>
      </section>

      {/* Problem Section */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="glass" style={{ padding: '4rem', borderRadius: 'var(--radius-xl)', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Real estate is the largest asset class with some of the worst data tooling.</h2>
              <p className="text-lead" style={{ margin: 0 }}>
                We price stocks to the cent but buy property on a hunch. The wrong three comparables can justify the wrong deal, and by the time a neighborhood is obviously hot, the opportunity is gone.
              </p>
            </div>
            <div style={{ backgroundColor: 'var(--bg-color)', padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--primary)' }}>Common deal-room gaps</h4>
              <ul style={{ color: 'var(--text-muted)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none' }}>
                <li>• Stale comps</li>
                <li>• Hidden trend shifts</li>
                <li>• Inconsistent underwriting</li>
                <li>• Portfolio blind spots</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>One intelligence layer for valuation, comps, signals, and portfolios.</h2>
          </div>
          
          <div className="features-grid">
            <div className="feature-card glass">
              <div className="feature-icon" style={{ backgroundColor: 'rgba(226, 166, 118, 0.15)', color: '#B46C3B' }}><BarChart3 size={24} /></div>
              <h3>Automated valuations</h3>
              <p>Transparent models built from comparable sales, property attributes, and confidence ranges.</p>
            </div>
            
            <div className="feature-card" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
              <div className="feature-icon" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--accent)' }}><TrendingUp size={24} /></div>
              <h3 style={{ color: 'white' }}>Investment scoring</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>Rank deals against comps, local liquidity, rent movement, and leading indicators.</p>
            </div>
            
            <div className="feature-card glass">
              <div className="feature-icon" style={{ backgroundColor: 'rgba(226, 166, 118, 0.15)', color: '#B46C3B' }}><ShieldCheck size={24} /></div>
              <h3>Portfolio tracking</h3>
              <p>Track valuations, alert on market shifts, and monitor performance across assets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA (Waitlist) */}
      <section className="section" style={{ paddingBottom: '8rem' }}>
        <div className="container">
           <div className="glass" style={{ padding: '6rem 2rem', borderRadius: 'var(--radius-xl)', textAlign: 'center' }}>
             <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>From address search to investment score in five transparent steps.</h2>
             <p className="text-lead" style={{ marginBottom: '3rem' }}>Join the waitlist to be the first to know when we launch.</p>
             <WaitlistForm />
           </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
