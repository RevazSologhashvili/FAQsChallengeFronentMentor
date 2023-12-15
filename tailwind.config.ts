import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      White: "hsl(0, 0%, 100%)",
      LightPink: "hsl(275, 100%, 97%)",
      GrayPurple: "hsl(292, 16%, 49%)",
      DarkPurple: "hsl(292, 42%, 14%)",
    },
  },
  plugins: [],
};
export default config;
