// // src/data/siteData.js
// import { I } from "../components/Icon";

// export const NAV_ITEMS = [
//   { label: "Home", id: "home" },
//   { label: "Tech", id: "tech" },
//   { label: "Services", id: "services" },
//   { label: "Portfolio", id: "portfolio" },
//   { label: "Trust", id: "trust" },
//   { label: "Process", id: "process" },
//   { label: "Pricing", id: "pricing" },
//   { label: "Reviews", id: "reviews" },
//   { label: "Contact", id: "contact" },
// ];

// export const SKILLS = [
//   { name: "React.js", icon: "⚛️" },
//   { name: "Node.js", icon: "🟢" },
//   { name: "Tailwind CSS", icon: "🎨" },
//   { name: "JavaScript", icon: "⚡" },
//   { name: "HTML5 & CSS3", icon: "🌐" },
//   { name: "MongoDB", icon: "🍃" },
//   { name: "Firebase", icon: "🔥" },
//   { name: "REST APIs", icon: "🔗" },
//   { name: "Next.js", icon: "▲" },
// ];

// export const SERVICES = [
//   {
//     Icon: I.Globe,
//     title: "Modern Website Development",
//     desc: "Business websites, portfolios, landing pages, and web apps built for performance and growth.",
//   },
//   {
//     Icon: I.Box,
//     title: "3D Website Development",
//     desc: "Interactive 3D experiences, immersive UI animations and cutting-edge visual storytelling.",
//   },
//   {
//     Icon: I.Palette,
//     title: "UI / UX Design",
//     desc: "Clean, mobile-first layouts that guide users intuitively and convert visitors into clients.",
//   },
//   {
//     Icon: I.Pen,
//     title: "Logo & Branding",
//     desc: "Memorable logos, brand identities, color palettes and typography systems.",
//   },
//   {
//     Icon: I.Search,
//     title: "SEO & Performance",
//     desc: "Technical SEO, blazing-fast load times, and Google-friendly structure.",
//   },
//   {
//     Icon: I.Cart,
//     title: "E-Commerce Solutions",
//     desc: "Full online stores with payment integration, product management and seamless checkout.",
//   },
// ];

// export const PORTFOLIO_ITEMS = [
//   {
//     id: 1,
//     title: "TechFlow SaaS",
//     cat: "Business",
//     tags: ["React", "Node.js", "Tailwind"],
//     color: "135deg,#1d8cf8,#00d4ff",
//     emoji: "🚀",
//     desc: "SaaS dashboard with real-time analytics & billing.",
//   },
//   {
//     id: 2,
//     title: "Luxe Fashion Store",
//     cat: "E-commerce",
//     tags: ["Next.js", "Firebase", "Stripe"],
//     color: "135deg,#7c3aed,#c026d3",
//     emoji: "🛍️",
//     desc: "High-end fashion store with AR try-on feature.",
//   },
//   {
//     id: 3,
//     title: "ArchViz 3D Showcase",
//     cat: "3D",
//     tags: ["Three.js", "GSAP", "WebGL"],
//     color: "135deg,#0891b2,#1d8cf8",
//     emoji: "🌐",
//     desc: "Immersive 3D architecture visualization website.",
//   },
//   {
//     id: 4,
//     title: "GreenBite Restaurant",
//     cat: "Landing",
//     tags: ["HTML5", "CSS3", "JavaScript"],
//     color: "135deg,#16a34a,#0891b2",
//     emoji: "🍃",
//     desc: "Restaurant site with online ordering & reservations.",
//   },
//   {
//     id: 5,
//     title: "CryptoVault Dash",
//     cat: "Business",
//     tags: ["React", "REST API", "Chart.js"],
//     color: "135deg,#d97706,#dc2626",
//     emoji: "📈",
//     desc: "Crypto portfolio tracker with live charts & alerts.",
//   },
//   {
//     id: 6,
//     title: "Orbis Brand Identity",
//     cat: "Branding",
//     tags: ["Figma", "Illustrator", "Brand"],
//     color: "135deg,#6d28d9,#1d8cf8",
//     emoji: "✦",
//     desc: "Full brand identity, logo system and style guide.",
//   },
// ];

