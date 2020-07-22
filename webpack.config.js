const path = require("path");
const glob = require("fast-glob");
const { DefinePlugin } = require("webpack");

module.exports = ({ NODE_ENV }) => {
  const isProduction = NODE_ENV === "production";
  const entryFiles = glob.sync("./assets/js/**/*.page.js").reduce(
    (acc, current) => ({
      ...acc,
      [path.basename(current, path.extname(current))]: current
    }),
    {}
  );

  return {
    mode: isProduction ? "production" : "development",
    entry: entryFiles,
    output: {
      filename: "[name].js",
      path: path.resolve(`./_site/assets/`),
      publicPath: "/assets/"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    plugins: [
      new DefinePlugin({
        NODE_ENV: JSON.stringify(NODE_ENV)
      })
    ],
    resolve: {
      extensions: [".js", ".jsx"]
    }
  };
};
