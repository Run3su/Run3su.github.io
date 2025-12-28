import React, { useEffect } from 'react';
import { X, Users, Target, Zap, Award } from 'lucide-react';

interface AboutProps {
  isOpen: boolean;
  onClose: () => void;
}

const About: React.FC<AboutProps> = ({ isOpen, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const stats = [
    { icon: <Users size={24} className="text-purple-500" />, title: "Expert Team", desc: "Senior engineers & designers." },
    { icon: <Target size={24} className="text-blue-500" />, title: "Visionary", desc: "Aligning tech with goals." },
    { icon: <Zap size={24} className="text-yellow-500" />, title: "Rapid Velocity", desc: "Quick time-to-market." },
    { icon: <Award size={24} className="text-orange-500" />, title: "Award Winning", desc: "Recognized excellence." }
  ];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-6xl bg-background border border-border rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="no-glow absolute top-6 right-6 z-20 p-2 rounded-full bg-surface hover:bg-surface-hover border border-border transition-colors text-muted hover:text-main !shadow-none bg-transparent"
        >
          <X size={20} />
        </button>
        
        {/* Content */}
        <div className="relative bg-background transition-colors duration-300">
             {/* Background effects */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none" />

            <div className="p-6 md:p-16 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
                    <div className="inline-block bg-blue-500/10 text-blue-500 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider mb-6 border border-blue-500/20">
                        WHO WE ARE
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-main leading-tight">
                        The Architects of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                            Digital Transformation
                        </span>
                    </h2>
                    <p className="text-muted text-sm md:text-lg leading-relaxed">
                        DevRun-Tech is a premium digital product agency born from the belief that technology should be beautiful, functional, and scalable.
                    </p>
                </div>

                {/* Grid - 2 columns on mobile */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 mb-16 md:mb-20">
                    {stats.map((stat, idx) => (
                      <div key={idx} className="bg-card border border-border p-4 md:p-8 rounded-2xl hover:bg-surface-hover transition-colors text-center flex flex-col items-center">
                          <div className="mb-4">{stat.icon}</div>
                          <h3 className="text-xs md:text-xl font-bold text-main mb-1 md:mb-3">{stat.title}</h3>
                          <p className="text-muted text-[10px] md:text-sm leading-relaxed">{stat.desc}</p>
                      </div>
                    ))}
                </div>

                {/* Story/Image Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="relative rounded-3xl overflow-hidden aspect-square group border border-border shadow-lg order-2 lg:order-1">
                        <img 
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                            alt="Team working" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                            <p className="text-white text-xs font-medium">Collaborating at our HQ in Collingwood.</p>
                        </div>
                    </div>
                    <div className="space-y-6 text-center lg:text-left order-1 lg:order-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-main">Our Story</h3>
                        <p className="text-muted text-xs md:text-base leading-relaxed">
                            Founded in 2020, DevRun-Tech started as a small trio of passionate developers tired of legacy code and clunky interfaces. We set out to build a different kind of agency.
                        </p>
                        <p className="text-muted text-xs md:text-base leading-relaxed">
                            Today, we've delivered over 500 successful projects. Our philosophy remains: <strong>build it right, make it fast, keep it simple.</strong>
                        </p>
                        
                        <div className="pt-6 grid grid-cols-2 gap-6 border-t border-border mt-6">
                            <div>
                                <div className="text-xl md:text-3xl font-bold text-main mb-1">500+</div>
                                <div className="text-[10px] md:text-sm text-muted">Projects Launched</div>
                            </div>
                            <div>
                                <div className="text-xl md:text-3xl font-bold text-main mb-1">98%</div>
                                <div className="text-[10px] md:text-sm text-muted">Client Retention</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center bg-surface border border-border rounded-2xl p-8 md:p-12 relative overflow-hidden">
                    <Award size={32} className="text-purple-500 mx-auto mb-4 md:mb-6" />
                    <h3 className="text-xl md:text-2xl font-bold text-main mb-2 md:mb-4">Award Winning Agency</h3>
                    <p className="text-muted text-[10px] md:text-sm max-w-md mx-auto">Recognized for excellence in web development and digital innovation.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;