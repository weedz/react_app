//'use strict';

process.env.NODE_ENV = 'development';
const DEFAULT_PORT = process.env.PORT || 9000;

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const path = require('path');
const config = require('./webpack.dev.config.js');

const compiler = webpack(config);

const http = require('http');

let app = require('../server/app');

let server;

function setupApp() {
    app.get(/\/(?!.*\.js)(?!__webpack.*).*/, (req, res) => {
        res.sendFile(path.resolve(__dirname, 'index.html'));
    });
    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        stats: {colors: true}
    }));
    app.use(webpackHotMiddleware(compiler, {
        log: console.log,
        path: '/__webpack_hmr',
        heartbeat: 10*1000
    }));
}
function startServer() {
    setupApp();
    server = http.createServer(app);
    server.listen(DEFAULT_PORT, () => {
        console.info('App listening on port ' + DEFAULT_PORT);
    });
}
startServer();