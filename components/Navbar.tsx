"use client";

import React from "react";
import { usePathname } from "next/navigation";
import menuItems from "../app/menuItems"; // Import des routes
import { Cobe } from "./Globe";
import SelecteurLangue from "./Langue"; // Importez le composant de sélection de langue
import Link from "next/link"; // Import de Link

const Navbar: React.FC = () => {
  const pathname = usePathname(); // Récupère la route actuelle

  // Vérifie si le lien est actif
  const isActive = (path: string) =>
    pathname === path || (pathname === "/" && path === "/");

  return (
    <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
      {/* Logo avec le globe */}
      <Link href="/" title="ibrahim logo" className="h-auto w-auto flex flex-row items-center">
        <Cobe />
      </Link>

      {/* Boutons de navigation */}
      <div className="flex flex-row items-center gap-10 mr-[3%]">
      {menuItems.map((item) => (
  <Link
    key={item.path}
    href={item.path}
    className={`text-white relative group ${
      isActive(item.path) ? "font-bold" : ""
    }`}
  >
    {item.label}
  </Link>
))}
        {/* Sélecteur de langue */}
        <SelecteurLangue />
      </div>
    </div>
  );
};

export default Navbar;