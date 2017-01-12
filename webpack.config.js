var webpack = require('webpack');
var path = require('path');
var libraryName = 'inferno-menu-bar';
var outputFile = libraryName + '.js';

var config = {
    entry: './src/MenuBar.jsx',
    output: {
        path: './lib',
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/,
        }, {
            test: /\.(js|jsx)?$/,
            loaders: ['eslint-loader'],
            exclude: /node_modules/,
        }, {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader'],
        }]
    },
    resolve: {
        root: [path.resolve('./src')],
        extensions: ['', '.js', '.jsx']
    }
};

if (process.argv.indexOf('-p') === -1) {
    config = Object.assign({
        devtool: 'source-map',
    }, config);
}

module.exports = config;