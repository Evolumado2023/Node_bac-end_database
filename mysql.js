var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Darlin13#5"
});

con.connect(function(err) {
    if(err) throw err;
    console.log("Conectado!");
});
