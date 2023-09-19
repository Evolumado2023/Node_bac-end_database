// usando o join junto com o node.js

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"Darlin13#5",
    database: "node_teste"
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });