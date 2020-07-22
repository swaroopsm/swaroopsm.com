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
  variants: {
    backgroundColor: ["dark"],
    textColor: ["dark"],
    boxShadow: ["dark", "dark-focus"],
    borderColor: ["dark"]
  },
  plugins: [require("tailwindcss-dark-mode")()],
  purge: [
    "./content/**/*.liquid",
    "./_layouts/**/*.liquid",
    "./_includes/**/*.liquid"
  ],
  options: {
    whitelist: ["mode-dark"]
  }
};
