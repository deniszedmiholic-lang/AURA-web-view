
import React from 'react';

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/50 backdrop-blur-xl border-b border-brand-accent/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-orbitron font-bold text-brand-accent tracking-widest cursor-pointer" onClick={() => scrollToSection('hero')}>
          AURA
        </h1>
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('about')} className="text-brand-light hover:text-brand-accent transition-colors duration-300">About</button>
          <button onClick={() => scrollToSection('phases')} className="text-brand-light hover:text-brand-accent transition-colors duration-300">Roadmap</button>
          <button onClick={() => scrollToSection('invest')} className="bg-brand-accent text-brand-dark font-bold py-2 px-4 rounded-md hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(0,246,255,0.5)]">
            Invest Now
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
