/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#252422",
        light: "#fffcf2",
        primary: "#EB5E28",
      },
      fontFamily: {
        basheq: "var(--var-basheq)",
        fraunces: "var(--var-fraunces)",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "834px",
          xl: "986px",
        },
      },
    },
  },
  plugins: [],
};
