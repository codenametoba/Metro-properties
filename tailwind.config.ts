import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#181713",
        charcoal: "#24231f",
        ivory: "#f8f4eb",
        paper: "#fffaf1",
        stone: "#d8cec0",
        sand: "#b8a990",
        gold: "#b88a3d",
        forest: "#173d31"
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Inter", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(24, 23, 19, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
