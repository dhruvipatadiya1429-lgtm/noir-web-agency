import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Lumen Finance', category: 'Web App · Brand',
    description: 'A neo-bank dashboard for Gen-Z savers. Full design system, React frontend, and motion language.',
    image: 'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Design System', 'Framer Motion'],
  },
  {
    title: 'Atlas Studio', category: 'Website · CMS',
    description: 'Portfolio site for an architecture firm with a custom 3D gallery and Sanity-driven case studies.',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'Three.js', 'Sanity'],
  },
  {
    title: 'Pulse Health', category: 'Product · Mobile',
    description: 'Telemedicine platform connecting patients with specialists. End-to-end product design and build.',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React Native', 'Node.js', 'UX Research'],
  },
  {
    title: 'Verdant Co.', category: 'E-commerce · Brand',
    description: 'DTC plant delivery brand with a custom Shopify storefront and subscription flow.',
    image: 'https://images.pexels.com/photos/1080846/pexels-photo-1080846.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Shopify', 'Branding', 'Illustration'],
  },
]

export default function Work() {
  return (
    <section id="work" className="section" style={{ position: 'relative', zIndex: 2, background: 'var(--bg)' }}>
      <div className="container">
        <div className="section-label">Selected Work</div>
        <h2 className="section-title">Projects we're proud of.</h2>
        <p className="section-subtitle" style={{ marginBottom: 64 }}>
          A mix of products, websites, and brand systems — each built from scratch with a relentless focus on craft.
        </p>
        <div className="work-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
          {projects.map((p, i) => (
            <a key={i} href="#" style={{
              display: 'flex', flexDirection: 'column', borderRadius: 'var(--radius)', overflow: 'hidden',
              background: 'var(--bg-card)', border: '1px solid var(--border)', transition: 'border-color 0.3s, transform 0.3s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}>
              <div style={{ position: 'relative', aspectRatio: '16 / 10', overflow: 'hidden' }}>
                <img src={p.image} alt={p.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(10,10,11,0.6) 100%)' }} />
              </div>
              <div style={{ padding: 28 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div>
                    <div style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 500, marginBottom: 4 }}>{p.category}</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, letterSpacing: '-0.01em' }}>{p.title}</h3>
                  </div>
                  <div className="arrow-icon" style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40,
                    borderRadius: '50%', border: '1px solid var(--border)', flexShrink: 0, transition: 'background 0.2s, color 0.2s',
                  }}>
                    <ArrowUpRight size={18} />
                  </div>
                </div>
                <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 16 }}>{p.description}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {p.tags.map((t) => (
                    <span key={t} style={{
                      fontSize: 12, fontWeight: 500, padding: '4px 12px', borderRadius: 100,
                      background: 'var(--bg-elevated)', color: 'var(--text-muted)', border: '1px solid var(--border)',
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .work-grid { grid-template-columns: 1fr !important; gap: 20px !important; } }`}</style>
    </section>
  )
}
