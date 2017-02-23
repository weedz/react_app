const mysql = require('mysql');

module.exports = function(app) {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'reactjs'
    });
    connection.connect();
    app.set('_store', {
        mysql: connection
    });
};