import React from 'react';
import { Compass, PenTool, Code2, ShieldCheck, Rocket, Search, Trello, PenBox, Cpu, Bug, Headset, ArrowRight } from 'lucide-react';

interface ProcessProps {
  openInquiry?: () => void;
}

const Process: React.FC<ProcessProps> = ({ openInquiry }) => {
  const steps = [
    { icon: <Compass size={20} />, step: "01", title: "Discovery", desc: "Requirements analysis and roadmap alignment." },
    { icon: <PenTool size={20} />, step: "02", title: "Design", desc: "Wireframes and high-fidelity prototypes." },
    { icon: <Code2 size={20} />, step: "03", title: "Development", desc: "Scalable code implementation by experts." },
    { icon: <ShieldCheck size={20} />, step: "04", title: "Testing", desc: "Rigorous QA across all devices." },
    { icon: <Rocket size={20} />, step: "05", title: "Launch", desc: "Production deployment and support." },
  ];

  const details = [
    {
      icon: <Search size={20} className="text-purple-400" />,
      title: "Research",
      desc: "Market, competitors, and user persona analysis."
    },
    {
      icon: <Trello size={20} className="text-purple-400" />,
      title: "Architecture",
      desc: "Defining technical stacks and DB structure."
    },
    {
      icon: <PenBox size={20} className="text-purple-400" />,
      title: "UI/UX Design",
      desc: "Intuitive interfaces that delight users."
    },
    {
      icon: <Code2 size={20} className="text-purple-400" />,
      title: "Agile Dev",
      desc: "Iterative sprints with regular demos."
    },
    {
      icon: <Bug size={20} className="text-purple-400" />,
      title: "QA & Test",
      desc: "Automated CI/CD for stable environments."
    },
    {
      icon: <Headset size={20} className="text-purple-400" />,
      title: "24/7 Support",
      desc: "Dedicated security and updates handling."
    }
  ];

  return (
    <section className="py-20 bg-background relative transition-colors duration-300">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-purple-500/5 dark:bg-purple-900/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-900/10 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-6 border border-purple-500/20">
            OUR PROCESS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-main">How We Build Excellence</h2>
          <p className="text-muted max-w-2xl mx-auto text-sm md:text-base text-center">
            We follow a rigorous methodology to ensure the highest quality delivery for your digital products.
          </p>
        </div>

        {/* Desktop Timeline Steps */}
        <div className="hidden lg:grid grid-cols-5 gap-8 mb-24 relative">
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent -z-10" />
          {steps.map((item, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center mb-6 group-hover:border-purple-500 group-hover:bg-purple-500/10 transition-all duration-300 shadow-lg relative z-10">
                 <div className="text-purple-500 dark:text-purple-400">{item.icon}</div>
              </div>
              <div className="mt-4">
                 <p className="text-xs font-bold text-purple-500 dark:text-purple-400 tracking-wider mb-1">STEP {item.step}</p>
                 <h3 className="text-lg font-bold mb-3 text-main">{item.title}</h3>
                 <p className="text-sm text-muted leading-relaxed px-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Grid Timeline */}
        <div className="lg:hidden grid grid-cols-2 gap-4 mb-20">
             {steps.map((item, idx) => (
                 <div key={idx} className="bg-card p-4 rounded-xl border border-border shadow-sm flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-3">
                        {item.icon}
                    </div>
                    <p className="text-[10px] font-bold text-purple-500 uppercase">Step {item.step}</p>
                    <h3 className="text-sm font-bold text-main mb-2">{item.title}</h3>
                    <p className="text-[10px] text-muted line-clamp-2">{item.desc}</p>
                 </div>
             ))}
        </div>

        {/* Phase Details Grid */}
        <div className="mb-24">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-main text-center">Phase Details</h3>
            <p className="text-muted mb-12 text-center text-sm">A deeper look into our collaboration stages.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {details.map((detail, idx) => (
                    <div key={idx} className="bg-card p-4 md:p-8 rounded-xl border border-border hover:border-purple-500/20 hover:bg-surface-hover transition-all shadow-sm flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 md:mb-6">
                            {detail.icon}
                        </div>
                        <h4 className="text-sm md:text-lg font-bold mb-2 md:mb-3 text-main">{detail.title}</h4>
                        <p className="text-muted text-[10px] md:text-sm leading-relaxed line-clamp-2 md:line-clamp-none">
                            {detail.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>

        {/* CTA Card */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1A0F35] to-[#0f0529] border border-white/10 p-8 md:p-12 text-center text-white">
             <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
             <div className="relative z-10">
                 <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to start?</h2>
                 <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm text-center">
                     Let's build something amazing together using our proven methodology.
                 </p>
                 <button 
                  onClick={openInquiry}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 md:px-8 py-3 rounded-full font-semibold transition-all inline-flex items-center gap-2 shadow-lg shadow-purple-900/50 hover:scale-105"
                 >
                     Start Now
                     <ArrowRight size={18} />
                 </button>
             </div>
        </div>

      </div>
    </section>
  );
};

export default Process;