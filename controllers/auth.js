const User = require('../models/User');
const bcrypt = require('bcryptjs');

const addUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: 'User already exists',
      });
    }

    user = new User(req.body);

    //to encrypt password
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
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
