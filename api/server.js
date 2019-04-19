const http = require('http');
const app = require('./app');
const db = require(contDb);

const port = process.env.PORT || 3000;

function run(){
	console.log('initializing the database connection...');
	db.connectDb().then((resolve) => {
		console.log('database connection is ok');
	}).then(() => {
		app.listen(port);
		console.log("listening on port " + port);
	}).catch(() => {
		console.log('FATAL ERROR: failed to connect to the database');
		console.log('ending the application');
	});
}
module.exports = run;