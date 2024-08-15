import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi-Regular']
      },
      colors: {
        logoGreen: '#247424',
        logoYellow: '#FFDE59',
        darkGreen: '#1D331D',
        lightGreen: '#C4DBC0'
      }
    },
  },
  plugins: [],
};
export default config;
