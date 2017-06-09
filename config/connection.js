
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
	var connection = mysql.createConnection(process.env.JAWSDB_URL);
} 
// else {
// 	connection = mysql.createConnection({
// 	host: "localhost",
//   	user: "root",
//   	password: "Keo$10261987",
//   	database: "burger_db"	
// 	});
// };

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);

});

module.exports = connection;