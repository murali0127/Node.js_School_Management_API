const express = require('express');
const mongoose = require('mongoose');
const app = express();




app.get('/', (req, res) => {
      res.send('Wlecome to School Management API.');
})


app.listen('3000', () => {
      console.log('APP RUNNING ON PORT 3000')
})
