import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Stars from "@/components/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
/*
export const metadata: Metadata = {
  metadataBase: new URL("https://ibiimemon.com/"),
  title: "Louis Bourguet Portfolio",
  description:
    "Developer Portfolio of Frontend & Mobile App Developer from Pakistan with 3+ years of expertise. Senior Software Engineer. Specializing mobile apps, UX, and JavaScript technologies.",
  keywords: [
    "Developer",
    "Portfolio",
    "Developer Portflio",
    "Ibrahim Memon",
    "Ibrahim",
    "IbiiMemon",
    "IbrahimMemon",
    "Ibrahim_Memon",
    "Next.js",
    "ReactNative",
    "Android",
  ],
  openGraph: {
    title: "Louis Bourguet Portfolio",
    description:
      "Frontend & Mobile App Developer from Pakistan with 3+ years of expertise. Senior Software Engineer. Specializing mobile apps, UX, and JavaScript technologies.",
    images: "/photo_profil.png",
  },
  alternates: {
    canonical: "https://ibiimemon.com/",
  },
};
*/


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) 
  


{
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="favicon.ico" />
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schexma.org",
              "@type": "Person",
              name: "Louis Bourguet",
              jobTitle: "Software Engineer",
              url: "https://ibiimemon.com",
              sameAs: [
                "https://www.linkedin.com/in/ibrahimmemonn/",
                "https://github.com/ibrahimmemonn",
              ],
            }),
          }}
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PRIVATE_GTID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-${process.env.NEXT_PRIVATE_GTID}');
            `,
          }}
        /> */}
      </head>
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <Stars />
        <Navbar />
        {/* Ajout de la balise <main> avec l'image de fond */}

          {children}

      </body>
    </html>
  );
}
