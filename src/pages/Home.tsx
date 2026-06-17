import React from 'react';
import { Database, Search, TrendingUp, Map, Shield, Activity, Star } from 'lucide-react';
import WaitlistForm from '../components/WaitlistForm';
import MapWidget from '../components/MapWidget';

const Home = () => {
  return (
    <div style={{ width: '100%' }}>
      
      {/* Hero Section */}
      <section className="section" style={{ paddingTop: '10rem', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="grid grid-cols-2 gap-12 items-center" style={{ marginBottom: '4rem' }}>
            <div className="animate-fade-in">
              <div className="badge badge-orange" style={{ marginBottom: '1.5rem' }}>
                Early Access
              </div>
              <h1 className="h1" style={{ marginBottom: '1.5rem' }}>
                Property decisions, <br/>
                <span className="text-gradient">powered by data.</span>
              </h1>
              <p className="text-body" style={{ fontSize: '1.25rem', maxWidth: '500px' }}>
                Stop relying on gut-feel. Estata brings institutional-grade automated valuation, investment scoring, and neighborhood trend signals to your portfolio.
              </p>
            </div>
            <div className="animate-fade-in delay-200" style={{ transform: 'translateY(-2rem)' }}>
              <MapWidget />
            </div>
          </div>
          
          <div className="animate-fade-in delay-300" style={{ maxWidth: '700px', margin: '0 auto' }}>
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="section" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container text-center">
          <h2 className="h2" style={{ marginBottom: '1rem', maxWidth: '700px', margin: '0 auto 1.5rem auto' }}>
            The days of gut-feel investing in an opaque market are over.
          </h2>
          <p className="text-body" style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Real estate is the world's largest asset class, yet most decisions are made using outdated comps and intuition. We're changing that.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <div className="grid gap-12">
            {/* Feature 1 */}
            <div className="grid grid-cols-2 gap-8 items-center">
              <div>
                <div className="icon-box icon-box-primary"><Activity size={24}/></div>
                <h2 className="h2" style={{ marginBottom: '1rem' }}>Automated Valuation Models</h2>
                <p className="text-body">Our proprietary AVM analyzes millions of data points across public records, MLS data, and market trends to give you highly accurate, real-time property valuations.</p>
              </div>
              <div style={{ background: 'var(--bg-card)', height: '300px', borderRadius: '24px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>$1,245,000</div>
                  <div style={{ color: '#10B981', fontWeight: 600 }}>+4.2% Estimated Accuracy</div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid grid-cols-2 gap-8 items-center" style={{ direction: 'rtl' }}>
              <div style={{ direction: 'ltr' }}>
                <div className="icon-box icon-box-primary"><TrendingUp size={24}/></div>
                <h2 className="h2" style={{ marginBottom: '1rem' }}>Investment Scoring & Comps</h2>
                <p className="text-body">Instantly compare properties against historical performance, rental yields, and neighborhood cap rates to identify the best investment opportunities.</p>
              </div>
              <div style={{ background: 'var(--bg-card)', height: '300px', borderRadius: '24px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', direction: 'ltr' }}>
                <div style={{ width: '80%' }}>
                  {['Property A', 'Property B', 'Property C'].map((p, i) => (
                    <div key={p} className="flex justify-between items-center" style={{ padding: '1rem', borderBottom: i < 2 ? '1px solid var(--border-light)' : 'none' }}>
                      <span style={{ fontWeight: 600 }}>{p}</span>
                      <span className="badge" style={{ margin: 0, background: 'var(--accent)', color: 'var(--primary)' }}>Score: {95 - i*7}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid grid-cols-2 gap-8 items-center">
              <div>
                <div className="icon-box icon-box-primary"><Map size={24}/></div>
                <h2 className="h2" style={{ marginBottom: '1rem' }}>Neighborhood & Trend Signals</h2>
                <p className="text-body">Get ahead of the market with predictive signals based on infrastructure plans, demographic shifts, and commercial developments.</p>
              </div>
              <div style={{ background: 'var(--bg-card)', height: '300px', borderRadius: '24px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="flex gap-4" style={{ padding: '2rem' }}>
                   <div style={{ width: '60px', height: '140px', background: 'var(--accent)', borderRadius: '8px', position: 'relative' }}><div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'var(--primary)', borderRadius: '8px' }}></div></div>
                   <div style={{ width: '60px', height: '140px', background: 'var(--accent)', borderRadius: '8px', position: 'relative' }}><div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%', background: 'var(--primary)', borderRadius: '8px' }}></div></div>
                   <div style={{ width: '60px', height: '140px', background: 'var(--accent)', borderRadius: '8px', position: 'relative' }}><div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '90%', background: 'var(--primary)', borderRadius: '8px' }}></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section" style={{ background: 'var(--bg-card)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="h2">How it works</h2>
            <p className="text-body">From data ingestion to actionable insights.</p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="card text-center">
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 700, margin: '0 auto 1.5rem auto' }}>1</div>
              <h4 className="h4" style={{ marginBottom: '0.5rem' }}>Data Aggregation</h4>
              <p className="text-body">We pull from 50+ distinct data sources including tax records, zoning laws, and census data.</p>
            </div>
            <div className="card text-center">
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 700, margin: '0 auto 1.5rem auto' }}>2</div>
              <h4 className="h4" style={{ marginBottom: '0.5rem' }}>Machine Learning</h4>
              <p className="text-body">Our models clean, normalize, and process the data to identify invisible market trends.</p>
            </div>
            <div className="card text-center">
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 700, margin: '0 auto 1.5rem auto' }}>3</div>
              <h4 className="h4" style={{ marginBottom: '0.5rem' }}>Actionable Insights</h4>
              <p className="text-body">You receive clean, understandable scores and valuations directly in your dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Coverage Stats */}
      <section className="section">
        <div className="container">
          <div className="card card-dark text-center" style={{ padding: '4rem 2rem' }}>
            <h2 className="h2" style={{ marginBottom: '3rem', color: 'white' }}>Unmatched Data Coverage</h2>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="h1" style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>150M+</div>
                <div style={{ color: 'var(--text-light)' }}>Properties Indexed</div>
              </div>
              <div>
                <div className="h1" style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>2.5B+</div>
                <div style={{ color: 'var(--text-light)' }}>Historical Transactions</div>
              </div>
              <div>
                <div className="h1" style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>99.2%</div>
                <div style={{ color: 'var(--text-light)' }}>Valuation Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ background: 'var(--bg-card)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="h2">Trusted by industry leaders</h2>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[
              { text: "Estata completely changed how our fund evaluates single-family rentals. The speed at which we can analyze a neighborhood is unprecedented.", name: "Marcus T.", role: "Portfolio Manager" },
              { text: "The automated valuation models are incredibly accurate. It saves our brokerage hundreds of hours a month in manual CMA preparation.", name: "Sarah L.", role: "Managing Broker" },
              { text: "We use the investment scoring API to power our own internal dashboards. The data is clean, reliable, and always up to date.", name: "David K.", role: "PropTech Founder" }
            ].map((t, i) => (
              <div key={i} className="card">
                <div className="flex gap-1" style={{ color: '#F59E0B', marginBottom: '1rem' }}>
                  <Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/>
                </div>
                <p className="text-dark" style={{ fontStyle: 'italic', marginBottom: '2rem' }}>"{t.text}"</p>
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600 }}>{t.name}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-body)' }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist CTA Bottom */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(180deg, var(--accent) 0%, transparent 100%)', opacity: 0.5, zIndex: -1 }}></div>
        <div className="container text-center">
          <h2 className="h1" style={{ marginBottom: '1.5rem' }}>Gain the unfair advantage.</h2>
          <p className="text-body" style={{ fontSize: '1.25rem', marginBottom: '2.5rem' }}>Join the waitlist today to get early access to Estata 2.0.</p>
          <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <WaitlistForm />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
