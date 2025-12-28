import React, { useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CookiePolicy: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="relative w-full max-w-4xl bg-background border border-border rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        <button onClick={onClose} className="no-glow absolute top-6 right-6 z-20 p-2 rounded-full bg-surface hover:bg-surface-hover border border-border transition-colors text-muted hover:text-main !shadow-none">
          <X size={20} />
        </button>
        <div className="p-8 md:p-12 overflow-y-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
              <Cookie size={24} />
            </div>
            <h2 className="text-3xl font-bold text-main">Cookie Policy</h2>
          </div>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>Last updated: May 20, 2024</p>
            <section>
              <h3 className="text-xl font-bold text-main mb-3">1. What are Cookies?</h3>
              <p>Cookies are small text files that are placed on your device by websites that you visit. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.</p>
            </section>
            <section>
              <h3 className="text-xl font-bold text-main mb-3">2. How We Use Cookies</h3>
              <p>DevRun-Tech uses cookies to understand how you interact with our website, to remember your preferences (such as theme choice), and to analyze our traffic. This helps us provide you with a better experience.</p>
            </section>
            <section>
              <h3 className="text-xl font-bold text-main mb-3">3. Types of Cookies We Use</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the basic operation of the site (e.g., security, theme settings).</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with the site by collecting and reporting information anonymously.</li>
                <li><strong>Functional Cookies:</strong> Used to remember your preferences and provide enhanced features.</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-bold text-main mb-3">4. Managing Your Cookies</h3>
              <p>Most web browsers allow you to control cookies through their settings. You can choose to block all cookies, but please note that some parts of our website may not function correctly if you do so.</p>
            </section>
            <section>
              <h3 className="text-xl font-bold text-main mb-3">5. Third-Party Cookies</h3>
              <p>Some cookies are placed by third-party services that appear on our pages, such as Google Analytics. We do not control these third-party cookies.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;