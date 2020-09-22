require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database');

const app = express();

//database
dbConnection();

//cors
app.use(cors());

//middlewares
app.use(express.json());

//routes
app.use('/auth', require('./routes/auth'));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
