export interface Template {
  id: string;
  name: string;
  category: 'Luxury Websites' | 'Dashboards' | 'E-commerce' | 'WebBuilder' | 'Mobile Apps' | 'UI Components';
  tagline: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  detailImageUrl: string;
  demoUrl: string;
  sourceUrl: string;
  tags: string[];
  features: string[];
  techStack: string[];
  priceEstimate: string;
  rating: number;
  reviewsCount: number;
  version: string;
  lastUpdated: string;
  isIllustrative: boolean;
  demoTheme: {
    accent: string;
    bg: string;
    headline: string;
    subheadline: string;
  };
  sampleCode: {
    filename: string;
    code: string;
  }[];
}

export const TEMPLATES: Template[] = [
  // 1. Luxury Websites
  {
    id: 'noire-portfolio',
    name: 'Noire Portfolio',
    category: 'Luxury Websites',
    tagline: 'Refined editorial portfolio for visionary photographers & designers',
    description: 'An ultra-refined, minimalist dark-mode portfolio engineered with fluid typography, editorial layout grids, and interactive visual galleries.',
    fullDescription: 'Noire Portfolio embodies haute horlogerie and editorial minimalism. Crafted specifically for visual artists, luxury fashion photographers, and creative directors who require their work to be experienced with absolute gravitas. Features seamless lazy image zooming, custom smooth cursor interactions, project case-study templates, and client inquiry booking.',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    detailImageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop',
    demoUrl: 'https://example.com/demo/noire-portfolio',
    sourceUrl: 'https://github.com/HCDecorAD/hc-decor-templates/tree/main/noire-portfolio',
    tags: ['Next.js 15', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    features: [
      'High-contrast dark editorial aesthetics with Playfair Display typography',
      'Smooth masonry and asymmetric gallery views with lightbox zoom',
      'Comprehensive Case Study breakdown layout with metrics & deliverables',
      'Integrated Bespoke Commission / Inquiry modal with instant validation',
      '99+ Google Lighthouse performance score with zero layout shift'
    ],
    techStack: ['React 19', 'Tailwind CSS v4', 'TypeScript', 'Lucide Icons', 'Vite'],
    priceEstimate: '$149 · Commercial License',
    rating: 4.95,
    reviewsCount: 38,
    version: '2.4.0',
    lastUpdated: 'October 2026',
    isIllustrative: true,
    demoTheme: {
      accent: '#c9a96e',
      bg: '#141414',
      headline: 'Capturing the Timeless Soul of Visual Architecture',
      subheadline: 'Monochrome and high-contrast photography by studio Noire.'
    },
    sampleCode: [
      {
        filename: 'src/pages/Portfolio.tsx',
        code: `import React from 'react';\nimport { motion } from 'motion/react';\n\nexport const NoireGallery = () => {\n  return (\n    <section className="bg-[#141414] text-[#faf8f5] py-24 px-8">\n      <div className="max-w-7xl mx-auto">\n        <span className="text-[#c9a96e] uppercase tracking-widest text-xs font-semibold">\n          Haute Editorial Archive\n        </span>\n        <h1 className="font-serif text-5xl mt-3 mb-12">Visual Works 2024–2026</h1>\n        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">\n          {/* Curated Project Tiles */}\n        </div>\n      </div>\n    </section>\n  );\n};`
      },
      {
        filename: 'package.json',
        code: `{\n  "name": "noire-portfolio-template",\n  "version": "2.4.0",\n  "private": true,\n  "dependencies": {\n    "react": "^19.0.0",\n    "motion": "^12.0.0",\n    "lucide-react": "^0.475.0"\n  }\n}`
      }
    ]
  },
  {
    id: 'maison-luxe',
    name: 'Maison Luxe',
    category: 'Luxury Websites',
    tagline: 'High-end fashion brand website template with tactile typography',
    description: 'Bespoke web experience tailored for couture maisons, runway showcases, and heritage fashion houses demanding digital perfection.',
    fullDescription: 'Maison Luxe delivers the sensation of touching fine cashmere through a screen. Designed for luxury ateliers, bespoke tailors, and avant-garde fashion brands. Incorporates video lookbook hero headers, seasonal runway archives, private salon appointment booking, and curated product lookbooks.',
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=400&fit=crop',
    detailImageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=800&fit=crop',
    demoUrl: 'https://example.com/demo/maison-luxe',
    sourceUrl: 'https://github.com/HCDecorAD/hc-decor-templates/tree/main/maison-luxe',
    tags: ['React 19', 'Tailwind CSS', 'Editorial Layout', 'TypeScript'],
    features: [
      'Cinematic runway lookbook grid with split video/image panels',
      'Private salon VIP consultation scheduling flow',
      'Artisanal craftsmanship narrative timeline component',
      'Bilingual switch ready (English / French / Japanese)',
      'Rich metadata tags optimized for luxury fashion indexation'
    ],
    techStack: ['React 19', 'Tailwind CSS v4', 'TypeScript', 'Motion', 'Vite'],
    priceEstimate: '$189 · Commercial License',
    rating: 4.98,
    reviewsCount: 52,
    version: '3.1.2',
    lastUpdated: 'September 2026',
    isIllustrative: true,
    demoTheme: {
      accent: '#c9a96e',
      bg: '#1a1a1a',
      headline: 'The Autumn / Winter Haute Couture Anthology',
      subheadline: 'Crafted by hand in Paris with ethically sourced noble fibers.'
    },
    sampleCode: [
      {
        filename: 'src/components/RunwayShowcase.tsx',
        code: `export const MaisonHero = () => (\n  <header className="relative h-screen bg-[#1a1a1a] flex items-center justify-center text-center text-white">\n    <div className="z-10 max-w-3xl px-6">\n      <p className="tracking-[0.3em] uppercase text-xs text-[#c9a96e]">Autumn Winter Collection</p>\n      <h1 className="font-serif text-6xl tracking-tight mt-4">Maison Luxe 2026</h1>\n      <button className="mt-8 px-8 py-3 bg-[#c9a96e] text-[#1a1a1a] font-medium tracking-wide hover:bg-[#b89555] transition-all">\n        Explore Collection\n      </button>\n    </div>\n  </header>\n);`
      }
    ]
  },
  {
    id: 'sable-villa',
    name: 'Sable Villa',
    category: 'Luxury Websites',
    tagline: 'Luxury real estate & architectural estates showcase template',
    description: 'An architectural masterclass for ultra-prime property brokers, private island developments, and luxury hospitality retreats.',
    fullDescription: 'Sable Villa is constructed with expansive photographic ratios, interactive architectural floorplan hotspots, high-net-worth buyer inquiry encryption indicators, and private property viewing reservations. Elevates prestige residential sales and luxury hotel portfolios.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
    detailImageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
    demoUrl: 'https://example.com/demo/sable-villa',
    sourceUrl: 'https://github.com/HCDecorAD/hc-decor-templates/tree/main/sable-villa',
    tags: ['React 19', 'Interactive Floorplans', 'Tailwind CSS', 'TypeScript'],
    features: [
      'Interactive 360° architectural viewer simulator & floorplan mapping',
      'Private viewing tour scheduler with calendar syncing',
      'Property amenities grid with luxury specifications',
      'Downloadable PDF architectural brochure generation preview',
      'Multi-currency price switcher (USD, EUR, GBP, JPY)'
    ],
    techStack: ['React 19', 'Tailwind CSS', 'TypeScript', 'Lucide React'],
    priceEstimate: '$179 · Commercial License',
    rating: 4.92,
    reviewsCount: 29,
    version: '1.9.0',
    lastUpdated: 'August 2026',
    isIllustrative: true,
    demoTheme: {
      accent: '#c9a96e',
      bg: '#faf8f5',
      headline: 'The Azure Horizons Residence · Saint-Tropez',
      subheadline: 'A 14,000 sq ft modernist sanctuary perched above the Mediterranean.'
    },
    sampleCode: [
      {
        filename: 'src/components/VillaSpecs.tsx',
        code: `export const VillaMetrics = () => (\n  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-[#faf8f5] border border-[#e8e0d5]">\n    <div><span className="text-xs uppercase text-slate-500">Interior</span><p className="text-2xl font-serif text-[#1a1a1a]">14,200 sq ft</p></div>\n    <div><span className="text-xs uppercase text-slate-500">Bedrooms</span><p className="text-2xl font-serif text-[#1a1a1a]">7 Suites</p></div>\n    <div><span className="text-xs uppercase text-slate-500">Private Marina</span><p className="text-2xl font-serif text-[#1a1a1a]">Direct Access</p></div>\n    <div><span className="text-xs uppercase text-slate-500">Price Upon Request</span><p className="text-2xl font-serif text-[#c9a96e]">€28,500,000</p></div>\n  </div>\n);`
      }
    ]
  },

  // 2. Dashboards
  {
    id: 'atlas-analytics',
    name: 'Atlas Analytics',
    category: 'Dashboards',
    tagline: 'Enterprise business intelligence & high-density data analytics',
    description: 'A sophisticated, dark-themed analytical workstation featuring real-time charting, multi-tenant workspace switches, and tabular KPI views.',
    fullDescription: 'Atlas Analytics is engineered for executive suites and quantitative data teams who value visual clarity over distracting widgets. Delivers high-density metric tables with tabular figures, cohort analysis grids, financial runway forecasting, and custom report builders with zero bloat.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    detailImageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    demoUrl: 'https://example.com/demo/atlas-analytics',
    sourceUrl: 'https://github.com/HCDecorAD/hc-decor-templates/tree/main/atlas-analytics',
    tags: ['Analytics', 'Dark Mode', 'Tabular Nums', 'TypeScript'],
    features: [
      'High-contrast executive dark palette with soft gold metric accents',
      'Tabular figures alignment across financial & operational KPIs',
      'Date range comparison selector with percentage deltas',
      'Customizable widget grid with export to CSV and JSON',
      'Full keyboard shortcuts (Cmd+K command palette ready)'
    ],
    techStack: ['React 19', 'Tailwind CSS v4', 'TypeScript', 'Lucide React'],
    priceEstimate: '$159 · Enterprise Ready',
    rating: 4.96,
    reviewsCount: 64,
    version: '4.0.1',
    lastUpdated: 'September 2026',
    isIllustrative: true,
    demoTheme: {
      accent: '#c9a96e',
      bg: '#121212',
      headline: 'Quarterly Net ARR: $4,892,100 (+24.8%)',
      subheadline: 'Multi-region revenue consolidation across EMEA, APAC, and Americas.'
    },
    sampleCode: [
      {
        filename: 'src/components/KPITable.tsx',
        code: `export const MetricsRow = ({ label, value, delta }: { label: string; value: string; delta: string }) => (\n  <tr className="border-b border-[#282828] text-sm hover:bg-[#1f1f1f] transition-colors">\n    <td className="py-3 px-4 font-medium text-slate-200">{label}</td>\n    <td className="py-3 px-4 text-right font-mono tabular-nums text-white">{value}</td>\n    <td className="py-3 px-4 text-right font-mono tabular-nums text-[#c9a96e]">{delta}</td>\n  </tr>\n);`
      }
    ]
  },
  {
    id: 'nova-admin',
    name: 'Nova Admin',
    category: 'Dashboards',
    tagline: 'Modern executive admin panel with granular permissions & audit trails',
    description: 'Clean, architectural administration cockpit with user management, subscription control, API token meters, and compliance logging.',
    fullDescription: 'Nova Admin redefines SaaS back-offices with calm, uncluttered layouts. Includes modular drawer sidebars, multi-step member onboarding, activity log feeds, and billing lifecycle management crafted to enterprise specifications.',
    imageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop',
    detailImageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop',
    demoUrl: 'https://example.com/demo/nova-admin',
    sourceUrl: 'https://github.com/HCDecorAD/hc-decor-templates/tree/main/nova-admin',
    tags: ['Admin Panel', 'Tailwind CSS', 'Data Tables', 'TypeScript'],
    features: [
      'Collapsible two-tier sidebar navigation with badge counts',
      'CRUD table layouts with bulk selection and filter chips',
      'User role management (Superadmin, Auditor, Operator)',
      'Security audit timeline with IP & geographical logs',
      'Zero external bloated UI library dependencies'
    ],
    techStack: ['React 19', 'Tailwind CSS', 'TypeScript', 'Lucide React'],
    priceEstimate: '$139 · Commercial License',
    rating: 4.89,
    reviewsCount: 42,
    version: '2.8.4',
    lastUpdated: 'October 2026',
    isIllustrative: true,
    demoTheme: {
      accent: '#c9a96e',
      bg: '#faf8f5',
      headline: 'Team Governance & System Permissions',
      subheadline: 'Managing 1,420 enterprise active seats across 18 regional hubs.'
    },
    sampleCode: [
      {
        filename: 'src/components/AdminHeader.tsx',
        code: `export const NovaHeader = () => (\n  <header className="h-16 px-6 border-b border-[#e8e0d5] bg-white flex items-center justify-between">\n    <div className="font-serif font-bold text-xl text-[#1a1a1a]">Nova Control Plane</div>\n    <div className="flex items-center gap-4">\n      <span className="text-xs text-slate-500 font-mono">Status: Healthy (18ms)</span>\n      <button className="px-3 py-1.5 bg-[#1a1a1a] text-white text-xs rounded hover:bg-[#282828]">Export Audit</button>\n    </div>\n  </header>\n);`
      }
    ]
  },
  {
    id: 'flux-metrics',
    name: 'Flux Metrics',
    category: 'Dashboards',
    tagline: 'Startup metrics, MRR engine & high-growth KPI cockpit',
    description: 'Precision dashboard crafted for high-velocity software founders. Visualizes customer churn, lifetime value, cash runway, and net retention.',
    fullDescription: 'Flux Metrics combines investor-ready reporting with day-to-day founder utility. Designed with strict tabular alignment, sparkline visualizations, conversion funnel waterfalls, and automated email summary generators.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    detailImageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    demoUrl: 'https://example.com/demo/flux-metrics',
    sourceUrl: 'https://github.com/HCDecorAD/hc-decor-templates/tree/main/flux-metrics',
    tags: ['SaaS KPIs', 'Financial Charts', 'Dark Canvas', 'Vite'],
    features: [
      'Interactive Cohort Retention matrix visualization',
      'Net Retention Rate (NRR) & Churn Decomposition charts',
      'Investor quarterly update automated memo builder',
      'Seamless toggle between Annualized and Monthly views',
      'Subtle gold accents highlighting target milestones'
    ],
    techStack: ['React 19', 'Tailwind CSS', 'TypeScript', 'Motion'],
    priceEstimate: '$149 · Commercial License',
    rating: 4.93,
    reviewsCount: 31,
    version: '2.1.0',
    lastUpdated: 'September 2026',
    isIllustrative: true,
    demoTheme: {
      accent: '#c9a96e',
      bg: '#18181b',
      headline: 'Monthly Recurring Revenue: $184,200',
      subheadline: 'Quick ratio 3.4 · Net Burn Rate -$12,000/mo · 28 Months Runway'
    },
    sampleCode: [
      {
        filename: 'src/components/SaaSMetrics.tsx',
        code: `export const MetricCard = ({ title, amount, pace }: { title: string; amount: string; pace: string }) => (\n  <div className="p-6 bg-[#1f1f23] border border-[#2d2d32] rounded-lg">\n    <p className="text-xs text-slate-400 uppercase tracking-wider">{title}</p>\n    <p className="text-3xl font-mono tabular-nums text-white mt-2 font-semibold">{amount}</p>\n    <p className="text-xs text-[#c9a96e] mt-1 font-mono">{pace}</p>\n  </div>\n);`
      }
    ]
  },

  // 3. E-commerce
  {
    id: 'opulent-cart',
    name: 'Opulent Cart',
    category: 'E-commerce',
    tagline: 'Premium online store template for luxury goods & bespoke retail',
    description: 'An uncompromising direct-to-consumer digital flagship. Features editorial lookbooks, slide-over cart drawers, and frictionless checkout flows.',
    fullDescription: 'Opulent Cart was built to honor rare craftsmanship and premium price points. With generous whitespace, tactile hover states, high-resolution zoomable galleries, and transparent delivery guarantees, it elevates conversion rates for luxury brands.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    detailImageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    demoUrl: 'https://example.com/demo/opulent-cart',
    sourceUrl: 'https://github.com/HCDecorAD/hc-decor-templates/tree/main/opulent-cart',
    tags: ['E-Commerce', 'Cart Drawer', 'Luxury Retail', 'TypeScript'],
    features: [
      'Sticky contiguous purchase module on product detail page (PDP)',
      'Slide-over cart drawer with live subtotal calculation and upsells',
      'Artisanal material specification tables and dimensions callouts',
      'Gift packaging & bespoke concierge engraving options',
      'Mobile-optimized thumb-friendly bottom purchase sheet'
    ],
    techStack: ['React 19', 'Tailwind CSS v4', 'TypeScript', 'Lucide React'],
    priceEstimate: '$179 · Lifetime License',
    rating: 4.97,
    reviewsCount: 77,
    version: '3.5.0',
    lastUpdated: 'October 2026',
    isIllustrative: true,
    demoTheme: {
      accent: '#c9a96e',
      bg: '#faf8f5',
      headline: 'Handcrafted Chronograph Series IV · Limited to 100 Pieces',
      subheadline: 'Crafted in Geneva from solid Grade-5 titanium and sapphire crystal.'
    },
    sampleCode: [
      {
        filename: 'src/components/ProductCard.tsx',
        code: `export const OpulentProduct = ({ title, price, image }: { title: string; price: string; image: string }) => (\n  <div className="group cursor-pointer">\n    <div className="aspect-[4/5] overflow-hidden bg-[#f4eee6]">\n      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />\n    </div>\n    <div className="mt-4 flex justify-between items-baseline">\n      <h3 className="font-serif text-lg text-[#1a1a1a]">{title}</h3>\n      <span className="font-mono text-sm text-[#c9a96e]">{price}</span>\n    </div>\n  </div>\n);`
      }
    ]
  },
  {
    id: 'velvet-market',
    name: 'Velvet Market',
    category: 'E-commerce',
    tagline: 'Fashion e-commerce marketplace template with multi-vendor support',
    description: 'A multi-vendor apparel and lifestyle marketplace offering brand spotlight banners, faceted attribute filters, and curated capsule drops.',
    fullDescription: 'Velvet Market provides an expansive architectural marketplace structure. Includes merchant storefronts, designer profile narratives, advanced size & fit guides, and a unified checkout system tailored for luxury fashion conglomerates.',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
    detailImageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop',
    demoUrl: 'https://example.com/demo/velvet-market',
    sourceUrl: 'https://github.com/HCDecorAD/hc-decor-templates/tree/main/velvet-market',
    tags: ['Marketplace', 'Multi-Vendor', 'Faceted Search', 'Tailwind CSS'],
    features: [
      'Faceted multi-attribute filtering (Designer, Color, Material, Size)',
      'Designer editorial capsule drops with countdown timer',
      'Wishlist persistence and recently viewed carousel',
      'Comprehensive vendor profile showcase pages',
      'Optimized checkout funnel with one-click express ordering'
    ],
    techStack: ['React 19', 'Tailwind CSS', 'TypeScript', 'Motion'],
    priceEstimate: '$199 · Commercial License',
    rating: 4.91,
    reviewsCount: 46,
    version: '2.6.2',
    lastUpdated: 'August 2026',
    isIllustrative: true,
    demoTheme: {
      accent: '#c9a96e',
      bg: '#faf8f5',
      headline: 'Curated Independent European Fashion Houses',
      subheadline: 'Exclusive capsule collections directly from Milan, Copenhagen, and London.'
    },
    sampleCode: [
      {
        filename: 'src/components/FilterBar.tsx',
        code: `export const FacetFilter = () => (\n  <aside className="w-64 space-y-6 text-sm">\n    <h4 className="font-serif font-bold text-base text-[#1a1a1a]">Refine Selection</h4>\n    <div>\n      <span className="text-xs uppercase text-slate-500 font-medium">Designers</span>\n      <ul className="mt-2 space-y-1.5 text-slate-700">\n        <li><label className="flex items-center gap-2"><input type="checkbox" className="accent-[#c9a96e]" /> Atelier Saint-Germain</label></li>\n      </ul>\n    </div>\n  </aside>\n);`
      }
    ]
  },
  {
    id: 'crown-shop',
    name: 'Crown Shop',
    category: 'E-commerce',
    tagline: 'Jewelry & fine accessories e-commerce template with macro zoom',
    description: 'An intimate, high-luxury boutique experience designed for fine gemstones, artisanal goldsmiths, and heirloom timepieces.',
    fullDescription: 'Crown Shop showcases minute jewelry details with precision macro image lenses, custom ring sizer tools, certification verification badges (GIA, AGS), and appointment booking for custom private consultations.',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop',
    detailImageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=800&fit=crop',
    demoUrl: 'https://example.com/demo/crown-shop',
    sourceUrl: 'https://github.com/HCDecorAD/hc-decor-templates/tree/main/crown-shop',
    tags: ['Fine Jewelry', 'Macro Galleries', 'Diamond Specs', 'Luxury'],
    features: [
      'Interactive 4Cs Diamond selector (Cut, Color, Clarity, Carat)',
      'Magnifying loupe hover effect for gemstone facets',
      'Bespoke ring builder and engraving preview simulator',
      'Private salon appointment booking for bridal consultations',
      'Trust markers: Authenticity certificate verification and insured courier'
    ],
    techStack: ['React 19', 'Tailwind CSS', 'TypeScript', 'Lucide React'],
    priceEstimate: '$169 · Commercial License',
    rating: 4.94,
    reviewsCount: 39,
    version: '1.8.5',
    lastUpdated: 'September 2026',
    isIllustrative: true,
    demoTheme: {
      accent: '#c9a96e',
      bg: '#1a1a1a',
      headline: 'Solitaire Cushion-Cut Diamond in 18k Yellow Gold',
      subheadline: 'Hand-selected ethically mined stones certified by the GIA.'
    },
    sampleCode: [
      {
        filename: 'src/components/DiamondSelector.tsx',
        code: `export const GemstoneSpec = () => (\n  <div className="p-6 bg-[#faf8f5] border border-[#e8e0d5] space-y-4">\n    <h3 className="font-serif text-lg font-semibold">Gemstone Certification</h3>\n    <div className="flex justify-between border-b pb-2 text-sm">\n      <span className="text-slate-500">Certificate</span>\n      <span className="font-mono font-medium">GIA-2026-98114</span>\n    </div>\n  </div>\n);`
      }
    ]
  },

  // 4. WebBuilder
  {
    id: 'forge-builder',
    name: 'Forge Builder',
    category: 'WebBuilder',
    tagline: 'Drag-and-drop landing page builder with live visual canvas',
    description: 'A lightning-fast visual site builder featuring section snapping, responsive layout previewers, and instant Tailwind code generation.',
    fullDescription: 'Forge Builder bridges visual composition and developer-grade clean code. Users can drag pre-crafted luxury blocks (Hero, Features, Pricing, Testimonials), edit typography in real-time, inspect DOM elements, and export production-ready React components.',
    imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop',
    detailImageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=800&fit=crop',
    demoUrl: 'https://example.com/demo/forge-builder',
    sourceUrl: 'https://github.com/HCDecorAD/hc-decor-templates/tree/main/forge-builder',
    tags: ['Site Builder', 'Visual Canvas', 'Code Export', 'TypeScript'],
    features: [
      'Interactive visual canvas with live viewport width toggles',
      'Library of 40+ pre-built luxury responsive block components',
      'Real-time style inspector (Spacing, Typography, Palette, Radius)',
      'One-click export to clean React + Tailwind CSS code',
      'Zero hydration lag and offline-capable localStorage saving'
    ],
    techStack: ['React 19', 'Tailwind CSS v4', 'TypeScript', 'Motion'],
    priceEstimate: '$189 · Developer Bundle',
    rating: 4.96,
    reviewsCount: 57,
    version: '3.2.0',
    lastUpdated: 'October 2026',
    isIllustrative: true,
    demoTheme: {
      accent: '#c9a96e',
      bg: '#faf8f5',
      headline: 'Visual Canvas · 1440px Desktop Baseline',
      subheadline: 'Crafting responsive hero section with zero layout shift.'
    },
    sampleCode: [
      {
        filename: 'src/builder/Canvas.tsx',
        code: `export const VisualEditor = () => (\n  <div className="flex h-screen bg-[#faf8f5]">\n    <aside className="w-72 border-r border-[#e8e0d5] p-4 bg-white">Block Library</aside>\n    <main className="flex-1 overflow-auto p-12 flex justify-center">\n      <div className="w-[1200px] min-h-[800px] bg-white shadow-xl border border-[#e8e0d5]">Live Preview</div>\n    </main>\n  </div>\n);`
      }
    ]
  },
  {
    id: 'canvas-studio',
    name: 'Canvas Studio',
    category: 'WebBuilder',
    tagline: 'Creative website builder template for agency portfolios & studios',
    description: 'An artistic, grid-based page creator with dynamic cursor physics, custom scroll snapping, and responsive design toolbars.',
    fullDescription: 'Canvas Studio is the definitive template for high-end digital production agencies. Packed with interactive design tokens, typography previewers, dark/light theme generator, and client review annotations.',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop',
    detailImageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&h=800&fit=crop',
    demoUrl: 'https://example.com/demo/canvas-studio',
    sourceUrl: 'https://github.com/HCDecorAD/hc-decor-templates/tree/main/canvas-studio',
    tags: ['Creative Agency', 'WebBuilder', 'Design Tokens', 'Tailwind CSS'],
    features: [
      'Dynamic typography pairing engine with instant font previews',
      'Modular Bento grid layout generator with responsive breakpoints',
      'Color harmony generator supporting custom 60-30-10 palettes',
      'Interactive client feedback pin tool for review cycles',
      'SEO meta and OpenGraph image card preview generator'
    ],
    techStack: ['React 19', 'Tailwind CSS', 'TypeScript', 'Lucide React'],
    priceEstimate: '$159 · Studio License',
    rating: 4.88,
    reviewsCount: 35,
    version: '2.0.4',
    lastUpdated: 'September 2026',
    isIllustrative: true,
    demoTheme: {
      accent: '#c9a96e',
      bg: '#1a1a1a',
      headline: 'Art Direction in the Era of Modern Web Architecture',
      subheadline: 'Curating bespoke interactive narratives for visionary clients.'
    },
    sampleCode: [
      {
        filename: 'src/studio/ThemeEditor.tsx',
        code: `export const TokenInspector = () => (\n  <div className="p-4 bg-[#1a1a1a] text-white border border-[#2d2d32] rounded">\n    <h4 className="font-serif text-sm text-[#c9a96e]">Palette Tokens</h4>\n    <div className="flex gap-2 mt-2">\n      <div className="w-8 h-8 rounded bg-[#faf8f5]" title="Canvas Warm White" />\n      <div className="w-8 h-8 rounded bg-[#1a1a1a]" title="Charcoal" />\n      <div className="w-8 h-8 rounded bg-[#c9a96e]" title="Accent Gold" />\n    </div>\n  </div>\n);`
      }
    ]
  },
  {
    id: 'blueprint-cms',
    name: 'Blueprint CMS',
    category: 'WebBuilder',
    tagline: 'Content management & headless publication website template',
    description: 'An editorial publishing architecture built for modern magazines, intellectual essays, and long-form luxury journalism.',
    fullDescription: 'Blueprint CMS delivers distraction-free reading typography, structured Schema.org article tags, reading-progress indicators, audio narration players, and markdown/rich-text publishing workflows.',
    imageUrl: 'https://images.unsplash.com/photo-1581291518655-9523843770d1?w=600&h=400&fit=crop',
    detailImageUrl: 'https://images.unsplash.com/photo-1581291518655-9523843770d1?w=1200&h=800&fit=crop',
    demoUrl: 'https://example.com/demo/blueprint-cms',
    sourceUrl: 'https://github.com/HCDecorAD/hc-decor-templates/tree/main/blueprint-cms',
    tags: ['Headless CMS', 'Editorial', 'Typography', 'TypeScript'],
    features: [
      'Refined editorial reading experience with balanced typography',
      'Table of contents generator with active scroll spying',
      'Inline pull quotes, footnotes, and photo caption standards',
      'Audio article player component with speed adjustments',
      'Built-in newsletter subscriber capture and member access paywall'
    ],
    techStack: ['React 19', 'Tailwind CSS', 'TypeScript', 'Vite'],
    priceEstimate: '$149 · Editorial License',
    rating: 4.92,
    reviewsCount: 41,
    version: '1.7.0',
    lastUpdated: 'August 2026',
    isIllustrative: true,
    demoTheme: {
      accent: '#c9a96e',
      bg: '#faf8f5',
      headline: 'The Architecture of Silence: Modernism Revisited',
      subheadline: 'An exploration of sacred geometry and tactile materials in residential design.'
    },
    sampleCode: [
      {
        filename: 'src/cms/ArticleLayout.tsx',
        code: `export const ArticleBody = ({ content }: { content: string }) => (\n  <article className="max-w-2xl mx-auto py-16 px-6 font-serif text-lg leading-relaxed text-[#1a1a1a]">\n    <div className="border-l border-[#c9a96e] pl-4 italic my-8 text-xl text-slate-700">\n      "Design is not merely how it looks, but how the space breathes."\n    </div>\n  </article>\n);`
      }
    ]
  },

  // 5. Mobile Apps
  {
    id: 'pulse-fitness',
    name: 'Pulse Fitness',
    category: 'Mobile Apps',
    tagline: 'High-performance fitness & wellness mobile app UI template',
    description: 'A sleek, thumb-optimized mobile UI featuring workout timers, biometric metrics, personalized routine builders, and sleek progress rings.',
    fullDescription: 'Pulse Fitness offers an ultra-fluid mobile touch experience designed around ergonomic thumb navigation. Includes haptic feedback audio cues, biometric telemetry graphs, heart rate zones, and customized interval training timers.',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    detailImageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop',
    demoUrl: 'https://example.com/demo/pulse-fitness',
    sourceUrl: 'https://github.com/HCDecorAD/hc-decor-templates/tree/main/pulse-fitness',
    tags: ['Mobile First', 'Touch UI', 'Health & Fitness', 'Tailwind CSS'],
    features: [
      'Ergonomic thumb-zone bottom navigation bar with active state glow',
      'Animated circular workout progress rings with SVG geometry',
      'Calisthenics & strength training exercise database with GIF demos',
      'Hydration & sleep biometric correlation graphs',
      'Offline-ready PWA architecture with local storage persistence'
    ],
    techStack: ['React 19', 'Tailwind CSS v4', 'TypeScript', 'Motion'],
    priceEstimate: '$139 · Mobile PWA Ready',
    rating: 4.97,
    reviewsCount: 68,
    version: '3.0.1',
    lastUpdated: 'October 2026',
    isIllustrative: true,
    demoTheme: {
      accent: '#c9a96e',
      bg: '#141416',
      headline: 'Daily Strain: 14.8 · Caloric Burn: 2,420 kcal',
      subheadline: 'Heart rate variability 68ms · Recovery score 94% optimal.'
    },
    sampleCode: [
      {
        filename: 'src/mobile/PulseCard.tsx',
        code: `export const MetricPill = ({ label, stat }: { label: string; stat: string }) => (\n  <div className="flex items-center justify-between p-4 bg-[#1f1f24] rounded-2xl border border-[#2d2d35]">\n    <span className="text-sm text-slate-400">{label}</span>\n    <span className="font-mono font-bold text-lg text-white tabular-nums">{stat}</span>\n  </div>\n);`
      }
    ]
  },
  {
    id: 'wanderlust-travel',
    name: 'Wanderlust Travel',
    category: 'Mobile Apps',
    tagline: 'Luxury travel booking & itinerary curation mobile app template',
    description: 'A breathtaking mobile itinerary planner with interactive destination stories, flight status tracking, and private jet charter booking.',
    fullDescription: 'Wanderlust Travel delivers an unforgettable booking experience for luxury travelers. Offers day-by-day bespoke itineraries, offline boarding pass access, private concierge chat interface, and interactive map exploration.',
    imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
    detailImageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=800&fit=crop',
    demoUrl: 'https://example.com/demo/wanderlust-travel',
    sourceUrl: 'https://github.com/HCDecorAD/hc-decor-templates/tree/main/wanderlust-travel',
    tags: ['Mobile UI', 'Travel & Hospitality', 'Booking Engine', 'TypeScript'],
    features: [
      'Interactive day-by-day timeline itinerary with map coordinates',
      'Offline-accessible luxury digital boarding pass & hotel vouchers',
      'Curated private villa & yacht charter reservation modules',
      'Local currency exchange rates calculator with offline caching',
      'Emergency concierge calling and 24/7 travel advisor drawer'
    ],
    techStack: ['React 19', 'Tailwind CSS', 'TypeScript', 'Lucide React'],
    priceEstimate: '$159 · Mobile PWA Ready',
    rating: 4.93,
    reviewsCount: 45,
    version: '2.3.1',
    lastUpdated: 'September 2026',
    isIllustrative: true,
    demoTheme: {
      accent: '#c9a96e',
      bg: '#faf8f5',
      headline: 'Amalfi Coast & Capri Private Expedition',
      subheadline: '7 Days · Private Riva Yacht · Belmond Hotel Caruso Villa.'
    },
    sampleCode: [
      {
        filename: 'src/mobile/ItineraryCard.tsx',
        code: `export const DayPlan = ({ day, title, location }: { day: string; title: string; location: string }) => (\n  <div className="p-4 bg-white border border-[#e8e0d5] rounded-xl shadow-sm mb-3">\n    <span className="text-xs uppercase text-[#c9a96e] font-semibold">{day}</span>\n    <h4 className="font-serif text-base text-[#1a1a1a] mt-0.5">{title}</h4>\n    <p className="text-xs text-slate-500 mt-1">{location}</p>\n  </div>\n);`
      }
    ]
  },
  {
    id: 'harvest',
    name: 'Harvest',
    category: 'Mobile Apps',
    tagline: 'Plant care, botany log & organic garden management mobile app',
    description: 'An organic, earth-toned mobile application designed for botanists, urban gardeners, and luxury greenhouse managers.',
    fullDescription: 'Harvest helps users nurture botanical collections. Features intelligent soil moisture reminders, seasonal pruning schedules, light requirement meters, and photographic growth timelines for indoor and estate gardens.',
    imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=400&fit=crop',
    detailImageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200&h=800&fit=crop',
    demoUrl: 'https://example.com/demo/harvest',
    sourceUrl: 'https://github.com/HCDecorAD/hc-decor-templates/tree/main/harvest',
    tags: ['Botanical UI', 'Plant Care', 'Mobile Touch', 'Tailwind CSS'],
    features: [
      'Automated watering and misting reminder notifications',
      'Species plant identifier catalog with taxonomy specifications',
      'Sunlight exposure compass tool using device orientation',
      'Photographic growth diary with side-by-side progression compare',
      'Greenhouse temperature and humidity sensor integration UI'
    ],
    techStack: ['React 19', 'Tailwind CSS', 'TypeScript', 'Motion'],
    priceEstimate: '$129 · Commercial License',
    rating: 4.90,
    reviewsCount: 32,
    version: '1.5.2',
    lastUpdated: 'July 2026',
    isIllustrative: true,
    demoTheme: {
      accent: '#c9a96e',
      bg: '#faf8f5',
      headline: 'Monstera Deliciosa Variegata · Estate Conservatory',
      subheadline: 'Next watering in 2 days · Soil humidity optimal at 64%.'
    },
    sampleCode: [
      {
        filename: 'src/mobile/PlantProfile.tsx',
        code: `export const PlantCard = ({ name, species, waterDays }: { name: string; species: string; waterDays: number }) => (\n  <div className="p-4 bg-white border border-[#e8e0d5] rounded-2xl flex items-center gap-4">\n    <div className="w-12 h-12 rounded-xl bg-[#f4eee6] flex items-center justify-center text-[#c9a96e] font-serif font-bold">🌿</div>\n    <div className="flex-1">\n      <h4 className="font-serif font-medium text-sm text-[#1a1a1a]">{name}</h4>\n      <p className="text-xs text-slate-500 italic">{species}</p>\n    </div>\n    <span className="text-xs font-mono bg-[#faf8f5] px-2 py-1 rounded text-slate-600">{waterDays}d</span>\n  </div>\n);`
      }
    ]
  },

  // 6. UI Components
  {
    id: 'aurora-components',
    name: 'Aurora Components',
    category: 'UI Components',
    tagline: 'Premium UI component library & design system showcase',
    description: 'A comprehensive library of 60+ accessible, production-ready React components styled with luxury tokens, gold hairlines, and refined physics.',
    fullDescription: 'Aurora Components is the flagship design system underlying HCDecor HUB templates. Includes accessible modal overlays, responsive navigation bars, segmented filter controls, form inputs with animated labels, elegant data tables, and slide-over panels. Built strictly with Tailwind CSS v4 and zero third-party UI library bloat.',
    imageUrl: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&h=400&fit=crop',
    detailImageUrl: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=1200&h=800&fit=crop',
    demoUrl: 'https://example.com/demo/aurora-components',
    sourceUrl: 'https://github.com/HCDecorAD/hc-decor-templates/tree/main/aurora-components',
    tags: ['Design System', 'UI Library', 'Tailwind CSS v4', 'TypeScript', 'WCAG AA'],
    features: [
      '60+ production-tested components (Modals, Drawers, Grids, Buttons, Inputs)',
      'Strict WCAG 2.1 AA accessibility with keyboard focus rings',
      'Tailwind CSS v4 native tokens for luxury gold, charcoal, and warm whites',
      'Zero external design kit dependency — purely copyable React code',
      'Integrated live component playground with interactive prop toggles'
    ],
    techStack: ['React 19', 'Tailwind CSS v4', 'TypeScript', 'Motion', 'Vite'],
    priceEstimate: '$249 · Unlimited Projects',
    rating: 4.99,
    reviewsCount: 112,
    version: '4.2.0',
    lastUpdated: 'October 2026',
    isIllustrative: true,
    demoTheme: {
      accent: '#c9a96e',
      bg: '#1a1a1a',
      headline: 'The Haute Couture Component Framework for React',
      subheadline: 'Crafted with mathematical spacing, zero-pill discipline, and pure Tailwind CSS.'
    },
    sampleCode: [
      {
        filename: 'src/components/ui/LuxuryButton.tsx',
        code: `import React from 'react';\n\ninterface LuxuryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {\n  variant?: 'gold' | 'charcoal' | 'outline';\n}\n\nexport const LuxuryButton: React.FC<LuxuryButtonProps> = ({\n  variant = 'gold',\n  children,\n  className = '',\n  ...props\n}) => {\n  const base = "px-6 py-2.5 text-xs font-medium tracking-wide uppercase transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#c9a96e]";\n  const variants = {\n    gold: "bg-[#c9a96e] text-[#1a1a1a] hover:bg-[#b89555] active:scale-[0.98] shadow-sm",\n    charcoal: "bg-[#1a1a1a] text-[#faf8f5] hover:bg-[#282828] active:scale-[0.98]",\n    outline: "border border-[#c9a96e] text-[#1a1a1a] hover:bg-[#c9a96e]/10"\n  };\n  return (\n    <button className={\`\${base} \${variants[variant]} \${className}\`} {...props}>\n      {children}\n    </button>\n  );\n};`
      },
      {
        filename: 'src/components/ui/GoldHairline.tsx',
        code: `export const GoldDivider = () => (\n  <hr className="border-0 h-[1px] bg-gradient-to-r from-transparent via-[#c9a96e]/40 to-transparent my-8" />\n);`
      }
    ]
  }
];

export const CATEGORIES = [
  'All',
  'Luxury Websites',
  'Dashboards',
  'E-commerce',
  'WebBuilder',
  'Mobile Apps',
  'UI Components'
] as const;

export type Category = (typeof CATEGORIES)[number];
