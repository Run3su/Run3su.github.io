import React, { useEffect, useState } from 'react';
import { X, ExternalLink, ArrowRight, LayoutGrid, Smartphone, Globe, Palette } from 'lucide-react';

interface WorkProps {
  isOpen: boolean;
  onClose: () => void;
}

const projects = [
  {
    id: 1,
    title: "EcoSphere Dashboard",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1551288049-bbbda546697a?auto=format&fit=crop&w=800&q=80",
    description: "A comprehensive sustainability tracking platform for corporate environmental goals.",
    tags: ["React", "D3.js", "Node.js"]
  },
  {
    id: 2,
    title: "Nova Pay",
    category: "Fintech",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    description: "Next-generation digital wallet with biometric security and instant cross-border transfers.",
    tags: ["Mobile", "Flutter", "Firebase"]
  },
  {
    id: 3,
    title: "LuxeStay",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    description: "Premium hotel booking experience focusing on high-end visuals and seamless UX.",
    tags: ["Figma", "Interaction Design"]
  },
  {
    id: 4,
    title: "Zenith CRM",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    description: "Enterprise-level customer relationship management tool built for high-growth sales teams.",
    tags: ["Next.js", "PostgreSQL", "Tailwind"]
  },
  {
    id: 5,
    title: "Vivid Stream",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=800&q=80",
    description: "A social video streaming platform with real-time AR filters and interactive live-chats.",
    tags: ["iOS", "Swift", "WebRTC"]
  },
  {
    id: 6,
    title: "Orbit Analytics",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    description: "Data visualization suite providing deep insights into satellite telemetry and space assets.",
    tags: ["Python", "FastAPI", "React"]
  }
];

const categories = ["All", "Web App", "Fintech", "Mobile App", "UI/UX Design", "SaaS"];

const Work: React.FC<WorkProps> = ({ isOpen, onClose }) => {
  const [activeFilter, setActiveFilter] = useState("All");

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

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

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
          className="absolute top-6 right-6 z-30 p-2 rounded-full bg-surface hover:bg-surface-hover border border-border transition-colors text-muted hover:text-main"
        >
          <X size={20} />
        </button>

        {/* Header Section */}
        <div className="relative p-8 md:p-12 pb-4 bg-background border-b border-border">
          <div className="inline-block bg-purple-500/10 text-purple-500 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-4 border border-purple-500/20">
            OUR PORTFOLIO
          </div>
          <h2 className="text-4xl font-bold text-main mb-4">Featured Projects</h2>
          <p className="text-muted max-w-2xl">
            A showcase of our best work across various industries. From concept to launch, we deliver digital products that make an impact.
          </p>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
                  activeFilter === cat 
                  ? 'bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-600/30' 
                  : 'bg-surface border-border text-muted hover:border-purple-500/50 hover:text-main'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Project Grid */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12 pt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-bold text-xs hover:bg-purple-600 hover:text-white transition-colors">
                      View Project <ExternalLink size={14} />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-[10px] font-bold text-purple-500 tracking-widest uppercase mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-main mb-3 group-hover:text-purple-500 transition-colors">{project.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-1 rounded-md bg-surface border border-border text-muted font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted">No projects found in this category.</p>
            </div>
          )}

          {/* Bottom Banner */}
          <div className="mt-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/10 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold text-main mb-2">Want to see more?</h4>
              <p className="text-sm text-muted">We have over 500+ successful project deliveries across the globe.</p>
            </div>
            <button className="flex items-center gap-2 bg-main text-background dark:text-main dark:bg-white px-6 py-3 rounded-xl font-bold transition-all hover:scale-105">
              Contact for Full Deck
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;