require('dotenv').config();


//load env 
const required = ['DB_HOST', 'DB_USER', 'DB_NAME'];
required.forEach((key) => {
      if (!process.env[key]) {
            throw new Error(`Missing required env variable: ${key}`);
      }
});

const nodeEnv = process.env.NODE_ENV || 'development';
const port = parseInt(process.env.PORT, 10) || 3000;
const db = {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10) || 3306,
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME,
      connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT, 10) || 10,
}


module.exports = db;

