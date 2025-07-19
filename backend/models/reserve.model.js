const mongoose = require('mongoose');

const reserveSchema = new mongoose.Schema({
  user: mongoose.Schema.Types.ObjectId,
  name: { type: String },
  date: { type: String },
  time: { type: String },
});

module.exports = mongoose.model('Reserves', reserveSchema);
