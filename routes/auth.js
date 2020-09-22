const { Router } = require('express');
const { check } = require('express-validator');
const { addUser, getUser, refreshToken } = require('../controllers/auth');
const { validateFields } = require('../middlewares/validateFields');
const { validateJwt } = require('../middlewares/validateJwt');

const router = Router();

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

router.get('/refresh', validateJwt, refreshToken);

module.exports = router;
