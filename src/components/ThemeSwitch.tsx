"use client";

import { useTheme } from "@/context/ThemeProvider";

function ThemeSwitch() {
  const { mode, setMode } = useTheme();

  const handleThemeChange = () => {
    const theme = mode === "dark" ? "light" : "dark";

    setMode(theme);
    localStorage.theme = theme;
  };

  return (
    <div
      className="flex h-7 w-12 cursor-pointer items-center rounded-full bg-purple-100 px-1"
      onClick={handleThemeChange}
    >
      <div
        className={`h-5 w-5 rounded-[50%] bg-white transition-all ${
          mode === "dark" ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </div>
  );
}

export default ThemeSwitch;
