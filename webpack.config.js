const path = require("path");
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./client/src/"),
  output: {
    path: path.resolve(__dirname, "./client/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js[x]?/,
        exclude: /node_modules/,
        options: {
          presets: ["react", "env"]
        }
      },
      {
        loader:
          "style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]",
        test: /\.css$/,
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", "css"]
  }
};
