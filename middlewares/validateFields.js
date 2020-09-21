const { validationResult } = require('express-validator');

const validateFields = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    next();
  } else {
    res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }
};

module.exports = { validateFields };
