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
        card: "3px 3px 0px 0px rgba(1, 1, 1, 1)",
        image: "8px 8px 0px 0px rgba(1, 1, 1, 1)",
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        primary: {
          10: "#FCF9F8",
          20: "#F6F3EF",
          30: "#F4D533",
          40: "#C9B5FD",
          50: "#B2C3FD",
          60: "#EEB9A9",
          70: "#F9EAA1",
          80: "#EDE9E6",
        },
      },
    },
  },
  plugins: [],
};
export default config;
