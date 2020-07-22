const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const postcssImport = require("postcss-import")({
  root: "./assets/css/"
});
const cssnano = require("cssnano")({
  preset: "default"
});

module.exports = ctx => {
  const isProduction = ctx.env === "production";

  return {
    plugins: [
      postcssImport,
      tailwindcss,
      autoprefixer,
      isProduction ? cssnano : null
    ]
  };
};
