var path = require("path"),
  webpack = require('webpack');

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
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

