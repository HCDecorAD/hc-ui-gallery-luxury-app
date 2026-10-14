import React, { useEffect, useState } from 'react';
import { Template } from '../data/templates';
import { X, Check, ArrowUpRight, Eye, Code2, Star, Calendar, Shield, Cpu, ExternalLink, AlertCircle, Copy } from 'lucide-react';

interface TemplateDetailModalProps {
  template: Template | null;
  onClose: () => void;
  onOpenQuote: (templateName: string) => void;
  onOpenLiveDemo: (template: Template) => void;
  onOpenViewSource: (template: Template) => void;
}

export const TemplateDetailModal: React.FC<TemplateDetailModalProps> = ({
  template,
  onClose,
  onOpenQuote,
  onOpenLiveDemo,
  onOpenViewSource
}) => {
  const [imageError, setImageError] = useState(false);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!template) return null;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(label);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      
      {/* Modal Dialog Container */}
      <div 
        className="relative w-full max-w-4xl bg-[#faf8f5] rounded-xl border border-[#d3c7b7] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e8e0d5] bg-white">
          <div className="flex items-center gap-2 text-xs text-[#525252]">
            <span className="font-semibold text-[#c9a96e] uppercase tracking-wider">{template.category}</span>
            <span>·</span>
            <span className="px-2 py-0.5 rounded bg-[#f4eee6] border border-[#e8e0d5] text-[#1a1a1a] font-mono text-[11px] font-medium">
              Illustrative Template
            </span>
            <span>·</span>
            <span className="font-mono">v{template.version}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-500 hover:text-[#1a1a1a] hover:bg-[#e8e0d5]/50 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice Banner */}
        <div className="bg-[#f7f3eb] px-6 py-2.5 border-b border-[#e8e0d5] text-xs text-[#525252] flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-[#c9a96e] shrink-0" />
          <span>
            <strong>Illustrative Template Notice:</strong> This architectural concept demonstrates layout, performance, and typography. Production deployment and custom assets are delivered upon quotation approval.
          </span>
        </div>

        {/* Modal Scrollable Body */}
        <div className="max-h-[75vh] overflow-y-auto p-6 sm:p-8">
          
          {/* Top Preview Image */}
          <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-[#e8e0d5] bg-[#1a1a1a]">
            {!imageError ? (
              <img
                src={template.detailImageUrl || template.imageUrl}
                alt={`${template.name} full preview`}
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
                <p className="font-serif text-2xl text-[#c9a96e]">{template.name}</p>
                <p className="text-xs text-slate-400 mt-1">{template.tagline}</p>
              </div>
            )}

            {/* Floating Quick Action overlay in corner */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              <button
                onClick={() => onOpenLiveDemo(template)}
                className="bg-[#1a1a1a]/85 backdrop-blur-md hover:bg-[#1a1a1a] text-white text-xs font-medium px-3.5 py-2 rounded shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Eye className="w-4 h-4 text-[#c9a96e]" />
                <span>Launch Interactive Simulator</span>
              </button>
            </div>
          </div>

          {/* Title & Metadata Strip */}
          <div className="mt-6 flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-[#e8e0d5] pb-6">
            <div>
              <div className="flex items-center gap-2.5">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a1a]">
                  {template.name}
                </h2>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#c9a96e] border border-[#c9a96e]/40 px-2 py-0.5 rounded bg-[#f4eee6]">
                  Demo Template
                </span>
              </div>
              <p className="text-sm sm:text-base text-[#525252] mt-1 font-light italic">
                "{template.tagline}"
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="text-xs text-slate-500 block">Commercial License</span>
                <span className="font-mono font-bold text-lg text-[#1a1a1a] tabular-nums">
                  {template.priceEstimate.split('·')[0].trim()}
                </span>
              </div>

              {/* Prominent Báo Giá button */}
              <button
                onClick={() => {
                  onClose();
                  onOpenQuote(template.name);
                }}
                className="bg-[#c9a96e] hover:bg-[#b89555] active:scale-[0.98] text-[#1a1a1a] font-semibold text-sm px-6 py-2.5 rounded shadow-sm transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <span>Báo giá ngay</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* URL & Repository Reference Strip */}
          <div className="mt-4 p-4 bg-white rounded-lg border border-[#e8e0d5] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div className="flex items-center justify-between p-2.5 bg-[#faf8f5] rounded border border-[#e8e0d5]">
              <div className="min-w-0 pr-2">
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Live Demo Link</span>
                <a 
                  href={template.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#1a1a1a] hover:text-[#c9a96e] truncate block underline decoration-slate-300"
                >
                  {template.demoUrl}
                </a>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={() => copyToClipboard(template.demoUrl, 'demo')}
                  className="p-1.5 hover:bg-[#e8e0d5] rounded text-slate-500 transition-colors"
                  title="Copy link"
                >
                  {copiedLink === 'demo' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
                <a
                  href={template.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 hover:bg-[#e8e0d5] rounded text-[#c9a96e]"
                  title="Open demo"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="flex items-center justify-between p-2.5 bg-[#faf8f5] rounded border border-[#e8e0d5]">
              <div className="min-w-0 pr-2">
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">GitHub Source Repository</span>
                <a 
                  href={template.sourceUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#1a1a1a] hover:text-[#c9a96e] truncate block underline decoration-slate-300"
                >
                  {template.sourceUrl}
                </a>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={() => copyToClipboard(template.sourceUrl, 'source')}
                  className="p-1.5 hover:bg-[#e8e0d5] rounded text-slate-500 transition-colors"
                  title="Copy link"
                >
                  {copiedLink === 'source' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
                <a
                  href={template.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 hover:bg-[#e8e0d5] rounded text-[#c9a96e]"
                  title="Open GitHub"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Grid: Description & Features */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left 2 Cols: Comprehensive Overview & Features */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="font-serif text-lg font-semibold text-[#1a1a1a] mb-2">
                  Architectural Overview
                </h3>
                <p className="text-sm text-[#525252] leading-relaxed">
                  {template.fullDescription}
                </p>
              </div>

              <div>
                <h3 className="font-serif text-lg font-semibold text-[#1a1a1a] mb-3">
                  Key Architectural Features
                </h3>
                <ul className="space-y-2.5">
                  {template.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#525252]">
                      <div className="w-5 h-5 rounded-full bg-[#c9a96e]/20 text-[#c9a96e] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right 1 Col: Tech Stack & Specifications */}
            <div className="bg-white p-5 rounded-lg border border-[#e8e0d5] space-y-5 h-fit">
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-2 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-[#c9a96e]" />
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {template.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-[#1a1a1a] bg-[#faf8f5] px-2.5 py-1 rounded border border-[#e8e0d5]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#e8e0d5] pt-4 text-xs space-y-2 text-[#525252]">
                <div className="flex justify-between">
                  <span>Client Rating:</span>
                  <span className="font-mono font-medium text-[#1a1a1a] flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-[#c9a96e] text-[#c9a96e]" />
                    {template.rating} / 5.0 ({template.reviewsCount} reviews)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Classification:</span>
                  <span className="font-mono text-[#c9a96e] font-semibold">Illustrative Template</span>
                </div>
                <div className="flex justify-between">
                  <span>Accessibility:</span>
                  <span className="font-mono">WCAG 2.1 AA Compliant</span>
                </div>
                <div className="flex justify-between">
                  <span>Production Ready:</span>
                  <span className="font-mono text-emerald-700">TypeScript 100%</span>
                </div>
              </div>

              <div className="border-t border-[#e8e0d5] pt-4 space-y-2">
                <button
                  onClick={() => onOpenLiveDemo(template)}
                  className="w-full py-2 px-3 text-xs font-medium text-[#1a1a1a] bg-[#faf8f5] hover:bg-[#e8e0d5]/60 border border-[#d3c7b7] rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-[#c9a96e]" />
                  <span>Test-Drive Live Demo</span>
                </button>

                <button
                  onClick={() => onOpenViewSource(template)}
                  className="w-full py-2 px-3 text-xs font-medium text-[#1a1a1a] bg-[#faf8f5] hover:bg-[#e8e0d5]/60 border border-[#d3c7b7] rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Code2 className="w-4 h-4 text-[#c9a96e]" />
                  <span>Inspect Source Code</span>
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* Modal Footer Bar */}
        <div className="px-6 py-4 bg-[#f4eee6]/50 border-t border-[#e8e0d5] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#525252]">
            Need custom design adaptions or full-stack deployment? Our architects respond in &lt; 2 hours.
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#525252] hover:text-[#1a1a1a] cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenQuote(template.name);
              }}
              className="bg-[#c9a96e] hover:bg-[#b89555] active:scale-[0.98] text-[#1a1a1a] font-semibold text-xs px-5 py-2 rounded shadow-sm transition-all flex items-center gap-1 cursor-pointer"
            >
              <span>Yêu cầu báo giá</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
