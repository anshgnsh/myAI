import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgba(238,236,231,255)", // Off-white background
        foreground: "#333333", // Dark gray text for contrast
        primary: {
          DEFAULT: "#6A1B9A", // Deep purple
          foreground: "#FFFFFF", // White text on primary
        },
        secondary: {
          DEFAULT: "#AB47BC", // Lighter purple
          foreground: "#FFFFFF", // White text on secondary
        },
        accent: {
          DEFAULT: "#FF4081", // Pink accent
          foreground: "#FFFFFF", // White text on accent
        },
        muted: {
          DEFAULT: "rgba(238,236,231,255)", // Using the same off-white for muted sections
          foreground: "#6A1B9A", // Deep purple text for muted sections
        },
        border: "#AB47BC", // Using the lighter purple for borders
        input: "#FFFFFF", // White input background
        ring: "#6A1B9A", // Focus ring color
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "4px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;


