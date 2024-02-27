/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: "Nunito Sans, sans-serif",
        jetBrains: "JetBrains Mono, monospace", 
      },
    },
  },
  plugins: [
    //...
    require("tailwindcss-scrollbar"),
  ],
};