// export const PORT_CATS = [
//   "All",
//   "Business",
//   "Landing",
//   "3D",
//   "E-commerce",
//   "Branding",
// ];

// export const TRUST_ITEMS = [
//   {
//     Icon: I.Zap,
//     title: "Fast Delivery",
//     desc: "We ship projects on time, every time—no excuses, no delays.",
//   },
//   {
//     Icon: I.Headphone,
//     title: "Reliable Support",
//     desc: "Dedicated support before, during, and long after your launch.",
//   },
//   {
//     Icon: I.Target,
//     title: "Result-Focused Approach",
//     desc: "Every decision is tied directly to measurable business outcomes.",
//   },
//   {
//     Icon: I.Shield,
//     title: "Secure & Scalable Code",
//     desc: "Enterprise-grade security and architecture built to grow with you.",
//   },
//   {
//     Icon: I.Dollar,
//     title: "Affordable Pricing",
//     desc: "Premium quality at startup-friendly rates. Maximum ROI guaranteed.",
//   },
// ];

// export const PROCESS_STEPS = [
//   {
//     Icon: I.Bulb,
//     num: "01",
//     title: "Discover Your Idea & Goals",
//     desc: "We dig deep into your vision, audience and business objectives.",
//   },
//   {
//     Icon: I.Layout,
//     num: "02",
//     title: "Plan & Design",
//     desc: "Wireframes, prototypes and a design system aligned to your brand.",
//   },
//   {
//     Icon: I.Code,
//     num: "03",
//     title: "Development",
//     desc: "Clean, scalable code with modern frameworks and best practices.",
//   },
//   {
//     Icon: I.Flask,
//     num: "04",
//     title: "Testing & Optimization",
//     desc: "Rigorous QA, performance tuning and cross-device testing.",
//   },
//   {
//     Icon: I.Rocket,
//     num: "05",
//     title: "Launch & Support",
//     desc: "Seamless deployment with ongoing maintenance and monitoring.",
//   },
// ];

// export const PRICING_PLANS = [
//   {
//     name: "Starter",
//     price: "₹4,999",
//     delivery: "3–5 days",
//     popular: false,
//     desc: "Perfect for personal projects and simple landing pages.",
//     features: [
//       "Single page website",
//       "Mobile responsive",
//       "Basic SEO setup",
//       "1 revision round",
//       "3-day delivery",
//       "Email support",
//     ],
//   },
//   {
//     name: "Business",
//     price: "₹12,999",
//     delivery: "7–10 days",
//     popular: true,
//     desc: "Ideal for growing businesses that need a powerful presence.",
//     features: [
//       "Up to 10 pages",
//       "Custom UI/UX design",
//       "Advanced SEO",
//       "Contact form",
//       "3 revision rounds",
//       "CMS integration",
//       "Priority support",
//     ],
//   },
//   {
//     name: "Premium",
//     price: "₹29,999",
//     delivery: "14–21 days",
//     popular: false,
//     desc: "Full-scale digital products and complex web applications.",
//     features: [
//       "Unlimited pages",
//       "Custom web application",
//       "API integrations",
//       "E-commerce ready",
//       "3D / immersive features",
//       "Dedicated manager",
//       "12-month support",
//     ],
//   },
// ];

// export const SAMPLE_REVIEWS = [
//   {
//     name: "Arjun Mehta",
//     role: "Startup Founder",
//     rating: 5,
//     text: "Webostic delivered our SaaS landing 2 weeks early. Design is stunning and conversions doubled since launch!",
//   },
//   {
//     name: "Sara Lindqvist",
//     role: "E-commerce Owner",
//     rating: 5,
//     text: "From branding to full store build — professional, fast and the results speak for themselves.",
//   },
//   {
//     name: "Diego Fuentes",
//     role: "Creative Director",
//     rating: 4,
//     text: "The 3D portfolio they built for us breaks the internet every time we share it. Absolute pros.",
//   },
// ];

// export const WA_NUMBER = "919999999999"; // replace with real

import { Icon } from "lucide-react";
import { I } from "../components/Icon";
import portfolioImg from "../assets/harshportfolio.jpg";
import namoImg from "../assets/namo.jpg";

