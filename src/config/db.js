//  mySQL connection pool
const mysql = require('mysql2/promise');
const { db } = require('./env');



const pool = mysql.createPool({
      host: db.host,
      port: db.port,
      user: db.user,
      password: db.password,
      database: db.database,
      waitForConnections: true,
      connectionLimit: db.connectionLimit,
      queueLimit: 0,
      namedPlaceholders: true,

});

// verify Connection only on Start-ups
(async () => {
      try {
            const conn = await pool.getConnection();
            await conn.ping();
            conn.release(); //connection is released back to the pool
            console.log('mySQL Connected Successfully');
      } catch (error) {
            console.log('MySQL Connection error.');
            process.exit();
      }
})();


module.exports = pool;