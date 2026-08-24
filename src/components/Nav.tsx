import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(10, 10, 11, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        <a href="#" style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: 8, background: 'var(--accent)', color: 'var(--bg)', fontSize: 16, fontWeight: 700 }}>N</span>
          N18
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <div className="nav-links-desktop" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} style={{ fontSize: 15, fontWeight: 500, color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>
                {link.label}
              </a>
            ))}
          </div>
          <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 20px', borderRadius: 100, background: 'var(--accent)', color: 'var(--bg)', fontSize: 15, fontWeight: 600, transition: 'transform 0.2s, box-shadow 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 0 24px var(--accent-glow)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}>
            Start a project
          </a>
          <button className="nav-toggle" onClick={() => setOpen(!open)} style={{ display: 'none', color: 'var(--text)' }} aria-label="Menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="nav-mobile" style={{ background: 'var(--bg-elevated)', borderBottom: '1px solid var(--border)', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} style={{ fontSize: 16, fontWeight: 500, color: 'var(--text-secondary)' }}>{link.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} style={{ display: 'inline-flex', justifyContent: 'center', padding: '12px 20px', borderRadius: 100, background: 'var(--accent)', color: 'var(--bg)', fontSize: 15, fontWeight: 600 }}>Start a project</a>
        </div>
      )}
      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
