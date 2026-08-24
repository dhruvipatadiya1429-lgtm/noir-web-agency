const stats = [
  { value: '48', label: 'Hours to first working demo' },
  { value: '100%', label: 'Personally built, zero outsourcing' },
  { value: '6+', label: 'Years crafting on the web' },
]

export default function Stats() {
  return (
    <section className="section" style={{
      padding: '80px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
      position: 'relative', zIndex: 2, background: 'var(--bg)',
    }}>
      <div className="container">
        <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {stats.map((s, i) => (
            <div key={i} className="stat-item" style={{
              display: 'flex', flexDirection: 'column', gap: 8, padding: '0 24px',
              borderLeft: i !== 0 ? '1px solid var(--border)' : 'none',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: 700, color: 'var(--accent)', letterSpacing: '-0.02em',
              }}>{s.value}</div>
              <div style={{ fontSize: 15, color: 'var(--text-secondary)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .stat-item { border-left: none !important; padding: 0 !important; }
        }
      `}</style>
    </section>
  )
}
