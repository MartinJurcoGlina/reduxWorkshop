
/**
 * Webpack Common config
 * @type {string}
 */


const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Modules
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StringReplacePlugin = require("string-replace-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (config) => {

  return {
    app_root: config.app_root,

    output: {
      path: __dirname + '/public',
      publicPath: '/',
      filename: 'js/[name].bundle.js'
    },

    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: StringReplacePlugin.replace({
            replacements: [
              {
                pattern: /ENV_PROTOCOL/,
                replacement: () => config.protocol
              },
              {
                pattern: /ENV_HOST/,
                replacement: () => config.host
              },
              {
                pattern: /ENV_PORT/,
                replacement: () => config.port
              },
              {
                pattern: /ENV_SUFFIX/,
                replacement: () => config.suffix
              }
            ]
          })
        },
        {
          test: /\.js$/,
          loaders: ['react-hot', 'babel'],
          exclude: /node_modules/
        },

        {
          test: /\.module\.(scss|sass)$/,
          loader: ExtractTextPlugin.extract(
              'style',
              'css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:8]!sass'
            )
        },
        {
          test: /[\\\/]{1}[^\.]+\.(scss|sass)$/,
          loader: ExtractTextPlugin.extract('style', 'css!sass')
        },

        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader?mimetype=image/svg+xml&publicPath=../&name=./media/[hash].[ext]'
        },
        {
          test: /\.png$/,
          loader: "url-loader?mimetype=image/png&publicPath=../&name=./media/[hash].[ext]"
        },
        {
          test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
          loader: "file-loader?mimetype=application/font-woff&publicPath=../&name=./fonts/[hash].[ext]"
        },
        {
          test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
          loader: "file-loader?mimetype=application/font-woff&publicPath=../&name=./fonts/[hash].[ext]"
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: "file-loader?mimetype=application/octet-stream&publicPath=../&name=./fonts/[hash].[ext]"
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: "file-loader?publicPath=../&name=./fonts/[hash].[ext]"
        },
        {
          test: /\.json$/,
          loader: 'json'
        },
        {
          test: /\.(gif)$/i,
          loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
          ]
        }
      ]
    },
    plugins: [

      new CleanWebpackPlugin(['css/', 'media/', 'js/', 'fonts/',  'index.html'], {
        root: __dirname + '/public',
        verbose: true,
        dry: false
      }),

      new ExtractTextPlugin('css/main.css'),


      new HtmlWebpackPlugin({
        template: './public/index.ejs',
        title: 'Redux Workshop',
        inject:false,
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace:true
        }
      }),
    ]
  }
};

