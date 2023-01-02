/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [ 
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
   

  ],
  theme: {
    extend: {
      fontFamily : {
        'sans' : 'Work Sans',
      }
      
    },

  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
