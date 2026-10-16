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
  {
    "id": "tabler",
    "name": "Tabler",
    "category": "Dashboards",
    "tagline": "Open-source dashboard and UI kit",
    "description": "Open-source dashboard and UI kit",
    "fullDescription": "Existing open-source project. Use the official source repository to clone, customize branding, and build your own app. Verify the license and dependencies before commercial use.",
    "imageUrl": "https://raw.githubusercontent.com/tabler/tabler/dev/preview.png",
    "detailImageUrl": "https://raw.githubusercontent.com/tabler/tabler/dev/preview.png",
    "demoUrl": "https://tabler.io/",
    "sourceUrl": "https://github.com/tabler/tabler",
    "tags": [
      "HTML",
      "CSS",
      "Bootstrap"
    ],
    "features": [
      "Real open-source source repository",
      "Customize UI and branding",
      "Reuse existing components"
    ],
    "techStack": [
      "HTML",
      "CSS",
      "Bootstrap"
    ],
    "priceEstimate": "Open source · Check license",
    "rating": 0,
    "reviewsCount": 0,
    "version": "Source repository",
    "lastUpdated": "See upstream",
    "isIllustrative": false,
    "demoTheme": {
      "accent": "#c9a96e",
      "bg": "#141414",
      "headline": "Tabler",
      "subheadline": "Open-source dashboard and UI kit"
    },
    "sampleCode": []
  },
  {
    "id": "adminlte",
    "name": "AdminLTE",
    "category": "Dashboards",
    "tagline": "Established open-source admin dashboard template",
    "description": "Established open-source admin dashboard template",
    "fullDescription": "Existing open-source project. Use the official source repository to clone, customize branding, and build your own app. Verify the license and dependencies before commercial use.",
    "imageUrl": "https://raw.githubusercontent.com/ColorlibHQ/AdminLTE/master/docs/assets/img/AdminLTELogo.png",
    "detailImageUrl": "https://raw.githubusercontent.com/ColorlibHQ/AdminLTE/master/docs/assets/img/AdminLTELogo.png",
    "demoUrl": "https://adminlte.io/",
    "sourceUrl": "https://github.com/ColorlibHQ/AdminLTE",
    "tags": [
      "Bootstrap",
      "JavaScript",
      "Admin"
    ],
    "features": [
      "Real open-source source repository",
      "Customize UI and branding",
      "Reuse existing components"
    ],
    "techStack": [
      "Bootstrap",
      "JavaScript",
      "Admin"
    ],
    "priceEstimate": "Open source · Check license",
    "rating": 0,
    "reviewsCount": 0,
    "version": "Source repository",
    "lastUpdated": "See upstream",
    "isIllustrative": false,
    "demoTheme": {
      "accent": "#c9a96e",
      "bg": "#141414",
      "headline": "AdminLTE",
      "subheadline": "Established open-source admin dashboard template"
    },
    "sampleCode": []
  },
  {
    "id": "coreui",
    "name": "CoreUI React",
    "category": "Dashboards",
    "tagline": "React admin template and component library",
    "description": "React admin template and component library",
    "fullDescription": "Existing open-source project. Use the official source repository to clone, customize branding, and build your own app. Verify the license and dependencies before commercial use.",
    "imageUrl": "https://raw.githubusercontent.com/coreui/coreui-free-react-admin-template/main/public/favicon.ico",
    "detailImageUrl": "https://raw.githubusercontent.com/coreui/coreui-free-react-admin-template/main/public/favicon.ico",
    "demoUrl": "https://coreui.io/react/",
    "sourceUrl": "https://github.com/coreui/coreui-free-react-admin-template",
    "tags": [
      "React",
      "Bootstrap",
      "Admin"
    ],
    "features": [
      "Real open-source source repository",
      "Customize UI and branding",
      "Reuse existing components"
    ],
    "techStack": [
      "React",
      "Bootstrap",
      "Admin"
    ],
    "priceEstimate": "Open source · Check license",
    "rating": 0,
    "reviewsCount": 0,
    "version": "Source repository",
    "lastUpdated": "See upstream",
    "isIllustrative": false,
    "demoTheme": {
      "accent": "#c9a96e",
      "bg": "#141414",
      "headline": "CoreUI React",
      "subheadline": "React admin template and component library"
    },
    "sampleCode": []
  },
  {
    "id": "shadcn",
    "name": "shadcn/ui",
    "category": "UI Components",
    "tagline": "Reusable accessible React components you can copy and customize",
    "description": "Reusable accessible React components you can copy and customize",
    "fullDescription": "Existing open-source project. Use the official source repository to clone, customize branding, and build your own app. Verify the license and dependencies before commercial use.",
    "imageUrl": "https://ui.shadcn.com/og.jpg",
    "detailImageUrl": "https://ui.shadcn.com/og.jpg",
    "demoUrl": "https://ui.shadcn.com/",
    "sourceUrl": "https://github.com/shadcn-ui/ui",
    "tags": [
      "React",
      "Tailwind",
      "Components"
    ],
    "features": [
      "Real open-source source repository",
      "Customize UI and branding",
      "Reuse existing components"
    ],
    "techStack": [
      "React",
      "Tailwind",
      "Components"
    ],
    "priceEstimate": "Open source · Check license",
    "rating": 0,
    "reviewsCount": 0,
    "version": "Source repository",
    "lastUpdated": "See upstream",
    "isIllustrative": false,
    "demoTheme": {
      "accent": "#c9a96e",
      "bg": "#141414",
      "headline": "shadcn/ui",
      "subheadline": "Reusable accessible React components you can copy and customize"
    },
    "sampleCode": []
  },
  {
    "id": "astro-cactus",
    "name": "Astro Cactus",
    "category": "Luxury Websites",
    "tagline": "Astro starter for editorial sites and blogs",
    "description": "Astro starter for editorial sites and blogs",
    "fullDescription": "Existing open-source project. Use the official source repository to clone, customize branding, and build your own app. Verify the license and dependencies before commercial use.",
    "imageUrl": "https://astro.build/assets/press/astro-logo-dark.png",
    "detailImageUrl": "https://astro.build/assets/press/astro-logo-dark.png",
    "demoUrl": "https://github.com/chrismwilliams/astro-theme-cactus",
    "sourceUrl": "https://github.com/chrismwilliams/astro-theme-cactus",
    "tags": [
      "Astro",
      "Tailwind",
      "Blog"
    ],
    "features": [
      "Real open-source source repository",
      "Customize UI and branding",
      "Reuse existing components"
    ],
    "techStack": [
      "Astro",
      "Tailwind",
      "Blog"
    ],
    "priceEstimate": "Open source · Check license",
    "rating": 0,
    "reviewsCount": 0,
    "version": "Source repository",
    "lastUpdated": "See upstream",
    "isIllustrative": false,
    "demoTheme": {
      "accent": "#c9a96e",
      "bg": "#141414",
      "headline": "Astro Cactus",
      "subheadline": "Astro starter for editorial sites and blogs"
    },
    "sampleCode": []
  },
  {
    "id": "commerce",
    "name": "Next.js Commerce",
    "category": "E-commerce",
    "tagline": "Open-source storefront starter by Vercel",
    "description": "Open-source storefront starter by Vercel",
    "fullDescription": "Existing open-source project. Use the official source repository to clone, customize branding, and build your own app. Verify the license and dependencies before commercial use.",
    "imageUrl": "https://nextjs.org/static/twitter-cards/home.jpg",
    "detailImageUrl": "https://nextjs.org/static/twitter-cards/home.jpg",
    "demoUrl": "https://github.com/vercel/commerce",
    "sourceUrl": "https://github.com/vercel/commerce",
    "tags": [
      "Next.js",
      "React",
      "Storefront"
    ],
    "features": [
      "Real open-source source repository",
      "Customize UI and branding",
      "Reuse existing components"
    ],
    "techStack": [
      "Next.js",
      "React",
      "Storefront"
    ],
    "priceEstimate": "Open source · Check license",
    "rating": 0,
    "reviewsCount": 0,
    "version": "Source repository",
    "lastUpdated": "See upstream",
    "isIllustrative": false,
    "demoTheme": {
      "accent": "#c9a96e",
      "bg": "#141414",
      "headline": "Next.js Commerce",
      "subheadline": "Open-source storefront starter by Vercel"
    },
    "sampleCode": []
  },
  {
    "id": "lucide",
    "name": "Lucide Icons",
    "category": "UI Components",
    "tagline": "Open-source icon library for apps and websites",
    "description": "Open-source icon library for apps and websites",
    "fullDescription": "Existing open-source project. Use the official source repository to clone, customize branding, and build your own app. Verify the license and dependencies before commercial use.",
    "imageUrl": "https://lucide.dev/logo.light.svg",
    "detailImageUrl": "https://lucide.dev/logo.light.svg",
    "demoUrl": "https://lucide.dev/icons/",
    "sourceUrl": "https://github.com/lucide-icons/lucide",
    "tags": [
      "Icons",
      "SVG",
      "React"
    ],
    "features": [
      "Real open-source source repository",
      "Customize UI and branding",
      "Reuse existing components"
    ],
    "techStack": [
      "Icons",
      "SVG",
      "React"
    ],
    "priceEstimate": "Open source · Check license",
    "rating": 0,
    "reviewsCount": 0,
    "version": "Source repository",
    "lastUpdated": "See upstream",
    "isIllustrative": false,
    "demoTheme": {
      "accent": "#c9a96e",
      "bg": "#141414",
      "headline": "Lucide Icons",
      "subheadline": "Open-source icon library for apps and websites"
    },
    "sampleCode": []
  },
  {
    "id": "echarts",
    "name": "Apache ECharts",
    "category": "Dashboards",
    "tagline": "Open-source interactive charts and data visualization",
    "description": "Open-source interactive charts and data visualization",
    "fullDescription": "Existing open-source project. Use the official source repository to clone, customize branding, and build your own app. Verify the license and dependencies before commercial use.",
    "imageUrl": "https://echarts.apache.org/en/images/logo.png",
    "detailImageUrl": "https://echarts.apache.org/en/images/logo.png",
    "demoUrl": "https://echarts.apache.org/examples/en/index.html",
    "sourceUrl": "https://github.com/apache/echarts",
    "tags": [
      "Charts",
      "JavaScript",
      "Analytics"
    ],
    "features": [
      "Real open-source source repository",
      "Customize UI and branding",
      "Reuse existing components"
    ],
    "techStack": [
      "Charts",
      "JavaScript",
      "Analytics"
    ],
    "priceEstimate": "Open source · Check license",
    "rating": 0,
    "reviewsCount": 0,
    "version": "Source repository",
    "lastUpdated": "See upstream",
    "isIllustrative": false,
    "demoTheme": {
      "accent": "#c9a96e",
      "bg": "#141414",
      "headline": "Apache ECharts",
      "subheadline": "Open-source interactive charts and data visualization"
    },
    "sampleCode": []
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
