const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'esma_tech_hub',
    port: 3306
});

module.exports = db;
