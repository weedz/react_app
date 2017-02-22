const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const path = require('path');

const APP_DIR = path.resolve(__dirname, '../src');

process.env.NODE_ENV = 'development';

const config = {
    target: 'web',
    entry: [
        APP_DIR + '/index.js'
    ],
    output: {
        path: '/',
        publicPath: 'http://localhost:8081/assets/',
        filename: 'static/js/bundle.js'
    },
    module: {
        loaders: [
            {
                exclude: [
                    /node_modules/,
                    /\.html$/,
                    /\.(js|jsx)$/,
                    /\.css$/,
                    /\.json$/,
                    /\.svg$/
                ],
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    babelrc: false,
                    presets: [require.resolve('babel-preset-react-app')],
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new InterpolateHtmlPlugin({
            'PUBLIC_URL' : ''
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname + '/../public/index.html'),
        }),
    ]
};

module.exports = config;