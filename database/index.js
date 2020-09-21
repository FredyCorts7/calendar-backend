const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log('connected to DB');
  } catch (error) {
    console.log(error);
    throw new Error("Don't initialize db");
  }
};

module.exports = {
  dbConnection,
};
