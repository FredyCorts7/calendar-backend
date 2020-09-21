const addUser = (req, res) => {
  const { name, email, password } = req.body;

  res.json({
    ok: true,
    msg: 'Register endpoint',
  });
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
