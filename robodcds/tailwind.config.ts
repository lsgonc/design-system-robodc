import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "default": "var(--font-inter)",
        "logo": "var(--font-roboto)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        defaultblue: "var(--default-blue)",
        defaultgrey: "var(--default-grey)",
        bluehover: "var(--blue-hover)",
        lightblue: {
          50: '#f0f9ff',
          100: '#e0f2fe',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
