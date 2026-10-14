import React from 'react';
import { Compass, Feather, ShieldCheck, Sparkles, ArrowUpRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#faf8f5] border-t border-[#e8e0d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#c9a96e]">
            Atelier Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1a1a1a] mt-3">
            Crafting Digital Elegance for Visionary Brands
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#525252] leading-relaxed">
            HCDecor HUB was born out of a desire to eliminate generic, cookie-cutter website designs. We engineer digital flagships with the precision of haute horlogerie and the tactile warmth of timeless editorial publications.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 bg-white rounded-xl border border-[#e8e0d5] space-y-4 hover:border-[#c9a96e]/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-[#f4eee6] text-[#c9a96e] flex items-center justify-center font-serif text-xl font-bold">
              01
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#1a1a1a]">
              Artisanal Typography
            </h3>
            <p className="text-xs sm:text-sm text-[#525252] leading-relaxed">
              Every curve of Playfair Display and Inter is paired with mathematical kerning, balanced line lengths, and optical compensation for effortless readability across high-density retina displays.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl border border-[#e8e0d5] space-y-4 hover:border-[#c9a96e]/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-[#f4eee6] text-[#c9a96e] flex items-center justify-center font-serif text-xl font-bold">
              02
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#1a1a1a]">
              Architectural Code Quality
            </h3>
            <p className="text-xs sm:text-sm text-[#525252] leading-relaxed">
              No bloated UI libraries. All 16 templates are crafted with native React 19, Tailwind CSS v4, and strict TypeScript. Clean component structures ready for seamless export and customization.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl border border-[#e8e0d5] space-y-4 hover:border-[#c9a96e]/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-[#f4eee6] text-[#c9a96e] flex items-center justify-center font-serif text-xl font-bold">
              03
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#1a1a1a]">
              White-Glove Support
            </h3>
            <p className="text-xs sm:text-sm text-[#525252] leading-relaxed">
              Need custom layout adaptations, proprietary branding integrations, or dedicated server deployment? Our founding architects provide direct consultation and quotes within 2 hours.
            </p>
          </div>

        </div>

        {/* Studio Showcase Card */}
        <div className="mt-16 bg-[#1a1a1a] text-[#faf8f5] rounded-2xl p-8 sm:p-12 border border-[#2d2d32] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#c9a96e] font-semibold">
              Bespoke Inquiries
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium">
              Ready to elevate your digital presence?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              Explore our full catalog or submit a custom requirement. We transform your concept into a luxury digital masterpiece.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="bg-[#c9a96e] hover:bg-[#b89555] active:scale-[0.98] text-[#1a1a1a] font-semibold text-xs sm:text-sm px-7 py-3.5 rounded shadow-lg transition-all flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>Nhận Báo Giá Dự Án</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
