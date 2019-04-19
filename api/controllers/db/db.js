var mysql = require('mysql');
const credential = require('../../credential');

module.exports = mysql.createConnection({
  host: credential.host,
  user: credential.user,
  password: credential.password,
  database: credential.dbName
});