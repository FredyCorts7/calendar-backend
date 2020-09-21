const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const { addUser, getUser, refreshToken } = require('../controllers/auth');
const { validateFields } = require('../middlewares/validateFields');

router.post(
  '/signup',
  [
    check('name', 'Name is required').notEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password should have at least 6 characters').isLength({
      min: 6,
    }),
    validateFields,
  ],
  addUser
);

router.post(
  '/signin',
  [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password should have at least 6 characters').isLength({
      min: 6,
    }),
    validateFields,
  ],
  getUser
);

router.post('/refresh', refreshToken);

module.exports = router;
