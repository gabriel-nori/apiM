const dir =  __dirname;
global.libError = dir+'/lib/error';
global.contDb = dir+'/controllers/db';
global.sanitizer = dir+'/lib/sanitizer';
const db = require(contDb);
var http = require("http");
var router = require('./router');

module.exports = http.createServer(router);