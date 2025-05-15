import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        haettenschweiler: ["Haettenschweiler", "sans-serif"],
        "helvetica-bdcn": [
          "HelveticaNeueLTStd",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        "helvetica-thcn": [
          "HelveticaNeueLTStd",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      animation: {
        progress: "progress 3s linear forwards",
      },
      keyframes: {
        progress: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
    },
  },
};

export default config;
