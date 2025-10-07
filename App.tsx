
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Phases from './components/Phases';
import InvestForm from './components/InvestForm';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark text-brand-light font-sans relative min-h-screen overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(139,92,246,0.15),_transparent_40%)]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_rgba(0,246,255,0.1),_transparent_50%)]"></div>
      
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Phases />
        <InvestForm />
      </main>
      
      <ChatWidget />
    </div>
  );
};

export default App;
