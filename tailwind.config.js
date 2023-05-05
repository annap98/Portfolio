/*{import('tailwindcss').Config};*/

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'purple': "#d0b1fc",
      'green': "#caeebe",
      'yellow': "#faedc7",
      'pink': "#f7c5dd",
      'blue': "#98e2f7",
      'black': "#000000",
      'white': "#ffffff",
      'grey': "#d3d3d3",
      'darkGrey': "#5a5a5a",
      'background': "#FFECE2",
      'sig_color': "#FC9E1C"
    },
    extend: {},
    fontFamily: {
      signature: ["Space Mono"],
      sig_two: ["Sacramento"],
      sig_three: ["Poppins"],
      nav_bar: ["Playfair Display"]
    },
  },
  plugins:[],
};

