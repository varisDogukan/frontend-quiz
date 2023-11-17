import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#26D782",
        red: "#EE5454",
        purple: {
          100: "#A729F5",
          500: "#D394FA",
          900: "#F6E7FF",
        },
        light: {
          500: "#ABC1E1", // light - bluish
          800: "#F4F6FA", // light grey
          900: "#FFFFFF", // pure white
        },
        dark: {
          100: "#313E51", // dark-navy
          200: "#3B4D66", // navy
          300: "#626C7F", // grey navy
        },
      },
      fontFamily: {
        rubik: ["var(--font-rubik)"],
      },
      boxShadow: {
        normal: "0px 16px 40px 0px rgba(143, 160, 193, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
