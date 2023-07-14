/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

        width: ['group-hover'],
        height: ['group-hover'],

      colors: {
        primaryColor: "#3c3d29",
        headingColor: "#081e21",
        smallTextColor: "#006600",
      },
    },
  },
  plugins: [],
}
