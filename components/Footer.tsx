import React from 'react';
import { Code2, Github, Twitter, Linkedin, Instagram, MessageCircle } from 'lucide-react';

interface FooterProps {
  openPrivacy: () => void;
  openTerms: () => void;
  openCookies: () => void;
}

const Footer: React.FC<FooterProps> = ({ openPrivacy, openTerms, openCookies }) => {
  const socialLinks = [
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Github size={20} />, href: "#", label: "GitHub" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { 
      icon: <MessageCircle size={20} />, 
      href: "https://wa.me/260968274201?text=Hello%20I%20would%20like%20to%20discuss%20a%20project", 
      label: "WhatsApp" 
    },
  ];

  return (
    <footer className="bg-surface py-12 border-t border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
               <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-1.5 rounded-lg text-white">
                  <Code2 size={24} />
               </div>
               <span className="font-bold text-xl tracking-tight text-main">DevRun-Tech</span>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-sm mb-6">
              Empowering forward-thinking businesses with cutting-edge digital products. We design, build, and scale the technology of tomorrow, one pixel at a time.
            </p>
          </div>

          {/* Column 2: Connect (Socials) */}
          <div>
            <h4 className="font-bold text-main mb-6 tracking-wide">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.label === "WhatsApp" ? "_blank" : "_self"}
                  rel={social.label === "WhatsApp" ? "noopener noreferrer" : ""}
                  className={`w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted hover:text-white transition-all duration-300 shadow-sm hover:-translate-y-1 ${
                    social.label === 'WhatsApp' ? 'hover:bg-green-500 hover:border-green-500' : 'hover:bg-purple-600 hover:border-purple-600'
                  }`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="font-bold text-main mb-6 tracking-wide">Legal</h4>
            <div className="flex flex-col gap-3 text-sm text-muted">
              <button onClick={openPrivacy} className="no-glow text-left hover:text-purple-500 transition-colors w-fit border-none !shadow-none p-0 bg-transparent">Privacy Policy</button>
              <button onClick={openTerms} className="no-glow text-left hover:text-purple-500 transition-colors w-fit border-none !shadow-none p-0 bg-transparent">Terms of Service</button>
              <button onClick={openCookies} className="no-glow text-left hover:text-purple-500 transition-colors w-fit border-none !shadow-none p-0 bg-transparent">Cookie Policy</button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
           <p>© 2024 DevRun-Tech. All rights reserved.</p>
           <p>Designed by RUNESU</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;