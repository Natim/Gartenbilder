var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "eval",
  entry: [
    "webpack-hot-middleware/client?reload=true",
    "./gartenbilder/app"
  ],
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/static/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ["", ".js", ".jsx", ".css", ".eot", "png", ".woff", ".woff2", ".ttf", ".svg"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ["babel"],
        include: [
          path.join(__dirname, "gartenbilder"),
        ]
      },
      {
        test: /\.css$/,
        loader: "style!css",
        include: [
          path.join(__dirname, "css"),
          path.join(__dirname, "gartenbilder"),
          path.join(__dirname, "node_modules"),
        ],
      },
      { test: /\.png$/, loader: "url?limit=10000" },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },

    ]
  }
};
