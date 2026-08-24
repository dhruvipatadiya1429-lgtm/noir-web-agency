export default function About() {
  return (
    <section id="about" className="section" style={{ position: 'relative', zIndex: 2, background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <div className="section-label">About</div>
            <h2 className="section-title">One person.<br />End-to-end craft.</h2>
            <p style={{ fontSize: 17, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24 }}>
              N18 is a solo studio. That means the person who designs your product is the same person who writes
              the code — no handoffs, no lost context, no diluted vision.
            </p>
            <p style={{ fontSize: 17, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 32 }}>
              I've spent the last six years building digital products for startups, agencies, and founders
              who refuse to ship mediocre work. If that sounds like you, we'll get along.
            </p>
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 700, color: 'var(--accent)' }}>6+</div>
                <div style={{ fontSize: 14, color: 'var(--text-muted)' }}>Years experience</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 700, color: 'var(--accent)' }}>30+</div>
                <div style={{ fontSize: 14, color: 'var(--text-muted)' }}>Projects shipped</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 700, color: 'var(--accent)' }}>100%</div>
                <div style={{ fontSize: 14, color: 'var(--text-muted)' }}>Solo built</div>
              </div>
            </div>
          </div>
          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { title: 'Web Design', description: 'Wireframes to pixel-perfect mockups.' },
              { title: 'Development', description: 'React, Next.js, and everything between.' },
              { title: 'Branding', description: 'Logo, color, type, and voice systems.' },
              { title: 'Motion', description: 'Micro-interactions and scroll animation.' },
            ].map((s, i) => (
              <div key={i} style={{
                padding: 24, borderRadius: 'var(--radius)', background: 'var(--bg-card)',
                border: '1px solid var(--border)', transition: 'border-color 0.3s',
              }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
