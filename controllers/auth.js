const User = require('../models/User');

const addUser = async (req, res) => {
  try {
    //   const { name, email, password } = req.body;

    const user = new User(req.body);
    await user.save();

    res.status(201).json({
      ok: true,
      msg: 'Register endpoint',
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error of server',
    });
  }
};

const getUser = (req, res) => {
  const { email, password } = req.body;

  res.json({
    ok: true,
    msg: 'Log In endpoint',
  });
};

const refreshToken = (req, res) => {
  res.json({
    ok: true,
    msg: 'Token refresh endpoint',
  });
};

module.exports = {
  addUser,
  getUser,
  refreshToken,
};