import {
  User,
  Monitor,
  Code2,
  ShoppingCart,
  Palette,
  BarChart3,
} from "lucide-react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaFigma,
  FaLink,
  FaSearch,
  FaSitemap,
  FaBullseye,
  FaChartLine,
  FaPalette,
  FaPenNib,
  FaBezierCurve,
  FaLayerGroup,
  FaPencilRuler,
  FaServer,
  FaDatabase,
  FaFire,
  FaBolt,
  FaCode,
  FaCube,
  FaKey,
  FaLeaf,
  FaPaintBrush,
} from "react-icons/fa";

export const NAV_ITEMS = [
  { label: "Home", id: "home" },
  // { label: "Tech", id: "tech" },
  { label: "Services", id: "services" },
  { label: "Projects", id: "projects" },
  { label: "Blog", id: "blog" },
  { label: "About", id: "about" },
  // { label: "Process", id: "process" },
  // { label: "Pricing", id: "pricing" },
  // { label: "Reviews", id: "reviews" },
  { label: "Contact", id: "contact" },
];

export const SKILLS = [
  // Frontend
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "TypeScript", icon: FaCode, color: "#3178C6" },
  { name: "React.js", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: FaCode, color: "#ffffff" },
  { name: "Redux", icon: FaLayerGroup, color: "#764ABC" },
  { name: "Tailwind CSS", icon: FaPaintBrush, color: "#38BDF8" },
  { name: "Bootstrap", icon: FaLayerGroup, color: "#7952B3" },
  { name: "Sass", icon: FaPaintBrush, color: "#CC6699" },
  { name: "Vite", icon: FaBolt, color: "#A855F7" },
  { name: "Three.js", icon: FaCube, color: "#ffffff" },

  // Backend
  { name: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
  { name: "Express.js", icon: FaServer, color: "#ffffff" },
  { name: "MongoDB", icon: FaLeaf, color: "#47A248" },
  { name: "MySQL", icon: FaDatabase, color: "#4479A1" },
  { name: "PostgreSQL", icon: FaDatabase, color: "#336791" },
  { name: "Firebase", icon: FaFire, color: "#FFCA28" },
  { name: "Supabase", icon: FaDatabase, color: "#3ECF8E" },
  { name: "Socket.io", icon: FaLink, color: "#ffffff" },
  { name: "JWT Auth", icon: FaKey, color: "#F59E0B" },
  { name: "REST APIs", icon: FaLink, color: "#60A5FA" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },

  // UI / UX
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
  { name: "Adobe XD", icon: FaPencilRuler, color: "#FF61F6" },
  { name: "Photoshop", icon: FaPaintBrush, color: "#31A8FF" },
  { name: "Illustrator", icon: FaBezierCurve, color: "#FF9A00" },
  { name: "Canva", icon: FaPalette, color: "#00C4CC" },
  { name: "Wireframing", icon: FaBezierCurve, color: "#A78BFA" },
  { name: "Prototyping", icon: FaLayerGroup, color: "#22D3EE" },
  { name: "Design Systems", icon: FaPencilRuler, color: "#F472B6" },

  // SEO
  { name: "SEO", icon: FaSearch, color: "#22C55E" },
  { name: "Technical SEO", icon: FaSitemap, color: "#38BDF8" },
  { name: "On-Page SEO", icon: FaBullseye, color: "#F97316" },
  { name: "Keyword Research", icon: FaChartLine, color: "#8B5CF6" },
  { name: "Google Analytics", icon: FaChartLine, color: "#F59E0B" },
  { name: "Search Console", icon: FaSearch, color: "#4285F4" },

  // Logo / Branding
  { name: "Logo Design", icon: FaPenNib, color: "#F43F5E" },
  { name: "Brand Identity", icon: FaPalette, color: "#A855F7" },
  { name: "Vector Design", icon: FaBezierCurve, color: "#06B6D4" },
];

