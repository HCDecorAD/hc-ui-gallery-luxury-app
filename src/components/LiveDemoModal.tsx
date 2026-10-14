import React, { useState, useEffect } from 'react';
import { Template } from '../data/templates';
import { X, Monitor, Tablet, Smartphone, Moon, Sun, ArrowUpRight, RotateCcw, Check, Sparkles } from 'lucide-react';

interface LiveDemoModalProps {
  template: Template | null;
  onClose: () => void;
  onOpenQuote: (templateName: string) => void;
}

export const LiveDemoModal: React.FC<LiveDemoModalProps> = ({
  template,
  onClose,
  onOpenQuote
}) => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'preview'>('preview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!template) return null;

  const deviceWidthClass = {
    desktop: 'w-full max-w-5xl',
    tablet: 'w-full max-w-[768px]',
    mobile: 'w-full max-w-[390px]'
  }[device];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex flex-col animate-in fade-in duration-200">
      
      {/* Top Demo Controller Bar */}
      <div className="sticky top-0 z-30 h-16 bg-[#1a1a1a] border-b border-[#282828] px-4 sm:px-6 flex items-center justify-between gap-4 text-white">
        
        {/* Left: Template info */}
        <div className="flex items-center gap-3 min-w-0">
          <span className="w-7 h-7 rounded bg-[#c9a96e] text-[#1a1a1a] flex items-center justify-center font-serif text-xs font-bold shrink-0">
            HC
          </span>
          <div className="truncate">
            <h3 className="font-serif text-sm sm:text-base font-semibold truncate text-[#faf8f5]">
              {template.name}
            </h3>
            <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
              Interactive Preview Engine · {template.category}
            </span>
          </div>
        </div>

        {/* Center: Device Breakpoint Switcher */}
        <div className="flex items-center bg-[#282828] p-1 rounded-lg border border-[#3a3a3a]">
          <button
            onClick={() => setDevice('desktop')}
            className={`p-1.5 rounded transition-colors cursor-pointer ${
              device === 'desktop' ? 'bg-[#c9a96e] text-[#1a1a1a]' : 'text-slate-400 hover:text-white'
            }`}
            title="Desktop Baseline (1440px)"
          >
            <Monitor className="w-4 h-4" />
          </button>
          <button
            onClick={() => setDevice('tablet')}
            className={`p-1.5 rounded transition-colors cursor-pointer ${
              device === 'tablet' ? 'bg-[#c9a96e] text-[#1a1a1a]' : 'text-slate-400 hover:text-white'
            }`}
            title="Tablet View (768px)"
          >
            <Tablet className="w-4 h-4" />
          </button>
          <button
            onClick={() => setDevice('mobile')}
            className={`p-1.5 rounded transition-colors cursor-pointer ${
              device === 'mobile' ? 'bg-[#c9a96e] text-[#1a1a1a]' : 'text-slate-400 hover:text-white'
            }`}
            title="Mobile Touch (390px)"
          >
            <Smartphone className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded hover:bg-[#282828] text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Toggle theme preview"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-[#c9a96e]" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenQuote(template.name);
            }}
            className="bg-[#c9a96e] hover:bg-[#b89555] active:scale-[0.98] text-[#1a1a1a] font-semibold text-xs px-3.5 sm:px-4 py-2 rounded shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>Báo giá mẫu này</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-[#282828] rounded transition-colors cursor-pointer"
            aria-label="Exit live demo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

      </div>

      {/* Simulator Viewport Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-8 flex items-start justify-center bg-[#0d0d0f]">
        
        {/* Device Bezel Box */}
        <div 
          className={`${deviceWidthClass} transition-all duration-300 rounded-xl overflow-hidden border border-[#2a2a2e] shadow-2xl ${
            isDarkMode ? 'bg-[#141416] text-[#faf8f5]' : 'bg-[#faf8f5] text-[#1a1a1a]'
          }`}
        >
          {/* Mock Browser URL Bar */}
          <div className="h-9 px-4 bg-[#1f1f23] border-b border-[#2d2d32] flex items-center justify-between text-xs text-slate-400 select-none">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>

            <a
              href={template.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#141416] hover:bg-[#1a1a1f] px-4 py-0.5 rounded-md border border-[#2d2d32] hover:border-[#c9a96e]/50 text-[11px] font-mono text-slate-300 hover:text-[#c9a96e] truncate max-w-[340px] flex items-center gap-1.5 transition-colors"
              title="Open direct live demo link in new tab"
            >
              <span className="truncate">{template.demoUrl}</span>
              <span className="text-[10px] text-[#c9a96e]">↗</span>
            </a>

            <div className="font-mono text-[10px] text-slate-500">
              {device === 'desktop' ? '1440 × 900' : device === 'tablet' ? '768 × 1024' : '390 × 844'}
            </div>
          </div>

          {/* Interactive Mock Template View */}
          <div className="min-h-[600px] flex flex-col justify-between">
            
            {/* Mock Header */}
            <header className={`h-16 px-6 border-b flex items-center justify-between ${
              isDarkMode ? 'border-[#282828] bg-[#141416]/90' : 'border-[#e8e0d5] bg-white/90'
            }`}>
              <div className="font-serif font-bold text-lg tracking-tight">
                {template.name}
              </div>
              <div className="hidden sm:flex items-center gap-6 text-xs text-slate-400">
                <span>Collections</span>
                <span>Experience</span>
                <span>Philosophy</span>
                <span>Inquiry</span>
              </div>
              <button className="px-3.5 py-1.5 text-xs font-semibold rounded bg-[#c9a96e] text-[#1a1a1a]">
                Explore
              </button>
            </header>

            {/* Mock Hero Section */}
            <div className="p-8 sm:p-14 text-center max-w-3xl mx-auto space-y-6">
              <div className="inline-block text-[11px] uppercase tracking-widest text-[#c9a96e] font-semibold">
                Haute Digital Experience · {template.category}
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight leading-tight">
                {template.demoTheme.headline}
              </h1>

              <p className={`text-sm sm:text-base leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {template.demoTheme.subheadline}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button className="px-6 py-2.5 bg-[#c9a96e] text-[#1a1a1a] text-xs font-semibold tracking-wider uppercase rounded shadow hover:bg-[#b89555] transition-colors">
                  View Case Study
                </button>
                <button className={`px-6 py-2.5 text-xs font-medium tracking-wider uppercase rounded border transition-colors ${
                  isDarkMode ? 'border-[#2d2d32] text-white hover:bg-[#1f1f23]' : 'border-[#d3c7b7] text-[#1a1a1a] hover:bg-[#e8e0d5]/40'
                }`}>
                  Interactive Specs
                </button>
              </div>
            </div>

            {/* Mock High-Res Visual Section */}
            <div className="p-6 sm:p-10">
              <div className="aspect-[16/8] rounded-lg overflow-hidden border border-[#2d2d32] relative group">
                <img
                  src={template.imageUrl}
                  alt={template.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#c9a96e] font-semibold">
                      Curated Architecture
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-white mt-1">
                      {template.tagline}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Mock Features Strip */}
            <div className={`p-6 sm:p-8 border-t ${
              isDarkMode ? 'border-[#282828] bg-[#18181c]' : 'border-[#e8e0d5] bg-[#f4eee6]/50'
            }`}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                {template.features.slice(0, 3).map((feat, i) => (
                  <div key={i} className="space-y-1">
                    <span className="font-mono text-xs text-[#c9a96e]">0{i + 1}.</span>
                    <p className="text-xs font-medium text-slate-300">{feat}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mock Footer */}
            <div className={`py-4 px-6 border-t text-center text-[11px] text-slate-500 ${
              isDarkMode ? 'border-[#282828] bg-[#121214]' : 'border-[#e8e0d5] bg-white'
            }`}>
              {template.name} · Designed for HCDecor HUB · Pure React 19 + Tailwind CSS
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
