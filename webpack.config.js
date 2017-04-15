// http://webpack.github.io/docs/configuration.html
// http://webpack.github.io/docs/webpack-dev-server.html
var app_root = 'src'; // the app root folder: src, src_users, etc
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  app_root: app_root, // the app root folder, needed by the other webpack configs
  entry: [
    // http://gaearon.github.io/react-hot-loader/getstarted/
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    __dirname + '/' + app_root + '/index.js'
  ],
  output: {
    path: __dirname + '/public/js',
    publicPath: 'js/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
      },
      {
        test: /[\\\/]{1}[^\.]+\.(scss|sass)$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.module\.(scss|sass)$/,
        loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:8]', 'sass']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:8]']
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?mimetype=image/svg+xml'
      },
      {
        test: /\.png$/,
        loader: "url-loader?mimetype=image/png"
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?mimetype=application/font-woff&publicPath=/js/"
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?mimetype=application/font-woff&publicPath=/js/"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?mimetype=application/octet-stream&publicPath=/js/"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?publicPath=/js/"
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  devServer: {
    contentBase: __dirname + '/public'
  },
  plugins: [
    new CleanWebpackPlugin(['css/main.css', 'js/bundle.js'], {
      root: __dirname + '/public',
      verbose: true,
      dry: false // true for simulation
    })
  ]
};
