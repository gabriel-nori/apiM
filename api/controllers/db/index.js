const db = require('./db');

function connectDb(){
	return new Promise((resolve, reject) => {
		db.connect((err) => {
		  if (err) return reject(err);
		  resolve();
		});
	});
}

module.exports = {
	queryDb,
	close,
	connectDb
}

function queryDb(queryString){ //make an asynchronous query to the database
  return new Promise(function(resolve, reject) {
    // The Promise constructor should catch any errors thrown on
    // this tick. Alternately, try/catch and reject(err) on catch.
    db.query(queryString, function (err, rows) {
        // Call reject on error states,
        // call resolve with results
        if (err) {
            return reject(err);
        }
        resolve(rows);
    });
  });
}

function close() {
  return new Promise(function (resolve, reject){
    db.end( err => {
      if(err){
          return reject(err);
        }
      else{            
        resolve();
      }
    });
  });
}