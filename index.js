require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database');

const app = express();

//database
dbConnection();

//cors
app.use(cors());

//public dir
app.use(express.static('public'));

//middlewares
app.use(express.json());

//routes
app.use('/auth', require('./routes/auth'));
app.use('/event', require('./routes/event'));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
