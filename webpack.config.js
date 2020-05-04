const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({cleanStaleWebpacketAssets: false}),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js",
  },
};
