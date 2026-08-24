import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter', price: '$8K', timeline: '2–3 weeks',
    description: 'A focused landing page or marketing site to get your brand online fast.',
    features: ['Up to 5 pages', 'Custom design', 'Responsive build', 'CMS integration', '2 rounds of revisions'],
    highlighted: false,
  },
  {
    name: 'Studio', price: '$24K', timeline: '6–7 weeks',
    description: 'Full website or web app with a design system and custom interactions.',
    features: ['Up to 15 pages', 'Design system', 'Custom animations', 'API integration', 'Analytics setup', 'Unlimited revisions'],
    highlighted: true,
  },
  {
    name: 'Product', price: 'Custom', timeline: '8+ weeks',
    description: 'End-to-end product design and development for startups and teams.',
    features: ['Full product build', 'User research', 'Design + development', 'Ongoing support', 'Team handoff'],
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section" style={{ position: 'relative', zIndex: 2, background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="section-label">Pricing</div>
        <h2 className="section-title">Transparent, fixed-scope pricing.</h2>
        <p className="section-subtitle" style={{ marginBottom: 64 }}>No hourly billing surprises. Pick a scope, get a fixed price, and know exactly what you're getting.</p>
        <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {tiers.map((t, i) => (
            <div key={i} className="pricing-card" style={{
              display: 'flex', flexDirection: 'column', padding: 32, borderRadius: 'var(--radius)',
              background: t.highlighted ? 'var(--bg-card)' : 'var(--bg-elevated)',
              border: t.highlighted ? '1px solid var(--accent)' : '1px solid var(--border)',
              position: 'relative', transition: 'transform 0.3s',
            }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}>
              {t.highlighted && (
                <div style={{
                  position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                  padding: '4px 16px', borderRadius: 100, background: 'var(--accent)', color: 'var(--bg)',
                  fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap',
                }}>Most popular</div>
              )}
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600, marginBottom: 8 }}>{t.name}</h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 24, lineHeight: 1.5, minHeight: 42 }}>{t.description}</p>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 4 }}>{t.price}</div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 32 }}>{t.timeline}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32, flex: 1 }}>
                {t.features.map((f) => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20,
                      borderRadius: '50%', background: 'rgba(232,255,94,0.1)', flexShrink: 0,
                    }}>
                      <Check size={12} color="var(--accent)" />
                    </div>
                    <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{f}</span>
                  </div>
                ))}
              </div>
              <a href="#contact" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px 24px',
                borderRadius: 100, fontSize: 15, fontWeight: 600,
                background: t.highlighted ? 'var(--accent)' : 'transparent',
                color: t.highlighted ? 'var(--bg)' : 'var(--text)',
                border: t.highlighted ? 'none' : '1px solid var(--border)',
                transition: 'border-color 0.2s, background 0.2s',
              }}
                onMouseEnter={(e) => { if (!t.highlighted) { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)' } }}
                onMouseLeave={(e) => { if (!t.highlighted) { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'transparent' } }}>
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .pricing-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}
