const WA_LINK = 'https://wa.me/917201002538?text=Hi%2C%20I%27d%20like%20a%20free%20demo';

export default function FinalCTA() {
  return (
    <section id="contact" className="bg-bg py-24 md:py-36">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <h2 className="font-display text-4xl md:text-6xl font-500 text-ink leading-[1.05] tracking-[-0.02em] mb-7">
          Let's see what your site
          <br />
          <span className="italic font-400">could look like.</span>
        </h2>
        <p className="font-body text-base md:text-lg text-muted leading-relaxed max-w-xl mx-auto mb-10">
          Free demo, no obligation. Message us and you'll have something real
          to look at within 48 hours.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-body text-sm font-medium bg-accent text-bg px-8 py-4 hover:bg-accent/90 transition-colors duration-200 tracking-wide"
        >
          Message on WhatsApp
        </a>
      </div>
    </section>
  );
}
