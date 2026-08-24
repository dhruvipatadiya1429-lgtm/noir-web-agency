const links = {
  Studio: ['Work', 'Process', 'Pricing', 'About'],
  Connect: ['Twitter', 'LinkedIn', 'Dribbble', 'GitHub'],
  Legal: ['Privacy', 'Terms', 'Cookies'],
}

export default function Footer() {
  return (
    <footer style={{ padding: '80px 0 40px', background: 'var(--bg)', borderTop: '1px solid var(--border)', position: 'relative', zIndex: 2 }}>
      <div className="container">
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 64 }}>
          <div>
            <a href="#" style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: 8, background: 'var(--accent)', color: 'var(--bg)', fontSize: 16, fontWeight: 700 }}>N</span>
              N18
            </a>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: 300 }}>
              A solo design and development studio building digital products that move people.
            </p>
          </div>
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 16 }}>{category}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {items.map((item) => (
                  <a key={item} href="#" style={{ fontSize: 14, color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 32, borderTop: '1px solid var(--border)', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>© 2025 N18 Studio. All rights reserved.</p>
          <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>Designed and built solo. No templates, no outsourcing.</p>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; } }
        @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}
