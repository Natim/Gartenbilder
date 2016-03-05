var path = require("path");
var express = require("express");
var webpack = require("webpack");

var env = "dev", port = 3000;

var webpackConfig = require("./webpack.config." + env);
var compiler = webpack(webpackConfig);
var app = express();

app.use(require("webpack-dev-middleware")(compiler, {
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "gartenbilder", "index.html"));
});

app.listen(port, "localhost", function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Listening at http://localhost:" + port);
});
