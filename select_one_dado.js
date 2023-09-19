// selecionando apenas os nomes da tabelas

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Darlin13#5",
    database: "node_teste"
})

con.connect(function(err) {
    if(err) throw err;
    con.query("SELECT name FROM  customers", function(err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});