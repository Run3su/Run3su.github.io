import React, { useEffect } from 'react';
import { Mail, MapPin, Phone, Send, X, MessageCircle } from 'lucide-react';

interface ContactProps {
  isOpen: boolean;
  onClose: () => void;
}

const Contact: React.FC<ContactProps> = ({ isOpen, onClose }) => {
  // Lock body scroll when modal is open
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

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-6xl bg-background border border-border rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="no-glow absolute top-6 right-6 z-20 p-2 rounded-full bg-surface hover:bg-surface-hover border border-border transition-colors text-muted hover:text-main !shadow-none bg-transparent"
        >
          <X size={20} />
        </button>

        <div className="relative bg-background transition-colors duration-300 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-900/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-900/10 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="p-6 md:p-16 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
              
              {/* Left Column: Info */}
              <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                <div className="inline-block bg-purple-900/10 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider mb-6 border border-purple-500/20">
                  CONTACT US
                </div>
                <h2 className="text-2xl md:text-5xl font-bold mb-6 text-main leading-tight">
                  Let's Build Something <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                    Extraordinary Together
                  </span>
                </h2>
                <p className="text-muted text-xs md:text-lg mb-8 md:mb-12 max-w-lg">
                  Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
                </p>

                <div className="space-y-6 md:space-y-8 w-full max-w-sm lg:max-w-none">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-purple-500 shrink-0">
                      <Mail size={20} />
                    </div>
                    <div className="text-center lg:text-left">
                      <h3 className="font-bold text-main mb-1 text-sm md:text-base">Chat with us</h3>
                      <p className="text-muted text-[10px] md:text-sm mb-1">Our friendly team is here to help.</p>
                      <div className="flex flex-col gap-1">
                        <a href="mailto:davrun92@gmail.com" className="text-purple-500 hover:text-purple-400 font-semibold transition-colors text-xs md:text-sm">davrun92@gmail.com</a>
                        <a 
                          href="https://wa.me/260968274201?text=Hello%20I%20would%20like%20to%20discuss%20a%20project"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center lg:justify-start gap-2 text-green-500 hover:text-green-400 font-semibold transition-colors text-xs md:text-sm"
                        >
                          <MessageCircle size={16} />
                          WhatsApp Support
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-purple-500 shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div className="text-center lg:text-left">
                      <h3 className="font-bold text-main mb-1 text-sm md:text-base">Visit us</h3>
                      <p className="text-muted text-[10px] md:text-sm mb-1">Come say hello at our office HQ.</p>
                      <p className="text-main font-medium text-xs md:text-sm">lusaka ridgeway 10101</p>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-purple-500 shrink-0">
                      <Phone size={20} />
                    </div>
                    <div className="text-center lg:text-left">
                      <h3 className="font-bold text-main mb-1 text-sm md:text-base">Call us</h3>
                      <p className="text-muted text-[10px] md:text-sm mb-1">Mon-Fri from 8am to 5pm.</p>
                      <a href="tel:+260968274201" className="text-purple-500 hover:text-purple-400 font-semibold transition-colors text-xs md:text-sm">+260 968 274201</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="bg-card border border-border p-6 md:p-10 rounded-3xl shadow-lg relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <form className="relative z-10 space-y-4 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-xs font-medium text-main">First name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        placeholder="Jane"
                        className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-background border border-border text-main placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-xs font-medium text-main">Last name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        placeholder="Doe"
                        className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-background border border-border text-main placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-medium text-main">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        placeholder="jane@example.com"
                        className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-background border border-border text-main placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs font-medium text-main">Phone number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        placeholder="+260..."
                        className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-background border border-border text-main placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-medium text-main">Message</label>
                    <textarea 
                      id="message" 
                      rows={3}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-background border border-border text-main placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all resize-none text-sm"
                    />
                  </div>

                  <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold py-3 md:py-4 rounded-xl shadow-lg shadow-purple-900/20 transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02] text-sm">
                    Send Message
                    <Send size={16} />
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;