import React from 'react';
import { Smartphone, Code, Palette, Server, Database, Cloud, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code size={24} className="text-orange-500" />,
      title: "Web Dev",
      description: "High-performance websites built with React.",
      iconBg: "bg-orange-500/10"
    },
    {
      icon: <Smartphone size={24} className="text-orange-500" />,
      title: "Mobile Apps",
      description: "Native and cross-platform apps for iOS/Android.",
      iconBg: "bg-orange-500/10"
    },
    {
      icon: <Palette size={24} className="text-orange-500" />,
      title: "UI/UX Design",
      description: "User-centric interfaces that drive engagement.",
      iconBg: "bg-orange-500/10"
    },
    {
      icon: <Server size={24} className="text-orange-500" />,
      title: "Backend",
      description: "Robust server-side architecture and APIs.",
      iconBg: "bg-orange-500/10"
    },
    {
      icon: <Database size={24} className="text-orange-500" />,
      title: "Maintenance",
      description: "Ongoing updates and security monitoring.",
      iconBg: "bg-orange-500/10"
    },
    {
      icon: <Cloud size={24} className="text-orange-500" />,
      title: "Cloud",
      description: "Scalable infrastructure management.",
      iconBg: "bg-orange-500/10"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12 md:mb-20">
          <p className="text-orange-500 font-semibold tracking-wider text-xs mb-3">OUR EXPERTISE</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-main">
            Building Digital <span className="text-muted">Excellence</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-sm md:text-base">
            Comprehensive technology solutions tailored to scale your business with modern architecture and design.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-4 md:p-8 rounded-2xl bg-card border border-border hover:border-purple-500/30 hover:bg-surface-hover transition-all duration-300 hover:-translate-y-1 shadow-sm flex flex-col items-center text-center"
            >
              <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl ${service.iconBg} flex items-center justify-center mb-4 md:mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-sm md:text-xl font-bold mb-2 md:mb-4 text-main">{service.title}</h3>
              <p className="text-muted mb-4 md:mb-6 leading-relaxed text-[10px] md:text-sm line-clamp-2 md:line-clamp-none">
                {service.description}
              </p>
              <a href="#" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-main hover:text-purple-500 transition-colors">
                Learn more <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;