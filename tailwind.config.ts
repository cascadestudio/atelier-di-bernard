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

      // Rest of your Tailwind config...
    },
  },
  // Rest of your config...
};

export default config;
