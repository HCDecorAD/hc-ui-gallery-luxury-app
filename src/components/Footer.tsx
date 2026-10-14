import React from 'react';
import { ArrowUp, Github, Globe, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a1a1a] text-[#faf8f5] border-t border-[#282828] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#2d2d32]">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded bg-[#c9a96e] text-[#1a1a1a] flex items-center justify-center font-serif text-lg font-bold">
                HC
              </span>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                HCDecor <span className="text-[#c9a96e]">HUB</span>
              </span>
            </div>

            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#c9a96e]">
              Premium Modern Luxury Templates
            </p>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Curating and developing haute-couture website &amp; UI templates for forward-thinking studios, luxury brands, and product engineering teams.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-white tracking-wide uppercase">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-[#c9a96e] transition-colors cursor-pointer"
                >
                  Featured Curations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('templates')}
                  className="hover:text-[#c9a96e] transition-colors cursor-pointer"
                >
                  All 16 Templates
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#c9a96e] transition-colors cursor-pointer"
                >
                  Design Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#c9a96e] transition-colors cursor-pointer"
                >
                  Contact &amp; Atelier
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quotation & Services */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-white tracking-wide uppercase">
              Bespoke Service
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Tailored frontend implementation, custom design tokens, and technical deployment.
            </p>
            <button
              onClick={onOpenQuote}
              className="inline-block mt-2 px-4 py-2 bg-[#c9a96e] hover:bg-[#b89555] text-[#1a1a1a] text-xs font-semibold rounded transition-colors cursor-pointer"
            >
              Yêu cầu báo giá
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} HCDecor HUB. All rights reserved. Built with React 19 &amp; Tailwind CSS.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">
              Terms of Service
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-[#242428] hover:bg-[#2c2c30] text-slate-300 hover:text-[#c9a96e] transition-colors cursor-pointer flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px]">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
