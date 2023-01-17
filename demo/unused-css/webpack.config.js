const path = require('path')
const webpack = require('webpack')
const glob = require('glob-all')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {PurgeCSSPlugin} = require('purgecss-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, 'src')
}

const mode = process.env.NODE_ENV || 'development'

module.exports = {
  mode,
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ]
  },
  plugins: [
    // Parse index.html and inject bundle.js
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
    }),
    // Enable HMR
    new webpack.HotModuleReplacementPlugin(), 
    // Extract CSS into separate file
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }), 
    // Remove unused CSS
    new PurgeCSSPlugin({
      paths: glob.sync([
        `${PATHS.src}/**/*.js`,
        `${path.join(__dirname, 'public')}/*.html`
      ], { nodir: true })
    }),
    // Provide React as a global variable
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
}