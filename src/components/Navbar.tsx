import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: (templateName?: string) => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#faf8f5]/90 backdrop-blur-md border-b border-[#e8e0d5] transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-8 h-16 sm:h-18">
          
          {/* Zone 1: Single text element wordmark */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button 
              onClick={() => handleNavClick('hero')} 
              className="text-left group flex items-center gap-1.5 sm:gap-2 cursor-pointer focus:outline-none"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-[#1a1a1a] text-[#c9a96e] flex items-center justify-center font-serif text-sm sm:text-lg font-bold border border-[#c9a96e]/30 group-hover:border-[#c9a96e] transition-colors shrink-0">
                HC
              </span>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-[#1a1a1a] whitespace-nowrap">
                  HCDecor <span className="text-[#c9a96e]">HUB</span>
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#525252]">
            <button
              onClick={() => handleNavClick('hero')}
              className={`hover:text-[#1a1a1a] transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer ${
                activeSection === 'hero' ? 'text-[#1a1a1a] font-semibold border-b-2 border-[#c9a96e]' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('templates')}
              className={`hover:text-[#1a1a1a] transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer ${
                activeSection === 'templates' ? 'text-[#1a1a1a] font-semibold border-b-2 border-[#c9a96e]' : ''
              }`}
            >
              Templates
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`hover:text-[#1a1a1a] transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer ${
                activeSection === 'about' ? 'text-[#1a1a1a] font-semibold border-b-2 border-[#c9a96e]' : ''
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`hover:text-[#1a1a1a] transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer ${
                activeSection === 'contact' ? 'text-[#1a1a1a] font-semibold border-b-2 border-[#c9a96e]' : ''
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => onOpenQuote()}
              className="bg-[#c9a96e] hover:bg-[#b89555] active:scale-[0.98] text-[#1a1a1a] font-bold text-xs sm:text-sm px-3 sm:px-5 py-2 sm:py-2.5 rounded shadow-sm transition-all duration-200 flex items-center gap-1 sm:gap-1.5 whitespace-nowrap cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-[#c9a96e]"
              aria-label="Request quotation"
            >
              <span>Báo giá</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1a1a1a]" />
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-[#1a1a1a] hover:bg-[#e8e0d5]/50 rounded focus:outline-none shrink-0"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf8f5] border-b border-[#e8e0d5] px-4 pt-3 pb-5 space-y-2 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => handleNavClick('hero')}
            className="w-full text-left py-2 px-3 rounded text-sm font-medium text-[#1a1a1a] hover:bg-[#e8e0d5]/40"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('templates')}
            className="w-full text-left py-2 px-3 rounded text-sm font-medium text-[#1a1a1a] hover:bg-[#e8e0d5]/40"
          >
            Templates Catalog (16)
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="w-full text-left py-2 px-3 rounded text-sm font-medium text-[#1a1a1a] hover:bg-[#e8e0d5]/40"
          >
            About HCDecor HUB
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="w-full text-left py-2 px-3 rounded text-sm font-medium text-[#1a1a1a] hover:bg-[#e8e0d5]/40"
          >
            Contact &amp; Consultation
          </button>
          
          {/* Prominent Báo Giá button inside mobile menu */}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-2.5 bg-[#c9a96e] hover:bg-[#b89555] text-[#1a1a1a] font-bold text-xs rounded shadow-sm flex items-center justify-center gap-1.5 transition-all"
            >
              <span>Yêu cầu báo giá ngay</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="pt-2 border-t border-[#e8e0d5]/60 flex items-center justify-between text-xs text-[#525252]">
            <span>Premium Modern Luxury Templates</span>
            <span className="font-serif text-[#c9a96e] font-semibold">HCDecor HUB</span>
          </div>
        </div>
      )}
    </header>
  );
};
