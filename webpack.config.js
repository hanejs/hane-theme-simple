var path = require('path'),
  webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),

  extractLessPlugin = new ExtractTextPlugin('style.css');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'dev.js'
  },
  resolve: {
    extensions: ['', '.es', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.es$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.less$/,
        loaders: extractLessPlugin.extract(['css', 'less'])
      }
    ]
  },
  plugins: [
    extractLessPlugin,
    new webpack.HotModuleReplacementPlugin()
  ]
};

