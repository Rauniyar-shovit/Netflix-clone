/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1836px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },
    colors: {
      "primary-red": { DEFAULT: "#e20a14", 100: "#b50810" },
      "primary-black": {
        DEFAULT: "#141414",
        100: "#141414",
        200: "rgba(0,0,0,0.6)",
        300: "#737373",
      },
      white: {
        DEFAULT: "#FFFFFF",
        100: "#FFFFFF",
        200: "#BFC9CD",
        300: "#e9ecef",
      },
      gray: {
        100: "#1a1a1a",
        200: "#2D2D2D",
        300: "#333333",
        400: "#868e96",
        500: "#E4E4E4",
        600: "rgba(73, 80, 87, 0.7)",
        700: "rgba(73, 80, 87, 0.4)",
      },
      blue: { 100: "#339af0", 200: "#54B9C5" },
      orange: { 100: "#E87C03" },
      green: { 100: "#45D268" },
      zinc: { 900: "rgb(24 24 27)" },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwind-scrollbar")],
};
