const express = require('express');
const router = express.Router();
// const { db, pool } = require('./src/config/db');
const mysql = require('mysql2/promise');
require('dotenv').config();

const app = express();


const pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      namedPlaceholders: true,
});

const schoolRoutes = require('./src/routes/school_route')

//Routes
app.use('/', schoolRoutes);


app.get('/health', (req, res) =>
      res.json({ success: true, message: 'API is healthy', uptime: process.uptime() })
);



// app.get('/db-test', async (req, res) => {
//       try {
//             const conn = await pool.getConnection();
//             await conn.ping();
//             conn.release();
//             res.json({ message: 'MySQL connected ✅' });
//       } catch (err) {
//             res.status(500).json({ error: err.message });
//       }
// });


//Error Handling Middleware
app.use((err, req, res, next) => {
      console.log(err);
      const { statusCode = 500, message = 'Something went wrong. Sorry!' } = err;
      res.status(statusCode).json(statusCode);
})

app.listen('3000', () => {
      console.log('APP RUNNING ON PORT 3000')
})
