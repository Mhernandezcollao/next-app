import type { Config } from "tailwindcss";

const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#D31F8A",
        majorelleblue: "#6C40EA",
        purplepizzazz: "#FB42F6",
        icterine: "#F2F275",
        darkseagreen: "#A6DA7B",
        electricblue: "#7FFCFC",
        smokyblack: "#151515",
        licorice: "#1C1C1C",
        colornavbar: "rgba(0, 0, 0, .8)"
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;