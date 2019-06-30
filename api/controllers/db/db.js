var mysql = require('mysql');
const credential = require('../../credential');

module.exports = mysql.createConnection({
  host: credential.db.host,
  user: credential.db.user,
  password: credential.db.password,
  database: credential.db.dbName
});