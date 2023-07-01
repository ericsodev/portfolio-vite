/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{js,ts,tsx,jsx}"],
  theme: {
    fontFamily: {
      body: ["Poppins", "'Open Sans'"],
      sans: ["Poppins", "'Open Sans'"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--gradient-color-stops))",
      },
      colors: {
        black: "#0A0A0A",
        white: "#E6E5ED",
        darkgray: "#1C1B20",
        gray: "#4D4C5C",
        purple: "#716FEF",
        tealgreen: "#26F0A7",
      },
    },
  },
  plugins: [],
};
