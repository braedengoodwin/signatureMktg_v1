/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'diagonal-lines': "linear-gradient(-45deg, #ccc 25%, transparent 25%, transparent 50%, #ccc 50%, #ccc 75%, transparent 75%, transparent)",
      },
      backgroundSize: {
        '10': '8px 8px',
      },
    },
  },
  plugins: [],
}


