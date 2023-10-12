/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': {min:'200px', max:'639px'},
        
      },
    },
  },
  plugins: [],
}
