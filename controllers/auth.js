const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generateJwt } = require('../helpers/jwt');
const jwt = require('../helpers/jwt');

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

const getUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: 'Credentials invalid',
      });
    }

    const validPasswords = bcrypt.compareSync(password, user.password);
    if (!validPasswords) {
      return res.status(400).json({
        ok: false,
        msg: 'Credentials invalid',
      });
    }

    const token = await generateJwt(user.id, user.name);

    res.json({
      ok: true,
      uid: user.id,
      name: user.name,
      token,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error of server',
    });
  }
};

const refreshToken = async (req, res) => {
  const { uid, name } = req;

  const token = await jwt.generateJwt(uid, name);

  res.json({
    ok: true,
    uid,
    name,
    token,
  });
};

module.exports = {
  addUser,
  getUser,
  refreshToken,
};
