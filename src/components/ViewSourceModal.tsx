import React, { useState, useEffect } from 'react';
import { Template } from '../data/templates';
import { X, Copy, Check, FileCode, FolderGit2, Download, Terminal, CheckCircle2 } from 'lucide-react';

interface ViewSourceModalProps {
  template: Template | null;
  onClose: () => void;
  onOpenQuote: (templateName: string) => void;
}

export const ViewSourceModal: React.FC<ViewSourceModalProps> = ({
  template,
  onClose,
  onOpenQuote
}) => {
  const [selectedFileIndex, setSelectedFileIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  useEffect(() => {
    setSelectedFileIndex(0);
    setCopied(false);
    setDownloadSuccess(false);
  }, [template]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!template) return null;

  const currentFile = template.sampleCode[selectedFileIndex] || template.sampleCode[0];

  const handleCopyCode = () => {
    if (currentFile) {
      navigator.clipboard.writeText(currentFile.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleExportZip = () => {
    // Simulated export file download
    const element = document.createElement('a');
    const file = new Blob([currentFile.code], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${template.id}-starter.tsx`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-4xl bg-[#141416] text-[#faf8f5] rounded-xl border border-[#2d2d32] shadow-2xl overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#282828] bg-[#1a1a1c]">
          <div className="flex items-center gap-3">
            <FolderGit2 className="w-5 h-5 text-[#c9a96e]" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-base text-white">
                  hcdecor-hub / {template.id}
                </span>
                <span className="text-[10px] font-mono bg-[#282828] text-[#c9a96e] px-2 py-0.5 rounded border border-[#3a3a3a]">
                  Public Template
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5 font-mono">
                React 19 · Tailwind CSS v4 · TypeScript · Export ready
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={template.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-[#282828] hover:bg-[#333338] text-[#c9a96e] hover:text-[#b89555] rounded border border-[#3a3a3a] transition-colors cursor-pointer"
              title="Open GitHub source repository"
            >
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>GitHub Repo</span>
            </a>

            <button
              onClick={handleExportZip}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-[#282828] hover:bg-[#333338] text-slate-200 hover:text-white rounded border border-[#3a3a3a] transition-colors cursor-pointer"
              title="Download boilerplate starter"
            >
              <Download className="w-3.5 h-3.5 text-[#c9a96e]" />
              <span>Export Starter</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-[#282828] rounded-lg transition-colors cursor-pointer"
              aria-label="Close code modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Success Banner */}
        {downloadSuccess && (
          <div className="bg-emerald-950/70 border-b border-emerald-800/60 px-6 py-2.5 text-xs text-emerald-300 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Starter file <strong>{currentFile.filename}</strong> has been downloaded to your machine!</span>
            </div>
            <span className="font-mono text-[11px] text-emerald-400">Ready for npm install</span>
          </div>
        )}

        {/* Main Body with File Sidebar & Code Inspector */}
        <div className="grid grid-cols-1 md:grid-cols-4 min-h-[420px]">
          
          {/* File Explorer Tree */}
          <div className="border-r border-[#282828] bg-[#121214] p-4 space-y-4">
            <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#c9a96e]" />
              <span>Project Structure</span>
            </div>

            <div className="space-y-1">
              {template.sampleCode.map((file, idx) => (
                <button
                  key={file.filename}
                  onClick={() => setSelectedFileIndex(idx)}
                  className={`w-full text-left px-3 py-2 rounded text-xs font-mono flex items-center gap-2 transition-colors cursor-pointer ${
                    selectedFileIndex === idx
                      ? 'bg-[#c9a96e]/20 text-[#c9a96e] border border-[#c9a96e]/40 font-medium'
                      : 'text-slate-400 hover:text-white hover:bg-[#1a1a1c]'
                  }`}
                >
                  <FileCode className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{file.filename}</span>
                </button>
              ))}

              {/* Mock files in tree */}
              <div className="text-xs font-mono text-slate-500 px-3 py-1.5 flex items-center gap-2 opacity-60">
                <FileCode className="w-3.5 h-3.5" />
                <span>src/main.tsx</span>
              </div>
              <div className="text-xs font-mono text-slate-500 px-3 py-1.5 flex items-center gap-2 opacity-60">
                <FileCode className="w-3.5 h-3.5" />
                <span>src/index.css</span>
              </div>
              <div className="text-xs font-mono text-slate-500 px-3 py-1.5 flex items-center gap-2 opacity-60">
                <FileCode className="w-3.5 h-3.5" />
                <span>tsconfig.json</span>
              </div>
            </div>

            {/* Quick terminal tip */}
            <div className="p-3 bg-[#1a1a1c] rounded border border-[#282828] text-[11px] text-slate-400 font-mono space-y-1 mt-6">
              <span className="text-[#c9a96e] font-semibold block">Quick Setup:</span>
              <p className="text-slate-300">git clone hcdecor/{template.id}</p>
              <p className="text-slate-300">npm install &amp;&amp; npm run dev</p>
            </div>
          </div>

          {/* Code Viewer */}
          <div className="md:col-span-3 flex flex-col justify-between bg-[#0e0e10]">
            
            {/* Tab header bar with Copy action */}
            <div className="h-10 px-4 bg-[#18181c] border-b border-[#282828] flex items-center justify-between text-xs">
              <span className="font-mono text-slate-300 flex items-center gap-2">
                <FileCode className="w-3.5 h-3.5 text-[#c9a96e]" />
                {currentFile.filename}
              </span>

              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-[#c9a96e] bg-[#242429] hover:bg-[#2c2c33] px-2.5 py-1 rounded transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Snippet</span>
                  </>
                )}
              </button>
            </div>

            {/* Syntax preview box */}
            <pre className="p-5 font-mono text-xs text-slate-300 overflow-x-auto overflow-y-auto max-h-[380px] leading-relaxed select-text">
              <code>{currentFile.code}</code>
            </pre>

            {/* Bottom info */}
            <div className="p-4 bg-[#141416] border-t border-[#282828] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Zero legacy dependencies · Strict ESLint pass</span>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenQuote(template.name);
                }}
                className="bg-[#c9a96e] hover:bg-[#b89555] active:scale-[0.98] text-[#1a1a1a] font-semibold text-xs px-4 py-1.5 rounded transition-colors cursor-pointer"
              >
                Yêu cầu trọn bộ mã nguồn (Báo giá)
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
