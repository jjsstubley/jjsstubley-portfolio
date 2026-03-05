import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { MouseTrail } from "./components/MouseTrail";

export const metadata: Metadata = {
  title: "Developer Portfolio | James Stubley",
  description:
    "Developer portfolio — building fast, accessible web experiences. Open for work.",
  openGraph: {
    title: "Developer Portfolio | James Stubley",
    description:
      "Developer portfolio — building fast, accessible web experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=document.documentElement.getAttribute('data-theme')||localStorage.getItem('portfolio-theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.setAttribute('data-theme','dark');}else{document.documentElement.setAttribute('data-theme','light');}})();`,
          }}
        />
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Your Name",
              description: "Developer portfolio — building fast, accessible web experiences.",
              url: "https://example.com",
            }),
          }}
        />
        <ThemeProvider>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          {children}
          <MouseTrail />
        </ThemeProvider>
      </body>
    </html>
  );
}
