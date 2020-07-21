const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const postcssImport = require("postcss-import")({
  root: "./assets/css/"
});
// const purgecss = require('@fullhuman/postcss-purgecss');
// const cssnano = require('cssnano')({
//   preset: 'default',
// });

module.exports = ctx => {
  const isProduction = ctx.env === "production";
  // const purgeCssOptions = {
  //   content: [
  //     `./src/content/${LANG_CODE}/**/*.liquid`,
  //     './src/_includes/**/*.liquid',
  //     './src/_layouts/**/*.liquid',
  //     './src/_includes/shortcodes/**/*.js',
  //   ],
  //   defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  // };

  return {
    plugins: [
      postcssImport,
      tailwindcss,
      autoprefixer
      // isProduction ? purgecss(purgeCssOptions) : null,
      // isProduction ? cssnano : null,
    ]
  };
};
