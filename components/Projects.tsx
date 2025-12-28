import React, { useEffect, useState } from 'react';
import { X, ExternalLink, ArrowRight, LayoutGrid, Smartphone, Globe, Palette } from 'lucide-react';

interface ProjectsProps {
  isOpen: boolean;
  onClose: () => void;
  isInline?: boolean;
}

const projectsData = [
  {
    id: 1,
    title: "EcoSphere",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    description: "A comprehensive sustainability tracking platform for corporate goals.",
    tags: ["React", "D3.js"]
  },
  {
    id: 2,
    title: "Nova Pay",
    category: "Fintech",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    description: "Next-generation digital wallet with biometric security.",
    tags: ["Flutter", "Firebase"]
  },
  {
    id: 3,
    title: "LuxeStay",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    description: "Premium hotel booking experience focusing on high-end visuals.",
    tags: ["Figma", "Design"]
  },
  {
    id: 4,
    title: "Zenith CRM",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    description: "Enterprise customer relationship tool for growth teams.",
    tags: ["Next.js", "Postgres"]
  },
  {
    id: 5,
    title: "Vivid Stream",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=800&q=80",
    description: "Social video streaming platform with interactive live-chats.",
    tags: ["Swift", "WebRTC"]
  },
  {
    id: 6,
    title: "Orbit",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    description: "Data visualization suite providing deep insights into telemetry.",
    tags: ["Python", "React"]
  }
];

const categories = ["All", "Web App", "Fintech", "Mobile", "UI/UX", "SaaS"];

const Projects: React.FC<ProjectsProps> = ({ isOpen, onClose, isInline = false }) => {
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    if (isOpen && !isInline) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isInline]);

  if (!isOpen && !isInline) return null;

  const filteredProjects = activeFilter === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  const Content = (
    <div className={`flex flex-col h-full bg-background animate-slide-up ${isInline ? 'pt-20 pb-24' : ''}`}>
      {/* Header Section */}
      <div className={`relative p-6 md:p-12 pb-4 bg-background text-center ${!isInline ? 'border-b border-border' : ''}`}>
        {!isInline && (
          <button 
            onClick={onClose} 
            className="no-glow absolute top-6 right-6 z-30 p-2 rounded-full bg-surface hover:bg-surface-hover border border-border transition-colors text-muted hover:text-main !shadow-none bg-transparent"
          >
            <X size={20} />
          </button>
        )}
        <div className="inline-block bg-purple-500/10 text-purple-500 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider mb-4 border border-purple-500/20 mx-auto">
          OUR PROJECTS
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-main mb-4">Featured Work</h2>
        <p className="text-muted text-xs md:text-sm max-w-2xl mx-auto">
          Explore our portfolio of high-performance digital products.
        </p>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mt-6 justify-center overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`whitespace-nowrap px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] font-bold transition-all border no-glow !shadow-none ${
                activeFilter === cat 
                ? 'bg-purple-600 border-purple-600 text-white' 
                : 'bg-surface border-border text-muted bg-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Scrollable Project Grid */}
      <div className={`flex-1 overflow-y-auto p-4 md:p-12 pt-4 ${isInline ? 'overflow-visible' : ''}`}>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-card border border-border rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="aspect-[1/1] md:aspect-[16/10] overflow-hidden relative bg-surface-hover">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://via.placeholder.com/800x600/150B2E/FFFFFF?text=${project.title}`;
                  }}
                />
              </div>
              <div className="p-3 md:p-5">
                <div className="text-[8px] md:text-[10px] font-bold text-purple-500 tracking-widest uppercase mb-1">{project.category}</div>
                <h3 className="text-xs md:text-lg font-bold text-main mb-1 md:mb-2 truncate">{project.title}</h3>
                <p className="text-muted text-[10px] leading-relaxed mb-3 line-clamp-2 md:line-clamp-none">
                  {project.description}
                </p>
                <button className="flex items-center gap-1.5 text-purple-500 font-bold text-[10px] md:text-xs no-glow !shadow-none border-none bg-transparent">
                  Explore <ExternalLink size={10} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted text-sm">No projects found.</p>
          </div>
        )}
      </div>
    </div>
  );

  if (isInline) return Content;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity" onClick={onClose} />
      <div className="relative w-full max-w-7xl bg-background border border-border rounded-3xl shadow-2xl overflow-hidden max-h-[95vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {Content}
      </div>
    </div>
  );
};

export default Projects;