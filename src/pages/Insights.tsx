import React from 'react';
import { ArrowUpRight, BookOpen, BarChart } from 'lucide-react';
import WaitlistForm from '../components/WaitlistForm';

const Insights = () => {
  return (
    <div style={{ width: '100%', paddingTop: '6rem' }}>
      
      {/* Header */}
      <section className="section text-center" style={{ paddingBottom: '3rem' }}>
        <div className="container">
          <div className="badge badge-orange">Insights</div>
          <h1 className="h1" style={{ marginBottom: '1rem' }}>Data-driven market intelligence</h1>
          <p className="text-body" style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
            Open-source research, market report cards, and deep dives into the methodology powering Estata's AVMs.
          </p>
        </div>
      </section>

      {/* Market Report Cards */}
      <section className="section" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="flex justify-between items-center" style={{ marginBottom: '3rem' }}>
            <h2 className="h2">Market Report Cards</h2>
            <button className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>View all markets <ArrowUpRight size={18}/></button>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            {[
              { city: 'Austin, TX', trend: '+12.4%', status: 'Hot', img: 'var(--primary)' },
              { city: 'Boise, ID', trend: '-2.1%', status: 'Cooling', img: 'var(--secondary)' },
              { city: 'Raleigh, NC', trend: '+8.7%', status: 'Stable', img: 'var(--accent)' }
            ].map((market, i) => (
              <div key={i} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ height: '160px', background: market.img, opacity: 0.8 }}></div>
                <div style={{ padding: '1.5rem' }}>
                  <div className="flex justify-between items-start" style={{ marginBottom: '1rem' }}>
                    <h3 className="h4">{market.city}</h3>
                    <div className="badge" style={{ margin: 0, background: market.status === 'Hot' ? '#FEE2E2' : market.status === 'Cooling' ? '#E0F2FE' : '#FEF3C7', color: market.status === 'Hot' ? '#DC2626' : market.status === 'Cooling' ? '#0284C7' : '#D97706' }}>{market.status}</div>
                  </div>
                  <div className="flex items-center gap-2 text-body" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                    YOY Value Trend: <strong style={{ color: market.trend.startsWith('+') ? '#10B981' : '#EF4444' }}>{market.trend}</strong>
                  </div>
                  <button style={{ width: '100%', padding: '0.75rem', background: 'transparent', border: '1px solid var(--border-light)', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', color: 'var(--text-dark)' }}>Download Q3 Report</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Explainer */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <div className="icon-box icon-box-primary"><BarChart size={24}/></div>
              <h2 className="h2" style={{ marginBottom: '1rem' }}>Our Valuation Methodology</h2>
              <p className="text-body" style={{ marginBottom: '1.5rem' }}>
                Transparency is at the core of Estata. Unlike "black box" AVMs, we publish regular whitepapers detailing exactly how our machine learning models weight different property characteristics and market trends.
              </p>
              <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Current AVM Accuracy (National)</h4>
                <div className="flex justify-between items-center" style={{ marginBottom: '0.5rem' }}>
                  <span className="text-body" style={{ fontSize: '0.9rem' }}>Median Absolute Error</span>
                  <span style={{ fontWeight: 700, color: 'var(--primary)' }}>4.2%</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: 'var(--accent)', borderRadius: '4px' }}>
                  <div style={{ width: '95.8%', height: '100%', background: 'var(--primary)', borderRadius: '4px' }}></div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Feature Engineering', 'Geospatial Clustering', 'Time-Series Analysis', 'Ensemble Models'].map((topic, i) => (
                <div key={i} className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <BookOpen size={24} color="var(--primary)" style={{ margin: '0 auto 1rem auto' }}/>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>{topic}</h4>
                  <a href="#" style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginTop: '0.5rem', display: 'inline-block' }}>Read paper &rarr;</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="section" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="h2">Latest from the Research Blog</h2>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            {[
              { title: 'The impact of remote work on suburban cap rates', date: 'Oct 12, 2026', category: 'Macro Trends' },
              { title: 'Why traditional CMAs are failing in high-volatility markets', date: 'Sep 28, 2026', category: 'Valuation' },
              { title: 'Introducing Estata Score v2.0: Improved yield predictions', date: 'Sep 15, 2026', category: 'Product Update' }
            ].map((post, i) => (
              <div key={i} style={{ borderBottom: i < 2 ? 'none' : 'none', cursor: 'pointer' }}>
                <div style={{ color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.5rem' }}>{post.category}</div>
                <h3 className="h4" style={{ marginBottom: '1rem', lineHeight: 1.4 }}>{post.title}</h3>
                <div style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>{post.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(180deg, var(--accent) 0%, transparent 100%)', opacity: 0.5, zIndex: -1 }}></div>
        <div className="container text-center">
          <h2 className="h1" style={{ marginBottom: '1.5rem' }}>Get insights delivered directly.</h2>
          <p className="text-body" style={{ fontSize: '1.25rem', marginBottom: '2.5rem' }}>Join the waitlist today to get early access to Estata 2.0.</p>
          <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <WaitlistForm />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Insights;
