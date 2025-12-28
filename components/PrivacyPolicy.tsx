import React, { useEffect } from 'react';
import { X, Shield } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicy: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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
              <Shield size={24} />
            </div>
            <h2 className="text-3xl font-bold text-main">Privacy Policy</h2>
          </div>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>Last updated: May 20, 2024</p>
            <section>
              <h3 className="text-xl font-bold text-main mb-3">1. Information We Collect</h3>
              <p>At DevRun-Tech, we collect information that you provide directly to us through our contact form, including your name, email address, phone number, and project details. We may also collect technical data like IP addresses and browsing behavior for analytics purposes.</p>
            </section>
            <section>
              <h3 className="text-xl font-bold text-main mb-3">2. How We Use Your Information</h3>
              <p>Your information is primarily used to respond to your inquiries, provide project quotes, and improve our service offerings. We do not sell or share your personal data with third parties for marketing purposes.</p>
            </section>
            <section>
              <h3 className="text-xl font-bold text-main mb-3">3. Data Security</h3>
              <p>We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.</p>
            </section>
            <section>
              <h3 className="text-xl font-bold text-main mb-3">4. Your Rights</h3>
              <p>You have the right to access, update, or delete your personal information held by us. To exercise these rights, please contact us at davrun92@gmail.com.</p>
            </section>
            <section>
              <h3 className="text-xl font-bold text-main mb-3">5. Changes to This Policy</h3>
              <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;