"use client";

import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";
import { useTheme } from "@/context/ThemeProvider";

function Theme() {
  const { mode } = useTheme();

  return (
    <div className="ml-auto flex items-center gap-4">
      <Image
        src={`/assets/images/${
          mode === "dark" ? "icon-sun-light.svg" : "icon-sun-dark.svg"
        }`}
        width={24}
        height={24}
        alt="theme sun icon"
      />

      <ThemeSwitch />

      <Image
        src={`/assets/images/${
          mode === "dark" ? "icon-moon-light.svg" : "icon-moon-dark.svg"
        }`}
        width={24}
        height={24}
        alt="theme sun icon"
      />
    </div>
  );
}

export default Theme;
