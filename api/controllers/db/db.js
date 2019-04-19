var mysql = require('mysql');
const credential = require('../../credential');

module.exports = mysql.createConnection({
  host: credential.host,
  user: credential.user,
  password: credential.password,
  database: credential.dbName
});



/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});


*/