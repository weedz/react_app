const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

let nodeModules = {};
fs.readdirSync('../node_modules').
    filter(function(x) {
        return ['.bin'].indexOf(x) === 1;
}).forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
});

process.env.NODE_ENV = 'production';

const config = {
    target: 'node',
    bail: true,
    devtool: 'source-map',
    stats: {
        colors:true
    },
    entry: path.join(__dirname, 'index.js'),
    output: {
        path: path.join(__dirname,'build'),
        filename: 'server-output.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ["es2015"],
                }
            }
        ]
    },
    plugins: [
        // This helps ensure the builds are consistent if source hasn't changed:
        //new webpack.optimize.OccurrenceOrderPlugin(),
        // Minify the code.
        //new webpack.optimize.UglifyJsPlugin(),
    ],
    externals: nodeModules
};

module.exports = config;