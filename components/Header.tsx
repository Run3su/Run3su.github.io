import React, { useState, useEffect } from 'react';
import { Code2, Menu, X, Sun, Moon, Github, Twitter, Linkedin, Instagram, User } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
  openContact: () => void;
  openAbout: () => void;
  openProjects: () => void;
  openServices: () => void;
  activeTab?: string;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme, openContact, openAbout, openProjects, openServices, activeTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getMobileTitle = () => {
    switch(activeTab) {
      case 'services': return 'Services';
      case 'work': return 'Featured Work';
      case 'more': return 'Settings';
      default: return 'DevRun-Tech';
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || activeTab !== 'home' ? 'bg-background/80 backdrop-blur-md border-b border-border py-3 md:py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo / Title Area */}
        <div className="flex items-center gap-3 font-bold text-xl tracking-tight text-main">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-1.5 rounded-lg text-white md:block hidden">
            <Code2 size={20} />
          </div>
          <span className="md:block hidden">DevRun-Tech</span>
          {/* Mobile Title */}
          <span className="md:hidden block text-lg font-bold">{getMobileTitle()}</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={(e) => { e.preventDefault(); openServices(); }} className="no-glow text-muted hover:text-main transition-colors text-sm font-medium border-none !shadow-none bg-transparent">Services</button>
          <button onClick={(e) => { e.preventDefault(); openProjects(); }} className="no-glow text-muted hover:text-main transition-colors text-sm font-medium border-none !shadow-none bg-transparent">Projects</button>
          <button onClick={(e) => { e.preventDefault(); openAbout(); }} className="no-glow text-muted hover:text-main transition-colors text-sm font-medium border-none !shadow-none bg-transparent">About</button>
          <button onClick={(e) => { e.preventDefault(); openContact(); }} className="no-glow text-muted hover:text-main transition-colors text-sm font-medium border-none !shadow-none bg-transparent">Contact</button>
          
          <div className="w-px h-4 bg-border mx-2" />

          <button 
            onClick={toggleTheme}
            className="no-glow p-2 rounded-full bg-surface hover:bg-surface-hover text-main transition-all border border-border !shadow-none bg-transparent"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button 
            onClick={openContact}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] border-none"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile Top Bar Controls */}
        <div className="md:hidden flex items-center gap-2">
           <button 
            onClick={openContact}
            className="no-glow p-2.5 rounded-full bg-surface border border-border text-main !shadow-none bg-transparent ripple"
          >
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;