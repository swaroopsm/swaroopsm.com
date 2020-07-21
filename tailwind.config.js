module.exports = {
  theme: {
    fontFamily: {
      sans: ["PT Sans", "sans-serif"]
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      "black-10": "#1F2123",
      "gray-10": "#BBBBBB",
      "gray-20": "#B4B4B4",
      transparent: "transparent"
    }
  },
  purge: [
    "./content/**/*.liquid",
    "./_layouts/**/*.liquid",
    "./_includes/**/*.liquid"
  ]
};
