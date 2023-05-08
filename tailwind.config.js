/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        "title": [
          "3.5rem",
          {
            lineHeight: "3rem",
            letterSpacing: "-0.01em",
            fontWeight: "700",
          },
        ],
        "subtitle": [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "500",
          },
        ],
      },
      colors: {
        'accent' : '#fbab92'
      },
    },
  },
  plugins: [],
};
