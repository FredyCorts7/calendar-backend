const express = require('express');
const { dbConnection } = require('./database');
require('dotenv').config();

const app = express();

//database
dbConnection();

//middlewares
app.use(express.json());

//routes
app.use('/auth', require('./routes/auth'));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
