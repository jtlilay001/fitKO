const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  plugins: [new HtmlWebpackPlugin(
    {
      template: "./src/index.html"
    }
  )],
  module: {
    rules: [ 
      {
        test: /\.css$/i, 
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i, 
        use: ["html-loader"],
      } 
    ]
  },
};