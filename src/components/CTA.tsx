import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" style={{ padding: '120px 0', position: 'relative', zIndex: 2, background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
          padding: '64px 32px', borderRadius: 24, background: 'var(--bg-card)', border: '1px solid var(--border)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: -100, left: '50%', transform: 'translateX(-50%)',
            width: 400, height: 200, background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 100,
            border: '1px solid var(--border)', fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)', marginBottom: 24,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--success)', boxShadow: '0 0 8px var(--success)' }} />
            2 slots available this quarter
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 600,
            lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 20, maxWidth: 600,
          }}>
            Let's build something<br />worth talking about.
          </h2>
          <p style={{ fontSize: 18, color: 'var(--text-secondary)', maxWidth: 480, lineHeight: 1.6, marginBottom: 40 }}>
            Tell me about your project. I'll reply within 24 hours with next steps.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="mailto:hello@n18.studio" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 32px', borderRadius: 100,
              background: 'var(--accent)', color: 'var(--bg)', fontSize: 16, fontWeight: 600,
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 0 32px var(--accent-glow)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}>
              Start a project <ArrowRight size={18} />
            </a>
            <a href="#" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 32px', borderRadius: 100,
              border: '1px solid var(--border)', color: 'var(--text)', fontSize: 16, fontWeight: 500,
              transition: 'border-color 0.2s',
            }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--border-hover)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}>
              Book a call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
