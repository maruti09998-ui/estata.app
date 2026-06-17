import React from 'react';
import WaitlistForm from '../components/WaitlistForm';
import { FileText, Database, ArrowRight, BarChart3, TrendingUp, Map } from 'lucide-react';

const Insights: React.FC = () => {
  return (
    <div className="insights-page section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', marginBottom: '5rem' }}>
          <h1 className="text-display">Market intelligence & Methodology.</h1>
          <p className="text-lead mt-4">We believe in transparent data. See how we calculate valuations and read our latest market analysis.</p>
        </div>

        {/* Market Report Cards */}
        <div style={{ marginBottom: '6rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ padding: '0.75rem', backgroundColor: 'rgba(28, 43, 59, 0.05)', color: 'var(--primary)', borderRadius: '12px' }}>
              <FileText size={24} />
            </div>
            <h2 style={{ fontSize: '2rem', margin: 0 }}>Latest Market Reports</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* Report 1 */}
            <a href="#" className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-light)', display: 'block', transition: 'transform 0.2s, box-shadow 0.2s' }}>
              <div style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}><Map size={32} /></div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Sunbelt Migration Slowdown</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>What the Q3 permit data says about slowing growth in Austin and Phoenix, and where the smart money is moving next.</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>
                Read Report <ArrowRight size={16} />
              </div>
            </a>
            
            {/* Report 2 */}
            <a href="#" className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-light)', display: 'block', transition: 'transform 0.2s, box-shadow 0.2s' }}>
              <div style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}><TrendingUp size={32} /></div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Institutional Buying Patterns</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>An analysis of 10,000 single-family rental acquisitions to uncover the exact criteria driving institutional capital allocation.</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>
                Read Report <ArrowRight size={16} />
              </div>
            </a>

            {/* Report 3 */}
            <a href="#" className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-light)', display: 'block', transition: 'transform 0.2s, box-shadow 0.2s' }}>
              <div style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}><BarChart3 size={32} /></div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Interest Rate Sensitivity</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>How the recent 50bps rate hike is already impacting hyper-local pricing across 15 major MSAs.</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>
                Read Report <ArrowRight size={16} />
              </div>
            </a>
          </div>
        </div>

        {/* Methodology Explainer */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ padding: '0.75rem', backgroundColor: 'rgba(28, 43, 59, 0.05)', color: 'var(--primary)', borderRadius: '12px' }}>
                <Database size={24} />
              </div>
              <h2 style={{ fontSize: '2rem', margin: 0 }}>Our Methodology</h2>
            </div>
            <p className="text-lead" style={{ margin: 0, marginBottom: '1.5rem' }}>
              Estata's Automated Valuation Models (AVMs) don't rely solely on lagging tax records. We use a proprietary 5-factor ensemble model to generate accurate, real-time pricing confidence.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-muted)' }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}><span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>1.</span> Live comparable indexing (updated daily)</li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}><span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>2.</span> Hyper-local school district and transit scoring</li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}><span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>3.</span> Macro-economic and interest rate weighting</li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}><span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>4.</span> Building permit and renovation tracking</li>
            </ul>
            <button className="btn btn-outline" style={{ marginTop: '2rem', borderRadius: 'var(--radius-pill)', padding: '0.75rem 1.5rem', border: '2px solid var(--border-color)', color: 'var(--primary)', fontWeight: 600 }}>
              Download the Whitepaper
            </button>
          </div>
          <div className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-light)', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '350px' }}>
            {/* Visual representation of the model */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <span>Data Ingestion</span>
                <span>Weighting</span>
              </div>
              <div style={{ height: '2px', backgroundColor: 'var(--border-light)', width: '100%', margin: '-0.5rem 0' }}></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius-md)' }}>
                <span style={{ fontWeight: 500, color: 'var(--primary)' }}>Comparable Sales</span>
                <span style={{ color: 'var(--accent)', fontWeight: 600 }}>45%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius-md)' }}>
                <span style={{ fontWeight: 500, color: 'var(--primary)' }}>Macro Indicators</span>
                <span style={{ color: 'var(--accent)', fontWeight: 600 }}>25%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius-md)' }}>
                <span style={{ fontWeight: 500, color: 'var(--primary)' }}>Local Sentiment</span>
                <span style={{ color: 'var(--accent)', fontWeight: 600 }}>30%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Teaser / CTA */}
        <div style={{ padding: '5rem 2rem', background: 'var(--primary)', color: 'white', borderRadius: 'var(--radius-xl)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: 'var(--shadow-lg)' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Want these insights in your inbox?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '3rem', maxWidth: '600px', fontSize: '1.1rem' }}>
            Join the waitlist to get our weekly market intelligence newsletter along with early access to the platform.
          </p>
          <div style={{ width: '100%', maxWidth: '500px' }}>
            <WaitlistForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
