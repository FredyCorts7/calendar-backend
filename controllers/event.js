const Event = require('../models/Event');

const getEvents = (req, res) => {
  res.json({
    ok: true,
    msg: 'get events',
  });
};

const addEvent = async (req, res) => {
  const event = new Event(req.body);
  try {
    event.user = req.uid;
    const eventSaved = await event.save();

    res.status(201).json({
      ok: true,
      event: eventSaved,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Server error',
    });
  }
};

const editEvent = (req, res) => {
  res.json({
    ok: true,
    msg: 'edit events',
  });
};

const removeEvent = (req, res) => {
  res.json({
    ok: true,
    msg: 'remove events',
  });
};

module.exports = {
  getEvents,
  addEvent,
  editEvent,
  removeEvent,
};