export const SERVICES = [
  {
    Icon: I.Globe,
    title: "Modern Website Development",
    desc: "We build fast, modern websites with React and Next.js, optimized for performance, SEO, and conversions. from sleek landing pages to powerful web applications.",
    features: [
      "React / Next.js",
      "Responsive Across All Devices",
      "SEO & Core Web Vitals Optimized",
      "Custom UI/UX Design",
    ],
  },
  {
    Icon: I.Box,
    title: "3D Website Development",
    desc: "High-performance 3D websites designed with interactive visuals, fluid animations, and modern experiences that capture attention instantly.",
    features: [
      "Interactive 3D Experiences",
      "Advanced Motion Animations",
      "Cinematic UI Animations",
      "Immersive Visual Storytelling",
    ],
  },
  {
    Icon: I.Palette,
    title: "UI / UX Design",
    desc: "Modern UI/UX design focused on clarity, usability, and creating smooth digital experiences across every device.",
    features: [
      "Intuitive User Experience",
      "Responsive Interface Design",
      "Modern Design Systems",
      "Interactive Prototypes",
    ],
  },
  {
    Icon: I.Pen,
    title: "Logo & Branding",
    desc: "Build a memorable brand identity with custom logos, color systems, and typography designed to make your business instantly recognizable.",
    features: [
      "Logo Design",
      "Brand Strategy & Guidelines",
      "Curated Color Systems",
      "Modern Typography Selection",
    ],
  },
  {
    Icon: I.Search,
    title: "SEO & Performance",
    desc: "Grow your online presence with SEO strategies designed to increase visibility, drive organic traffic, and generate long-term results.",
    features: [
      "Advanced Keyword Strategy",
      "Technical SEO Optimization",
      "Content & On-Page SEO",
      "Growth & Analytics Reporting",
    ],
  },
  {
    Icon: I.Cart,
    title: "E-Commerce Solutions",
    desc: "We build modern e-commerce websites with seamless shopping experiences, secure payments, and scalable solutions designed to grow your business.",
    features: [
      "Custom E-Commerce Development",
      "Product & Inventory Management",
      "Mobile-Friendly Store Design",
      "Multi-Payment Gateway Support",
    ],
  },
];

export const PROJECTS_ITEMS = [
  {
    id: 1,
    title: "Portfolio Website",
    cat: "Portfolio",
    tags: ["Portfolio", "Animations", "Responsive"],
    img: portfolioImg,
    live: "https://harshjainportfolio.netlify.app/",
    color: "135deg,#16a34a,#0891b2",
    desc: "Personal portfolio with smooth animations.",
  },

  {
    id: 2,
    title: "Velcor ai",
    cat: "B2B Services",
    tags: ["React", "Tailwind", "B2B"],
    img: velcorImg,
    live: "https://www.velcor.ai/",
    color: "135deg,#6d28d9,#1d8cf8",
    desc: "Services sold to other businesses.",
  },

  {
    id: 3,
    title: "Namo Production",
    cat: "Business",
    tags: ["React", "Tailwind", "Landing"],
    img: namoImg,
    live: "https://lazyboyharsh.github.io/namo-production/index.html",
    color: "135deg,#6d28d9,#1d8cf8",
    desc: "Production company profile website.",
  },

  {
    id: 4,
    title: "TechFlow SaaS",
    cat: "Business",
    tags: ["React", "Node.js", "Tailwind"],
    color: "135deg,#1d8cf8,#00d4ff",
    emoji: "🚀",
    desc: "SaaS dashboard with real-time analytics & billing.",
  },
  {
    id: 5,
    title: "Luxe Fashion Store",
    cat: "E-commerce",
    tags: ["Next.js", "Firebase", "Stripe"],
    color: "135deg,#7c3aed,#c026d3",
    emoji: "🛍️",
    desc: "High-end fashion store with AR try-on feature.",
  },
  {
    id: 6,
    title: "ArchViz 3D Showcase",
    cat: "3D",
    tags: ["Three.js", "GSAP", "WebGL"],
    color: "135deg,#0891b2,#1d8cf8",
    emoji: "🌐",
    desc: "Immersive 3D architecture visualization website.",
  },
  {
    id: 7,
    title: "GreenBite Restaurant",
    cat: "Landing",
    tags: ["HTML5", "CSS3", "JavaScript"],
    color: "135deg,#16a34a,#0891b2",
    emoji: "🍃",
    desc: "Restaurant site with online ordering & reservations.",
  },
  {
    id: 8,
    title: "CryptoVault Dash",
    cat: "Business",
    tags: ["React", "REST API", "Chart.js"],
    color: "135deg,#d97706,#dc2626",
    emoji: "📈",
    desc: "Crypto portfolio tracker with live charts & alerts.",
  },
  {
    id: 9,
    title: "Orbis Brand Identity",
    cat: "Branding",
    tags: ["Figma", "Illustrator", "Brand"],
    color: "135deg,#6d28d9,#1d8cf8",
    emoji: "✦",
    desc: "Full brand identity, logo system and style guide.",
  },
];

