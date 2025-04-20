const mysql = require('mysql2/promise');

// Create a connection pool
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',  // Adjust password as necessary
    database: 'esma_tech_hub',
    port: 3306
});

// Export the pool, using promises for cleaner query handling
module.exports = db;
