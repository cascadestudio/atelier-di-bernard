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
      fontSize: {
        // Your existing font sizes...

        // Styles for the bold condensed variant
        "title-mobile": [
          "1.5rem",
          {
            lineHeight: "1.2",
            fontWeight: "bold",
            fontFamily: "HelveticaNeueLTStd, Helvetica, Arial, sans-serif",
          },
        ],
        "title-tablet": [
          "2rem",
          {
            lineHeight: "1.1",
            fontWeight: "bold",
            fontFamily: "HelveticaNeueLTStd, Helvetica, Arial, sans-serif",
          },
        ],
        "title-desktop": [
          "2.5rem",
          {
            lineHeight: "1.1",
            fontWeight: "bold",
            fontFamily: "HelveticaNeueLTStd, Helvetica, Arial, sans-serif",
          },
        ],

        // Styles for the thin condensed variant
        "caption-mobile": [
          "1rem",
          {
            lineHeight: "1.4",
            fontWeight: "100",
            fontFamily: "HelveticaNeueLTStd, Helvetica, Arial, sans-serif",
          },
        ],
        "caption-tablet": [
          "1.125rem",
          {
            lineHeight: "1.3",
            fontWeight: "100",
            fontFamily: "HelveticaNeueLTStd, Helvetica, Arial, sans-serif",
          },
        ],
        "caption-desktop": [
          "1.25rem",
          {
            lineHeight: "1.3",
            fontWeight: "100",
            fontFamily: "HelveticaNeueLTStd, Helvetica, Arial, sans-serif",
          },
        ],
      },
      // Rest of your Tailwind config...
    },
  },
  // Rest of your config...
};

export default config;
