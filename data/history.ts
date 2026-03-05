export interface HistoryEntry {
  id: string;
  date: string;
  label: string;
  title: string;
  description: string;
  tech?: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export const history: HistoryEntry[] = [
  {
    id: "1",
    date: "2025 – Present",
    label: "Cashu",
    title: "Senior Frontend Engineer (Contract)",
    description:
      "Led frontend architecture and delivery across multiple SaaS platforms, focusing on scalable UI systems, performance, and maintainability.",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "component architecture",
      "performance optimisation",
      "SEO",
      "API integration",
    ],
  },
  {
    id: "2",
    date: "2018 – 2024",
    label: "ScarlettMadz Media",
    title: "Senior Frontend Developer",
    description:
      "Designed and built financial web applications, including search and discovery tools for M&A deal origination, and led migration from AngularJS to Next.js.",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "GraphQL",
      "AngularJS migration",
      "SEO optimisation",
      "performance tuning",
      "scalable UI architecture",
    ],
  },
  {
    id: "3",
    date: "2012 – 2017",
    label: "Tribal DDB",
    title: "Frontend Developer",
    description:
      "Delivered accessible, performance-focused digital experiences for major enterprise brands in a collaborative agency environment.",
    tech: [
      "JavaScript",
      "React",
      "responsive design",
      "accessibility standards",
      "cross-browser testing",
      "performance optimisation",
    ],
  },
];
