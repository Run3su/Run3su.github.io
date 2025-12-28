import React, { useEffect, useState } from 'react';
import { X, Smartphone, Globe, Server, Palette, CheckCircle2, ArrowRight } from 'lucide-react';

interface InquiryProps {
  isOpen: boolean;
  onClose: () => void;
  onFinish: (choice: string) => void;
}

const choices = [
  {
    id: 'mobile',
    title: 'Mobile Application',
    icon: <Smartphone size={28} />,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    desc: 'iOS & Android native or cross-platform apps.'
  },
  {
    id: 'web',
    title: 'Website',
    icon: <Globe size={28} />,
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
    desc: 'High-performance web apps & landing pages.'
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: <Server size={28} />,
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    desc: 'Robust APIs, Databases & Cloud architecture.'
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    icon: <Palette size={28} />,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    desc: 'User-centric research and interface design.'
  }
];

const Inquiry: React.FC<InquiryProps> = ({ isOpen, onClose, onFinish }) => {
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSelected(null);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity" onClick={onClose} />
      
      <div className="relative w-full max-w-4xl bg-background border border-border rounded-3xl shadow-2xl overflow-hidden max-h-[95vh] flex flex-col animate-in fade-in zoom-in-95 duration-300">
        
        <button onClick={onClose} className="no-glow absolute top-6 right-6 z-20 p-2 rounded-full bg-surface hover:bg-surface-hover border border-border transition-colors text-muted hover:text-main !shadow-none bg-transparent">
          <X size={20} />
        </button>

        <div className="p-6 md:p-12 overflow-y-auto">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-block bg-purple-500/10 text-purple-500 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider mb-6 border border-purple-500/20">
              GET STARTED
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-main mb-4 leading-tight">
              What would you like us to <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                develop for you?
              </span>
            </h2>
            <p className="text-muted text-sm md:text-base max-w-xl mx-auto">
              Select the primary focus of your project to help us tailor the perfect solution for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {choices.map((choice) => (
              <button
                key={choice.id}
                onClick={() => setSelected(choice.id)}
                className={`group p-6 rounded-2xl border transition-all duration-300 text-left flex items-start gap-4 no-glow !shadow-none bg-card ${
                  selected === choice.id 
                  ? 'border-purple-500 bg-purple-500/5 ring-1 ring-purple-500' 
                  : 'border-border hover:border-purple-500/30 hover:bg-surface-hover'
                }`}
              >
                <div className={`shrink-0 w-14 h-14 rounded-xl ${choice.bg} ${choice.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  {choice.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-main md:text-xl">{choice.title}</h3>
                    {selected === choice.id && <CheckCircle2 size={20} className="text-purple-500 animate-in fade-in zoom-in duration-300" />}
                  </div>
                  <p className="text-muted text-xs md:text-sm leading-relaxed">{choice.desc}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <button
              disabled={!selected}
              onClick={() => onFinish(selected || '')}
              className={`group px-10 py-4 rounded-xl font-bold transition-all flex items-center gap-2 shadow-xl ${
                selected 
                ? 'bg-purple-600 text-white shadow-purple-900/20 hover:scale-105 opacity-100' 
                : 'bg-surface text-muted border border-border opacity-50 cursor-not-allowed'
              }`}
            >
              Continue
              <ArrowRight size={20} className={selected ? "group-hover:translate-x-1 transition-transform" : ""} />
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-[10px] md:text-xs text-muted">
              Step 1 of 2: Project Definition
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;