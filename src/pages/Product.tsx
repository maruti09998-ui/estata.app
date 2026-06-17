import React from 'react';
import { BarChart3, TrendingUp, ShieldCheck, PieChart } from 'lucide-react';
import BottomCTA from '../components/BottomCTA';

const Product: React.FC = () => {
  return (
    <div className="product-page section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', marginBottom: '5rem' }}>
          <h1 className="text-display">Intelligence behind the valuation.</h1>
          <p className="text-lead mt-4">
            We don't just give you a number. We show you exactly how we got there, giving you the confidence to make decisions.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '6rem' }}>
          {/* Feature 1 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ color: 'var(--accent)', marginBottom: '1rem' }}><BarChart3 size={48} /></div>
              <h2>Automated Valuation Models</h2>
              <p className="text-lead mt-4">
                Our AVMs are trained on decades of property data and real-time comparable sales. Unlike black-box models, we expose the comparables used and the weighting applied.
              </p>
            </div>
            <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-xl)', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--primary)' }}>$1.25M</div>
                <div style={{ color: 'var(--text-muted)' }}>Estimated Value</div>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                  <span style={{ background: '#e2e8f0', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>High Confidence</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-xl)', minHeight: '300px', order: -1, background: 'var(--primary)', color: 'white' }}>
              {/* Mockup for scoring */}
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                  <span>Investment Score</span>
                  <span style={{ fontWeight: 700, color: 'var(--accent-light)' }}>92/100</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Cash Flow Potential</span>
                  <span>High</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Appreciation Forecast</span>
                  <span>+4.2% YoY</span>
                </div>
              </div>
            </div>
            <div>
              <div style={{ color: 'var(--accent)', marginBottom: '1rem' }}><TrendingUp size={48} /></div>
              <h2>Investment Scoring & Comps</h2>
              <p className="text-lead mt-4">
                Instantly score any property based on cash flow potential, projected appreciation, and hyper-local comps. Know if a deal pencils out before you even tour it.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ color: 'var(--accent)', marginBottom: '1rem' }}><ShieldCheck size={48} /></div>
              <h2>Neighborhood & Trend Signals</h2>
              <p className="text-lead mt-4">
                Spot the next hot neighborhood before the market does. We track leading indicators like permit applications, commercial development, and demographic shifts.
              </p>
            </div>
            <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-xl)', minHeight: '300px', border: '1px solid var(--border-color)' }}>
               {/* Mockup */}
               <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem', height: '200px', padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>
                  <div style={{ width: '20%', background: 'var(--primary)', height: '40%', borderRadius: '4px 4px 0 0' }}></div>
                  <div style={{ width: '20%', background: 'var(--primary)', height: '55%', borderRadius: '4px 4px 0 0' }}></div>
                  <div style={{ width: '20%', background: 'var(--primary)', height: '70%', borderRadius: '4px 4px 0 0' }}></div>
                  <div style={{ width: '20%', background: 'var(--accent)', height: '95%', borderRadius: '4px 4px 0 0' }}></div>
               </div>
               <div style={{ textAlign: 'center', marginTop: '1rem', fontWeight: 500 }}>Permit Volume (YoY)</div>
            </div>
          </div>

          {/* Feature 4 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-xl)', minHeight: '300px', order: -1, border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
               {/* Mockup for Portfolio */}
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                  <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>Total Portfolio Value</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>$12.4M</div>
               </div>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <div style={{ color: 'var(--text-muted)' }}>124 Oak Street</div>
                   <div style={{ color: 'var(--accent)', fontWeight: 600 }}>+4.1%</div>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <div style={{ color: 'var(--text-muted)' }}>890 Pine Ave</div>
                   <div style={{ color: 'var(--accent)', fontWeight: 600 }}>+2.8%</div>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <div style={{ color: 'var(--text-muted)' }}>45 Cedar Ln</div>
                   <div style={{ color: '#ff5f56', fontWeight: 600 }}>-1.2%</div>
                 </div>
               </div>
            </div>
            <div>
              <div style={{ color: 'var(--accent)', marginBottom: '1rem' }}><PieChart size={48} /></div>
              <h2>Portfolio Tracking</h2>
              <p className="text-lead mt-4">
                Monitor your entire portfolio in one dashboard. Track valuations over time, get alerts on market shifts, and see exactly which assets are performing best.
              </p>
            </div>
          </div>

        </div>
        
        <BottomCTA />
      </div>
    </div>
  );
};

export default Product;
