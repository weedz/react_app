'use strict';

process.env.NODE_ENV = 'development';

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const WebpackDevServer = require('webpack-dev-server');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const config = require('./webpack.dev.config');
const detect = require('detect-port');

const DEFAULT_PORT = process.env.PORT || 9000;

const app = require('./app');

function run(port) {
    const compiler = webpack(config);
    app.listen(port, () => {
        console.info('App listening on port ' + port);
    });
    new WebpackDevServer(compiler, {
        publicPath: config.output.publicPath,
        stats: {colors: true}
    }).listen('8081', 'localhost', function(err, result) {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        console.log('Dev server listening at port 8081');
    });
}


run(DEFAULT_PORT);
