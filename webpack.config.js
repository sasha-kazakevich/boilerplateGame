var path = require('path')
var webpack = require('webpack');

var phaserModulePath = path.join(__dirname, '/node_modules/phaser/');

module.exports = {
    entry: './src/js/script.js',

    output: {
        path: __dirname + '/dist/js/',
        filename: 'bundle.js'
    },

    module: {
      loaders: [
            {
              loader: 'script',// script-loader
              test: /(pixi|phaser).js/
            },
            {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                  cacheDirectory: true,
                  presets: ['es2015']
                }
            }
        ],
        resolve: {
            alias: {
                'phaser': path.join(phaserModulePath, 'build/custom/phaser-split.js'),
                'pixi': path.join(phaserModulePath, 'build/custom/pixi.js'),
                'p2': path.join(phaserModulePath, 'build/custom/p2.js')
            }
        }
    },

    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //         compress: {
    //             warnings: false
    //         }
    //     })
    // ]
};
