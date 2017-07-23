var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: [APP_DIR + '/rui.js'
    ],
    output: {
        path: BUILD_DIR,
        filename: 'rui.js'
    },
    plugins: [new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })],
    module: {
        loaders: [{
            test: /\.jsx?/,
            include: APP_DIR
        }]
    }
};

module.exports = config;
