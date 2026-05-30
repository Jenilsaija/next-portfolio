import Footer from "@/components/Footer";
import "./globals.css";
import NavBar from "@/components/NavBar";
import ThreeBackground from "@/components/ThreeBackground";
import CustomCursor from "@/components/CustomCursor";
import Script from "next/script";

export const metadata = {
  title: "Jenil Saija | Full Stack & AI Developer | Founder of Sparktac",
  description: "Jenil Saija is a professional Full Stack Developer turned AI Consultant and founder of Sparktac. Specialized in MERN Stack, n8n workflow automation, and custom conversational AI agents.",
  keywords: "Jenil Saija, Sparktac, Full Stack Developer, AI Consultant, MERN Stack Developer, n8n automation, WhatsApp Business API, AI Agent developer, Next.js developer",
  openGraph: {
    title: "Jenil Saija | Full Stack & AI Developer",
    description: "Transforming businesses with intelligent MERN Stack and AI automation workflows.",
    url: "https://jenilsaija.com",
    siteName: "Jenil Saija Portfolio",
    type: "profile",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  // Structured JSON-LD SEO data markup
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jenil Saija",
    "jobTitle": "Full Stack Developer & AI Automation Consultant",
    "worksFor": {
      "@type": "Organization",
      "name": "Sparktac"
    },
    "description": "Founder of Sparktac and highly-driven Full Stack AI Developer specialized in n8n automation, MERN Stack, and WhatsApp Conversational AI.",
    "url": "https://jenilsaija.com",
    "sameAs": [
      "https://github.com/Jenilsaija",
      "https://linkedin.com"
    ]
  };

  return (
    <html
      lang="en"
    >
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        {/* Blocking theme initializer to prevent visual flash */}
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const theme = storedTheme || (prefersDark ? 'dark' : 'light');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `
          }}
        />
        {/* Inject Structured SEO schema */}
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-spaceBg text-textMain overflow-x-hidden selection:bg-primary/15 selection:text-primary transition-colors duration-300">
        {/* WebGL Lavender Drift Background */}
        <ThreeBackground />

        {/* Morphing Pointer trail */}
        <CustomCursor />

        {/* Navigation Bar */}
        <NavBar />

        {/* Main Content Layout */}
        <main className="relative z-10 w-full min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
