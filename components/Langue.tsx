"use client";

import React from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const SelecteurLangue: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const changeLanguage = (lang: string) => {
    const params = new URLSearchParams(searchParams as any);
    params.set("locale", lang); // Définit la langue dans les paramètres de recherche

    router.push(`${pathname}?${params.toString()}`); // Redirige vers la nouvelle URL
  };

  return (
    <div className="flex flex-row items-center gap-4">
      <button
        onClick={() => changeLanguage("en")}
        className="text-white hover:font-bold"
      >
        🇬🇧 EN
      </button>
      <button
        onClick={() => changeLanguage("fr")}
        className="text-white hover:font-bold"
      >
        🇫🇷 FR
      </button>
    </div>
  );
};

export default SelecteurLangue;