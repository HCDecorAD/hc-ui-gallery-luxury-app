import React, { useState } from 'react';
import { Template } from '../data/templates';
import { Eye, Code2, ArrowUpRight, Star, ExternalLink, Sparkles } from 'lucide-react';

interface TemplateCardProps {
  template: Template;
  onOpenDetail: (template: Template) => void;
  onOpenLiveDemo: (template: Template) => void;
  onOpenViewSource: (template: Template) => void;
  onOpenQuote: (templateName: string) => void;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({
  template,
  onOpenDetail,
  onOpenLiveDemo,
  onOpenViewSource,
  onOpenQuote
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group bg-white rounded-lg border border-[#e8e0d5] hover:border-[#c9a96e]/70 transition-all duration-300 hover:shadow-[0_8px_30px_-6px_rgba(26,26,26,0.08)] flex flex-col h-full overflow-hidden relative">
      
      {/* Visual Preview Container */}
      <div 
        onClick={() => onOpenDetail(template)}
        className="relative aspect-[16/10] overflow-hidden bg-[#f4eee6] cursor-pointer"
      >
        {/* Prominent "Open-source source" Badge */}
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1a1a1a]/90 backdrop-blur-md border border-[#c9a96e]/50 shadow-sm pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e] animate-pulse" />
          <span className="text-[10px] uppercase tracking-wider font-mono font-semibold text-[#c9a96e]">
            Open-source source
          </span>
        </div>

        {/* Fallback container if image fails or while loading */}
        {(!imageLoaded || imageError) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#282828] text-[#faf8f5] p-6 text-center">
            <span className="font-serif text-lg font-medium text-[#c9a96e] mb-1">{template.name}</span>
            <span className="text-xs text-slate-400">{template.category}</span>
          </div>
        )}

        {!imageError && (
          <img
            src={template.imageUrl}
            alt={`${template.name} project artwork`}
            referrerPolicy="no-referrer"
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Hover overlay with Quick Actions */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="w-full flex items-center justify-between text-xs text-white">
            <span className="font-medium tracking-wide flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-[#c9a96e]" />
              Click to view details &amp; links
            </span>
            <span className="font-mono text-[#c9a96e] tabular-nums font-semibold">
              {template.priceEstimate.split('·')[0].trim()}
            </span>
          </div>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata Row: Category & Illustrative indicator */}
          <div className="flex items-center justify-between gap-2 text-xs text-[#525252] mb-1.5">
            <div className="flex items-center gap-1.5">
              <span className="font-medium text-[#c9a96e] tracking-wide uppercase text-[11px]">
                {template.category}
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-500 font-mono text-[11px]">Source available</span>
            </div>

            <div className="flex items-center gap-1 text-[11px] font-mono text-slate-600">
              <Code2 className="w-3 h-3 text-[#c9a96e]" />
              <span>OSS</span>
            </div>
          </div>

          {/* Template Title */}
          <h3 
            onClick={() => onOpenDetail(template)}
            className="font-serif text-lg sm:text-xl font-semibold text-[#1a1a1a] hover:text-[#c9a96e] transition-colors cursor-pointer leading-snug line-clamp-1"
          >
            {template.name}
          </h3>

          {/* Short Description */}
          <p className="mt-2 text-xs sm:text-sm text-[#525252] line-clamp-2 leading-relaxed">
            {template.description}
          </p>

          {/* Tech Stack tags */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {template.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono text-slate-600 bg-[#f4eee6]/80 px-2 py-0.5 rounded border border-[#e8e0d5]/60"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Direct URL references row */}
          <div className="mt-3 pt-2.5 border-t border-[#f0eae1] flex items-center justify-between text-[11px] font-mono text-slate-500">
            <a
              href={template.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c9a96e] transition-colors flex items-center gap-1 truncate max-w-[48%]"
              title={`Direct Demo URL: ${template.demoUrl}`}
            >
              <ExternalLink className="w-3 h-3 text-[#c9a96e] shrink-0" />
              <span className="truncate">Live Demo URL</span>
            </a>
            <a
              href={template.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c9a96e] transition-colors flex items-center gap-1 truncate max-w-[48%]"
              title={`Direct GitHub URL: ${template.sourceUrl}`}
            >
              <Code2 className="w-3 h-3 text-slate-400 shrink-0" />
              <span className="truncate">GitHub Repo</span>
            </a>
          </div>
        </div>

        {/* Action Button Row */}
        <div className="mt-4 pt-3 border-t border-[#e8e0d5] space-y-2">
          
          {/* Very prominent Gold "Báo giá" (Get Quote) CTA button */}
          <button
            onClick={() => {
              const supported = ['coreui', 'tabler', 'adminlte', 'shadcn', 'astro-cactus', 'commerce'];
              if (!supported.includes(template.id)) {
                window.open(template.sourceUrl, '_blank', 'noopener,noreferrer');
                return;
              }
              const defaultName = 'HC-' + template.id + '-App';
              const chosen = window.prompt('Tên APP mới trên HOCUONG (chữ, số, _ hoặc -):', defaultName);
              if (chosen === null) return;
              const safeName = chosen.trim();
              if (!/^[A-Za-z0-9_-]{3,60}$/.test(safeName)) {
                window.alert('Tên APP không hợp lệ. Dùng 3–60 ký tự: chữ, số, _ hoặc -.');
                return;
              }
              const command = 'D:\\HCDecorHUB\\HC-App-Builder.bat ' + template.id + ' ' + safeName + ' HCDecor';
              const message = 'Lệnh tạo APP đã sẵn sàng. Chạy trên HOCUONG (không tự chạy từ website):\\n' + command;
              if (navigator.clipboard?.writeText) {
                void navigator.clipboard.writeText(command)
                  .then(() => window.alert('Đã sao chép. ' + message))
                  .catch(() => window.prompt('Sao chép lệnh:', command));
              } else {
                window.prompt('Sao chép lệnh:', command);
              }
            }}
            className="w-full bg-[#c9a96e] hover:bg-[#b89555] active:scale-[0.98] text-[#1a1a1a] font-semibold text-xs sm:text-sm py-2.5 px-4 rounded shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#c9a96e]"
            aria-label={`Chuẩn bị lệnh tạo APP từ ${template.name}`}
          >
            <span>Tạo APP trên HOCUONG</span>
            <ArrowUpRight className="w-4 h-4 text-[#1a1a1a]" />
          </button>

          {/* Secondary Action Row: "Live Demo" and "View Source" */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onOpenLiveDemo(template)}
              className="py-1.5 px-2.5 text-xs font-medium text-[#1a1a1a] bg-[#faf8f5] hover:bg-[#e8e0d5]/70 border border-[#d3c7b7] rounded transition-colors flex items-center justify-center gap-1 cursor-pointer"
              title="Preview layout in gallery"
            >
              <Eye className="w-3.5 h-3.5 text-slate-600" />
              <span>Simulator</span>
            </button>

            <button
              onClick={() => window.open(template.sourceUrl, "_blank", "noopener,noreferrer")}
              className="py-1.5 px-2.5 text-xs font-medium text-[#1a1a1a] bg-[#faf8f5] hover:bg-[#e8e0d5]/70 border border-[#d3c7b7] rounded transition-colors flex items-center justify-center gap-1 cursor-pointer"
              title="Open original GitHub repository"
            >
              <Code2 className="w-3.5 h-3.5 text-slate-600" />
              <span>GitHub</span>
            </button>
          </div>

        </div>

      </div>

    </article>
  );
};
