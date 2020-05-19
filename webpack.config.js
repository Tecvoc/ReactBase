const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

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
        resolve: {
          extensions: [".js", ".jsx"],
        },
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: {
          loader: "svg-url-loader",
          options: { limit: 10000 },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpacketAssets: false }),
    new HtmlWebpackPlugin({
      cache: false,
      template: "index.html",
    }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js",
  },
};
