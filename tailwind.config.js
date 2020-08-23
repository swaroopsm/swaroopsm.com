module.exports = {
  theme: {
    fontFamily: {
      sans: ["PT Sans", "sans-serif"],
      serif: ["PT Serif", "serif"]
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      "black-10": "#1F2123",
      "gray-10": "#BBBBBB",
      "gray-20": "#B4B4B4",
      "gray-30": "#5B5B5B",
      transparent: "transparent"
    },
    extend: {
      fontSize: {
        "5xl": "3rem"
      }
    },
    typography: theme => ({
      default: {
        css: {
          color: theme("colors.black-10"),
          code: {
            color: theme("colors.black-10")
          }
        }
      },
      dark: {
        css: {
          color: theme("colors.white")
        }
      }
    })
  },
  variants: {
    typography: ["responsive", "dark"],
    backgroundColor: ["dark"],
    textColor: ["dark"],
    boxShadow: ["dark", "dark-focus"],
    borderColor: ["dark"]
  },
  plugins: [
    require("tailwindcss-dark-mode")(),
    require("@tailwindcss/typography")
  ],
  purge: {
    content: [
      "./content/**/*.liquid",
      "./_layouts/**/*.liquid",
      "./_includes/**/*.liquid"
    ],
    options: {
      whitelist: ["mode-dark"]
    }
  }
};
