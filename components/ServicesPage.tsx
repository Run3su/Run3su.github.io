import React, { useEffect } from 'react';
import { X, Smartphone, Code, Palette, Server, Database, Cloud, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  isOpen: boolean;
  onClose: () => void;
  openContact: () => void;
}

const services = [
  {
    icon: <Code size={32} />,
    title: "Web Development",
    description: "High-performance websites built with React and Next.js that prioritize speed, SEO, and scalability. We focus on clean code and exceptional user performance.",
    features: ["Responsive Design", "SEO Optimization", "Next.js & React", "PWA Support"],
    color: "text-orange-500",
    bg: "bg-orange-500/10"
  },
  {
    icon: <Smartphone size={32} />,
    title: "Mobile Apps",
    description: "Native and cross-platform apps for iOS and Android designed for intuitive user experiences. We use Flutter and React Native for efficient delivery.",
    features: ["iOS & Android", "Cross-Platform", "App Store Optimization", "Real-time Sync"],
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    icon: <Palette size={32} />,
    title: "UI/UX Design",
    description: "User-centric interfaces that drive engagement and retention through beautiful, functional design. Our process includes deep user research.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    icon: <Server size={32} />,
    title: "API & Backend",
    description: "Robust server-side architecture and seamless third-party integrations for complex systems. We build scalable microservices.",
    features: ["RESTful APIs", "GraphQL", "Microservices", "Security Audit"],
    color: "text-green-500",
    bg: "bg-green-500/10"
  },
  {
    icon: <Database size={32} />,
    title: "Maintenance",
    description: "Continuous updates ensuring security, speed optimization, and 24/7 reliability monitoring for your digital assets.",
    features: ["Security Patches", "Performance Tuning", "Backup Management", "24/7 Support"],
    color: "text-red-500",
    bg: "bg-red-500/10"
  },
  {
    icon: <Cloud size={32} />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure setup and management on AWS, Google Cloud, or Azure. We help you migrate and optimize.",
    features: ["AWS / Azure / GCP", "Docker & Kubernetes", "CI/CD Pipelines", "Cost Optimization"],
    color: "text-cyan-500",
    bg: "bg-cyan-500/10"
  }
];

const ServicesPage: React.FC<ServicesPageProps> = ({ isOpen, onClose, openContact }) => {
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

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-7xl bg-background border border-border rounded-3xl shadow-2xl overflow-hidden max-h-[95vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="no-glow absolute top-6 right-6 z-30 p-2 rounded-full bg-surface hover:bg-surface-hover border border-border transition-colors text-muted hover:text-main !shadow-none"
        >
          <X size={20} />
        </button>

        {/* Header Section */}
        <div className="relative p-8 md:p-12 pb-6 bg-background border-b border-border overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="inline-block bg-orange-500/10 text-orange-500 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-4 border border-orange-500/20">
              OUR EXPERTISE
            </div>
            <h2 className="text-4xl font-bold text-main mb-4 leading-tight">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">Technology Solutions</span>
            </h2>
            <p className="text-muted max-w-2xl text-lg">
              We provide end-to-end digital services designed to scale your business. From the first line of code to global deployment, we are your strategic partner.
            </p>
          </div>
        </div>

        {/* Scrollable Grid */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12 pt-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-purple-500/30 hover:bg-surface-hover transition-all duration-300 hover:-translate-y-2 shadow-sm flex flex-col h-full"
              >
                <div className={`w-14 h-14 rounded-xl ${service.bg} flex items-center justify-center mb-6 ${service.color} transition-transform group-hover:scale-110`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-main group-hover:text-purple-500 transition-colors">{service.title}</h3>
                <p className="text-muted mb-8 leading-relaxed text-sm flex-grow">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-xs text-muted">
                      <CheckCircle2 size={14} className="text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => { onClose(); openContact(); }}
                  className="w-full py-3 bg-glass hover:bg-purple-600 hover:text-white border border-border hover:border-purple-600 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2"
                >
                  Get started <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center bg-gradient-to-br from-surface to-background border border-border rounded-3xl p-12 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10 pointer-events-none" />
            <h3 className="text-2xl font-bold text-main mb-4">Not sure which service you need?</h3>
            <p className="text-muted mb-8 max-w-xl mx-auto">Schedule a free discovery call and our experts will help you chart the perfect technical roadmap for your project.</p>
            <button 
              onClick={() => { onClose(); openContact(); }}
              className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl shadow-purple-900/20 hover:scale-105 flex items-center gap-2 mx-auto"
            >
              Book a Consultation
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;