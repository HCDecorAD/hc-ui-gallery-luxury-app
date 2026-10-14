import React, { useRef } from 'react';
import { CATEGORIES, Category } from '../data/templates';
import { SlidersHorizontal, ArrowUpDown, ChevronLeft, ChevronRight, Smartphone } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
  categoryCounts: Record<string, number>;
  sortBy: 'featured' | 'name-asc' | 'rating-desc';
  onSortChange: (sort: 'featured' | 'name-asc' | 'rating-desc') => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  categoryCounts,
  sortBy,
  onSortChange
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-18 z-30 w-full bg-[#faf8f5]/98 backdrop-blur-md border-b border-[#e8e0d5] py-3 transition-shadow shadow-[0_2px_8px_-2px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile View: Quick Category Dropdown + Sort */}
        <div className="md:hidden flex items-center justify-between gap-3 mb-2.5 pb-2.5 border-b border-[#e8e0d5]">
          <div className="flex-1">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-1">
              Select Category:
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => onSelectCategory(e.target.value as Category)}
              className="w-full bg-white border border-[#d3c7b7] rounded-md px-3 py-2 text-xs font-medium text-[#1a1a1a] focus:outline-none focus:border-[#c9a96e]"
              aria-label="Filter templates by category"
            >
              {CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category} ({categoryCounts[category] ?? 0} templates)
                </option>
              ))}
            </select>
          </div>

          <div className="shrink-0">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-1">
              Sort:
            </label>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as any)}
              className="bg-white border border-[#d3c7b7] rounded-md px-2.5 py-2 text-xs text-[#1a1a1a] focus:outline-none focus:border-[#c9a96e]"
              aria-label="Sort templates"
            >
              <option value="featured">Featured</option>
              <option value="rating-desc">Rating</option>
              <option value="name-asc">A-Z</option>
            </select>
          </div>
        </div>

        {/* Desktop & Scrollable Tabs Layout */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          
          {/* Scrollable / Wrapping Tabs */}
          <div className="relative flex-1 flex items-center">
            
            {/* Scroll Left Button for small viewports */}
            <button
              onClick={() => scroll('left')}
              className="hidden sm:flex md:hidden p-1 rounded hover:bg-[#e8e0d5] text-slate-500 mr-1"
              aria-label="Scroll categories left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div 
              ref={scrollRef}
              className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-thin py-0.5 w-full flex-nowrap md:flex-wrap"
            >
              {CATEGORIES.map((category) => {
                const isSelected = selectedCategory === category;
                const count = categoryCounts[category] ?? 0;
                const isMobileApps = category === 'Mobile Apps';

                return (
                  <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-md whitespace-nowrap shrink-0 transition-all cursor-pointer flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-[#c9a96e] ${
                      isSelected
                        ? 'bg-[#1a1a1a] text-[#faf8f5] shadow-sm ring-1 ring-[#c9a96e]/40'
                        : isMobileApps
                        ? 'text-[#1a1a1a] bg-[#f4eee6] hover:bg-[#e8e0d5] border border-[#d3c7b7]/60'
                        : 'text-[#525252] hover:text-[#1a1a1a] hover:bg-[#e8e0d5]/60'
                    }`}
                    aria-pressed={isSelected}
                  >
                    {isMobileApps && (
                      <Smartphone className={`w-3.5 h-3.5 ${isSelected ? 'text-[#c9a96e]' : 'text-slate-500'}`} />
                    )}
                    <span>{category}</span>
                    <span
                      className={`text-[11px] font-mono tabular-nums px-1.5 py-0.2 rounded ${
                        isSelected
                          ? 'bg-[#c9a96e] text-[#1a1a1a] font-semibold'
                          : 'bg-[#e8e0d5]/80 text-[#525252]'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Scroll Right Button for small viewports */}
            <button
              onClick={() => scroll('right')}
              className="hidden sm:flex md:hidden p-1 rounded hover:bg-[#e8e0d5] text-slate-500 ml-1"
              aria-label="Scroll categories right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

          </div>

          {/* Desktop Sort selector */}
          <div className="hidden md:flex items-center justify-end gap-2 shrink-0 border-l border-[#e8e0d5] pl-4">
            <div className="flex items-center gap-1.5 text-xs text-[#525252]">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#c9a96e]" />
              <span>Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value as any)}
                className="bg-white border border-[#d3c7b7] rounded px-2.5 py-1 text-xs text-[#1a1a1a] focus:outline-none focus:border-[#c9a96e] cursor-pointer"
                aria-label="Sort templates"
              >
                <option value="featured">Featured Curations</option>
                <option value="rating-desc">Highest Rated</option>
                <option value="name-asc">Alphabetical (A-Z)</option>
              </select>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
