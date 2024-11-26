"use client";

import React from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const Langue: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const changeLanguage = (lang: string) => {
    const params = new URLSearchParams(searchParams as any);
    params.set("locale", lang); // Définit la langue dans les paramètres de recherche

    router.push(`${pathname}?${params.toString()}`); // Redirige vers la nouvelle URL
  };

  return (
    <div className="flex flex-row items-center gap-2">
      <button
        onClick={() => changeLanguage("en")}
        className="flex items-center gap-2 px-4 py-2 border border-white rounded-md bg-black text-white hover:bg-gray-800 transition-all"
      >
        🇬🇧 <span>EN</span>
      </button>
      <button
        onClick={() => changeLanguage("fr")}
        className="flex items-center gap-2 px-4 py-2 border border-white rounded-md bg-black text-white hover:bg-gray-800 transition-all"
      >
        🇫🇷 <span>FR</span>
      </button>
    </div>
  );
};

export default Langue;