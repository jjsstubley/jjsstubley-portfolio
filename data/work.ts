export interface WorkEntry {
  id: string;
  title: string;
  description: string;
  role?: string;
  impact?: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  status?: string[];
}

export const work: WorkEntry[] = [
  {
    id: "1",
    title: "CashuMarkets",
    description:
      "A social investing platform enabling users to access insights and engage with curated financial content.",
    role:"Led frontend development of the platform, building the core user experience, implementing SEO optimisation, and working closely with product to ship production features under tight deadlines.",
    impact: "Delivered a scalable frontend platform that improved content discoverability and engagement for a large and growing user base.",
    tech: ["React", "Next.js", "TypeScript", 'SEO optimisation'],
    liveUrl: "https://cashumarkets.com",
    status: ["Production", "Active Development"],
  },
  {
    id: "2",
    title: "IRX Platform",
    description:
      "An investor relations and publisher platform allowing companies and financial creators to manage and distribute content at scale.",
    role: "Architected and developed the frontend platform, building scalable React infrastructure and publishing workflows for companies and financial creators.",
    impact: "Enabled 50–60+ publishers to manage and distribute financial content through a scalable and maintainable frontend system.",
    tech: ["React", "Next.js", "TypeScript", "Recharts", "AI integration (development)"],
    liveUrl: "https://irx.cashugroup.com/",
    status: ["Production", "Active Development",],
  },
  {
    id: "3",
    title: "Rainmakr",
    description:
      "A financial search and discovery platform designed to streamline deal sourcing and improve visibility across M&A opportunities.",
    role:"Led development of core UX workflows and later architected the frontend for a second-generation platform redesign, focusing on scalable React architecture and performance optimisation.",
    impact: "Improved usability and performance of complex financial data workflows used for sourcing and analysing M&A opportunities.",
    tech: ["React", "Next.js", "GraphQL", "TypeScript", 'Laravel', 'Performance optimisation', 'Highcharts'],
    liveUrl: "https://rainmakr.ai",
    status: ["Production", "Client Platform"],
  },
  {
    id: "4",
    title: "Savana Asset Management",
    description:"A digital platform and marketing site for an asset management firm, designed to present investment products and financial insights.",
    role:"Developed the website using Webflow, implementing custom interactions and integrating 3D visual elements to create an engaging product showcase.",
    impact: "Delivered a visually engaging marketing platform helping communicate complex financial products in a clear and accessible way.",
    tech: ["Webflow", 'Chart.js'],
    liveUrl: "https://savana.ai",
    status: ["Production"],
  },
  {
    id: "5",
    title: "Filmarc",
    description:"A film discovery and curation platform focused on showcasing independent cinema and curated collections.",
    role:"Designed and built the full-stack application, implementing a custom search and discovery experience powered by external movie APIs.",
    impact: "Demonstrates full-stack product development, including API integration, search UX design, and scalable frontend architecture.",
    tech: ["React", "Remix", "TypeScript", 'API integration', 'AI integration'],
    liveUrl: "https://filmarc.vercel.app/",
    repoUrl: "https://github.com/jjsstubley/story-arc-app",
    status: ["Personal project", "Active Development"],
  },
  {
    id: "6",
    title: "Nannies by Nature",
    description:
      "A service-based website built to provide clear information, trust signals, and streamlined user experience for a childcare business.",
    impact:"Improved online visibility and accessibility for a small business through a fast, SEO-optimised marketing website.",
    tech: ["React", "Next.js", 'SEO optimisation'],
    liveUrl: "https://nanniesbynature.com.au",
    status: ["Production", "Active Development"],
  },
];
