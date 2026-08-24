import { useEffect, useState } from 'react';

export default function LogoIntro({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<'enter' | 'hold' | 'exit' | 'gone'>('enter');

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      onDone();
      return;
    }

    const t1 = setTimeout(() => setPhase('hold'), 100);
    const t2 = setTimeout(() => setPhase('exit'), 1700);
    const t3 = setTimeout(() => {
      setPhase('gone');
      onDone();
    }, 2600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onDone]);

  if (phase === 'gone') return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-bg flex items-center justify-center transition-opacity duration-700 ${
        phase === 'exit' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div
        className={`transition-all duration-900 ease-out ${
          phase === 'enter'
            ? 'opacity-0 scale-90 blur-md'
            : 'opacity-100 scale-100 blur-0'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
      >
        <img
          src="/logo.png"
          alt="NOIR"
          className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto"
          style={{
            filter: 'drop-shadow(0 2px 24px rgba(20,20,20,0.12))',
          }}
        />
        {/* Subtle gold line that draws in beneath the logo */}
        <div className="mx-auto mt-5 h-px bg-accent overflow-hidden">
          <div
            className={`h-full bg-accent transition-all duration-1000 ease-out ${
              phase === 'enter' ? 'w-0' : 'w-full'
            }`}
            style={{ transitionDelay: '200ms' }}
          />
        </div>
      </div>
    </div>
  );
}
