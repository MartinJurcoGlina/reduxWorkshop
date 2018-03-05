// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //  -> ADDED IN THIS STEP

// Constant with our paths
const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'),
    JS: path.resolve(__dirname, 'src/app'),
};

// Webpack configuration
module.exports = {
    entry: path.join(paths.JS, 'index.js'),
    output: {
        path: paths.DIST,
        filename: 'app.bundle.js',
    },
    // Loaders configuration
    // We are telling webpack to use "babel-loader" for .js and .jsx files
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            // CSS loader for CSS files
            // Files will get handled by css loader and then passed to the extract text plugin
            // which will write it to the file we defined above

            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    use: 'css-loader',
                }),
            }
        ],
    },
    // Enable importing JS files without specifying their's extension
    //
    // So we can write:
    // import MyComponent from './my-component';
    //
    // Instead of:
    // import MyComponent from './my-component.jsx';
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    // Tell webpack to use html plugin
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.SRC, 'index.html'),
            title: 'Redux Workshop',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace:true
            }
        }),

        new ExtractTextPlugin('main.css'), // CSS will be extracted to this bundle file -> ADDED IN THIS STEP
    ]
};