export const PORT_CATS = [
  "All",
  "Portfolio",
  "Business",
  "Landing",
  "3D",
  "E-commerce",
  "Branding",
];

export const TRUST_ITEMS = [
  {
    Icon: I.Zap,
    title: "Lightning Fast Delivery",
    desc: "We ship projects in 5-7 days, every time, no excuses, no delays.",
  },
  {
    Icon: I.Headphone,
    title: "Reliable Support",
    desc: "Reliable support before, during, and after launch to keep everything running smoothly.",
  },
  {
    Icon: I.Target,
    title: "Result-Focused Approach",
    desc: "Every decision is focused on performance, user experience, and measurable business growth.",
  },
  {
    Icon: I.Shield,
    title: "Secure & Scalable Development",
    desc: "Modern architecture and secure code built to support long-term scalability.",
  },
  {
    Icon: I.Dollar,
    title: "Transparent Pricing",
    desc: "Clear, straightforward pricing with no hidden costs or unexpected surprises.",
  },
  {
    Icon: I.Search,
    title: "SEO & Performance Optimization",
    desc: "Websites engineered for fast loading, visibility, and strong search performance.",
  },
];

export const PROCESS_STEPS = [
  {
    Icon: I.Bulb,
    num: "01",
    title: "Discover Your Idea & Goals",
    desc: "We dig deep into your vision, audience and business objectives.",
  },
  {
    Icon: I.Layout,
    num: "02",
    title: "Plan & Design",
    desc: "Wireframes, prototypes and a design system aligned to your brand.",
  },
  {
    Icon: I.Code,
    num: "03",
    title: "Development",
    desc: "Clean, scalable code with modern frameworks and best practices.",
  },
  {
    Icon: I.Flask,
    num: "04",
    title: "Testing & Optimization",
    desc: "Rigorous QA, performance tuning and cross-device testing.",
  },
  {
    Icon: I.Rocket,
    num: "05",
    title: "Launch & Support",
    desc: "Seamless deployment with ongoing maintenance and monitoring.",
  },
];

