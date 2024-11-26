import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Stars from "@/components/stars";
import Navbar from "@/components/navbar";
import Cobe from "@/components/globe"
import Langue from "@/components/langue"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="favicon.ico" />
      </head>
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >

        {/* Image en arrière-plan */}
        <div
          style={{ position: "absolute", top: 0, height: "100%", left: "50px", zIndex: -20 }}
        >
          <Image
            src="/LooperGroup2.png" // Chemin vers l'image
          />
        </div>

        {/* fond étoilé */}
        <div className="absolute top-0 left-0 w-full h-full -z-1">
          <Stars />
        </div>

        {/* logo 3d */}
        <div
          style={{
            position: "absolute",
            top: "10px", // Décalage depuis le haut
            left: "10px", // Décalage depuis la gauche
            zIndex: 10, // Assurez-vous que le logo reste visible au-dessus des autres éléments
          }}
        >
          <Cobe />
        </div>

        <Navbar />

        {/* langue */}
        <div
          style={{
            position: "absolute", // Permet de positionner le composant par rapport à son conteneur parent
            top: "55px", // Distance depuis le haut
            right: "10px", // Distance depuis la droite
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "25px", // Décalage du sélecteur
          }}
        >
          <Langue />
        </div>

      </body>
    </html >
  );
}
