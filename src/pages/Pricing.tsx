import React, { useState } from 'react';
import { CheckCircle2, Minus, ChevronDown, ChevronUp } from 'lucide-react';
import WaitlistForm from '../components/WaitlistForm';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid var(--border-light)' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'transparent', border: 'none', padding: '1.5rem 0', cursor: 'pointer', textAlign: 'left', outline: 'none' }}
      >
        <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-dark)', margin: 0 }}>{question}</h4>
        {isOpen ? <ChevronUp size={20} color="var(--primary)" /> : <ChevronDown size={20} color="var(--text-light)" />}
      </button>
      {isOpen && (
        <div style={{ paddingBottom: '1.5rem', color: 'var(--text-body)', animation: 'fadeIn 0.3s ease' }}>
          {answer}
        </div>
      )}
    </div>
  );
};

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      price: isAnnual ? '49' : '59',
      description: 'Perfect for independent investors and small agents.',
      features: ['50 Automated Valuations/mo', 'Basic Investment Scoring', 'Neighborhood Snapshots', 'Email Support'],
      highlighted: false
    },
    {
      name: 'Pro',
      price: isAnnual ? '149' : '179',
      description: 'Ideal for growing teams and mid-sized brokerages.',
      features: ['500 Automated Valuations/mo', 'Advanced CMA Reports', 'Predictive Trend Signals', 'Priority Support', 'API Access'],
      highlighted: true
    },
    {
      name: 'Team',
      price: isAnnual ? '399' : '499',
      description: 'Enterprise grade intelligence for funds and large teams.',
      features: ['Unlimited Valuations', 'Portfolio Stress Testing', 'Custom API Integrations', 'Dedicated Account Manager', 'White-label Reports'],
      highlighted: false
    }
  ];

  return (
    <div style={{ width: '100%', paddingTop: '6rem' }}>
      
      {/* Header */}
      <section className="section text-center" style={{ paddingBottom: '3rem' }}>
        <div className="container">
          <div className="badge badge-orange">Pricing</div>
          <h1 className="h1" style={{ marginBottom: '1rem' }}>Invest smarter, scale faster</h1>
          <p className="text-body" style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 2rem auto' }}>
            Transparent pricing designed to give you an unfair advantage in the market.
          </p>
          
          <div style={{ display: 'inline-flex', background: 'var(--bg-card)', borderRadius: '999px', padding: '0.25rem', border: '1px solid var(--border-light)' }}>
            <button 
              onClick={() => setIsAnnual(false)}
              style={{ padding: '0.5rem 1.5rem', borderRadius: '999px', border: 'none', background: !isAnnual ? 'var(--primary)' : 'transparent', color: !isAnnual ? 'white' : 'var(--text-body)', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              style={{ padding: '0.5rem 1.5rem', borderRadius: '999px', border: 'none', background: isAnnual ? 'var(--primary)' : 'transparent', color: isAnnual ? 'white' : 'var(--text-body)', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}
            >
              Annually <span style={{ color: isAnnual ? 'white' : 'var(--primary)', fontSize: '0.8rem' }}>-20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="grid grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div key={i} className="card flex-col" style={{ 
                transform: plan.highlighted ? 'translateY(-20px)' : 'none', 
                background: plan.highlighted ? 'var(--accent)' : 'var(--bg-card)', 
                borderColor: plan.highlighted ? 'var(--border-light)' : 'var(--border-light)', 
                boxShadow: plan.highlighted ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
                zIndex: plan.highlighted ? 10 : 1
              }}>
                {plan.highlighted && <div className="badge" style={{ alignSelf: 'flex-start', background: 'var(--bg-card)', color: 'var(--primary)' }}>Popular</div>}
                <h3 className="h3" style={{ marginBottom: '0.5rem' }}>{plan.name}</h3>
                <p style={{ color: 'var(--text-body)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{plan.description}</p>
                <div className="h1" style={{ marginBottom: '1.5rem' }}>${plan.price}<span style={{ fontSize: '1rem', color: 'var(--text-body)' }}>/mo</span></div>
                
                <ul className="flex-col gap-3" style={{ flex: 1, marginBottom: '2rem' }}>
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-body" style={{ fontSize: '0.95rem' }}>
                      <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0 }}/> {f}
                    </li>
                  ))}
                </ul>
                <a href="#waitlist-bottom" className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%', padding: '0.8rem' }}>
                  Request Access
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Matrix */}
      <section className="section" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="h2">Compare Features</h2>
          </div>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', minWidth: '800px', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '1.5rem', textAlign: 'left', borderBottom: '2px solid var(--border-light)', width: '40%' }}>Feature</th>
                  <th style={{ padding: '1.5rem', textAlign: 'center', borderBottom: '2px solid var(--border-light)', width: '20%' }}>Starter</th>
                  <th style={{ padding: '1.5rem', textAlign: 'center', borderBottom: '2px solid var(--border-light)', width: '20%' }}>Pro</th>
                  <th style={{ padding: '1.5rem', textAlign: 'center', borderBottom: '2px solid var(--border-light)', width: '20%' }}>Team</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Automated Valuations', starter: '50/mo', pro: '500/mo', team: 'Unlimited' },
                  { name: 'Investment Scoring', starter: true, pro: true, team: true },
                  { name: 'Neighborhood Trends', starter: false, pro: true, team: true },
                  { name: 'CMA PDF Export', starter: false, pro: true, team: true },
                  { name: 'API Access', starter: false, pro: false, team: true },
                  { name: 'White-labeling', starter: false, pro: false, team: true },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '1.5rem', fontWeight: 500 }}>{row.name}</td>
                    <td style={{ padding: '1.5rem', textAlign: 'center' }}>
                      {typeof row.starter === 'boolean' ? (row.starter ? <CheckCircle2 color="var(--primary)" size={20} style={{ margin: '0 auto' }}/> : <Minus color="var(--text-light)" size={20} style={{ margin: '0 auto' }}/>) : row.starter}
                    </td>
                    <td style={{ padding: '1.5rem', textAlign: 'center', background: 'rgba(244, 241, 254, 0.3)' }}>
                      {typeof row.pro === 'boolean' ? (row.pro ? <CheckCircle2 color="var(--primary)" size={20} style={{ margin: '0 auto' }}/> : <Minus color="var(--text-light)" size={20} style={{ margin: '0 auto' }}/>) : row.pro}
                    </td>
                    <td style={{ padding: '1.5rem', textAlign: 'center' }}>
                      {typeof row.team === 'boolean' ? (row.team ? <CheckCircle2 color="var(--primary)" size={20} style={{ margin: '0 auto' }}/> : <Minus color="var(--text-light)" size={20} style={{ margin: '0 auto' }}/>) : row.team}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="h2 text-center" style={{ marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div className="flex-col">
            <FAQItem 
              question="When will I get off the waitlist?" 
              answer="We are onboarding new users in batches every Tuesday. Depending on your queue position, you should receive an access link within 2-4 weeks of joining the waitlist." 
            />
            <FAQItem 
              question="What data sources do you use?" 
              answer="Our AVM and predictive models aggregate data from over 50 public and private sources, including county tax assessments, historical MLS data, census demographics, and commercial building permits." 
            />
            <FAQItem 
              question="Can I upgrade or downgrade my plan later?" 
              answer="Absolutely. You can change your plan at any time. Prorated charges or credits will be automatically applied to your account for the remainder of the billing cycle." 
            />
            <FAQItem 
              question="Is there a setup fee for the Team plan?" 
              answer="No, there are no hidden fees. The Team plan includes a dedicated account manager who will help you integrate our API and set up white-label reports at no extra cost." 
            />
          </div>
        </div>
      </section>

      {/* Bottom Waitlist CTA */}
      <section id="waitlist-bottom" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(180deg, var(--accent) 0%, transparent 100%)', opacity: 0.5, zIndex: -1 }}></div>
        <div className="container text-center">
          <h2 className="h1" style={{ marginBottom: '1.5rem' }}>Secure your pricing rate.</h2>
          <p className="text-body" style={{ fontSize: '1.25rem', marginBottom: '2.5rem' }}>Join the waitlist today to lock in early-adopter pricing for Estata 2.0.</p>
          <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <WaitlistForm />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Pricing;
