// limita a quantidade de dados que vai ser imprimida

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Darlin13#5",
    database: "node_teste"
})

con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT * FROM customers LIMIT 5";
    con.query(sql, function (err, result) {
        if(err) throw err;
        console.log(result);
    });
});