import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import ServicesPage from './components/ServicesPage';
import MobileNav from './components/MobileNav';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import Footer from './components/Footer';
import Inquiry from './components/Inquiry';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isCookiesOpen, setIsCookiesOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  // Modals that are full pages on desktop but might be different on mobile
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  const openAbout = () => setIsAboutOpen(true);
  const closeAbout = () => setIsAboutOpen(false);

  const openProjects = () => setIsProjectsOpen(true);
  const closeProjects = () => setIsProjectsOpen(false);

  const openServices = () => setIsServicesOpen(true);
  const closeServices = () => setIsServicesOpen(false);

  const openPrivacy = () => setIsPrivacyOpen(true);
  const closePrivacy = () => setIsPrivacyOpen(false);

  const openTerms = () => setIsTermsOpen(true);
  const closeTerms = () => setIsTermsOpen(false);

  const openCookies = () => setIsCookiesOpen(true);
  const closeCookies = () => setIsCookiesOpen(false);

  const openInquiry = () => setIsInquiryOpen(true);
  const closeInquiry = () => setIsInquiryOpen(false);

  // Mobile View Logic
  const renderMobileContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <Hero openContact={openInquiry} openProjects={openProjects} />
            <Process openInquiry={openInquiry} />
          </>
        );
      case 'services':
        return <Services />;
      case 'work':
        return <Projects isOpen={true} onClose={() => setActiveTab('home')} isInline={true} />;
      case 'more':
        return (
          <div className="pt-24 px-6 pb-24 animate-slide-up text-center">
            <h2 className="text-3xl font-bold mb-8">Settings & Info</h2>
            <div className="space-y-4">
              <button onClick={openAbout} className="w-full text-left p-4 bg-surface border border-border rounded-2xl flex items-center justify-between no-glow">
                <span className="font-medium">About DevRun-Tech</span>
                <span className="text-muted">→</span>
              </button>
              <button onClick={openInquiry} className="w-full text-left p-4 bg-surface border border-border rounded-2xl flex items-center justify-between no-glow">
                <span className="font-medium">Start a Project</span>
                <span className="text-muted">→</span>
              </button>
              <button onClick={openContact} className="w-full text-left p-4 bg-surface border border-border rounded-2xl flex items-center justify-between no-glow">
                <span className="font-medium">Direct Contact</span>
                <span className="text-muted">→</span>
              </button>
              <div className="h-px bg-border my-6" />
              <button onClick={openPrivacy} className="w-full text-left p-4 bg-surface/50 border border-border rounded-2xl text-sm text-muted no-glow">Privacy Policy</button>
              <button onClick={openTerms} className="w-full text-left p-4 bg-surface/50 border border-border rounded-2xl text-sm text-muted no-glow">Terms of Service</button>
              <button onClick={toggleTheme} className="w-full text-left p-4 bg-purple-600/10 border border-purple-500/20 rounded-2xl flex items-center justify-between no-glow">
                <span className="font-medium text-purple-500">Appearance</span>
                <span className="text-purple-500">{isDark ? 'Dark Mode' : 'Light Mode'}</span>
              </button>
            </div>
            <div className="mt-12 text-center text-xs text-muted">
              <p>© 2024 DevRun-Tech</p>
              <p>v2.1.0-android-stable</p>
            </div>
          </div>
        );
      default:
        return <Hero openContact={openInquiry} openProjects={openProjects} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-main selection:bg-purple-500 selection:text-white overflow-x-hidden transition-colors duration-300 pb-20 md:pb-0">
      
      <Header 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
        openContact={openInquiry} 
        openAbout={openAbout} 
        openProjects={openProjects}
        openServices={openServices}
        activeTab={activeTab}
      />

      <main className="hidden md:block">
        <Hero openContact={openInquiry} openProjects={openProjects} />
        <Services />
        <Process openInquiry={openInquiry} />
        <Footer 
          openPrivacy={openPrivacy} 
          openTerms={openTerms} 
          openCookies={openCookies} 
        />
      </main>

      <main className="block md:hidden">
        {renderMobileContent()}
      </main>

      <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />

      <Contact isOpen={isContactOpen} onClose={closeContact} />
      <Inquiry isOpen={isInquiryOpen} onClose={closeInquiry} onFinish={() => { setIsInquiryOpen(false); setIsContactOpen(true); }} />
      <About isOpen={isAboutOpen} onClose={closeAbout} />
      <Projects isOpen={isProjectsOpen} onClose={closeProjects} />
      <ServicesPage isOpen={isServicesOpen} onClose={closeServices} openContact={openInquiry} />
      <PrivacyPolicy isOpen={isPrivacyOpen} onClose={closePrivacy} />
      <TermsOfService isOpen={isTermsOpen} onClose={closeTerms} />
      <CookiePolicy isOpen={isCookiesOpen} onClose={closeCookies} />
    </div>
  );
};

export default App;