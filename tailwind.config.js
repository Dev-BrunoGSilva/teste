/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        sirconfirstColor: '#2e85e4',
        sirconsecondColor: '#186cb7',
        sircondarkColor: '#172c5d',
      },
    },
  },
  plugins: [],
}