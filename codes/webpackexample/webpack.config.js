const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry : "./src/index.ts",
  output : {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
        {
            test: /\.ts$/,
            loader: 'ts-loader',
            exclude:/node_modules/
        }
    ]
  },
  resolve: {
    extensions: ['.tsx','.ts','.jsx','.js']
  },
  plugins: [new HtmlWebpackPlugin({
    template:path.resolve(__dirname, "src", "index.html")
  })],
}

// import Product from './Product'; ==> check Product.tsx ==>  Product.ts ==>  Product.jsx ==>  Product.js