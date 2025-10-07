
import React from 'react';

const PhaseCard: React.FC<{ icon: string; title: string; description: string; delay: string }> = ({ icon, title, description, delay }) => (
  <div className="bg-brand-dark/30 border border-brand-secondary/30 p-6 rounded-lg backdrop-blur-md animate-slide-in" style={{ animationDelay: delay }}>
    <div className="text-brand-accent text-4xl mb-4">{icon}</div>
    <h3 className="text-2xl font-orbitron font-bold text-white mb-2">{title}</h3>
    <p className="text-brand-light/80">{description}</p>
  </div>
);

const Phases: React.FC = () => {
  const phasesData = [
    {
      icon: '🔬',
      title: 'Phase 1: R&D',
      description: 'Core technology development, micro-turbine efficiency research, and material science breakthroughs.',
    },
    {
      icon: '🛠️',
      title: 'Phase 2: Prototyping',
      description: 'Construction and assembly of the first full-scale functional prototypes for rigorous testing.',
    },
    {
      icon: '🚀',
      title: 'Phase 3: Testing & AI',
      description: 'Controlled and open-environment flight tests. Training the AI stabilization and control systems.',
    },
    {
      icon: '🏭',
      title: 'Phase 4: Production',
      description: 'Establishing a production line for commercial and specialized versions of the AURA jet suit.',
    },
  ];

  return (
    <section id="phases" className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white text-center mb-12">
          Project <span className="text-brand-accent">Roadmap</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phasesData.map((phase, index) => (
            <PhaseCard key={phase.title} {...phase} delay={`${index * 0.15}s`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Phases;
