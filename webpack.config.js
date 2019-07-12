'use strict'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 8080,
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          // options: { presets: ['es2015'], plugins: ['transform-vue-jsx'] }
        }]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ]
      }
    ]
  },
  plugins: [

    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
  ]
}