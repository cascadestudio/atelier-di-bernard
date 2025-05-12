import localFont from "next/font/local";

export const haettenschweiler = localFont({
  src: [
    {
      path: "../../public/fonts/Haettenschweiler.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-haettenschweiler",
  display: "swap",
});

export const helveticaNeueBdCn = localFont({
  src: "../../public/fonts/HelveticaNeueLTStd-BdCn.otf",
  weight: "700",
  style: "normal",
  variable: "--font-helvetica-neue-bdcn",
  display: "swap",
});

export const helveticaNeueThCn = localFont({
  src: "../../public/fonts/HelveticaNeueLTStd-ThCn.otf",
  weight: "100",
  style: "normal",
  variable: "--font-helvetica-neue-thcn",
  display: "swap",
});
