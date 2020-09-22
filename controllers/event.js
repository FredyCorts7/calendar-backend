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

const editEvent = async (req, res) => {
  const { id } = req.params;
  const { uid } = req;
  try {
    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: 'Event not exists',
      });
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'Unauthorized',
      });
    }

    const newEvent = {
      ...req.body,
      user: uid,
    };

    const eventUpdated = await Event.findByIdAndUpdate(id, newEvent, {
      new: true,
    });

    res.json({
      ok: true,
      event: eventUpdated,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Server error',
    });
  }
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
