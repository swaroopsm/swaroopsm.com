const { Liquid } = require("liquidjs");
const readingTime = require("reading-time");

module.exports = config => {
  config.setLibrary("liquid", new Liquid({ extname: ".liquid" }));
  config.setDataDeepMerge(true);
  config.addPassthroughCopy({ "./assets/images": "assets/images" });

  config.addFilter("readTime", text => readingTime(text).text);

  return {
    dir: {
      input: `./content`,
      output: `./_site`,
      layouts: "../_layouts",
      includes: "../_includes",
      data: "../_data"
    },
    htmlTemplateEngine: "liquid"
  };
};
