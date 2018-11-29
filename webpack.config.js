const path = require("path");
// const CSSModuleLoader = {
//   loader: "css-loader",
//   options: {
//     modules: true,
//     sourceMap: true,
//     localIdentName: "[local]__[hash:base64:5]",
//     minimize: true
//   }
// };

// const CSSLoader = {
//   loader: "css-loader",
//   options: {
//     modules: false,
//     sourceMap: true,
//     minimize: true
//   }
// };
// const postCSSLoader = {
//   loader: "postcss-loader",
//   options: {
//     ident: "postcss",
//     sourceMap: true,
//     plugins: () => [
//       autoprefixer({
//         browsers: [">1%", "last 4 versions", "Firefox ESR", "not ie < 9"]
//       })
//     ]
//   }
// };
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
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
      // {
      //   test: /\.scss$/,
      //   exclude: /\.module\.scss$/,
      //   use: ["style-loader", CSSLoader, postCSSLoader, "sass-loader"]
      // },
      // {
      //   test: /\.module\.scss$/,
      //   use: ["style-loader", CSSModuleLoader, postCSSLoader, "sass-loader"]
      // }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", "css", "scss"]
  }
};
