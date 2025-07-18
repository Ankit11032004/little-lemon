const reserve = require('../models/reserve.model');

exports.reserevationForm = async (req, res) => {
  const { date, time } = req.body;
  try {
    reserve.create({
        user: _id,
        data,
        time,
    });
    res.json({ message: 'Reservation successful', reservation: { date, time } });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
}