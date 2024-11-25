"use client";

import React from "react";
import { usePathname } from "next/navigation";
import menuItems from "../app/menuItems"; // Import des routes
import { Cobe } from "./Globe";

const Navbar: React.FC<{}> = () => {
  const pathname = usePathname(); // Récupère la route actuelle

  // Vérifie si le lien est actif
  const isActive = (path: string) => pathname === path || (pathname === "/" && path === "/");

  return (
    <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
      {/* Logo avec le globe descendu */}
      <a
        title="ibrahim logo"
        href="/"
        className="h-auto w-auto flex flex-row items-center"
      >
        <Cobe />
      </a>
    
      {/* Boutons de navigation */}
      <div className="flex flex-row gap-10 mr-[5%]">
        {menuItems.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className={`text-white relative group ${
              isActive(item.path) ? "font-bold" : ""
            }`} // Supprimé underline et underline-offset-4
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;