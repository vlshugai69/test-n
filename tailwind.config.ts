import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "479px",
      sm: "769px",
      md: "991px",
      lg: "1440px",
      xl: "1920px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "hero-bg": "url('/images/hero-background.png')",
      },
      backgroundSize: {
        "hero-size": "284.444% 325.507%",
      },
      backgroundPosition: {
        "hero-position": "-130px -61.073px",
      },
      fontFamily: {
        sans: ["SF Pro Display", "Arial", "sans-serif"],
      },
      fontWeight: {
        extrablack: "950",
      },
    },
  },
  plugins: [],
} satisfies Config;
