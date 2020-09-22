const { Router } = require('express');
const { validateJwt } = require('../middlewares/validateJwt');
const {
  getEvents,
  addEvent,
  editEvent,
  removeEvent,
} = require('../controllers/event');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validateFields');
const { isDate } = require('../helpers/isDate');

const router = Router();

router.use(validateJwt);

router.get('/', getEvents);

router.post(
  '/',
  [
    check('title', 'Title is required').notEmpty(),
    check('start', 'Start is required').custom(isDate),
    check('end', 'End is required').custom(isDate),
    validateFields,
  ],
  addEvent
);

router.put('/:id', editEvent);

router.delete('/:id', removeEvent);

module.exports = router;
