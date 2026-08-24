import { useState, useCallback } from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import DiagonalBlock from '@/components/DiagonalBlock';
import Stats from '@/components/Stats';
import Work from '@/components/Work';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import About from '@/components/About';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import LogoIntro from '@/components/LogoIntro';

export default function App() {
  const [introDone, setIntroDone] = useState(false);
  const handleDone = useCallback(() => setIntroDone(true), []);

  return (
    <div className="min-h-screen bg-bg text-ink font-body antialiased">
      {!introDone && <LogoIntro onDone={handleDone} />}
      <Nav />
      <main>
        <Hero />
        <DiagonalBlock />
        <Stats />
        <Work />
        <Process />
        <Pricing />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
