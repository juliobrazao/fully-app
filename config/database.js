const mysql = require('mysql')

module.exports = () => {
 return mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USR,
    password: process.env.DB_PWD,
    database: 'laborat',
    multipleStatements: true
  })
}