const express = require('express');
require('dotenv').config();

const app = express();

//middlewares
app.use(express.json());

//routes
app.use('/auth', require('./routes/auth'));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
