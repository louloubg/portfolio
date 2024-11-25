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
    <div className="w-full h-[100px] bg-black fixed backdrop-blur-sm z-10 px-5 shadow-md">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        {/* Logo avec le globe descendu */}
        <a
          title="ibrahim logo"
          href="/"
          className="h-auto w-auto flex flex-row items-center"
          style={{ marginTop: "30px" }} // Descend encore plus le globe
        >
          <Cobe />
        </a>

        {/* Boutons de navigation */}
        <div className="flex flex-row gap-8">
          {menuItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={`text-white relative group ${
                isActive(item.path) ? "font-bold underline underline-offset-4" : ""
              }`}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all ${
                  isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;