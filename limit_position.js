// vai imprimir a partir da posição passada

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Darlin13#5",
    database: "node_teste"
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
});