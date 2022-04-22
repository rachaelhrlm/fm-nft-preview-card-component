module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          card: "hsl(216, 50%, 16%)",
          line: "hsl(215, 32%, 27%)",
          main: "hsl(217, 54%, 11%)",
        },
        primary: {
          cyan: "hsl(178, 100%, 50%)",
          blue: "hsl(215, 51%, 70%)",
        },
      },
    },
  },
  plugins: [],
};
