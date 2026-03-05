export interface TimelineEntry {
  id: string;
  date: string;
  label: string;
  title: string;
  description: string;
  tech?: string[];
  liveUrl?: string;
  repoUrl?: string;
  thumbnail?: string;
}

export const timeline: TimelineEntry[] = [
  {
    id: "1",
    date: "2024 – Present",
    label: "Current",
    title: "Senior Developer",
    description: "Building product experiences and internal tools. Leading front-end architecture and design systems.",
    tech: ["TypeScript", "React", "Next.js"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: "2",
    date: "2022 – 2024",
    label: "Previous",
    title: "Full Stack Developer",
    description: "Shipped features for a B2B platform. Worked across the stack with Node, React, and PostgreSQL.",
    tech: ["Node.js", "React", "PostgreSQL"],
    repoUrl: "https://github.com",
  },
  {
    id: "3",
    date: "2020 – 2022",
    label: "Earlier",
    title: "Frontend Developer",
    description: "Focused on responsive UIs and accessibility. Collaborated with design and product teams.",
    tech: ["JavaScript", "CSS", "Accessibility"],
  },
];
