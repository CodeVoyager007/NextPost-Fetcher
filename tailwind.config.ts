import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#FFFFFF",
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#000000",
          background: "#FFFFFF",
        },
        primary: {
          DEFAULT: "#FFD700",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#800000",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#FFFFFF",
          foreground: "#000000",
        },
        accent: {
          DEFAULT: "#FFD700",
          foreground: "#000000",
          hover: "#800000",
        },
        border: "#FFD700",
        input: "#000000",
        ring: "#FFD700",
        shadow: {
          DEFAULT: "rgba(0, 0, 0, 0.5)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
