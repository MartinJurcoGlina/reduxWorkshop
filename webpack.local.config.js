/**
 * Webpack Local enviroment configuration
 * @param config {object}
 */

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (config) => {

    return {
      devtool: 'cheap-module-eval-source-map',
      entry: [
        'webpack/hot/only-dev-server',
        'babel-polyfill',
        __dirname + '/' + config.app_root + '/index.js'
      ],

      plugins: [
        new ExtractTextPlugin('css/main.css')
      ],
      /**
       * Dev server configuration
       * Reference: http://webpack.github.io/docs/configuration.html#devserver
       * Reference: http://webpack.github.io/docs/webpack-dev-server.html
       */
      devServer: {
        contentBase: __dirname + '/public',
        host: 'localhost',
        port: 8082,
        stats: {
          modules: false,
          cached: false,
          colors: true,
          chunk: false
        }

      }
    }
};
