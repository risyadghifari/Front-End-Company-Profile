import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'text-slide': {
          '0%': { transform: 'translateY(0%)' },
          '25%': { transform: 'translateY(-25%)' },
          '50%': { transform: 'translateY(-50%)' },
          '75%': { transform: 'translateY(-75%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        'text-slide': 'text-slide 8s ease-in-out infinite',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};


export default config;
