"use client";

import React from "react";
import { usePathname } from "next/navigation"; // Importer usePathname pour récupérer le chemin actuel
import Cobe from "./globe";
import SelecteurLangue from "./langue";
import menuItems from "./menuItems";

const Navbar: React.FC = () => {
  const pathname = usePathname(); // Récupérer le chemin actuel

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "transparent",
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo à gauche */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flex: "1",
        }}
      >
        <Cobe />
      </div>

      {/* Menu centré */}
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          margin: 0,
          padding: 0,
          flex: "2",
          justifyContent: "center",
        }}
      >
        {menuItems.map((item) => (
          <li
            key={item.path}
            style={{
              margin: "0 15px",
              position: "relative",
              transition: "transform 0.2s ease", // Transition pour l'effet de scale
            }}
          >
            <a
              href={item.path}
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "16px",
                fontWeight: pathname === item.path ? "bold" : "normal", // Gras si c'est la page active
                display: "inline-block", // Pour que le transform s'applique correctement
                transition: "transform 0.2s ease", // Transition fluide
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.2)"; // Agrandissement au survol
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)"; // Retour à la taille normale
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Langue à droite */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          flex: "1",
          marginRight: "25px", // Décalage du sélecteur
        }}
      >
        <SelecteurLangue />
      </div>
    </nav>
  );
};

export default Navbar;