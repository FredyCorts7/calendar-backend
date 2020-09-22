const { Router } = require('express');
const { validateJwt } = require('../middlewares/validateJwt');
const {
  getEvents,
  addEvent,
  editEvent,
  removeEvent,
} = require('../controllers/event');

const router = Router();

router.use(validateJwt);

router.get('/', getEvents);

router.post('/', addEvent);

router.put('/:id', editEvent);

router.delete('/:id', removeEvent);

module.exports = router;
