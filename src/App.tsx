import React, { useState, useMemo } from 'react';
import { TEMPLATES, Template, CATEGORIES, Category } from './data/templates';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { TemplateCard } from './components/TemplateCard';
import { TemplateDetailModal } from './components/TemplateDetailModal';
import { LiveDemoModal } from './components/LiveDemoModal';
import { ViewSourceModal } from './components/ViewSourceModal';
import { QuoteModal } from './components/QuoteModal';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Sparkles, SearchX, ArrowRight, ShieldCheck } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'name-asc' | 'rating-desc'>('featured');
  
  // Modals state
  const [activeDetailTemplate, setActiveDetailTemplate] = useState<Template | null>(null);
  const [activeLiveDemoTemplate, setActiveLiveDemoTemplate] = useState<Template | null>(null);
  const [activeViewSourceTemplate, setActiveViewSourceTemplate] = useState<Template | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteInitialTemplate, setQuoteInitialTemplate] = useState<string>('');

  // Active section for header highlighting
  const [activeSection, setActiveSection] = useState('hero');

  // Calculate counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: TEMPLATES.length };
    CATEGORIES.forEach((cat) => {
      if (cat !== 'All') {
        counts[cat] = TEMPLATES.filter((t) => t.category === cat).length;
      }
    });
    return counts;
  }, []);

  // Filter & sort templates
  const filteredTemplates = useMemo(() => {
    return TEMPLATES.filter((tmpl) => {
      // Category check
      const matchesCategory = selectedCategory === 'All' || tmpl.category === selectedCategory;
      if (!matchesCategory) return false;

      // Search query check
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      const inName = tmpl.name.toLowerCase().includes(q);
      const inTagline = tmpl.tagline.toLowerCase().includes(q);
      const inDesc = tmpl.description.toLowerCase().includes(q);
      const inCategory = tmpl.category.toLowerCase().includes(q);
      const inTags = tmpl.tags.some((t) => t.toLowerCase().includes(q));
      const inTech = tmpl.techStack.some((t) => t.toLowerCase().includes(q));

      return inName || inTagline || inDesc || inCategory || inTags || inTech;
    }).sort((a, b) => {
      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'rating-desc') {
        return b.rating - a.rating;
      }
      return 0; // default featured order
    });
  }, [searchQuery, selectedCategory, sortBy]);

  const handleOpenQuote = (templateName?: string) => {
    setQuoteInitialTemplate(templateName || (TEMPLATES[0]?.name ?? ''));
    setIsQuoteModalOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#1a1a1a]">
      
      {/* Top sticky Navigation (Top Bar Contract: 3-Zone) */}
      <Navbar
        onOpenQuote={handleOpenQuote}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content */}
      <main className="flex-1 pb-16 md:pb-0">
        
        {/* 1. Hero Section */}
        <Hero
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            handleNavigate('templates');
          }}
          totalTemplates={TEMPLATES.length}
          filteredCount={filteredTemplates.length}
        />

        {/* 2. Category Filter Bar (sticky below hero) */}
        <div id="templates">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            categoryCounts={categoryCounts}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />

          {/* 3. Template Grid Section */}
          <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            
            {/* Header / Active status note */}
            <div className="mb-8 flex flex-col sm:flex-row items-baseline justify-between gap-2 border-b border-[#e8e0d5] pb-4">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a1a]">
                  {selectedCategory === 'All' ? 'All Handcrafted Templates' : selectedCategory}
                </h2>
                <p className="text-xs sm:text-sm text-[#525252] mt-1">
                  Showing {filteredTemplates.length} premium design{filteredTemplates.length === 1 ? '' : 's'} ready for commercial deployment
                </p>
              </div>

              {searchQuery && (
                <div className="flex items-center gap-2 text-xs text-[#525252]">
                  <span>Filtering by "{searchQuery}"</span>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-[#c9a96e] hover:underline font-medium cursor-pointer"
                  >
                    Clear search
                  </button>
                </div>
              )}
            </div>

            {/* Grid Container (3-col desktop, 2-col tablet, 1-col mobile) */}
            {filteredTemplates.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredTemplates.map((template) => (
                  <TemplateCard
                    key={template.id}
                    template={template}
                    onOpenDetail={(tmpl) => setActiveDetailTemplate(tmpl)}
                    onOpenLiveDemo={(tmpl) => setActiveLiveDemoTemplate(tmpl)}
                    onOpenViewSource={(tmpl) => setActiveViewSourceTemplate(tmpl)}
                    onOpenQuote={(tmplName) => handleOpenQuote(tmplName)}
                  />
                ))}
              </div>
            ) : (
              /* Empty Search State */
              <div className="text-center py-20 bg-white rounded-xl border border-[#e8e0d5] p-8 max-w-xl mx-auto space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#f4eee6] text-[#c9a96e] flex items-center justify-center mx-auto">
                  <SearchX className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1a1a1a]">
                  No matching templates found
                </h3>
                <p className="text-xs sm:text-sm text-[#525252]">
                  We couldn't find any designs matching "{searchQuery}". Try selecting another category or resetting the search filter.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All');
                    }}
                    className="px-5 py-2.5 bg-[#1a1a1a] text-white text-xs font-semibold rounded hover:bg-[#282828] transition-colors cursor-pointer"
                  >
                    Reset All Filters
                  </button>
                </div>
              </div>
            )}

            {/* Bottom Section Banner */}
            <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-[#1a1a1a] to-[#282828] text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-[#3a3a3a]">
              <div className="space-y-1 text-center md:text-left">
                <span className="text-[11px] uppercase tracking-widest text-[#c9a96e] font-semibold">
                  HCDecor HUB Bespoke Atelier
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold">
                  Require a custom tailored enterprise template?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light">
                  Our senior frontend architects build bespoke design systems with guaranteed SLA and delivery in days.
                </p>
              </div>

              <button
                onClick={() => handleOpenQuote()}
                className="bg-[#c9a96e] hover:bg-[#b89555] active:scale-[0.98] text-[#1a1a1a] font-semibold text-xs sm:text-sm px-6 py-3 rounded shadow transition-all whitespace-nowrap cursor-pointer"
              >
                Nhận Báo Giá May Đo
              </button>
            </div>

          </section>
        </div>

        {/* 4. About Section */}
        <AboutSection onOpenQuote={() => handleOpenQuote()} />

        {/* 5. Contact Section */}
        <ContactSection onOpenQuote={() => handleOpenQuote()} />

      </main>

      {/* 6. Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Modals */}
      <TemplateDetailModal
        template={activeDetailTemplate}
        onClose={() => setActiveDetailTemplate(null)}
        onOpenQuote={(tmplName) => handleOpenQuote(tmplName)}
        onOpenLiveDemo={(tmpl) => setActiveLiveDemoTemplate(tmpl)}
        onOpenViewSource={(tmpl) => setActiveViewSourceTemplate(tmpl)}
      />

      <LiveDemoModal
        template={activeLiveDemoTemplate}
        onClose={() => setActiveLiveDemoTemplate(null)}
        onOpenQuote={(tmplName) => handleOpenQuote(tmplName)}
      />

      <ViewSourceModal
        template={activeViewSourceTemplate}
        onClose={() => setActiveViewSourceTemplate(null)}
        onOpenQuote={(tmplName) => handleOpenQuote(tmplName)}
      />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialTemplateName={quoteInitialTemplate}
      />

      {/* Always Visible Mobile Báo Giá CTA */}
      <div className="md:hidden fixed bottom-4 right-4 z-40 pointer-events-auto">
        <button
          onClick={() => handleOpenQuote()}
          className="bg-[#c9a96e] hover:bg-[#b89555] active:scale-95 text-[#1a1a1a] font-bold text-xs px-4 py-2.5 rounded-full shadow-[0_4px_20px_rgba(201,169,110,0.5)] border border-[#b89555] transition-all flex items-center gap-2 cursor-pointer"
          aria-label="Yêu cầu báo giá nhanh"
        >
          <span className="w-2 h-2 rounded-full bg-[#1a1a1a] animate-pulse" />
          <span>Báo giá</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#1a1a1a]" />
        </button>
      </div>

    </div>
  );
}
