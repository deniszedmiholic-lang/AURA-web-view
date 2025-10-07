
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-brand-dark">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6 animate-slide-in">
          The <span className="text-brand-secondary">Vision</span> of AURA
        </h2>
        <div className="max-w-3xl mx-auto text-brand-light/90 text-lg space-y-4 animate-slide-in" style={{animationDelay: '0.2s'}}>
          <p>
            Project AURA is not just about building a machine; it's about unlocking a dream. For centuries, humanity has gazed at the sky, yearning for personal flight. We are turning that dream into a tangible reality.
          </p>
          <p>
            Our jet suit represents the pinnacle of aerospace engineering, material science, and artificial intelligence. Powered by an array of micro-turbine engines and stabilized by an advanced AI-driven control system, the AURA suit promises unparalleled freedom of movement in three-dimensional space. We invite you to be part of this historic endeavor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
