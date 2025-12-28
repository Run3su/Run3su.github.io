import React, { useEffect } from 'react';
import { X, FileText } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfService: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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
              <FileText size={24} />
            </div>
            <h2 className="text-3xl font-bold text-main">Terms of Service</h2>
          </div>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>Last updated: May 20, 2024</p>
            <section>
              <h3 className="text-xl font-bold text-main mb-3">1. Acceptance of Terms</h3>
              <p>By accessing and using the services provided by DevRun-Tech, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.</p>
            </section>
            <section>
              <h3 className="text-xl font-bold text-main mb-3">2. Service Provision</h3>
              <p>DevRun-Tech provides digital product design and development services. The specific scope, timeline, and deliverables for each project will be outlined in a separate Statement of Work (SOW) or Service Agreement.</p>
            </section>
            <section>
              <h3 className="text-xl font-bold text-main mb-3">3. Intellectual Property</h3>
              <p>Unless otherwise agreed in writing, all intellectual property rights for custom-developed software or designs remain with DevRun-Tech until full payment is received, at which point ownership transfers to the client as per the project agreement.</p>
            </section>
            <section>
              <h3 className="text-xl font-bold text-main mb-3">4. Limitation of Liability</h3>
              <p>DevRun-Tech shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or any products developed by us.</p>
            </section>
            <section>
              <h3 className="text-xl font-bold text-main mb-3">5. Governing Law</h3>
              <p>These terms shall be governed by and construed in accordance with the laws of Zambia. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in Lusaka.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;