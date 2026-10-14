import React, { useState, useEffect } from 'react';
import { TEMPLATES } from '../data/templates';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Clock, Send, Sparkles } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTemplateName?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialTemplateName
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(initialTemplateName || TEMPLATES[0].name);
  const [serviceType, setServiceType] = useState('template-purchase');
  const [budgetTier, setBudgetTier] = useState('under-500');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // Update selected template when initialTemplateName changes
  useEffect(() => {
    if (initialTemplateName) {
      setSelectedTemplate(initialTemplateName);
    }
  }, [initialTemplateName]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate random luxury quote reference ID
    const randomRef = `HC-Q${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(randomRef);

    // Simulate clean, instant client processing without external lag
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-xl bg-[#faf8f5] rounded-xl border border-[#d3c7b7] shadow-2xl overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e8e0d5] bg-white">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-[#1a1a1a] text-[#c9a96e] flex items-center justify-center font-serif text-xs font-bold">
              HC
            </span>
            <h3 className="font-serif text-lg font-bold text-[#1a1a1a]">
              Yêu Cầu Báo Giá &amp; Tư Vấn
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-500 hover:text-[#1a1a1a] hover:bg-[#e8e0d5]/50 rounded-lg transition-colors cursor-pointer"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8">
          
          {isSubmitted ? (
            /* Confirmation Success Screen */
            <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-[#c9a96e]/15 text-[#c9a96e] rounded-full flex items-center justify-center mx-auto border border-[#c9a96e]/40">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#c9a96e] font-semibold">
                  Yêu Cầu Đã Được Tiếp Nhận
                </span>
                <h4 className="font-serif text-2xl font-bold text-[#1a1a1a] mt-1">
                  Cảm ơn Quý Khách, {fullName || 'Quý Khách'}!
                </h4>
                <p className="text-sm text-[#525252] mt-2 max-w-md mx-auto">
                  Hệ thống HCDecor HUB đã ghi nhận thông tin yêu cầu báo giá cho mẫu{' '}
                  <strong className="text-[#1a1a1a] font-semibold">"{selectedTemplate}"</strong>.
                </p>
              </div>

              {/* Reference Card */}
              <div className="p-4 bg-white rounded-lg border border-[#e8e0d5] text-left text-xs space-y-2 max-w-sm mx-auto shadow-sm">
                <div className="flex justify-between border-b border-[#e8e0d5] pb-2">
                  <span className="text-slate-500">Mã tham chiếu:</span>
                  <span className="font-mono font-bold text-[#1a1a1a]">{referenceId}</span>
                </div>
                <div className="flex justify-between border-b border-[#e8e0d5] pb-2">
                  <span className="text-slate-500">Mẫu quan tâm:</span>
                  <span className="font-medium text-[#1a1a1a]">{selectedTemplate}</span>
                </div>
                <div className="flex justify-between border-b border-[#e8e0d5] pb-2">
                  <span className="text-slate-500">Email phản hồi:</span>
                  <span className="font-mono text-slate-700">{email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Thời gian phản hồi:</span>
                  <span className="font-medium text-[#c9a96e]">Trong vòng 2 giờ làm việc</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={resetForm}
                  className="w-full sm:w-auto px-4 py-2.5 text-xs font-medium text-[#525252] hover:text-[#1a1a1a] transition-colors cursor-pointer"
                >
                  Gửi yêu cầu mẫu khác
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#1a1a1a] text-white hover:bg-[#282828] text-xs font-semibold rounded shadow-sm transition-colors cursor-pointer"
                >
                  Hoàn tất &amp; Đóng
                </button>
              </div>
            </div>
          ) : (
            /* Quotation Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="bg-[#f4eee6]/60 p-3 rounded border border-[#e8e0d5] text-xs text-[#525252] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#c9a96e] shrink-0" />
                <span>
                  Đội ngũ kỹ sư HCDecor HUB cung cấp bảng báo giá chi tiết, mã nguồn demo và lộ trình tùy biến trong vòng 2 giờ.
                </span>
              </div>

              {/* Template Selection Dropdown */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#1a1a1a] mb-1.5">
                  Mẫu Giao Diện Bạn Quan Tâm <span className="text-[#c9a96e]">*</span>
                </label>
                <select
                  value={selectedTemplate}
                  onChange={(e) => setSelectedTemplate(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#d3c7b7] rounded-lg text-sm text-[#1a1a1a] focus:outline-none focus:border-[#c9a96e] focus:ring-1 focus:ring-[#c9a96e] cursor-pointer"
                  required
                >
                  {TEMPLATES.map((tmpl) => (
                    <option key={tmpl.id} value={tmpl.name}>
                      {tmpl.name} ({tmpl.category}) — {tmpl.priceEstimate.split('·')[0].trim()}
                    </option>
                  ))}
                </select>
              </div>

              {/* Two columns: Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#1a1a1a] mb-1.5">
                    Họ và Tên <span className="text-[#c9a96e]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#d3c7b7] rounded-lg text-sm text-[#1a1a1a] placeholder:text-slate-400 focus:outline-none focus:border-[#c9a96e] focus:ring-1 focus:ring-[#c9a96e]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#1a1a1a] mb-1.5">
                    Số Điện Thoại / Zalo <span className="text-[#c9a96e]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0908 123 456"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#d3c7b7] rounded-lg text-sm text-[#1a1a1a] placeholder:text-slate-400 focus:outline-none focus:border-[#c9a96e] focus:ring-1 focus:ring-[#c9a96e]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#1a1a1a] mb-1.5">
                  Địa Chỉ Email Doanh Nghiệp <span className="text-[#c9a96e]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contact@yourcompany.com"
                  className="w-full px-3.5 py-2.5 bg-white border border-[#d3c7b7] rounded-lg text-sm text-[#1a1a1a] placeholder:text-slate-400 focus:outline-none focus:border-[#c9a96e] focus:ring-1 focus:ring-[#c9a96e]"
                />
              </div>

              {/* Needs / Service Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#1a1a1a] mb-1.5">
                    Nhu Cầu Triển Khai
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#d3c7b7] rounded-lg text-xs sm:text-sm text-[#1a1a1a] focus:outline-none focus:border-[#c9a96e]"
                  >
                    <option value="template-purchase">Mua bản quyền mã nguồn gốc</option>
                    <option value="customization">Tùy biến thương hiệu &amp; nội dung</option>
                    <option value="full-turnkey">Triển khai trọn gói Full-Stack</option>
                    <option value="consultation">Tư vấn kiến trúc giao diện độc quyền</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#1a1a1a] mb-1.5">
                    Ngân Sách Dự Kiến
                  </label>
                  <select
                    value={budgetTier}
                    onChange={(e) => setBudgetTier(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#d3c7b7] rounded-lg text-xs sm:text-sm text-[#1a1a1a] focus:outline-none focus:border-[#c9a96e]"
                  >
                    <option value="under-500">&lt; $500 (Bản quyền Template)</option>
                    <option value="500-1500">$500 – $1,500 (Tùy biến cơ bản)</option>
                    <option value="1500-5000">$1,500 – $5,000 (Trọn gói hệ thống)</option>
                    <option value="bespoke">&gt; $5,000 (Dự án may đo độc quyền)</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#1a1a1a] mb-1.5">
                  Ghi Chú Hoặc Yêu Cầu Đặc Biệt
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Mô tả ngành hàng, tính năng bổ sung hoặc thời hạn bàn giao dự kiến..."
                  className="w-full px-3.5 py-2.5 bg-white border border-[#d3c7b7] rounded-lg text-sm text-[#1a1a1a] placeholder:text-slate-400 focus:outline-none focus:border-[#c9a96e] focus:ring-1 focus:ring-[#c9a96e] resize-none"
                />
              </div>

              {/* Form Actions */}
              <div className="pt-2 flex items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Bảo mật thông tin 100%</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#c9a96e] hover:bg-[#b89555] active:scale-[0.98] text-[#1a1a1a] font-semibold text-xs sm:text-sm px-6 py-3 rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Đang xử lý...</span>
                  ) : (
                    <>
                      <span>Gửi Yêu Cầu Báo Giá</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>

    </div>
  );
};
