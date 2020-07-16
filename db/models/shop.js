const mongoose = require('mongoose')

const ShopSchema = mongoose.Schema({
  shopKey: String,
  level: Number,
  manager: Boolean,
  lastOrderStarted: Number
})

module.exports = mongoose.model('Shop', ShopSchema)
