


module.exports = {
mode: "jit",

content: ["./src/**/*.{js,ts,jsx,tsx}"],
theme: {

  extend: {
    fontFamily: {
      Allura: ["Allura", "cursive"],
      Calibre:["Calibre","cursive"]
     },
  },
  colors: {

    'primary': '#000',
    'textPrimary':'#000',
    'accent':'#4ADE80',
    'nav': 'grey', 
    'navBg': '#1F2937', 
    'bg': '#18181B',
    'bg2': '#1E1E1E',
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
  }
},
plugins: [],
};