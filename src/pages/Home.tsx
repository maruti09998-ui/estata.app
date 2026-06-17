import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, Settings, Activity, ArrowRight, CheckCircle2, 
  Database, Network, Zap, Shield, BarChart, Hexagon,
  Users, Globe, Star
} from 'lucide-react';
import IsometricTiles from '../components/IsometricTiles';


const Home = () => {
  return (
    <div style={{ width: '100%' }}>
      
      {/* Hero Section */}
      <section className="section" style={{ paddingTop: '10rem', textAlign: 'center', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="badge badge-orange animate-fade-in" style={{ marginBottom: '2rem' }}>
            ✨ INTRODUCING ESTATA 2.0
          </div>
          <h1 className="h1 animate-fade-in delay-100" style={{ maxWidth: '800px', margin: '0 auto 1.5rem auto' }}>
            Lead your business with <br/>
            <span className="text-gradient">AI-Automation</span>
          </h1>
          <p className="text-body animate-fade-in delay-200" style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            We provide custom AI solutions to streamline your workflows, reduce costs, and accelerate your growth. No coding required.
          </p>
          <div className="flex justify-center gap-4 animate-fade-in delay-300" style={{ flexWrap: 'wrap' }}>
            <button className="btn btn-primary">
              Start 14 days free trial
            </button>
            <button className="btn btn-secondary">
              Book a demo
            </button>
          </div>
          <IsometricTiles />
        </div>
      </section>

      {/* Features Section */}
      <section className="section" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="h2">AI based solutions</h2>
            <p className="text-body">Everything you need to automate your entire business operation.</p>
          </div>
          
          <div className="grid grid-cols-3 gap-8" style={{ marginBottom: '4rem' }}>
            <div className="card">
              <div className="icon-box icon-box-primary"><Settings size={24}/></div>
              <h3 className="h4" style={{ marginBottom: '1rem' }}>Advanced Automation</h3>
              <p className="text-body">Connect your favorite tools and let AI handle the repetitive tasks automatically.</p>
            </div>
            <div className="card" style={{ transform: 'translateY(-10px)', boxShadow: 'var(--shadow-md)', borderColor: 'rgba(82, 54, 255, 0.2)' }}>
              <div className="icon-box" style={{ background: 'var(--primary)', color: 'white' }}><Activity size={24}/></div>
              <h3 className="h4" style={{ marginBottom: '1rem' }}>Optimize your business</h3>
              <p className="text-body">Our predictive models find bottlenecks and suggest actionable improvements instantly.</p>
            </div>
            <div className="card">
              <div className="icon-box icon-box-primary"><Zap size={24}/></div>
              <h3 className="h4" style={{ marginBottom: '1rem' }}>Cost efficiency</h3>
              <p className="text-body">Reduce operational overhead by up to 40% within the first quarter of implementation.</p>
            </div>
          </div>

          <div className="flex justify-center gap-12" style={{ flexWrap: 'wrap', textAlign: 'center', borderTop: '1px solid var(--border-light)', paddingTop: '3rem' }}>
            <div>
              <div className="h2 text-gradient">99%</div>
              <div className="text-body font-medium">Customer satisfaction</div>
            </div>
            <div>
              <div className="h2 text-gradient">25M+</div>
              <div className="text-body font-medium">Tasks automated</div>
            </div>
            <div>
              <div className="h2 text-gradient">10x</div>
              <div className="text-body font-medium">ROI delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section">
        <div className="container">
          <div className="card card-dark flex" style={{ padding: '0', overflow: 'hidden', flexDirection: 'row', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 400px', padding: '4rem' }}>
              <div className="badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}>Portfolio</div>
              <h2 className="h2" style={{ marginBottom: '1rem', color: 'white' }}>Our Latest Projects</h2>
              <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>
                See how we've helped leading brands transform their operations using our custom AI infrastructure.
              </p>
              
              <div className="flex-col gap-4" style={{ marginBottom: '2rem' }}>
                <div className="flex justify-between" style={{ borderBottom: '1px solid var(--border-dark)', paddingBottom: '1rem' }}>
                  <span style={{ fontWeight: 600 }}>Fintech Automation</span>
                  <ArrowRight size={20} color="var(--primary)" />
                </div>
                <div className="flex justify-between" style={{ borderBottom: '1px solid var(--border-dark)', paddingBottom: '1rem' }}>
                  <span style={{ fontWeight: 600 }}>Healthcare Data</span>
                  <ArrowRight size={20} color="var(--text-light)" />
                </div>
                <div className="flex justify-between" style={{ paddingBottom: '1rem' }}>
                  <span style={{ fontWeight: 600 }}>Retail Prediction</span>
                  <ArrowRight size={20} color="var(--text-light)" />
                </div>
              </div>
            </div>
            <div style={{ flex: '1 1 400px', background: '#050510', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Mock visual for project */}
              <div style={{ width: '80%', height: '60%', background: 'linear-gradient(45deg, var(--primary), var(--secondary))', borderRadius: '16px', opacity: 0.5, filter: 'blur(40px)' }}></div>
              <div className="glass" style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem', padding: '1.5rem', borderRadius: '12px' }}>
                <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>AI Powered Analytics</h4>
                <p style={{ color: 'var(--text-light)', fontSize: '0.875rem' }}>Processed over 1M records in real-time for Fintech Corp.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section" style={{ background: 'var(--bg-card)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="h2">AI Automation Services</h2>
            <p className="text-body">Tailored tools designed for modern scale.</p>
          </div>
          
          <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {/* Large Card */}
            <div className="card" style={{ gridColumn: 'span 2' }}>
              <div className="flex justify-between items-start" style={{ marginBottom: '2rem' }}>
                <div>
                  <h3 className="h4">Advanced Data Analytics</h3>
                  <p className="text-body">Transform raw data into strategic insights.</p>
                </div>
                <div className="icon-box icon-box-primary"><Database size={24}/></div>
              </div>
              <div style={{ height: '150px', background: 'var(--bg-main)', borderRadius: '12px', border: '1px dashed var(--border-light)' }}></div>
            </div>
            
            {/* Small Card */}
            <div className="card">
              <div className="icon-box icon-box-primary"><Shield size={24}/></div>
              <h3 className="h4" style={{ marginBottom: '0.5rem' }}>Secure Infrastructure</h3>
              <p className="text-body">Enterprise-grade security for all your AI agents.</p>
            </div>

            {/* Small Card */}
            <div className="card">
              <div className="icon-box icon-box-primary"><Network size={24}/></div>
              <h3 className="h4" style={{ marginBottom: '0.5rem' }}>API Integration</h3>
              <p className="text-body">Seamlessly connect with over 500+ existing platforms.</p>
            </div>
            
            {/* Large Card */}
            <div className="card" style={{ gridColumn: 'span 2' }}>
              <h3 className="h4" style={{ marginBottom: '0.5rem' }}>Workflow Orchestration</h3>
              <p className="text-body" style={{ marginBottom: '2rem' }}>Design complex multi-step automations visually.</p>
              <div className="flex gap-4">
                <div style={{ flex: 1, height: '60px', background: 'var(--accent)', borderRadius: '8px' }}></div>
                <div style={{ flex: 1, height: '60px', background: 'var(--bg-main)', borderRadius: '8px' }}></div>
                <div style={{ flex: 1, height: '60px', background: 'var(--primary)', borderRadius: '8px' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="h2">Our clients love us</h2>
            <p className="text-body">See what industry leaders are saying.</p>
          </div>
          
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card">
                <div className="flex gap-1" style={{ color: '#F59E0B', marginBottom: '1rem' }}>
                  <Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/>
                </div>
                <p className="text-dark" style={{ fontStyle: 'italic', marginBottom: '2rem' }}>
                  "Implementing Estata was the best decision we made this year. It completely revolutionized how we handle our processes and internal ops."
                </p>
                <div className="flex items-center gap-3">
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent)' }}></div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 600 }}>Sarah Jenkins</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-body)' }}>CEO, TechFlow</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container text-center">
          <h2 className="h2" style={{ marginBottom: '1rem' }}>Why Choose Us</h2>
          <p className="text-body" style={{ marginBottom: '4rem' }}>We bring unmatched expertise to every automation challenge.</p>
          
          <div className="grid grid-cols-2 gap-8" style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
            <div className="card">
              <h3 className="h4 flex items-center gap-2" style={{ marginBottom: '1.5rem' }}><CheckCircle2 color="var(--primary)"/> Built for Speed</h3>
              <ul className="flex-col gap-2">
                <li className="flex items-center gap-2"><div style={{width: 6, height: 6, borderRadius:'50%', background:'var(--primary)'}}></div> Rapid deployment in days</li>
                <li className="flex items-center gap-2"><div style={{width: 6, height: 6, borderRadius:'50%', background:'var(--primary)'}}></div> Pre-built templates</li>
                <li className="flex items-center gap-2"><div style={{width: 6, height: 6, borderRadius:'50%', background:'var(--primary)'}}></div> Real-time processing</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="h4 flex items-center gap-2" style={{ marginBottom: '1.5rem' }}><Shield color="var(--primary)"/> Enterprise Grade</h3>
              <ul className="flex-col gap-2">
                <li className="flex items-center gap-2"><div style={{width: 6, height: 6, borderRadius:'50%', background:'var(--primary)'}}></div> SOC2 Compliant</li>
                <li className="flex items-center gap-2"><div style={{width: 6, height: 6, borderRadius:'50%', background:'var(--primary)'}}></div> 24/7 Dedicated Support</li>
                <li className="flex items-center gap-2"><div style={{width: 6, height: 6, borderRadius:'50%', background:'var(--primary)'}}></div> 99.99% Uptime SLA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="h2">Pricing plans</h2>
            <p className="text-body">Simple, transparent pricing that grows with you.</p>
            <div style={{ display: 'inline-flex', background: 'var(--bg-card)', borderRadius: '999px', padding: '0.25rem', marginTop: '2rem', border: '1px solid var(--border-light)' }}>
              <button style={{ padding: '0.5rem 1.5rem', borderRadius: '999px', border: 'none', background: 'var(--primary)', color: 'white', fontWeight: 600 }}>Monthly</button>
              <button style={{ padding: '0.5rem 1.5rem', borderRadius: '999px', border: 'none', background: 'transparent', color: 'var(--text-body)', fontWeight: 600 }}>Annually <span style={{ color: 'var(--primary)', fontSize: '0.8rem' }}>-20%</span></button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="card flex-col">
              <h3 className="h3" style={{ marginBottom: '0.5rem' }}>Pro</h3>
              <div className="h1" style={{ marginBottom: '1rem' }}>$49<span style={{ fontSize: '1rem', color: 'var(--text-body)' }}>/mo</span></div>
              <button className="btn btn-secondary" style={{ width: '100%', marginBottom: '2rem' }}>Get Started</button>
              <ul className="flex-col gap-3">
                <li className="flex items-center gap-2 text-body"><CheckCircle2 size={16} color="var(--primary)"/> 5 Team Members</li>
                <li className="flex items-center gap-2 text-body"><CheckCircle2 size={16} color="var(--primary)"/> 100 Automations/mo</li>
                <li className="flex items-center gap-2 text-body"><CheckCircle2 size={16} color="var(--primary)"/> Basic Analytics</li>
              </ul>
            </div>
            
            <div className="card flex-col" style={{ transform: 'translateY(-20px)', background: 'var(--accent)', borderColor: 'var(--border-light)', boxShadow: 'var(--shadow-lg)' }}>
              <div className="badge" style={{ alignSelf: 'flex-start', background: 'var(--bg-card)', color: 'var(--primary)' }}>Popular</div>
              <h3 className="h3" style={{ marginBottom: '0.5rem' }}>Premium</h3>
              <div className="h1" style={{ marginBottom: '1rem' }}>$199<span style={{ fontSize: '1rem', color: 'var(--text-body)' }}>/mo</span></div>
              <button className="btn btn-primary" style={{ width: '100%', marginBottom: '2rem' }}>Get Started</button>
              <ul className="flex-col gap-3">
                <li className="flex items-center gap-2 text-body"><CheckCircle2 size={16} color="var(--primary)"/> Unlimited Members</li>
                <li className="flex items-center gap-2 text-body"><CheckCircle2 size={16} color="var(--primary)"/> 10,000 Automations/mo</li>
                <li className="flex items-center gap-2 text-body"><CheckCircle2 size={16} color="var(--primary)"/> Advanced Analytics</li>
                <li className="flex items-center gap-2 text-body"><CheckCircle2 size={16} color="var(--primary)"/> Custom Integrations</li>
              </ul>
            </div>

            <div className="card flex-col">
              <h3 className="h3" style={{ marginBottom: '0.5rem' }}>Enterprise</h3>
              <div className="h1" style={{ marginBottom: '1rem' }}>Custom</div>
              <button className="btn btn-secondary" style={{ width: '100%', marginBottom: '2rem' }}>Contact Sales</button>
              <ul className="flex-col gap-3">
                <li className="flex items-center gap-2 text-body"><CheckCircle2 size={16} color="var(--primary)"/> Everything in Premium</li>
                <li className="flex items-center gap-2 text-body"><CheckCircle2 size={16} color="var(--primary)"/> Dedicated Account Manager</li>
                <li className="flex items-center gap-2 text-body"><CheckCircle2 size={16} color="var(--primary)"/> On-premise deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="h2 text-center" style={{ marginBottom: '3rem' }}>Questions Answered</h2>
          <div className="flex-col gap-4">
            {[
              { q: 'How long does implementation take?', a: 'Most clients are fully onboarded and seeing ROI within 14 days.' },
              { q: 'Do I need a technical team?', a: 'Not at all. Our platform is completely no-code.' },
              { q: 'What about data privacy?', a: 'We are SOC2 compliant and never train public models on your data.' },
              { q: 'Can I integrate with custom software?', a: 'Yes, we offer an open API and custom integration services.' },
            ].map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', cursor: 'pointer' }} className="flex justify-between items-center">
                  {faq.q}
                  <span style={{ color: 'var(--primary)' }}>+</span>
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(180deg, var(--accent) 0%, transparent 100%)', opacity: 0.5, zIndex: -1 }}></div>
        <div className="container text-center">
          <h2 className="h1" style={{ marginBottom: '1.5rem' }}>Start your free trial!</h2>
          <p className="text-body" style={{ fontSize: '1.25rem', marginBottom: '2.5rem' }}>Join 10,000+ forward-thinking companies already using Estata.</p>
          <button className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Get Started Now</button>
        </div>
      </section>

    </div>
  );
};

export default Home;
