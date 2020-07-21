const { Liquid } = require("liquidjs");

module.exports = config => {
  config.setLibrary("liquid", new Liquid({ extname: ".liquid" }));

  config.addPassthroughCopy({ "./assets/images": "assets/images" });

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
