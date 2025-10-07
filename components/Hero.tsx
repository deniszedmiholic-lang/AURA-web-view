
import React from 'react';

const Hero: React.FC = () => {
  const scrollToInvest = () => {
    document.getElementById('invest')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center relative px-4" style={{ backgroundImage: 'url(https://picsum.photos/seed/aura-jet/1920/1080)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="absolute inset-0 bg-brand-dark opacity-70"></div>
      <div className="relative z-10 animate-fade-in">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black text-white uppercase tracking-wider">
          Define The <span className="text-brand-accent">Future</span>
        </h2>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-brand-light">
          Join the AURA Initiative and invest in the next leap of human mobility. We are engineering the world's most advanced personal jet suit.
        </p>
        <button 
          onClick={scrollToInvest}
          className="mt-8 bg-brand-accent text-brand-dark font-bold py-3 px-8 rounded-lg text-lg transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
        >
          Become a Pioneer
        </button>
      </div>
    </section>
  );
};

export default Hero;
