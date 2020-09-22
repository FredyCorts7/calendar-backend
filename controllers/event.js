const getEvents = (req, res) => {
  res.json({
    ok: true,
    msg: 'get events',
  });
};

const addEvent = (req, res) => {
  res.json({
    ok: true,
    msg: 'add events',
  });
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
