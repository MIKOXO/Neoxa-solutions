/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: "hsl(0, 0%, 10%)",
        darkBgSecondary: "hsl(0, 0%, 15%)",
        darkText: "hsl(0, 0%, 90%)",
        lightBg: "hsl(0, 0%, 100%)",
        lightText: "hsl(0, 0%, 10%)",
      },
    },
  },
  plugins: [],
};
