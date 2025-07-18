const mongoose = require('mongoose');

const reserveSchema = new mongoose.Schema({
  user: mongoose.Schema.Types.ObjectId,
  data: { type: String, unique: true },
  time: String,
});

module.exports = mongoose.model('Reserves', reserveSchema);
