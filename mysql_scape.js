// trazendo um dado passando ele como parametro em um avariável

var mysql = require('mysql');

var con = mysql.createConnection( {
    host: "localhost",
    user: "root",
    password: "Darlin13#5",
    database: "node_teste"
});

var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
});