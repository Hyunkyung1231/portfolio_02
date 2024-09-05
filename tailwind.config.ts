import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        dongle: ["Dongle", "sans-serif"],
      },
      boxShadow: {
        bar: "3px 3px 3px 0px rgba(0.12, 0.12, 0.12, 0.12)",
        card: "3px 3px 8px 0px rgba(0.3, 0.3, 0.3, 0.3)",
        image: "8px 8px 0px 0px rgba(1, 1, 1, 1)",
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        primary: {
          10: "#FFFFFF",
          20: "#FDFBFF",
          30: "#5D52B8",
          40: "#EFEDF9",
          50: "#6C5FD8",
          60: "#272727",
          70: "#919498",
        },
      },
    },
  },
  plugins: [],
};
export default config;
