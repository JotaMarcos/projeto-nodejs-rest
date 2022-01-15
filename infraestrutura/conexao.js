
// const mysql = require('mysql'); // -> este driver pode gerar alguns conflitos de versão e conexão, e alguns erros podem surgir
const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'toor#@!',
    database: 'agenda-petshop'
});

module.exports = conexao;







