import React from 'react';
import { Briefcase, Building, ArrowRight } from 'lucide-react';
import WaitlistForm from '../components/WaitlistForm';

const Solutions = () => {
  return (
    <div style={{ width: '100%', paddingTop: '6rem' }}>
      
      {/* Header */}
      <section className="section text-center" style={{ paddingBottom: '3rem' }}>
        <div className="container">
          <div className="badge badge-orange">Solutions</div>
          <h1 className="h1" style={{ marginBottom: '1rem' }}>Built for the modern professional</h1>
          <p className="text-body" style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
            Whether you are managing a billion-dollar fund or running a local brokerage, Estata provides the actionable intelligence you need to outperform the market.
          </p>
        </div>
      </section>

      {/* For Investors */}
      <section className="section" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <div className="icon-box icon-box-primary"><Briefcase size={24}/></div>
              <h2 className="h2" style={{ marginBottom: '1rem' }}>For Investors & Funds</h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontWeight: 600, color: 'var(--text-dark)', marginBottom: '0.5rem' }}>The Scenario</h4>
                <p className="text-body">
                  You're managing a growing portfolio of single-family rentals. Analyzing new markets takes weeks, and underwriting individual deals is a manual, spreadsheet-heavy process prone to human error.
                </p>
              </div>

              <div>
                <h4 style={{ fontWeight: 600, color: 'var(--text-dark)', marginBottom: '0.5rem' }}>The Estata Outcome</h4>
                <p className="text-body" style={{ marginBottom: '1rem' }}>
                  Deploy capital faster and safer. Instantly filter neighborhoods by projected cap rates, run automated underwriting on 10,000+ properties simultaneously, and track portfolio equity dynamically.
                </p>
                <ul className="flex-col gap-2">
                  <li className="flex items-center gap-2"><ArrowRight size={16} color="var(--primary)"/> 3x faster deal underwriting</li>
                  <li className="flex items-center gap-2"><ArrowRight size={16} color="var(--primary)"/> Discover emerging markets months early</li>
                  <li className="flex items-center gap-2"><ArrowRight size={16} color="var(--primary)"/> Automated portfolio stress-testing</li>
                </ul>
              </div>
            </div>
            
            {/* Mockup Dashboard for Investors */}
            <div style={{ background: '#0F0F1A', height: '400px', borderRadius: '24px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-md)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="flex justify-between items-center" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                <div style={{ color: 'white', fontWeight: 600 }}>Portfolio Alpha</div>
                <div style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#10B981', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>+12.4% YTD</div>
              </div>
              <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '0.5rem' }}>
                {[40, 60, 45, 80, 65, 95, 85, 110, 100, 130].map((h, i) => (
                  <div key={i} style={{ flex: 1, background: i === 9 ? 'var(--primary)' : 'rgba(255,255,255,0.1)', height: `${h}px`, borderRadius: '4px 4px 0 0' }}></div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* For Agents & Brokerages */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center" style={{ direction: 'rtl' }}>
            <div style={{ direction: 'ltr' }}>
              <div className="icon-box icon-box-primary"><Building size={24}/></div>
              <h2 className="h2" style={{ marginBottom: '1rem' }}>For Agents & Brokerages</h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontWeight: 600, color: 'var(--text-dark)', marginBottom: '0.5rem' }}>The Scenario</h4>
                <p className="text-body">
                  Winning listings requires impressing sellers with accurate data, but preparing CMAs (Comparative Market Analyses) takes hours. Buyers are demanding hyper-local data that traditional MLS platforms can't provide.
                </p>
              </div>

              <div>
                <h4 style={{ fontWeight: 600, color: 'var(--text-dark)', marginBottom: '0.5rem' }}>The Estata Outcome</h4>
                <p className="text-body" style={{ marginBottom: '1rem' }}>
                  Generate institutional-grade pricing reports in 30 seconds. Win more listings by showing sellers exactly how their home compares, and guide buyers using predictive neighborhood trend signals.
                </p>
                <ul className="flex-col gap-2">
                  <li className="flex items-center gap-2"><ArrowRight size={16} color="var(--primary)"/> Instant, branded CMA generation</li>
                  <li className="flex items-center gap-2"><ArrowRight size={16} color="var(--primary)"/> Proprietary buyer matching algorithms</li>
                  <li className="flex items-center gap-2"><ArrowRight size={16} color="var(--primary)"/> API integration with your existing CRM</li>
                </ul>
              </div>
            </div>
            
            {/* Mockup Dashboard for Agents */}
            <div style={{ background: 'var(--bg-card)', height: '400px', borderRadius: '24px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-md)', padding: '2rem', direction: 'ltr' }}>
               <h4 style={{ fontWeight: 600, marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>Instant CMA Report</h4>
               <div className="flex gap-4" style={{ marginBottom: '1rem' }}>
                 <div style={{ width: '60px', height: '60px', background: 'var(--accent)', borderRadius: '8px' }}></div>
                 <div>
                   <div style={{ fontWeight: 600 }}>1423 Westlake Ave</div>
                   <div style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>3 Bed • 2 Bath • 1,800 sqft</div>
                 </div>
               </div>
               <div style={{ background: 'var(--accent)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                 <div style={{ fontSize: '0.85rem', color: 'var(--text-body)' }}>Estata Recommended List Price</div>
                 <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>$845,000</div>
               </div>
               <button className="btn btn-primary" style={{ width: '100%', padding: '0.75rem' }}>Download PDF Report</button>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(180deg, var(--accent) 0%, transparent 100%)', opacity: 0.5, zIndex: -1 }}></div>
        <div className="container text-center">
          <h2 className="h1" style={{ marginBottom: '1.5rem' }}>Transform your operations.</h2>
          <p className="text-body" style={{ fontSize: '1.25rem', marginBottom: '2.5rem' }}>Join the waitlist today to get early access to Estata 2.0.</p>
          <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <WaitlistForm />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Solutions;
