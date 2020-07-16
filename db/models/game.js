const mongoose = require('mongoose')

const GameSchema = mongoose.Schema({
  totalCashAmount: Number,
  shops: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Shop' }],
  lastEventDateInMs: Number
})

module.exports = mongoose.model('Game', GameSchema)
