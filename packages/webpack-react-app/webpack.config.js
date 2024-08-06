const path = require('node:path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * @type {import('webpack').Configuration
 */
module.exports = {
  entry: path.join(__dirname, "src", "index.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  plugin: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    })
  ],
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      }
    ]
  },
  devServer: {
    port: 3000
  }
}
