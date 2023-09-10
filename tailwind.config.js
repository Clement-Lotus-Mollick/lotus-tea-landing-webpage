/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }

//   themes 
module.exports = {
    //...
    daisyui: {
      themes: ["light", "dark", "cupcake"],
    },
  }