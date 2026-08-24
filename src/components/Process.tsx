const steps = [
  { number: '01', title: 'Discover', description: 'We dig into your goals, users, and constraints. A focused kickoff sets the direction for everything that follows.', duration: 'Week 1' },
  { number: '02', title: 'Design', description: 'Wireframes, high-fidelity mockups, and a living design system. You see real screens — not abstract decks.', duration: 'Weeks 2–3' },
  { number: '03', title: 'Build', description: 'Production code in React, Next.js, or your stack of choice. Weekly demos keep you in the loop at every step.', duration: 'Weeks 4–6' },
  { number: '04', title: 'Launch', description: 'We ship, monitor, and iterate. Post-launch support and documentation included so your team can run with it.', duration: 'Week 7' },
]

export default function Process() {
  return (
    <section id="process" className="section" style={{ position: 'relative', zIndex: 2, background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="section-label">How we work</div>
        <h2 className="section-title">A process built for momentum.</h2>
        <p className="section-subtitle" style={{ marginBottom: 64 }}>Four phases. Seven weeks. You get a working demo within the first 48 hours.</p>
        <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
          {steps.map((s, i) => (
            <div key={i} className="process-step" style={{
              padding: '32px 24px', borderRight: i !== steps.length - 1 ? '1px solid var(--border)' : 'none',
              position: 'relative', transition: 'background 0.3s',
            }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(232,255,94,0.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, color: 'var(--accent)', marginBottom: 24 }}>{s.number}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, marginBottom: 12 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 16 }}>{s.description}</p>
              <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.duration}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .process-grid { grid-template-columns: 1fr !important; }
          .process-step { border-right: none !important; border-bottom: 1px solid var(--border) !important; }
          .process-step:last-child { border-bottom: none !important; }
        }
      `}</style>
    </section>
  )
}