export const PRICING_PLANS = [
  {
    id: "portfolio",
    icon: User,
    name: "Portfolio Website",
    tagline: "For freelancers & personal brands",
    desc: "A clean, fast single-page website that showcases your skills, work, and contact info. Perfect for designers, developers, photographers, and consultants.",
    price: "₹2,999",
    originalPrice: "₹5,999",
    period: "one-time",
    deliveryDays: 3,
    // revisions: 2,
    features: [
      "Professional single-page / multi-section layout",
      "Mobile-first responsive design",
      "Contact form with email notification",
      "Social media & portfolio links",
      "Google-optimized page speed",
      "Basic on-page SEO setup",
    ],
    notIncluded: ["Domain & Hosting", "Content Writing"],
    cta: "Get Portfolio",
    color: "blue",
    isPopular: false,
  },
  {
    id: "business",
    icon: Monitor,
    name: "Company Profile",
    tagline: "For small & growing businesses",
    desc: "A complete multi-page website that builds credibility, captures leads, and communicates your services professionally to every visitor.",
    price: "₹4,999",
    originalPrice: "₹9,999",
    period: "one-time",
    deliveryDays: 7,
    // revisions: 3,
    features: [
      "5 fully designed pages",
      "Mobile-responsive layout",
      "Business inquiry & lead capture form",
      "Google Maps & location integration",
      "WhatsApp floating chat button",
      "Photo gallery & testimonials section",
    ],
    notIncluded: ["Domain & Hosting", "Content Writing"],
    cta: "Get Business Site",
    color: "orange",
    isPopular: true,
  },
  {
    id: "business-react",
    icon: Code2,
    name: "React JS Company Profile",
    tagline: "For businesses that want modern performance",
    desc: "A blazing-fast, modern company website built with React JS — smooth animations, dynamic UI, and a premium feel that sets you apart from the competition.",
    price: "₹10,999",
    originalPrice: "₹19,999",
    period: "one-time",
    deliveryDays: 10,
    revisions: 2,
    features: [
      "5–7 fully designed React pages",
      "Smooth animations & page transitions",
      "Mobile-responsive & blazing fast",
      "Business inquiry & lead capture form",
      "Google Maps & location integration",
      "WhatsApp floating chat button",
      "Photo gallery & testimonials section",
      "Basic SEO meta tags & sitemap",
      "Google Analytics setup",
    ],
    notIncluded: ["Domain & Hosting", "Content Writing"],
    cta: "Get React Site",
    color: "blue",
    isPopular: false,
  },
  {
    id: "business-advanced",
    icon: Monitor,
    name: "Advanced Company Profile",
    tagline: "For established businesses that need more",
    desc: "A feature-rich, fully optimized company website with advanced functionality, SEO setup, analytics, and everything you need to dominate your market online.",
    price: "₹19,999",
    originalPrice: "₹35,000",
    period: "one-time",
    deliveryDays: 14,
    revisions: 3,
    features: [
      "8–10 fully designed pages",
      "Mobile-responsive & high-performance build",
      "Advanced lead capture & inquiry forms",
      "Google Maps & location integration",
      "WhatsApp floating chat button",
      "Photo gallery & testimonials section",
      "Blog / news section setup",
      "Basic SEO meta tags & sitemap",
      "Google Analytics 4 setup",
      "Live chat widget integration",
      "Social media feed integration",
    ],
    notIncluded: ["Domain & Hosting", "Content Writing"],
    cta: "Get Advanced Site",
    color: "purple",
    isPopular: false,
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    name: "E-commerce Store",
    tagline: "For selling products online 24/7",
    desc: "A complete online store with product management, secure checkout, and order tracking — everything you need to start and scale your online sales.",
    price: "₹24,999",
    originalPrice: "₹45,000",
    period: "starting",
    deliveryDays: 21,
    revisions: 5,
    features: [
      "Full product catalog & management",
      "Razorpay / Stripe payment gateway",
      "Shopping cart & secure checkout",
      "Admin dashboard to manage orders",
      "Customer accounts & login",
      "Order management & email notifications",
      "Inventory management",
      "Mobile-optimized shopping experience",
    ],
    notIncluded: ["Domain & Hosting", "Product Photography"],
    cta: "Start Selling",
    color: "green",
    isPopular: false,
  },
  {
    id: "branding",
    icon: Palette,
    name: "Logo & Branding",
    tagline: "For brands that want to stand out",
    desc: "A complete visual identity package — from logo design to brand guidelines — crafted to make a lasting impression on your audience.",
    price: "₹3,999",
    originalPrice: "₹7,999",
    period: "package",
    deliveryDays: 5,
    revisions: 3,
    features: [
      "3 unique logo concepts to choose from",
      "Vector source files (AI, EPS, SVG)",
      "High-res PNG & JPG for all uses",
      "Brand color palette with hex codes",
      "Typography & font usage guide",
      "Social media kit (profile + cover)",
    ],
    notIncluded: ["Website Design", "Print Materials"],
    cta: "Get Branding",
    color: "purple",
    isPopular: false,
  },
  {
    id: "analytics",
    icon: BarChart3,
    name: "SEO & Analytics",
    tagline: "For businesses that want to rank higher",
    desc: "Monthly SEO management and analytics reporting that drives consistent organic traffic to your website — turning Google into your #1 lead source.",
    price: "₹4,999",
    originalPrice: null,
    period: "per month",
    deliveryDays: null,
    revisions: null,
    features: [
      "Google Analytics 4 & Search Console setup",
      "Monthly traffic & ranking report",
      "User behavior heatmaps (Hotjar)",
      "On-page SEO optimization",
      "Keyword research & tracking",
      "Competitor analysis",
      "Conversion rate recommendations",
      "Monthly strategy call",
    ],
    notIncluded: ["Content Writing", "Paid Ads Management"],
    cta: "Start Ranking",
    color: "teal",
    isPopular: false,
  },
  {
    id: "custom",
    icon: Code2,
    name: "Custom Build",
    tagline: "For complex & unique requirements",
    desc: "Have a big idea or complex project? We build custom web apps, SaaS platforms, and API-driven systems from scratch using modern technologies.",
    price: "Let's Talk",
    originalPrice: null,
    period: "",
    deliveryDays: null,
    revisions: null,
    features: [
      "Custom web application development",
      "Third-party API integrations",
      "SaaS product development",
      "Complex database architecture",
      "Scalable cloud-ready infrastructure",
      "Dedicated project manager",
      "Weekly progress updates",
      "Post-launch support & SLA",
    ],
    notIncluded: [],
    cta: "Discuss Project",
    color: "gray",
    isPopular: false,
  },
];

