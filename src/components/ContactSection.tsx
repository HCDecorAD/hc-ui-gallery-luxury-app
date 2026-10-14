import React from 'react';
import { Mail, Phone, MapPin, Clock, ArrowUpRight, MessageSquare, ShieldCheck } from 'lucide-react';

interface ContactSectionProps {
  onOpenQuote: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#f4eee6]/60 border-t border-[#e8e0d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#c9a96e]">
            Direct Concierge
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1a1a1a] mt-3">
            Contact &amp; Custom Consultation
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#525252] leading-relaxed">
            Have questions regarding licensing, bespoke modifications, or enterprise deployment? Our technical team is at your disposal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Email */}
          <div className="p-6 sm:p-8 bg-white rounded-xl border border-[#e8e0d5] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#faf8f5] border border-[#e8e0d5] flex items-center justify-center text-[#c9a96e]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-[#1a1a1a]">Email Inquiries</h3>
                <p className="text-xs text-[#525252] mt-1">For quotes, partnerships, and technical questions.</p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-[#e8e0d5]">
              <a 
                href="mailto:huycuongonline@gmail.com" 
                className="text-xs sm:text-sm font-mono text-[#1a1a1a] hover:text-[#c9a96e] font-medium transition-colors"
              >
                huycuongonline@gmail.com
              </a>
            </div>
          </div>

          {/* Card 2: Hotline */}
          <div className="p-6 sm:p-8 bg-white rounded-xl border border-[#e8e0d5] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#faf8f5] border border-[#e8e0d5] flex items-center justify-center text-[#c9a96e]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-[#1a1a1a]">Hotline &amp; Zalo</h3>
                <p className="text-xs text-[#525252] mt-1">Direct voice and chat assistance for urgent projects.</p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-[#e8e0d5]">
              <span className="text-xs sm:text-sm font-mono text-[#1a1a1a] font-medium">
                (+84) 908 123 456
              </span>
            </div>
          </div>

          {/* Card 3: Hours & Studio */}
          <div className="p-6 sm:p-8 bg-white rounded-xl border border-[#e8e0d5] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#faf8f5] border border-[#e8e0d5] flex items-center justify-center text-[#c9a96e]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-[#1a1a1a]">Studio Schedule</h3>
                <p className="text-xs text-[#525252] mt-1">HCDecor HUB Atelier, District 1, Ho Chi Minh City.</p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-[#e8e0d5] text-xs text-[#525252]">
              <span>Mon – Sat: 08:00 – 19:00 ICT</span>
            </div>
          </div>

        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#c9a96e] hover:bg-[#b89555] active:scale-[0.98] text-[#1a1a1a] font-semibold text-sm rounded shadow-sm transition-all cursor-pointer"
          >
            <span>Mở Form Yêu Cầu Báo Giá Nhanh</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
