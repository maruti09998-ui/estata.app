import React from 'react';
import { Activity, TrendingUp, Map, BarChart2 } from 'lucide-react';
import WaitlistForm from '../components/WaitlistForm';

const Product = () => {
  return (
    <div style={{ width: '100%', paddingTop: '6rem' }}>
      
      {/* Header */}
      <section className="section text-center" style={{ paddingBottom: '3rem' }}>
        <div className="container">
          <div className="badge badge-orange">Product</div>
          <h1 className="h1" style={{ marginBottom: '1rem' }}>The Intelligence Behind Estata</h1>
          <p className="text-body" style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
            We've built a comprehensive data infrastructure to remove the guesswork from your real estate decisions. Explore our core features below.
          </p>
        </div>
      </section>

      {/* Feature 1 */}
      <section className="section" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <div className="icon-box icon-box-primary"><Activity size={24}/></div>
              <h2 className="h2" style={{ marginBottom: '1rem' }}>Automated Valuation Models (AVM)</h2>
              <p className="text-body" style={{ marginBottom: '1.5rem' }}>
                Traditional appraisals are slow, expensive, and backward-looking. Estata's proprietary AVM processes over 150 million property records in real-time to provide valuations that are accurate to within 4.2% of final sale prices.
              </p>
              <ul className="flex-col gap-2">
                <li className="flex items-center gap-2"><div style={{width: 6, height: 6, borderRadius:'50%', background:'var(--primary)'}}></div> Daily refreshed price estimates</li>
                <li className="flex items-center gap-2"><div style={{width: 6, height: 6, borderRadius:'50%', background:'var(--primary)'}}></div> Historical valuation charts</li>
                <li className="flex items-center gap-2"><div style={{width: 6, height: 6, borderRadius:'50%', background:'var(--primary)'}}></div> Confidence intervals for every property</li>
              </ul>
            </div>
            <div style={{ background: 'var(--bg-main)', height: '350px', borderRadius: '24px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}></div>
          </div>
        </div>
      </section>

      {/* Feature 2 */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center" style={{ direction: 'rtl' }}>
            <div style={{ direction: 'ltr' }}>
              <div className="icon-box icon-box-primary"><TrendingUp size={24}/></div>
              <h2 className="h2" style={{ marginBottom: '1rem' }}>Investment Scoring & Comps</h2>
              <p className="text-body" style={{ marginBottom: '1.5rem' }}>
                Stop manually building spreadsheets. Our system automatically generates comprehensive CMA (Comparative Market Analysis) reports and scores every property based on cash flow potential, appreciation, and rental yields.
              </p>
              <ul className="flex-col gap-2">
                <li className="flex items-center gap-2"><div style={{width: 6, height: 6, borderRadius:'50%', background:'var(--primary)'}}></div> AI-selected comps (not just radius-based)</li>
                <li className="flex items-center gap-2"><div style={{width: 6, height: 6, borderRadius:'50%', background:'var(--primary)'}}></div> Estata Score™ out of 100</li>
                <li className="flex items-center gap-2"><div style={{width: 6, height: 6, borderRadius:'50%', background:'var(--primary)'}}></div> Rental yield projections</li>
              </ul>
            </div>
            <div style={{ background: 'var(--bg-card)', height: '350px', borderRadius: '24px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)', direction: 'ltr' }}></div>
          </div>
        </div>
      </section>

      {/* Feature 3 */}
      <section className="section" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <div className="icon-box icon-box-primary"><Map size={24}/></div>
              <h2 className="h2" style={{ marginBottom: '1rem' }}>Neighborhood & Trend Signals</h2>
              <p className="text-body" style={{ marginBottom: '1.5rem' }}>
                Property values don't exist in a vacuum. We aggregate macro and micro-economic data to predict neighborhood shifts before they reflect in property prices.
              </p>
              <ul className="flex-col gap-2">
                <li className="flex items-center gap-2"><div style={{width: 6, height: 6, borderRadius:'50%', background:'var(--primary)'}}></div> Commercial development tracking</li>
                <li className="flex items-center gap-2"><div style={{width: 6, height: 6, borderRadius:'50%', background:'var(--primary)'}}></div> Demographic migration patterns</li>
                <li className="flex items-center gap-2"><div style={{width: 6, height: 6, borderRadius:'50%', background:'var(--primary)'}}></div> Infrastructure and zoning changes</li>
              </ul>
            </div>
            <div style={{ background: 'var(--bg-main)', height: '350px', borderRadius: '24px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}></div>
          </div>
        </div>
      </section>

      {/* Feature 4 */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center" style={{ direction: 'rtl' }}>
            <div style={{ direction: 'ltr' }}>
              <div className="icon-box icon-box-primary"><BarChart2 size={24}/></div>
              <h2 className="h2" style={{ marginBottom: '1rem' }}>Portfolio Tracking</h2>
              <p className="text-body" style={{ marginBottom: '1.5rem' }}>
                Sync your existing portfolio to watch your equity grow in real-time. Estata acts as the financial command center for your entire real estate operation.
              </p>
              <ul className="flex-col gap-2">
                <li className="flex items-center gap-2"><div style={{width: 6, height: 6, borderRadius:'50%', background:'var(--primary)'}}></div> Total equity tracking</li>
                <li className="flex items-center gap-2"><div style={{width: 6, height: 6, borderRadius:'50%', background:'var(--primary)'}}></div> Net operating income (NOI) analytics</li>
                <li className="flex items-center gap-2"><div style={{width: 6, height: 6, borderRadius:'50%', background:'var(--primary)'}}></div> Automated monthly performance reports</li>
              </ul>
            </div>
            <div style={{ background: 'var(--bg-card)', height: '350px', borderRadius: '24px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)', direction: 'ltr' }}></div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(180deg, var(--accent) 0%, transparent 100%)', opacity: 0.5, zIndex: -1 }}></div>
        <div className="container text-center">
          <h2 className="h1" style={{ marginBottom: '1.5rem' }}>Experience the difference.</h2>
          <p className="text-body" style={{ fontSize: '1.25rem', marginBottom: '2.5rem' }}>Join the waitlist today to get early access to Estata 2.0.</p>
          <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <WaitlistForm />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Product;