//pricing project process steps

export const PROJECT_PROCESS_STEPS = [
  {
    Icon: I.Layout,
    num: "01",
    title: "You Reach Out",
    desc: "Fill out the form or click any plan CTA. Tell us what you need.",
  },
  {
    Icon: I.Bulb,
    num: "02",
    title: "We Scope & Quote",
    desc: "We understand your requirements and send a clear, detailed proposal.",
  },
  {
    Icon: I.Code,
    num: "03",
    title: "We Build",
    desc: "You relax while we design and develop - with updates along the way.",
  },
  {
    Icon: I.Rocket,
    num: "04",
    title: "Launch & Support",
    desc: "Go live with confidence. We stay on for 30 days post - launch.",
  },
];

// pricing project process FAQ

export const PROJECT_FAQ = [
  {
    question: "Are Domain and Hosting included in the prices?",
    answer:
      "No, domain and hosting are not included. Domain registration typically costs ₹800–₹1,500/year, and good hosting starts at ₹2,000–₹5,000/year. We can recommend reliable providers and help you set everything up — just let us know.",
  },
  {
    question: "How long does the Company Profile website take to build?",
    answer:
      "Standard Company Profile websites are delivered within 5–7 working days from the date we receive all your content (text, images, logo). If content isn't ready, we can guide you on what's needed.",
  },
  {
    question: "Can I upgrade my portfolio or business website later?",
    answer:
      "Absolutely. All our websites are built to be scalable. You can start with a basic plan and upgrade to add more pages, an e-commerce section, or advanced features at any point. We make transitions seamless.",
  },
  {
    question: "Do you offer post-launch maintenance and support?",
    answer:
      "Yes, every project includes 30 days of free post-launch support for bug fixes. After that, we offer monthly maintenance packages to handle updates, backups, security patches, and content changes.",
  },
  {
    question: "Can I order just a Logo without a website?",
    answer:
      "Yes! The Logo & Branding package is 100% standalone. You don't need to purchase a website. We'll deliver all source files and brand assets directly to you.",
  },
  {
    question: "What if I need changes after delivery?",
    answer:
      "Each plan includes a set number of revisions (listed on each card). Revisions beyond the included rounds are billed at ₹500/hour. We always communicate clearly so surprises don't happen.",
  },
  {
    question: "Do you work with clients outside India?",
    answer:
      "Yes, we serve clients worldwide. We accept international payments via bank transfer, Wise, or PayPal. Pricing for international clients may be quoted in USD on request.",
  },
];

export const SAMPLE_REVIEWS = [
  {
    name: "Arjun Mehta",
    role: "Startup Founder",
    rating: 5,
    text: "Webostic delivered our SaaS landing 2 weeks early. Design is stunning and conversions doubled since launch!",
  },
  {
    name: "Sara Lindqvist",
    role: "E-commerce Owner",
    rating: 5,
    text: "From branding to full store build — professional, fast and the results speak for themselves.",
  },
  {
    name: "Diego Fuentes",
    role: "Creative Director",
    rating: 4,
    text: "The 3D portfolio they built for us breaks the internet every time we share it. Absolute pros.",
  },
];

export const WA_NUMBER = "919310418876"; // replace with real
