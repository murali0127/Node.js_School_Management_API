const express = require('express');
const router = express.Router();
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const rateLimit = require('express-rate-limit');

const mysql = require('mysql2/promise');
require('dotenv').config();

const app = express();

//Rate-Limiter
const limiter = rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes window
      max: 100,                  // max 100 requests per IP for every 15 minutes
      message: { success: false, message: 'Too many requests, please try again later.' }
})
//Cors Protection
const corsOption = {
      origin: process.env.ALLOWED_ORIGIN || '*',
      methods: ['GET', 'POST'],
      allowedHeaders: ['Content-Type']
};



app.use(helmet());                              // sets 11 secure headers
app.use(cors(corsOption));                                // allow cross-origin requests
app.use(compression());                          // gzip responses
app.use(express.json({ limit: '10kb' }));       // parse JSON body, cap size
app.use(express.urlencoded({ extended: true }));// parse form data
app.use(limiter)





//Routes

const schoolRoutes = require('./src/routes/school_route')

app.use('/', schoolRoutes);
app.get('/health', (req, res) =>
      res.json({ success: true, message: 'API is healthy', uptime: process.uptime() })
);




//Error Handling Middleware
app.use((err, req, res, next) => {
      console.log(err);
      const { statusCode = 500, message = 'Something went wrong. Sorry!' } = err;
      res.status(statusCode).json({ success: false, message });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
      console.log(`APP RUNNING ON PORT ${PORT}`);
});
