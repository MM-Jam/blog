//连接数据库
const mysql = require('mysql');

function createConnection(){
    const connection = mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'mahaojie123',
        database: 'my_blog'
    })
    return connection
}

module.exports = {
    createConnection
}