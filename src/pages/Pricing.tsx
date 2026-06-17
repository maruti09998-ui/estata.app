import React, { useState } from 'react';
import WaitlistForm from '../components/WaitlistForm';
import BottomCTA from '../components/BottomCTA';
import { Check, ChevronDown, ChevronUp, Minus } from 'lucide-react';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    { q: 'How is the valuation calculated?', a: 'We use a proprietary ensemble model combining real-time comparable sales, macroeconomic indicators, and neighborhood trends. Our models are re-trained weekly.' },
    { q: 'Is there a limit to how many properties I can track?', a: 'Starter tier limits to 10 properties. Pro allows up to 500. Team has custom limits based on your brokerage size.' },
    { q: 'Can I integrate this into my existing CRM?', a: 'Team plans include API access and native integrations with popular real estate CRMs.' },
  ];

  return (
    <div className="faq-container" style={{ maxWidth: '800px', margin: '0 auto', marginTop: '6rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>Frequently Asked Questions</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {faqs.map((faq, idx) => (
          <div key={idx} style={{ backgroundColor: 'white', borderRadius: 'var(--radius-lg)', padding: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
            <button 
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'transparent', border: 'none', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-main)' }}
            >
              {faq.q}
              <div style={{ color: openIndex === idx ? 'var(--accent)' : 'var(--text-muted)' }}>
                {openIndex === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </button>
            {openIndex === idx && (
              <div style={{ paddingTop: '1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const FeatureMatrix = () => {
  const features = [
    { name: 'Properties tracked', starter: '10', pro: '500', team: 'Unlimited' },
    { name: 'Automated valuations', starter: true, pro: true, team: true },
    { name: 'Monthly market reports', starter: true, pro: true, team: true },
    { name: 'Investment scoring', starter: false, pro: true, team: true },
    { name: 'Neighborhood signals', starter: false, pro: true, team: true },
    { name: 'Real-time alerts', starter: false, pro: true, team: true },
    { name: 'API access', starter: false, pro: false, team: true },
    { name: 'Team collaboration', starter: false, pro: false, team: true },
    { name: 'White-labeling', starter: false, pro: false, team: true },
  ];

  const renderCheck = (val: boolean | string) => {
    if (typeof val === 'string') return <span style={{ fontWeight: 600 }}>{val}</span>;
    if (val) return <Check size={20} color="var(--accent)" />;
    return <Minus size={20} color="rgba(28, 43, 59, 0.2)" />;
  };

  return (
    <div style={{ marginTop: '6rem', backgroundColor: 'white', borderRadius: 'var(--radius-xl)', padding: '3rem', boxShadow: 'var(--shadow-md)', overflowX: 'auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>Compare features</h2>
      <table style={{ width: '100%', minWidth: '600px', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid var(--border-light)' }}>
            <th style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: 500, width: '40%' }}>Features</th>
            <th style={{ padding: '1rem', fontSize: '1.1rem', color: 'var(--text-main)', textAlign: 'center', width: '20%' }}>Starter</th>
            <th style={{ padding: '1rem', fontSize: '1.1rem', color: 'var(--primary)', textAlign: 'center', width: '20%' }}>Pro</th>
            <th style={{ padding: '1rem', fontSize: '1.1rem', color: 'var(--text-main)', textAlign: 'center', width: '20%' }}>Team</th>
          </tr>
        </thead>
        <tbody>
          {features.map((f, i) => (
            <tr key={i} style={{ borderBottom: '1px solid var(--border-light)' }}>
              <td style={{ padding: '1.25rem 1rem', fontWeight: 500, color: 'var(--text-main)' }}>{f.name}</td>
              <td style={{ padding: '1.25rem 1rem', textAlign: 'center' }}>{renderCheck(f.starter)}</td>
              <td style={{ padding: '1.25rem 1rem', backgroundColor: 'rgba(28, 43, 59, 0.02)', textAlign: 'center' }}>{renderCheck(f.pro)}</td>
              <td style={{ padding: '1.25rem 1rem', textAlign: 'center' }}>{renderCheck(f.team)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="pricing-page section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', marginBottom: '5rem' }}>
          <h1 className="text-display">Pricing built for scale</h1>
          <p className="text-lead mt-4">Simple, transparent pricing for individuals and teams.</p>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', background: 'white', padding: '0.5rem', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-light)', marginTop: '2.5rem', boxShadow: 'var(--shadow-sm)' }}>
            <button 
              onClick={() => setIsAnnual(false)}
              style={{ padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-pill)', background: !isAnnual ? 'var(--primary)' : 'transparent', color: !isAnnual ? 'white' : 'var(--text-main)', border: 'none', fontWeight: 500, transition: 'all 0.2s' }}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              style={{ padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-pill)', background: isAnnual ? 'var(--primary)' : 'transparent', color: isAnnual ? 'white' : 'var(--text-main)', border: 'none', fontWeight: 500, transition: 'all 0.2s' }}
            >
              Annually (Save 20%)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'center' }}>
          
          {/* Starter */}
          <div className="glass" style={{ padding: '3rem 2rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>Starter</h3>
            <div style={{ fontSize: '3rem', fontWeight: 800, margin: '1.5rem 0', letterSpacing: '-0.03em' }}>
              ${isAnnual ? '49' : '59'}<span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>/mo</span>
            </div>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', minHeight: '48px' }}>For individual investors starting out.</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: 1 }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}><Check size={20} color="var(--accent)" style={{ flexShrink: 0 }} /> 10 properties tracked</li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}><Check size={20} color="var(--accent)" style={{ flexShrink: 0 }} /> Core automated valuations</li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}><Check size={20} color="var(--accent)" style={{ flexShrink: 0 }} /> Monthly market reports</li>
            </ul>
            <div style={{ marginTop: '3rem' }}>
              <WaitlistForm />
            </div>
          </div>

          {/* Pro */}
          <div style={{ padding: '3.5rem 2rem', borderRadius: 'var(--radius-xl)', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'white' }}>Pro</h3>
              <span style={{ backgroundColor: 'rgba(226, 166, 118, 0.15)', color: '#E2A676', padding: '0.5rem 1rem', borderRadius: 'var(--radius-pill)', fontSize: '0.85rem', fontWeight: 600 }}>Most Popular</span>
            </div>
            <div style={{ fontSize: '3rem', fontWeight: 800, margin: '1.5rem 0', letterSpacing: '-0.03em' }}>
              ${isAnnual ? '149' : '179'}<span style={{ fontSize: '1rem', opacity: 0.7, fontWeight: 500 }}>/mo</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', minHeight: '48px' }}>For active investors needing deep insights.</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: 1 }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}><Check size={20} color="var(--accent)" style={{ flexShrink: 0 }} /> <span style={{ color: 'white' }}>500 properties tracked</span></li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}><Check size={20} color="var(--accent)" style={{ flexShrink: 0 }} /> <span style={{ color: 'white' }}>Investment scoring</span></li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}><Check size={20} color="var(--accent)" style={{ flexShrink: 0 }} /> <span style={{ color: 'white' }}>Real-time alerts</span></li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}><Check size={20} color="var(--accent)" style={{ flexShrink: 0 }} /> <span style={{ color: 'white' }}>Neighborhood signals</span></li>
            </ul>
            <div style={{ marginTop: '3rem' }}>
              <WaitlistForm />
            </div>
          </div>

          {/* Team */}
          <div className="glass" style={{ padding: '3rem 2rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>Team</h3>
            <div style={{ fontSize: '3rem', fontWeight: 800, margin: '1.5rem 0', letterSpacing: '-0.03em' }}>
              Custom
            </div>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', minHeight: '48px' }}>For brokerages and large teams.</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: 1 }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}><Check size={20} color="var(--accent)" style={{ flexShrink: 0 }} /> Unlimited properties</li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}><Check size={20} color="var(--accent)" style={{ flexShrink: 0 }} /> Multi-user access</li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}><Check size={20} color="var(--accent)" style={{ flexShrink: 0 }} /> API access</li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}><Check size={20} color="var(--accent)" style={{ flexShrink: 0 }} /> Advanced reporting</li>
            </ul>
            <div style={{ marginTop: '3rem' }}>
              <WaitlistForm />
            </div>
          </div>
          
        </div>

        <FeatureMatrix />

        <FAQAccordion />

        <BottomCTA />
      </div>
    </div>
  );
};

export default Pricing;
