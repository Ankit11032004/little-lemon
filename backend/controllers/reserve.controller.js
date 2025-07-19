const Reserve = require('../models/reserve.model');

exports.reservationForm = async (req, res) => {
  const { _id, name, date, time } = req.body;
  console.log("Reservation Data:", _id, name, date, time);
  
  if (!_id || !name || !date || !time) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const reservation = new Reserve({
      user: _id,
      name,
      date,
      time,
    });

    await reservation.save();

    res.status(201).json({
      message: 'Reservation successful',
      reservation: {
        id: reservation._id,
        name: reservation.name,
        date: reservation.date,
        time: reservation.time,
      }
    });

  } catch (err) {
    console.error('Reservation Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};
