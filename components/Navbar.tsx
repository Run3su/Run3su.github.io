
import React, { useState, useEffect } from 'react';
import { Code2, Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-main">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-1.5 rounded-lg text-white">
            <Code2 size={20} />
          </div>
          <span>DevRun-Tech</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-muted hover:text-main transition-colors text-sm font-medium">Services</a>
          <a href="#work" className="text-muted hover:text-main transition-colors text-sm font-medium">Work</a>
          <a href="#about" className="text-muted hover:text-main transition-colors text-sm font-medium">About</a>
          <a href="#contact" className="text-muted hover:text-main transition-colors text-sm font-medium">Contact</a>
          
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-surface hover:bg-surface-hover text-main transition-all border border-border"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]">
            Get in Touch
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-surface hover:bg-surface-hover text-main transition-all border border-border"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button 
            className="text-main"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface border-b border-border p-6 flex flex-col gap-4 shadow-2xl">
          <a href="#services" className="text-muted hover:text-main" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#work" className="text-muted hover:text-main" onClick={() => setIsMobileMenuOpen(false)}>Work</a>
          <a href="#about" className="text-muted hover:text-main" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#contact" className="text-muted hover:text-main" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium w-full">
            Get in Touch
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;