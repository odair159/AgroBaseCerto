var mysql = require('mysql');

var connMySQL = function(){
    console.log('Conexão com o bd foi estabelecida');
    return mysql.createConnection({
        
        host:'localhost',
        user:'odair159',
        password:'Odair15987456.',
        database:'produtos'
     });
}

module.exports = function(){
   console.log('O autoload carregou o módulo de conexão com o bd');
   return connMySQL;
}
