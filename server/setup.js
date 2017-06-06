module.exports = function(app, express, HOST, PORT, staticPath) {
	const path = require('path');
	app.use('/', require('./app'));

	app.use(express.static(staticPath));

	app.get('/*', (req, res) => {
		res.sendFile(path.resolve(staticPath,'index.html'));
	});

	app.listen(PORT, () => {
		console.info('App listening on port ' + PORT);
	});
};