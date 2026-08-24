import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', textAlign: 'center',
      position: 'relative', zIndex: 2, padding: '120px 24px 80px',
    }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px',
        borderRadius: 100, border: '1px solid var(--border)', background: 'rgba(24, 24, 28, 0.6)',
        backdropFilter: 'blur(8px)', fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)', marginBottom: 32,
      }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--success)', boxShadow: '0 0 8px var(--success)' }} />
        Available for new projects — Q3 2025
      </div>
      <h1 style={{
        fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 8vw, 88px)',
        fontWeight: 600, lineHeight: 1.05, letterSpacing: '-0.03em', maxWidth: 900, marginBottom: 24,
      }}>
        We design and build<br />
        <span style={{ color: 'var(--accent)' }}>digital products</span> that<br />
        move people.
      </h1>
      <p style={{
        fontSize: 'clamp(16px, 2vw, 20px)', color: 'var(--text-secondary)',
        maxWidth: 560, lineHeight: 1.6, marginBottom: 40,
      }}>
        N18 is a solo studio crafting websites, web apps, and brand systems for founders who care about the details.
      </p>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="#work" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px',
          borderRadius: 100, background: 'var(--accent)', color: 'var(--bg)', fontSize: 16, fontWeight: 600,
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 0 32px var(--accent-glow)' }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}>
          View our work
        </a>
        <a href="#contact" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px',
          borderRadius: 100, border: '1px solid var(--border)', color: 'var(--text)', fontSize: 16, fontWeight: 500,
          transition: 'border-color 0.2s, background 0.2s',
        }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)' }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'transparent' }}>
          Book a call
        </a>
      </div>
      <div style={{
        position: 'absolute', bottom: 40, display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: 8, color: 'var(--text-muted)', fontSize: 13,
      }}>
        <span>Scroll to explore</span>
        <ArrowDown size={16} className="bounce" />
        <style>{`
          @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(6px); } }
          .bounce { animation: bounce 1.5s ease-in-out infinite; }
        `}</style>
      </div>
    </section>
  )
}
