import React from 'react';
import { Home, LayoutGrid, Briefcase, MoreHorizontal } from 'lucide-react';

interface MobileNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: <Home size={22} className="tab-icon transition-all" /> },
    { id: 'services', label: 'Services', icon: <LayoutGrid size={22} className="tab-icon transition-all" /> },
    { id: 'work', label: 'Projects', icon: <Briefcase size={22} className="tab-icon transition-all" /> },
    { id: 'more', label: 'More', icon: <MoreHorizontal size={22} className="tab-icon transition-all" /> },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-t border-border px-6 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] flex justify-between items-center transition-all duration-300">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex flex-col items-center gap-1.5 py-1 px-4 rounded-2xl transition-all duration-300 no-glow border-none !shadow-none bg-transparent ${
            activeTab === tab.id ? 'active-tab' : 'text-muted'
          }`}
        >
          <div className="relative">
            {tab.icon}
            {activeTab === tab.id && (
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-500 rounded-full animate-pulse" />
            )}
          </div>
          <span className="text-[10px] font-bold tracking-tight">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default MobileNav;