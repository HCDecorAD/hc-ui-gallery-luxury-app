import React from 'react';
import { Search, X, Sparkles, ShieldCheck, Code, Zap } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectCategory: (category: any) => void;
  totalTemplates: number;
  filteredCount: number;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  onSearchChange,
  onSelectCategory,
  totalTemplates,
  filteredCount
}) => {
  const quickTags = ['Luxury Websites', 'Dashboards', 'E-commerce', 'Mobile Apps'];

  return (
    <section id="hero" className="relative pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-[#faf8f5] via-[#faf8f5] to-[#f4eee6]/50 border-b border-[#e8e0d5]">
      {/* Subtle luxury ambient pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Quiet Kicker (Zero-Pill discipline: unboxed text with subtle separator) */}
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#c9a96e] mb-4">
          <span>HCDecor HUB</span>
          <span aria-hidden="true">·</span>
          <span>Bespoke Digital Atelier</span>
          <span aria-hidden="true">·</span>
          <span>2026 Collection</span>
        </div>

        {/* Hero Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1a1a1a] leading-[1.15] text-balance max-w-3xl mx-auto">
          Discover Premium <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#1a1a1a]">Website & UI Templates</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg text-[#525252] max-w-2xl mx-auto leading-relaxed font-light">
          HCDecor HUB curates production-ready, haute-couture digital templates engineered with React 19, Tailwind CSS, and uncompromising architectural refinement.
        </p>

        {/* Prominent Search Bar */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="relative flex items-center bg-white rounded-lg border border-[#d3c7b7] shadow-[0_4px_20px_-4px_rgba(26,26,26,0.06)] focus-within:border-[#c9a96e] focus-within:ring-2 focus-within:ring-[#c9a96e]/20 transition-all p-1.5 sm:p-2">
            <div className="pl-3 pr-2 text-[#525252]">
              <Search className="w-5 h-5 text-[#c9a96e]" />
            </div>
            
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by template name, stack, or category (e.g. Noire, Luxury, Dashboard)..."
              className="w-full bg-transparent border-0 text-sm sm:text-base text-[#1a1a1a] placeholder:text-[#525252]/60 focus:outline-none py-2"
              aria-label="Search website templates"
            />

            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="p-1.5 text-slate-400 hover:text-[#1a1a1a] rounded transition-colors mr-1 cursor-pointer"
                title="Clear search"
                aria-label="Clear search input"
              >
                <X className="w-4 h-4" />
              </button>
            )}

            <div className="hidden sm:flex items-center gap-1.5 pr-2 pl-3 border-l border-[#e8e0d5] text-xs font-mono text-[#525252] whitespace-nowrap">
              <span>{filteredCount}</span>
              <span>/</span>
              <span>{totalTemplates} templates</span>
            </div>
          </div>

          {/* Quick search suggestions */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-[#525252]">
            <span className="text-[#525252]/80">Popular:</span>
            {quickTags.map((tag) => (
              <button
                key={tag}
                onClick={() => onSelectCategory(tag)}
                className="text-[#1a1a1a] hover:text-[#c9a96e] transition-colors underline decoration-[#c9a96e]/40 hover:decoration-[#c9a96e] underline-offset-4 cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Quantitative Proof Strip (Claim-to-proof adjacency) */}
        <div className="mt-12 pt-8 border-t border-[#e8e0d5]/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div className="p-3">
            <p className="font-serif text-2xl sm:text-3xl font-semibold text-[#1a1a1a] tabular-nums">16</p>
            <p className="text-xs text-[#525252] mt-0.5 uppercase tracking-wider">Curated Designs</p>
          </div>
          <div className="p-3">
            <p className="font-serif text-2xl sm:text-3xl font-semibold text-[#1a1a1a] tabular-nums">100%</p>
            <p className="text-xs text-[#525252] mt-0.5 uppercase tracking-wider">React 19 & Tailwind</p>
          </div>
          <div className="p-3">
            <p className="font-serif text-2xl sm:text-3xl font-semibold text-[#1a1a1a] tabular-nums">&lt; 2h</p>
            <p className="text-xs text-[#525252] mt-0.5 uppercase tracking-wider">Báo giá Response</p>
          </div>
          <div className="p-3">
            <p className="font-serif text-2xl sm:text-3xl font-semibold text-[#1a1a1a] tabular-nums">0%</p>
            <p className="text-xs text-[#525252] mt-0.5 uppercase tracking-wider">Vendor Lock-In</p>
          </div>
        </div>

      </div>
    </section>
  );
};
