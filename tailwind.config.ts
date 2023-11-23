import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
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
        light: "0px 16px 40px 0px rgba(143, 160, 193, 0.14)",
        dark: "0px 16px 40px 0px rgba(49, 62, 81, 0.14)",
      },
      backgroundImage: {
        "img-mobile-dark":
          "url(/assets/images/pattern-background-mobile-dark.svg)",
        "img-mobile-light":
          "url(/assets/images/pattern-background-mobile-light.svg)",

        "img-tablet-dark":
          "url(/assets/images/pattern-background-tablet-dark.svg)",
        "img-tablet-light":
          "url(/assets/images/pattern-background-tablet-light.svg)",

        "img-desktop-dark":
          "url(/assets/images/pattern-background-desktop-dark.svg)",
        "img-desktop-light":
          "url(/assets/images/pattern-background-desktop-light.svg)",
      },
    },
    screens: {
      md: "768px",
      xl: "1440px",
    },
  },
  plugins: [],
};

export default config;
