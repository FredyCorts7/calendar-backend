const Event = require('../models/Event');

const getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('user', 'name');

    res.json({
      ok: true,
      events,
    });
  } catch (error) {
    res.status(500).json({
      ok: true,
      msg: 'Server error',
    });
  }
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
