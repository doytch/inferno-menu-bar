var webpack = require('webpack');
var path = require('path');

var config = {
    entry: './src/index.js',
    output: {
        path: './lib',
        filename: 'index.js',
        library: 'InfernoMenuBar',
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
    },
    externals: {
        "inferno": "inferno",
        "inferno-router": "inferno-router",
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ],
};

if (process.argv.indexOf('-p')) {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
        })
    );
} else {
    config = Object.assign({
        devtool: 'source-map',
    }, config);
}

module.exports = config;