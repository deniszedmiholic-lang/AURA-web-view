
import React, { useState } from 'react';

const InvestForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contribution: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', contribution: '', message: '' });
  };

  return (
    <section id="invest" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white text-center mb-4">
          Become a <span className="text-brand-secondary">Founding Partner</span>
        </h2>
        <p className="text-center text-brand-light/80 max-w-2xl mx-auto mb-12">
          Your contribution will be etched into the legacy of AURA. Join us and leave your mark on the future of flight.
        </p>

        {submitted ? (
          <div className="bg-brand-dark/50 border border-brand-accent p-8 rounded-lg text-center max-w-xl mx-auto animate-fade-in">
            <h3 className="text-3xl font-orbitron text-brand-accent mb-4">Thank You!</h3>
            <p className="text-lg">Your inquiry has been received. Our team will contact you shortly to discuss the next steps. Welcome to the future.</p>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto bg-gray-900/20 backdrop-blur-xl border border-brand-accent/30 p-8 rounded-lg space-y-6 animate-slide-in"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-bold text-brand-accent">Full Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-brand-dark/50 border border-brand-light/20 rounded-md p-3 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all outline-none" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-bold text-brand-accent">Email Address</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-brand-dark/50 border border-brand-light/20 rounded-md p-3 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all outline-none" />
            </div>
            <div className="space-y-2">
              <label htmlFor="contribution" className="text-sm font-bold text-brand-accent">Intended Contribution (USD)</label>
              <input type="number" id="contribution" name="contribution" value={formData.contribution} onChange={handleChange} required placeholder="e.g., 50000" className="w-full bg-brand-dark/50 border border-brand-light/20 rounded-md p-3 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all outline-none" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-brand-accent">Message (Optional)</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-brand-dark/50 border border-brand-light/20 rounded-md p-3 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all outline-none" />
            </div>
            <button type="submit" className="w-full bg-brand-secondary text-white font-bold py-3 px-8 rounded-lg text-lg transform hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.5)]">
              Submit Inquiry
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default InvestForm;
