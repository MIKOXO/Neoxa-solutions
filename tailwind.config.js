/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DarkBg: "hsl(0, 0%, 10%)",
        DarkBgSecondary: "hsl(0, 0%, 15%)",
        DarkText: "hsl(0, 0%, 90%)",
        LightBg: "hsl(0, 0%, 100%)",
        LightText: "hsl(0, 0%, 10%)",
      },
    },
  },
  plugins: [],
};
